export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billingBasis: string;
  tagline: string;
  timeline: string;
  targetAudience: string;
  deliverables: string[];
  highlight: boolean;
  published: boolean;
}

export interface PricingConfig {
  published: boolean;
  introHeading: string;
  introDescription: string;
  disclaimer: string;
  tiers: PricingTier[];
}

export const pricingConfig: PricingConfig = {
  published: true,
  introHeading: "Predictable, Fixed-Price Projects",
  introDescription: "Project pricing is agreed around clear scope, milestones, and deliverables. Timelines depend on the work and its complexity.",
  disclaimer: "Indicative pricing for standard scoping. Custom enterprise deployments with dedicated on-premise infrastructure or custom fine-tuning are quoted following technical discovery.",
  tiers: [
    {
      id: "mvp-launchpad",
      name: "AI MVP Delivery Sprint",
      price: "$4,599",
      billingBasis: "Fixed project price",
      tagline: "From agreed requirements to a working product, with a scoped delivery plan.",
      timeline: "Estimate confirmed after scoping",
      targetAudience: "Early-stage founders and B2B SaaS teams validating new AI product offerings.",
      deliverables: [
        "Architecture, product requirements, and API design",
        "Responsive product interface built in Next.js and Tailwind CSS",
        "Core LLM orchestration with streaming SSE responses",
        "Vector search or database integration (pgvector / Supabase)",
        "Authentication, user billing setup & CI/CD deployment",
        "100% code ownership with 14-day warranty support",
      ],
      highlight: false,
      published: true,
    },
    {
      id: "growth-agents",
      name: "Autonomous Agent System",
      price: "$9,950",
      billingBasis: "Fixed project price",
      tagline: "End-to-end multi-agent workflow eliminating high-cost manual ops.",
      timeline: "4 - 6 Weeks",
      targetAudience: "Scaling B2B companies looking to automate complex back-office or triage workflows.",
      deliverables: [
        "Custom multi-agent architecture with deterministic guardrails",
        "Secure enterprise data ingestion & semantic chunking",
        "Human-in-the-loop review UI & escalation queue",
        "Bi-directional integrations with CRM, Slack, and internal APIs",
        "Automated unit testing & prompt regression evaluation suites",
        "Full documentation, Docker containerization & 30-day post-launch SLA",
      ],
      highlight: true,
      published: true,
    },
    {
      id: "enterprise-infrastructure",
      name: "Enterprise AI Partnership",
      price: "Custom ($18k - $35k)",
      billingBasis: "Milestone-based",
      tagline: "Dedicated AI systems engineering for high-throughput enterprise platforms.",
      timeline: "8 - 12 Weeks",
      targetAudience: "Established enterprises with custom RAG, hosting-region, VPC, or voice AI requirements.",
      deliverables: [
        "Dedicated senior AI systems architect and full-stack team",
        "Hosting and deployment plan scoped to client requirements and provider availability",
        "Real-time voice AI (WebRTC/SIP) or enterprise RAG at scale",
        "Technical requirements mapped for client-led privacy and regulatory review",
        "High-availability clustering, failover, and KMS secret management",
        "Comprehensive staff training & handoff workshops",
      ],
      highlight: false,
      published: true,
    },
  ],
};
