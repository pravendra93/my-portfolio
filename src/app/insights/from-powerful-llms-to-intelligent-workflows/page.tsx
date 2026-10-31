import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { siteConfig, SITE_URL } from "@/content/site";
import { generatePageMetadata } from "@/lib/metadata";

const articlePath = "/insights/from-powerful-llms-to-intelligent-workflows";
const title = "From Powerful LLMs to Intelligent Workflows";
const description =
  "Learn how retrieval, integrations, validation, and human oversight turn large language model capabilities into useful business workflows.";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title,
    description,
    path: articlePath,
    keywords: [
      "AI workflow engineering",
      "Retrieval-Augmented Generation",
      "LLM orchestration",
      "AI automation for businesses",
      "enterprise knowledge assistants",
      "AI integration and evaluation",
    ],
  }),
  title: { absolute: `${title} | ${siteConfig.name}` },
};

const sections = [
  { id: "raw-intelligence", label: "Raw intelligence is only the beginning" },
  { id: "the-challenge", label: "Intelligence without structure" },
  { id: "engineering-approach", label: "The engineering approach" },
  { id: "workflow", label: "An illustrative AI workflow" },
  { id: "model-selection", label: "One model or multiple models?" },
  { id: "support-scenario", label: "An illustrative support scenario" },
  { id: "measuring-value", label: "Measuring business value" },
  { id: "rakrilabs-perspective", label: "The RakriLabs perspective" },
];

