export interface FAQItem {
  question: string;
  answer: string;
  category: "Engagement & IP" | "Security & Data" | "Delivery & Sprints" | "Timezone & Communication";
  published: boolean;
}

export const faqs: FAQItem[] = [
  {
    question: "Do we own 100% of the code, IP, and data assets you build?",
    answer: "Yes, absolutely. From day one, all code is written in your GitHub or GitLab organization under full intellectual property assignment. We retain zero proprietary ownership claims, zero royalty rights, and zero vendor lock-in. When the sprint concludes, you own clean, self-contained repositories that any competent engineer can maintain.",
    category: "Engagement & IP",
    published: true,
  },
  {
    question: "How do you manage timezone overlap with US, European, Gulf, and Australian teams?",
    answer: "We agree practical live meeting windows and update rhythms around each client team and project. Written project context helps keep decisions, progress, and open questions visible between meetings.",
    category: "Timezone & Communication",
    published: true,
  },
  {
    question: "How is our proprietary company data protected when deploying AI models?",
    answer: "Data handling depends on the system, selected model and cloud providers, and your contractual and jurisdictional requirements. Before implementation, we can document data flows, access needs, hosting choices, and relevant provider retention terms for the agreed scope. Specific controls and legal obligations must be confirmed for each project; we do not imply a universal residency or compliance status.",
    category: "Security & Data",
    published: true,
  },
  {
    question: "What does an AI MVP engagement include?",
    answer: "We discover the business problem, define scope and acceptance criteria, engineer and integrate the agreed solution, then validate it and prepare the handoff. A mid-sized RAG/AI project may take approximately 30–40 days, but timelines vary with scope, complexity, integrations, and data readiness.",
    category: "Delivery & Sprints",
    published: true,
  },
  {
    question: "How do you prevent AI hallucinations in production applications?",
    answer: "We do not rely on raw model prompts for business-critical operations. Instead, we implement deterministic pre-processing guardrails, strict JSON-schema enforcement (structured outputs), hybrid vector retrieval with citation verification, and human-in-the-loop review queues for sensitive or irreversible actions.",
    category: "Security & Data",
    published: true,
  },
  {
    question: "What technology stack do you specialize in?",
    answer: "Our core stack is modern, battle-tested, and performant: TypeScript/Next.js for reactive, high-conversion frontends; Python/FastAPI or Node.js for backend inference pipelines; PostgreSQL (with pgvector), Supabase, or Pinecone for relational and vector storage; and Tailwind CSS for maintainable design systems. Everything is containerized with Docker for seamless portability.",
    category: "Delivery & Sprints",
    published: true,
  },
  {
    question: "How do international billing and invoicing work?",
    answer: "We accept payments via international wire transfer (SWIFT/ACH), Stripe, or credit cards in USD, EUR, GBP, or AUD. Projects are structured on predictable fixed-price milestone schedules (e.g. 50% deposit upon kickoff, 50% upon final acceptance and code handover), so you never face surprise overages.",
    category: "Engagement & IP",
    published: true,
  },
];
