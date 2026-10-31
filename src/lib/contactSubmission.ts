export interface ContactEmail {
  to: string;
  bcc: string[];
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}

type EmailSender = (email: ContactEmail) => Promise<{ success: boolean; error?: string }>;
type JsonResponder = (body: Record<string, unknown>, init?: ResponseInit) => Response;

const fieldLimits = {
  name: 120,
  email: 254,
  company: 200,
  region: 120,
  projectType: 120,
  budget: 80,
  timeline: 120,
  message: 5000,
} as const;

type ContactField = keyof typeof fieldLimits;

export const CONTACT_EMAIL_TO = "founder@rakrilabs.com";
export const CONTACT_EMAIL_BCC = [
  "akshaykumar.ojha@gmail.com",
  "prvndrkumar55@gmail.com",
] as const;

const optionalFields: ContactField[] = [
  "company",
  "region",
  "projectType",
  "budget",
  "timeline",
  "message",
];

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return character;
    }
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function plainTextLine(value: string): string {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function plainTextMessage(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "");
}

function isValidEmailAddress(value: string): boolean {
  const atIndex = value.indexOf("@");
  if (atIndex <= 0 || atIndex !== value.lastIndexOf("@")) return false;

  const local = value.slice(0, atIndex);
  const domain = value.slice(atIndex + 1);
  if (
    local.length > 64 ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..") ||
    !/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local)
  ) return false;

  const labels = domain.split(".");
  return labels.length >= 2 && labels.every((label) =>
    label.length > 0 &&
    label.length <= 63 &&
    /^[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?$/i.test(label)
  );
}

export function createContactPostHandler(
  sendEmail: EmailSender,
  recipient = CONTACT_EMAIL_TO,
  respond: JsonResponder = (body, init) => Response.json(body, init),
  bcc: readonly string[] = CONTACT_EMAIL_BCC,
) {
  return async function POST(req: Request): Promise<Response> {
    try {
      const data: unknown = await req.json();
      if (!isRecord(data)) {
        return respond({ success: false, error: "Invalid request data" }, { status: 400 });
      }

      const honeypot = data.website_trap;
      if (honeypot !== undefined && typeof honeypot !== "string") {
        return respond({ success: false, error: "Invalid request data" }, { status: 400 });
      }
      if (typeof honeypot === "string" && honeypot.length > 0) {
        return respond({ success: true });
      }

      for (const field of ["name", "email"] as const) {
        if (typeof data[field] !== "string") {
          return respond({ success: false, error: "Name and email are required" }, { status: 400 });
        }
      }

      for (const field of optionalFields) {
        if (data[field] !== undefined && typeof data[field] !== "string") {
          return respond({ success: false, error: "Invalid request data" }, { status: 400 });
        }
      }

      for (const [field, maxLength] of Object.entries(fieldLimits) as [ContactField, number][]) {
        const value = data[field];
        if (typeof value === "string" && value.length > maxLength) {
          return respond({ success: false, error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
        }
      }

      const name = data.name as string;
      const email = (data.email as string).trim();
      if (!name.trim() || !email) {
        return respond({ success: false, error: "Name and email are required" }, { status: 400 });
      }
      if (!isValidEmailAddress(email)) {
        return respond({ success: false, error: "A valid email address is required" }, { status: 400 });
      }

      const company = (data.company as string | undefined) ?? "";
      const region = (data.region as string | undefined) ?? "";
      const projectType = (data.projectType as string | undefined) ?? "";
      const budget = (data.budget as string | undefined) ?? "";
      const timeline = (data.timeline as string | undefined) ?? "";
      const message = (data.message as string | undefined) ?? "";
      const subjectCompany = plainTextLine(company || name);
      const subjectProject = plainTextLine(projectType || "AI Project");
      const subject = `[New Inbound Lead] ${subjectCompany} - ${subjectProject}`;

      const html = `
        <h2>New Project Discovery Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Work Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Client Region:</strong> ${escapeHtml(region || "Not specified")}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType || "General Inquiry")}</p>
        <p><strong>Indicative Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
        <p><strong>Desired Timeline:</strong> ${escapeHtml(timeline || "Not specified")}</p>
        <hr />
        <h3>Project Details:</h3>
        <p>${escapeHtml(message || "No message provided").replace(/\r\n?|\n/g, "<br/>")}</p>
      `;
      const text = [
        "New Project Discovery Request",
        `Name: ${plainTextLine(name)}`,
        `Work Email: ${plainTextLine(email)}`,
        `Company: ${plainTextLine(company || "Not provided")}`,
        `Client Region: ${plainTextLine(region || "Not specified")}`,
        `Project Type: ${plainTextLine(projectType || "General Inquiry")}`,
        `Indicative Budget: ${plainTextLine(budget || "Not specified")}`,
        `Desired Timeline: ${plainTextLine(timeline || "Not specified")}`,
        "",
        "Project Details:",
        plainTextMessage(message || "No message provided"),
      ].join("\n");

      const result = await sendEmail({ to: recipient, bcc: [...bcc], replyTo: email, subject, html, text });
      if (!result.success) {
        console.error("Lead email delivery failed.");
        return respond({
          success: false,
          error: "We couldn't send your inquiry right now. Please try again.",
        }, { status: 503 });
      }

      return respond({ success: true });
    } catch {
      return respond({
        success: false,
        error: "We couldn't process your inquiry right now. Please try again.",
      }, { status: 500 });
    }
  };
}