const workflowSteps = [
  {
    title: "User request",
    detail: "Capture the question, intent, and relevant context.",
  },
  {
    title: "Input validation",
    detail: "Check required fields, permissions, and acceptable formats.",
  },
  {
    title: "Knowledge retrieval",
    detail: "Retrieve relevant, access-controlled information when needed.",
  },
  {
    title: "LLM processing",
    detail: "Ask an appropriate model to perform a defined task.",
  },
  {
    title: "Output verification",
    detail: "Check the response against rules, evidence, and expected structure.",
  },
  {
    title: "Approved action",
    detail: "Take a permitted action or send the case for human review.",
  },
  {
    title: "Audit log",
    detail: "Record the event and relevant outcome under the agreed policy.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  mainEntityOfPage: `${SITE_URL}${articlePath}`,
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
};

export default function LLMWorkflowsArticlePage() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />
      <Navigation />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans selection:bg-brand-purple/30">
        <article className="px-5 sm:px-8 pt-32 sm:pt-40 pb-24 max-w-7xl mx-auto">
          <header className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-cyan mb-5">
              AI Workflow Engineering
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted/90 max-w-3xl">
              Why the real power of AI lies not just in the model, but in how you engineer the system around it.
            </p>
            <p className="mt-6 text-sm sm:text-base text-muted/75 border-l-2 border-brand-cyan pl-4 max-w-3xl">
              <strong className="text-white">The model provides the intelligence. The workflow determines how that intelligence is used.</strong>
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <aside aria-label="Article navigation" className="order-1 lg:order-2 lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="text-xs font-black uppercase tracking-widest text-white/70 mb-4">In this article</h2>
              <nav aria-label="Table of contents">
                <ol className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-xs leading-5 text-muted/75 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded">
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="min-w-0 order-2 lg:order-1">
              <section id="raw-intelligence" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  1. Raw Intelligence Is Only the Beginning
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-7 text-muted/85">
                  <p>
                    Think of a large language model (LLM) as a powerful engine. An engine can produce motion, but a useful vehicle also needs steering, brakes, a route, and someone responsible for how it is driven. In business software, a capable model is only one part of a working system.
                  </p>
                  <p>
                    Products such as ChatGPT and Gemini, and model ecosystems such as Claude, give teams ways to work with LLM capabilities. They are not interchangeable components with identical behavior, terms, or operating characteristics. The system still needs to connect the model to the right context, inputs, tools, checks, and decisions.
                  </p>
                </div>
              </section>

              <section id="the-challenge" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  2. The Challenge: Intelligence Without Structure
                </h2>
                <p className="text-sm sm:text-base leading-7 text-muted/85 mb-4">
                  Depending on the task and the surrounding process, a stand-alone prompt may leave work for people to repeat or verify. Teams may encounter challenges such as:
                </p>
                <ul className="space-y-3 text-sm sm:text-base leading-7 text-muted/85">
                  {[
                    "The model lacks current or organization-specific context.",
                    "Staff repeatedly paste information or move outputs between tools.",
                    "Similar requests follow inconsistent steps or produce inconsistent formats.",
                    "An answer sounds plausible but is not supported by approved sources.",
                    "Manual review takes enough time that the automation adds little value.",
                    "There is limited visibility into quality, exceptions, or performance over time.",
                  ].map((challenge) => (
                    <li key={challenge} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-brand-cyan">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
                  <p className="mt-4 text-sm leading-6 text-muted/70">
                    These are possibilities, not universal shortcomings. The right design starts by examining the actual task and the cost of getting it wrong.
                  </p>
              </section>

              <section id="engineering-approach" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  3. The Engineering Approach
                </h2>
                <p className="text-sm sm:text-base leading-7 text-muted/85 mb-6">
                  A workflow combines only the parts the problem needs. Common engineering choices include:
                </p>
                <div className="space-y-4">
                  {[
                    ["A. Ground answers with relevant knowledge", "Retrieval-Augmented Generation (RAG) retrieves selected information at request time and supplies it as context for generation. Retrieval can improve relevance and provide sources to check, but it does not guarantee that every generated claim is correct."],
                    ["B. Define instructions and output boundaries", "Clear instructions, explicit limits, and structured output schemas make the task easier to validate. They reduce ambiguity; they do not by themselves guarantee reliable behavior."],
                    ["C. Connect tools and APIs deliberately", "An LLM can help select or prepare a tool call, while conventional application code handles authentication, permissions, input validation, and the actual API request."],
                    ["D. Orchestrate state where needed", "Multi-step work may need explicit state, retries, timeouts, and idempotency. A single request may not need an orchestration layer at all."],
                    ["E. Validate, observe, and evaluate", "Checks can verify schemas, business rules, source references, and expected outcomes. Logs and repeatable evaluation help teams understand failures and changes over time."],
                    ["F. Add human review at the right boundary", "For sensitive, uncertain, or consequential actions, a person may need to approve, correct, or take over. Escalation rules should be designed around the impact of an error."],
                  ].map(([heading, body]) => (
                    <section key={heading} className="p-5 sm:p-6 rounded-2xl bg-white/[0.025] border border-white/10">
                      <h3 className="text-base font-bold text-white mb-2">{heading}</h3>
                      <p className="text-sm leading-6 text-muted/80">{body}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section id="workflow" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  4. An Illustrative AI Workflow
                </h2>
                <p className="text-sm sm:text-base leading-7 text-muted/85 mb-6">
                  This example shows one possible path from a request to an outcome. The ordered stages are a design aid, not a required architecture for every use case.
                </p>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
                  <ol aria-label="Illustrative AI workflow stages" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-3">
                    {workflowSteps.map((step, index) => (
                      <li key={step.title} className="relative min-w-0 rounded-2xl border border-white/10 bg-[#0b0b0e] p-4 xl:pr-5">
                        <span className="text-[10px] font-black tracking-widest text-brand-cyan">STEP {String(index + 1).padStart(2, "0")}</span>
                        <h3 className="mt-2 text-sm font-bold leading-snug text-white">{step.title}</h3>
                        <p className="mt-2 text-xs leading-5 text-muted/75">{step.detail}</p>
                        {index < workflowSteps.length - 1 && (
                          <span aria-hidden="true" className="hidden xl:block absolute -right-3 top-1/2 z-10 text-brand-cyan">→</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-6 text-muted/70">
                  The specific stages depend on the risk, data, and tools involved. Some workflows can be simpler; others need additional checks or a human decision before an action is taken.
                </p>
              </section>

              <section id="model-selection" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  5. One Model or Multiple Models?
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-7 text-muted/85">
                  <p>
                    More models do not automatically make a better system. A single model may be sufficient for a bounded task. Routing between models can be useful when evaluation shows a meaningful difference in capability, cost, latency, or reliability for different request types.
                  </p>
                  <p>
                    Model selection should be tested against representative tasks and operating requirements. Teams should account for provider behavior, availability, data terms, and the cost of routing and maintaining additional paths—not only model capability in isolation.
                  </p>
                  <p>
                    Some steps are better handled by conventional code: permission checks, arithmetic, deterministic transformations, required fields, and state transitions. Use an LLM when language understanding or generation adds value; keep predictable rules predictable.
                  </p>
                </div>
              </section>

              <section id="support-scenario" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  6. An Illustrative Business Scenario
                </h2>
                <p className="inline-flex items-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-5">
                  Hypothetical example — not a RakriLabs client implementation
                </p>
                <div className="space-y-4 text-sm sm:text-base leading-7 text-muted/85">
                  <p>
                    Imagine a support team receiving requests about account setup, product behavior, and billing. A workflow might classify each incoming request, retrieve the relevant approved help-center material, and ask an LLM to draft a response grounded in that material.
                  </p>
                  <p>
                    Application checks could verify required fields and that cited sources are available. A response that fails those checks, has low confidence under the team’s evaluation method, or concerns a sensitive account action could be sent to a support specialist instead of being delivered automatically.
                  </p>
                  <p>
                    The system could record the request category, selected sources, validation outcome, and whether a person corrected or escalated the draft, subject to the organization’s data and retention requirements. Ongoing evaluation would use reviewed examples to find gaps and update the workflow.
                  </p>
                </div>
              </section>

              <section id="measuring-value" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  7. Measuring Business Value
                </h2>
                <p className="text-sm sm:text-base leading-7 text-muted/85 mb-5">
                  Establish a baseline and test with realistic tasks before making claims about improvement. Useful measures may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["Accuracy and groundedness", "Are responses correct for the task and supported by appropriate sources?"],
                    ["Task completion rate", "How often does the workflow reach an acceptable outcome?"],
                    ["Human correction rate", "How often does a reviewer need to materially revise the output?"],
                    ["Processing time", "How long does the full process take, including review and exceptions?"],
                    ["Cost per completed task", "What is the total operating cost for an accepted outcome?"],
                    ["Escalation rate", "How often does the workflow route work to a person, and for what reasons?"],
                    ["Operational reliability", "How does the system behave under realistic volume, failures, and edge cases?"],
                  ].map(([label, detail]) => (
                    <li key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <h3 className="text-sm font-bold text-white">{label}</h3>
                      <p className="mt-2 text-xs leading-5 text-muted/75">{detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-6 text-muted/70">
                  Metrics need clear definitions and review. A high completion rate is not useful if the completed work is wrong or creates unacceptable risk.
                </p>
              </section>

              <section id="rakrilabs-perspective" className="scroll-mt-28 mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  8. The RakriLabs Perspective
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-7 text-muted/85">
                  <p>
                    AI workflow engineering is the work of solving a business problem with the appropriate combination of models, data, software, integrations, controls, and human judgment. The right answer may be an LLM workflow, a smaller model, a deterministic service, or no AI at all.
                  </p>
                  <p>
                    The engineering begins with understanding the process and agreeing what a useful outcome means. From there, teams can scope the system, test its behavior, and decide what should happen when it is uncertain or unavailable.
                  </p>
                  <p>
                    To explore related capabilities, see our <Link href="/services#services" className="text-brand-cyan underline underline-offset-4 hover:text-white">AI engineering services</Link> and <Link href="/case-studies/enterprise-rag-document-intelligence" className="text-brand-cyan underline underline-offset-4 hover:text-white">published RAG case-study page</Link>. The workflow in this article remains illustrative and is not a claim about that case study.
                  </p>
                </div>
              </section>

              <aside aria-labelledby="future-evaluation-title" className="mb-12 rounded-3xl border border-brand-purple/25 bg-brand-purple/[0.06] p-6 sm:p-8">
                <h2 id="future-evaluation-title" className="text-lg sm:text-xl font-bold text-white mb-3">
                  A possible next experiment
                </h2>
                <p className="text-sm leading-6 text-muted/80">
                  RakriLabs could validate this thesis with a small, reproducible evaluation: compare a basic LLM approach with a scoped workflow on a fixed, reviewed dataset, then report correctness, source grounding, unsupported claims, task completion, latency, and cost per request. This is a future opportunity, not a completed demo or a report of measured results.
                </p>
              </aside>

              <section aria-labelledby="article-cta-title" className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-cyan mb-3">Start with the work</p>
                <h2 id="article-cta-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Have a Workflow Worth Rethinking?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-7 text-muted/80 max-w-2xl">
                  Tell us about the repetitive process, knowledge bottleneck, or operational challenge your business wants to solve. We can explore whether an AI-powered workflow is the right solution.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Discuss your workflow <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </section>
            </div>

          </div>
        </article>
        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
