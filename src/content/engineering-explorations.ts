export interface EngineeringExplorationLink {
  label: string;
  href: string;
}

export interface EngineeringExploration {
  id: string;
  label: string;
  title: string;
  businessProblem: string;
  approach: string;
  architecture: {
    nodes: string[];
    supportingComponents?: string[];
    crossCutting?: string[];
  };
  tradeoffs: {
    title: string;
    description: string;
  }[];
  risksSafeguards: string[];
  deliveryStages: string[];
  links: EngineeringExplorationLink[];
}

export const engineeringExplorations: EngineeringExploration[] = [
  {
    id: "new-product",
    label: "Build a new AI-enabled product",
    title: "Build around the user problem",
    businessProblem: "A user needs to complete a task that may benefit from language understanding or generated responses.",
    approach: "Shape the product around that task; include a model or tools only where they improve the flow over simpler logic.",
    architecture: {
      nodes: ["User Interface", "Application API", "AI Orchestration", "Model / Tools", "Validated Response"],
      supportingComponents: ["Data storage", "Observability"],
    },
    tradeoffs: [
      {
        title: "Model vs. deterministic logic",
        description:
          "Rules are predictable for fixed cases; models can handle varied language but need bounded inputs and outputs.",
      },
      {
        title: "Prototype speed vs. delivery readiness",
        description:
          "A prototype can test an assumption; evaluation, fallback behavior, and operations need explicit delivery scope.",
      },
    ],
    risksSafeguards: [
      "Unreliable model output → validate response structure and define a fallback.",
      "Sensitive data exposure → scope access and provider data handling before integration.",
    ],
    deliveryStages: ["Define task and constraints", "Build and integrate", "Evaluate and hand over"],
    links: [
      { label: "Explore AI product engineering", href: "/services" },
      { label: "See NivoraHQ (Early Access)", href: "/products/nivorahq" },
    ],
  },
  {
    id: "workflow-automation",
    label: "Automate a recurring business workflow",
    title: "Automate bounded steps, keep review where it matters",
    businessProblem: "A recurring workflow has repeated handoffs, known rules, and exceptions that need careful handling.",
    approach: "Automate bounded steps, retrieve needed context, and route uncertain or consequential decisions through an explicit approval gate.",
    architecture: {
      nodes: ["Trigger", "Context Retrieval", "Rules / AI Decision", "Approval Gate", "Action", "Audit Log"],
      supportingComponents: ["Failure handling", "Retry or escalation path"],
    },
    tradeoffs: [
      {
        title: "Rules vs. model reasoning",
        description:
          "Rules suit known conditions; model reasoning handles varied text but needs output checks and exception paths.",
      },
      {
        title: "Autonomy vs. human review",
        description:
          "More review adds a handoff; fewer checks raise the impact of mistakes. Match the approval boundary to the action’s risk.",
      },
    ],
    risksSafeguards: [
      "Duplicate or failed actions → use idempotent handling and a visible retry or escalation path.",
      "Incorrect consequential action → require approval before execution where appropriate.",
    ],
    deliveryStages: ["Map rules and exceptions", "Integrate the trigger and action", "Test failure and approval paths"],
    links: [
      {
        label: "Read the workflow automation case study",
        href: "/case-studies/automated-data-scraping-platform",
      },
      {
        label: "View NivoraHQ’s client-side rule simulator",
        href: "/products/nivorahq#simulator",
      },
    ],
  },
  {
    id: "knowledge-search",
    label: "Make internal knowledge easier to search",
    title: "Make answers traceable to their sources",
    businessProblem: "People need to find reliable answers across internal documents and other approved knowledge sources.",
    approach: "Index permitted source material, retrieve relevant passages, and ground responses in those sources with citations.",
    architecture: {
      nodes: ["Documents / Sources", "Ingestion", "Chunking & Indexing", "Retrieval", "Grounded Answer + Sources"],
      supportingComponents: ["Source updates", "Evaluation questions"],
      crossCutting: ["Permissions", "Access control"],
    },
    tradeoffs: [
      {
        title: "Keyword vs. semantic or hybrid retrieval",
        description:
          "Choose against real query patterns; combining retrieval methods adds tuning and evaluation work.",
      },
      {
        title: "More retrieved context vs. precision",
        description:
          "Wider retrieval may find useful material but can add noise. Evaluate with representative questions.",
      },
    ],
    risksSafeguards: [
      "Unauthorized source disclosure → enforce source permissions during retrieval, not only at ingestion.",
      "Unsupported answers → return source references and allow a no-answer outcome when evidence is weak.",
    ],
    deliveryStages: ["Confirm sources and access", "Index and tune retrieval", "Evaluate answers and hand over"],
    links: [
      {
        label: "Read the RAG case study",
        href: "/case-studies/enterprise-rag-document-intelligence",
      },
      { label: "Explore RAG and search services", href: "/services#services" },
    ],
  },
  {
    id: "product-performance",
    label: "Improve an existing product’s search or performance",
    title: "Measure before choosing an optimization",
    businessProblem: "Users experience slow or poor search, but the actual bottleneck may not be where first expected.",
    approach: "Measure the current behavior, isolate the bottleneck, and choose the simplest targeted optimization—AI only if evidence supports it.",
    architecture: {
      nodes: ["Baseline Measurement", "Profiling", "Bottleneck Identification", "Targeted Optimization", "Load Testing", "Monitoring"],
      supportingComponents: ["Representative queries", "Regression checks"],
    },
    tradeoffs: [
      {
        title: "Caching vs. data freshness",
        description:
          "Caching may reduce repeated work but needs an invalidation strategy when data changes.",
      },
      {
        title: "Preloading vs. resource use",
        description:
          "Preloading can reduce later waits but increases bandwidth and work for data the user may not need.",
      },
    ],
    risksSafeguards: [
      "Optimizing the wrong layer → profile representative user paths before changing architecture.",
      "Regressions under load → compare with a baseline and monitor after the change ships.",
    ],
    deliveryStages: ["Measure and profile", "Target the bottleneck", "Load-test and monitor"],
    links: [
      {
        label: "Read the athlete search platform case study",
        href: "/case-studies/athlete-recruitment-platform",
      },
      { label: "Explore engineering services", href: "/services" },
    ],
  },
];
