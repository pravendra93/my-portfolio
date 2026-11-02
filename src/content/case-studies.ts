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
  industry: "Fintech" | "SaaS" | "Sports Tech" | "Enterprise Ops" | "Media & Data" | "Digital Publishing";
  service: "AI Agents" | "RAG & Document Search" | "30-Day MVP" | "Full-Stack System" | "Web Platform Modernization";
  region: "North America" | "Europe" | "Australia & NZ" | "Middle East" | "Global" | "Not specified";
  timeline?: string;
  teamSize?: string;
  projectKind?: "Client engagement" | "RakriLabs product";
  projectStatus?: "Completed" | "Coming Soon";
  liveUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureSteps: string[];
  architectureLabel?: string;
  architectureFlow?: { label: string; nodes: string[] };
  techStack: string[];
  techStackLabel?: string;
  evidenceNote?: string;
  detailSections?: { title: string; body: string; points?: string[] }[];
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
    slug: "newageislam",
    title: "NewAgeIslam — Digital Publishing Platform",
    clientLabel: "NewAgeIslam",
    permission: "named",
    projectKind: "Client engagement",
    projectStatus: "Completed",
    liveUrl: "https://newageislam.com",
    industry: "Digital Publishing",
    service: "Web Platform Modernization",
    region: "Not specified",
    summary: "NewAgeIslam is an online publication covering Islamic thought, current affairs, and dialogue. Existing RakriLabs portfolio notes record a completed modernization of its legacy website.",
    challenge: "The recorded engagement focused on rebuilding an established publication website from a legacy implementation.",
    solution: "Existing portfolio notes describe a server-rendered rebuild. The original project repository is not available in this workspace, so framework-level details and measured outcomes are not asserted here.",
    architectureSteps: [
      "Modernization of the existing NewAgeIslam publication website, as recorded in the portfolio notes.",
      "The notes identify a server-rendered approach; the implementation source is not available here for independent verification.",
      "The completed project is linked to the live publication website.",
    ],
    architectureLabel: "Recorded project scope",
    techStack: [],
    evidenceNote: "The source project and measurement records are not in this workspace. No traffic or performance metrics are included.",
    metrics: [],
    published: true,
  },
  {
    slug: "assistra-knowledge-assistant",
    title: "Assistra — Organizational Knowledge Assistant",
    clientLabel: "RakriLabs product initiative",
    permission: "named",
    projectKind: "RakriLabs product",
    projectStatus: "Coming Soon",
    industry: "Enterprise Ops",
    service: "RAG & Document Search",
    region: "Not specified",
    summary: "An upcoming AI knowledge assistant concept for asking natural-language questions across organizational documents and knowledge sources. Its engineering case study is available now; the public product is not live.",
    challenge: "Useful organizational information can be distributed across documents and other knowledge sources, making it difficult for people to find relevant context through a single question.",
    solution: "The supplied project brief describes a Retrieval-Augmented Generation (RAG) approach: retrieve relevant indexed context for a question, then pass that context to a language model to draft a response. This is not model training or fine-tuning on private documents.",
    architectureSteps: [
      "Users upload organizational documents and knowledge sources.",
      "Celery workers process ingestion tasks asynchronously so uploads do not hold up normal interaction.",
      "Documents are prepared into text segments and embedded, as described in the project brief.",
      "PostgreSQL with pgvector stores embeddings and supports semantic similarity retrieval.",
      "The question flow retrieves relevant organizational context for the prompt.",
      "OpenAI GPT-4o mini generates a response grounded in the retrieved context.",
      "The chatbot returns the generated response to the user.",
    ],
    architectureLabel: "Project-brief architecture · implementation not verified in this repository",
    architectureFlow: {
      label: "Illustrative Assistra knowledge assistant pipeline",
      nodes: [
        "Document upload",
        "Celery processing",
        "Text segments & embeddings",
        "PostgreSQL + pgvector",
        "Context retrieval",
        "GPT-4o mini",
        "Chat response",
      ],
    },
    techStack: ["Retrieval-Augmented Generation", "PostgreSQL", "pgvector", "Celery", "OpenAI GPT-4o mini"],
    techStackLabel: "Technologies named in the project brief",
    evidenceNote: "The Assistra backend repository is not available in this workspace. The architecture and stack below reflect the supplied project brief, not independently verified implementation or production deployment.",
    detailSections: [
      {
        title: "Key technical decisions",
        body: "The brief separates document preparation from question answering and uses retrieval to select context at query time.",
        points: [
          "RAG uses retrieved organizational information to ground a response instead of relying only on pretrained model knowledge.",
          "pgvector keeps vector storage and similarity search within PostgreSQL.",
          "Celery moves potentially long ingestion work into asynchronous background processing.",
          "GPT-4o mini is specified to generate responses from retrieved context.",
        ],
      },
      {
        title: "Background processing with Celery",
        body: "The project brief assigns ingestion and document-processing tasks to Celery workers. This separates those potentially time-consuming tasks from normal chatbot interactions; worker configuration and runtime behavior could not be checked in this repository.",
      },
      {
        title: "RAG and semantic retrieval with pgvector",
        body: "The described flow prepares document text, creates embeddings, stores them in PostgreSQL with pgvector, and retrieves relevant context for a user question. It does not train or fine-tune a model on the organization's documents.",
      },
      {
        title: "GPT-4o mini for answer generation",
        body: "The brief specifies OpenAI GPT-4o mini as the answer-generation model. The intended input is the user question plus retrieved organizational context; deployment, prompt design, and response evaluation are not verified here.",
      },
      {
        title: "Current status and next steps",
        body: "Assistra is marked Coming Soon. This case study documents the project brief and its proposed architecture; it does not claim a live product or verified production implementation.",
      },
    ],
    metrics: [],
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
