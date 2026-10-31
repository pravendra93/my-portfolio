import assert from "node:assert/strict";
import test from "node:test";
import { createContactPostHandler, escapeHtml, type ContactEmail } from "./contactSubmission.ts";
import { createInitialContactFormData, createSendAnotherInquiryState } from "./contactFormState.ts";

const validPayload = {
  name: "Alex Morgan",
  email: "alex@example.com",
  company: "Acme SaaS",
  region: "North America",
  projectType: "30-Day AI MVP Sprint",
  budget: "$5k - $10k",
  timeline: "This quarter",
  message: "We need help with an AI workflow.",
  website_trap: "",
};

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function readResponse(response: Response) {
  return { status: response.status, body: await response.json() };
}

test("accepts a normal inquiry and sends the required recipients with visitor Reply-To", async () => {
  let sent: ContactEmail | undefined;
  const post = createContactPostHandler(async (email) => {
    sent = email;
    return { success: true };
  });

  const response = await post(makeRequest(validPayload));
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(sent?.to, "founder@rakrilabs.com");
  assert.deepEqual(sent?.bcc, ["akshaykumar.ojha@gmail.com", "prvndrkumar55@gmail.com"]);
  assert.equal(sent?.replyTo, "alex@example.com");
  assert.match(sent?.subject ?? "", /Acme SaaS - 30-Day AI MVP Sprint/);
  assert.match(sent?.html ?? "", /Alex Morgan/);
  assert.match(sent?.text ?? "", /We need help with an AI workflow\./);
});

test("escapes HTML markup and script-like values in all affected fields", async () => {
  let sent: ContactEmail | undefined;
  const post = createContactPostHandler(async (email) => {
    sent = email;
    return { success: true };
  }, "contact@example.com");

  const response = await post(makeRequest({
    ...validPayload,
    name: '<script>alert("name")</script>',
    company: "R&D <img src=x onerror='alert(1)'>",
    message: "First line\n<script>alert('message')</script>",
  }));

  assert.equal(response.status, 200);
  assert.equal(escapeHtml(`&<>"'`), "&amp;&lt;&gt;&quot;&#39;");
  assert.match(sent?.html ?? "", /&lt;script&gt;alert\(&quot;name&quot;\)&lt;\/script&gt;/);
  assert.match(sent?.html ?? "", /R&amp;D &lt;img src=x onerror=&#39;alert\(1\)&#39;&gt;/);
  assert.match(sent?.html ?? "", /First line<br\/>\&lt;script\&gt;alert\(&#39;message&#39;\)\&lt;\/script\&gt;/);
  assert.doesNotMatch(sent?.html ?? "", /<script>|<img\b/i);
  assert.match(sent?.text ?? "", /First line\n<script>alert\('message'\)<\/script>/);
});

test("rejects missing, malformed, and incorrectly typed request fields", async () => {
  let sends = 0;
  const post = createContactPostHandler(async () => {
    sends++;
    return { success: true };
  }, "contact@example.com");

  const invalidBodies = [
    null,
    [],
    { email: validPayload.email },
    { ...validPayload, name: undefined },
    { ...validPayload, name: 42 },
    { ...validPayload, email: { address: validPayload.email } },
    { ...validPayload, company: ["Acme"] },
    { ...validPayload, website_trap: 1 },
    { ...validPayload, email: "not-an-email" },
    { ...validPayload, email: "visitor@" },
    { ...validPayload, email: "visitor example.com" },
    { ...validPayload, email: "visitor..name@example.com" },
    { ...validPayload, email: "visitor@invalid..example.com" },
    { ...validPayload, email: "visitor@localhost" },
  ];

  for (const body of invalidBodies) {
    const response = await post(makeRequest(body));
    assert.equal(response.status, 400);
  }
  assert.equal(sends, 0);
});

test("rejects values beyond every documented server-side field limit", async () => {
  const limits: Record<string, number> = {
    name: 120,
    email: 254,
    company: 200,
    region: 120,
    projectType: 120,
    budget: 80,
    timeline: 120,
    message: 5000,
  };
  const post = createContactPostHandler(async () => ({ success: true }), "contact@example.com");

  for (const [field, maxLength] of Object.entries(limits)) {
    const body = { ...validPayload, [field]: "x".repeat(maxLength + 1) };
    const response = await post(makeRequest(body));
    assert.equal(response.status, 400, `${field} should be length-limited`);
  }
});

test("returns the existing service-unavailable response when email transport fails", async () => {
  let attempts = 0;
  const post = createContactPostHandler(async () => {
    attempts++;
    return { success: false, error: "private transport detail" };
  });
  const response = await post(makeRequest(validPayload));
  const result = await readResponse(response);
  assert.equal(attempts, 1);
  assert.equal(result.status, 503);
  assert.deepEqual(result.body, {
    success: false,
    error: "We couldn't send your inquiry right now. Please try again.",
  });
});

test("allows a visitor to retry after a confirmed send failure", async () => {
  let attempts = 0;
  const post = createContactPostHandler(async () => {
    attempts++;
    return attempts === 1 ? { success: false } : { success: true };
  });

  const failed = await post(makeRequest(validPayload));
  assert.equal(failed.status, 503);
  assert.deepEqual(await failed.json(), {
    success: false,
    error: "We couldn't send your inquiry right now. Please try again.",
  });

  const retried = await post(makeRequest(validPayload));
  assert.equal(retried.status, 200);
  assert.deepEqual(await retried.json(), { success: true });
  assert.equal(attempts, 2);
});

test("send-another action resets fields and clears success and error state", () => {
  const initial = createInitialContactFormData();
  const edited = { ...initial, name: "Alex", email: "alex@example.com", message: "Retry me" };
  assert.notDeepEqual(edited, initial);
  assert.deepEqual(createSendAnotherInquiryState(), {
    formData: initial,
    isSuccess: false,
    errorMessage: "",
  });
});

test("silently accepts the honeypot without contacting email transport", async () => {
  let sends = 0;
  const post = createContactPostHandler(async () => {
    sends++;
    return { success: true };
  }, "contact@example.com");
  const response = await post(makeRequest({ ...validPayload, website_trap: "bot" }));
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(sends, 0);
});
