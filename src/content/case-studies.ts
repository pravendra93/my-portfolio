export interface CaseStudyMetric {
  label: string;
  value: string;
  source: "client-reported" | "measured by us";
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientLabel: string;
  permission: "named" | "anonymised";
  industry: "Fintech" | "SaaS" | "Sports Tech" | "Enterprise Ops" | "Media & Data";
  service: "AI Agents" | "RAG & Document Search" | "30-Day MVP" | "Full-Stack System";
  region: "North America" | "Europe" | "Australia & NZ" | "Middle East" | "Global";
  timeline: string;
  teamSize: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureSteps: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  quote?: {
    text: string;
    author: string;
    role: string;
    avatar?: string;
  };
  published: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "athlete-recruitment-platform",
    title: "High-Volume Athlete Recruitment & Search Platform",
    clientLabel: "International Sports Platform (CaptainU / Stack Sports)",
    permission: "named",
    industry: "Sports Tech",
    service: "Full-Stack System",
    region: "North America",
    timeline: "Ongoing Sprint Cycles",
    teamSize: "Distributed Engineering Team",
    summary: "Engineered scalable React workflows and backend endpoints powering athlete profile creation and college recruiter discovery.",
    challenge: "High-traffic search filters and media-heavy athlete profile loads were causing frontend rendering bottlenecks and sluggish recruiter browsing.",
    solution: "Refactored key athlete discovery interfaces into modular, virtualized React components with optimized MySQL query pipelines and cached endpoint responses.",
    architectureSteps: [
      "Designed reusable UI component hierarchy for media portfolios and stats cards.",
      "Optimized relational query patterns for college coach discovery filters.",
      "Introduced responsive UI states ensuring sub-second profile hydration across mobile and web.",
    ],
    techStack: ["React", "Ruby on Rails", "MySQL", "Tailwind CSS", "Redis"],
    metrics: [
      {
        label: "Profile Hydration Latency",
        value: "Sub-second",
        source: "measured by us",
      },
      {
        label: "Recruiter Search Throughput",
        value: "3x improvement",
        source: "measured by us",
      },
    ],
    published: true,
  },
  {
    slug: "automated-data-scraping-platform",
    title: "High-Throughput Message & Transaction Scraping System",
    clientLabel: "High-Growth Media & Data Intelligence Firm",
    permission: "anonymised",
    industry: "Media & Data",
    service: "AI Agents",
    region: "North America",
    timeline: "4 Weeks",
    teamSize: "2 Engineers",
    summary: "Built a 3-tier distributed scraping and parsing system to collect transaction data with zero manual human overhead.",
    challenge: "Manual operators spent 80+ hours weekly extracting transactional messages from disparate web portals, resulting in human error and lag in downstream reporting.",
    solution: "Designed an automated Chrome extension and Node.js ingestion pipeline that intercepts, validates, and normalizes incoming message streams directly into structured database records.",
    architectureSteps: [
      "Client-side Chrome Extension captures DOM-level transaction updates securely.",
      "Node.js ingest cluster validates schema and deduplicates event records.",
      "Normalized payload dispatched to client analytics datastore with instant retry queues.",
    ],
    techStack: ["Node.js", "Chrome Extension API", "React", "TypeScript", "PostgreSQL"],
    metrics: [
      {
        label: "Manual Operator Hours Saved",
        value: "85% reduction",
        source: "client-reported",
      },
      {
        label: "Data Ingestion Error Rate",
        value: "<0.2%",
        source: "measured by us",
      },
    ],
    published: true,
  },
  {
    slug: "enterprise-rag-document-intelligence",
    title: "Enterprise RAG Intelligence System for Internal Knowledge",
    clientLabel: "B2B SaaS Firm (UK)",
    permission: "anonymised",
    industry: "SaaS",
    service: "RAG & Document Search",
    region: "Europe",
    timeline: "30-Day Sprint",
    teamSize: "Founder + 1 AI Engineer",
    summary: "Architected a secure Retrieval-Augmented Generation system allowing enterprise customer support and ops teams to query internal documentation.",
    challenge: "Support teams were taking an average of 14 minutes per ticket locating technical product specifications across scattered PDF manuals and internal wikis.",
    solution: "Built a vector embedding pipeline using pgvector and LangChain with hierarchical chunking, metadata filtering, and strict hallucination guardrails.",
    architectureSteps: [
      "Automated document ingestion and markdown conversion with semantic chunking.",
      "Hybrid dense-and-sparse vector retrieval with reranking.",
      "Role-based citation links returned alongside LLM answer syntheses.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL (pgvector)", "OpenAI", "Next.js"],
    metrics: [
      {
        label: "Information Retrieval Time",
        value: "Under 15 seconds",
        source: "measured by us",
      },
      {
        label: "Answer Attribution Accuracy",
        value: "99.4% cited",
        source: "measured by us",
      },
    ],
    published: true,
  },
  {
    slug: "draft-fintech-case-study",
    title: "TODO: Series A Fintech Automation Engine",
    clientLabel: "TODO: Client Name or Anonymised Label",
    permission: "anonymised",
    industry: "Fintech",
    service: "AI Agents",
    region: "Europe",
    timeline: "30 Days",
    teamSize: "2 Engineers",
    summary: "TODO: Add client-approved summary.",
    challenge: "TODO: Detail specific technical challenge.",
    solution: "TODO: Outline solution and architecture.",
    architectureSteps: ["Step 1", "Step 2"],
    techStack: ["Next.js", "Python"],
    metrics: [],
    published: false, // Draft - not published
  },
];
