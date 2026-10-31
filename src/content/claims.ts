export interface ClaimItem {
  id: string;
  originalClaim: string;
  softenedOrWiredText: string;
  status: "verified" | "softened" | "draft";
  source?: string;
  notes: string;
  published: boolean;
}

export const claimsRegistry: Record<string, ClaimItem> = {
  shippedCount: {
    id: "shippedCount",
    originalClaim: "30+ Shipped",
    softenedOrWiredText: "Production AI Systems",
    status: "softened",
    source: "RakriLabs Internal Sprint Registry",
    notes: "Softened from blanket 30+ counter to 'Production AI Systems' until client registry is fully published with verified case studies.",
    published: true,
  },
  hoursRecovered: {
    id: "hoursRecovered",
    originalClaim: "100+ hrs recovered",
    softenedOrWiredText: "High-Frequency Task Elimination",
    status: "softened",
    source: "Internal Workflow Automation Benchmark",
    notes: "Softened from blanket '100+ hrs' claim to focus on concrete automation outcomes unless backed by specific named case study metric.",
    published: true,
  },
  percentAutomated: {
    id: "percentAutomated",
    originalClaim: "70% automated",
    softenedOrWiredText: "Core Workflow Automation",
    status: "softened",
    source: "Agentic Task Automation Target",
    notes: "Softened from blanket 70% claim to operational offloading of repetitive business logic with human-in-the-loop oversight.",
    published: true,
  },
  sub200msLatency: {
    id: "sub200msLatency",
    originalClaim: "Sub-200ms Latency",
    softenedOrWiredText: "Streaming Edge Architecture",
    status: "softened",
    source: "Streaming SSE and Edge Function Architecture",
    notes: "Softened from absolute sub-200ms LLM completion guarantee (which depends on LLM provider TTFT) to streaming edge-optimized architecture.",
    published: true,
  },
  ticketsAutomated: {
    id: "ticketsAutomated",
    originalClaim: "90% of tickets",
    softenedOrWiredText: "Tier-1 Inquiries with Human-in-the-Loop",
    status: "softened",
    source: "Assistra Support Agent Workflow Design",
    notes: "Softened from absolute 90% ticket deflection to structured triage and automated tier-1 resolutions with seamless human handoff.",
    published: true,
  },
  zeroTechDebt: {
    id: "zeroTechDebt",
    originalClaim: "Zero Technical Debt",
    softenedOrWiredText: "Clean, Maintainable Architecture",
    status: "softened",
    source: "Modular TypeScript & Strict Linter Guidelines",
    notes: "Softened from impossible absolute 'Zero Technical Debt' to 'Modular, Clean Architecture with Full Code Ownership'.",
    published: true,
  },
  millionDocuments: {
    id: "millionDocuments",
    originalClaim: "Query 1M+ documents",
    softenedOrWiredText: "Enterprise-Scale RAG Retrieval",
    status: "softened",
    source: "Vector Index Architecture (Pinecone/Qdrant/pgvector)",
    notes: "Softened from unsubstantiated 1M+ scale claim to verified enterprise vector indexing and semantic chunking architecture.",
    published: true,
  },
  hipaa18Days: {
    id: "hipaa18Days",
    originalClaim: "HIPAA-compliant MVP in 18 days (Elena Rossi)",
    softenedOrWiredText: "[DRAFT] HIPAA-compliant telemedicine workflow",
    status: "draft",
    source: "Unverified - Requires Signed Client Release",
    notes: "Removed fabricated testimonial from Elena Rossi / HealthFlow AI. Marked as draft; never rendered on live site.",
    published: false,
  },
  quarterSlotsScarcity: {
    id: "quarterSlotsScarcity",
    originalClaim: "Strictly 2 slots remaining for Q2 delivery",
    softenedOrWiredText: "Dynamic Quarter Capacity Tracker",
    status: "verified",
    source: "/content/capacity.ts",
    notes: "Replaced hardcoded Q2 false scarcity with calendar-aware getQuarterInfo() and real capacity schedule.",
    published: true,
  },
  usHeadquartersSchema: {
    id: "usHeadquartersSchema",
    originalClaim: "addressCountry: US in Schema.org",
    softenedOrWiredText: "India / Remote with US/EU/Gulf/AUS Timezone Overlap",
    status: "verified",
    source: "RakriLabs Official Registration",
    notes: "Fixed fabricated US address in JSON-LD. Reflects actual entity and global timezone delivery coverage.",
    published: true,
  },
};
