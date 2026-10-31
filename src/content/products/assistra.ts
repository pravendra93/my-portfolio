export interface AssistraSection {
  id: string;
  title: string;
  outcome: string;
  problemRemoved: string;
  whatGetsAutomated: string[];
  howItWorks: string[];
  status: "Live" | "Beta" | "Alpha";
  ctaText: string;
  ctaHref: string;
  diagramDescription: string;
  badgeColor?: string;
}

export interface AssistraProductConfig {
  published: boolean;
  name: string;
  tagline: string;
  description: string;
  demoUrl: string;
  isDemoPublic: boolean;
  sections: AssistraSection[];
  integrations: {
    name: string;
    category: string;
    description: string;
  }[];
  securitySummary: string[];
}

export const assistraProduct: AssistraProductConfig = {
  published: true,
  name: "Assistra",
  tagline: "Autonomous AI Orchestration for Modern SaaS Teams",
  description: "Assistra is our production-tested modular AI operations platform. Built for engineering and operations leaders who need to deploy voice, conversational triage, and automated background execution without months of pipeline plumbing.",
  demoUrl: "https://stage.assistra.app/",
  isDemoPublic: true,
  sections: [
    {
      id: "voice-ai",
      title: "Voice AI & Real-Time Call Agent",
      outcome: "Zero-wait conversational triage with natural low-latency voice synthesis.",
      problemRemoved: "Inbound customer callers waiting on hold or navigating complex, frustrating DTMF phone trees.",
      whatGetsAutomated: [
        "Inbound voice answering and real-time caller intent extraction.",
        "Deterministic appointment scheduling and calendar sync.",
        "Warm transfer to human specialists when caller distress or complex edge cases are detected.",
      ],
      howItWorks: [
        "Caller initiates phone call via WebRTC or SIP trunk connection.",
        "Streaming speech-to-text (STT) transcribes utterance with sub-second acoustic model.",
        "Agent brain executes guarded tool-calling (calendar, CRM lookup, policy verification).",
        "Neural text-to-speech (TTS) streams synthetic voice back with natural turn-taking and interruption handling.",
      ],
      status: "Beta",
      ctaText: "Request Voice Demo",
      ctaHref: "#booking-modal",
      diagramDescription: "Caller Voice -> WebRTC/SIP Stream -> Low-Latency STT -> Guarded Agent Core -> Tool Calls (CRM/Calendar) -> Neural TTS Audio Output",
    },
    {
      id: "personal-assistant",
      title: "Executive & Team Personal Assistant",
      outcome: "Autonomous inbox triage, calendar coordination, and meeting synthesis.",
      problemRemoved: "Founders and team leads wasting 15+ hours weekly answering repetitive scheduling emails and compiling meeting notes.",
      whatGetsAutomated: [
        "Inbox classification: separates priority business opportunities from cold outreach.",
        "Automated calendar negotiation respecting preferred meeting windows and buffer times.",
        "Post-call action item extraction with task creation in Jira/Linear.",
      ],
      howItWorks: [
        "Assistant monitors authorized OAuth email and calendar feeds.",
        "Evaluates inbound thread context against user's priority rules and active projects.",
        "Drafts contextual response or schedules calendar invite directly.",
        "Posts executive briefing digest to private Slack channel every morning.",
      ],
      status: "Live",
      ctaText: "Try Personal Assistant",
      ctaHref: "https://stage.assistra.app/",
      diagramDescription: "Inbound Feeds (Gmail, Slack, Cal) -> Context Analyzer -> Priority Filter -> Automated Calendar Slotting & Linear Task Sync",
    },
    {
      id: "team-workflows",
      title: "Multi-Agent Team Workflow Orchestration",
      outcome: "Cross-departmental task handoffs with guaranteed state consistency.",
      problemRemoved: "Information silos and dropped balls when marketing, sales, and engineering hand off customer requests.",
      whatGetsAutomated: [
        "Customer bug reporting: converts messy customer chat logs into formatted GitHub issues.",
        "Sales lead enrichment: scrapes verified company data and drafts customized proposal briefs.",
        "Contract & NDA verification: scans standard agreement clauses against approved legal playbooks.",
      ],
      howItWorks: [
        "Trigger event arrives via webhook (e.g., Zendesk ticket, HubSpot deal change).",
        "Orchestrator spawns specialized worker agents (Scraper, Parser, Validator).",
        "Worker agents execute task steps asynchronously and pass structured artifacts.",
        "Supervising agent verifies output quality and notifies the human team member for approval.",
      ],
      status: "Live",
      ctaText: "Automate Team Workflows",
      ctaHref: "#booking-modal",
      diagramDescription: "Webhook Trigger -> Master Orchestrator -> [Research Agent + Parser Agent + Validator Agent] -> Human Approval Gate -> Production DB Update",
    },
    {
      id: "business-logic",
      title: "Mission-Critical Business Logic Automation",
      outcome: "Deterministic rule execution paired with probabilistic LLM reasoning.",
      problemRemoved: "Fragile scripts that break whenever unstructured customer inputs or API formats shift unexpectedly.",
      whatGetsAutomated: [
        "Complex data reconciliation across banking/billing APIs and internal databases.",
        "Automated compliance checks against dynamic regulatory guidelines.",
        "Self-healing ETL pipelines that dynamically adapt to upstream schema changes.",
      ],
      howItWorks: [
        "Input payload received via secure mTLS endpoint.",
        "Deterministic schema validation verifies core business constraints and balance checks.",
        "LLM reasoning agent handles semantic classification and fuzzy matching.",
        "Atomic transaction committed with full cryptographic audit trail.",
      ],
      status: "Alpha",
      ctaText: "Request Architecture Review",
      ctaHref: "#booking-modal",
      diagramDescription: "Secure Ingest -> Deterministic Hard Rules -> LLM Semantic Normalization -> State Reconciliation -> Immutable Audit Ledger",
    },
  ],
  integrations: [
    { name: "PostgreSQL & Supabase", category: "Database", description: "Direct vector storage and relational context sync." },
    { name: "Slack & Discord", category: "Messaging", description: "Real-time human approval queues and team alerts." },
    { name: "Linear & Jira", category: "Productivity", description: "Automated ticket creation and status tracking." },
    { name: "HubSpot & Salesforce", category: "CRM", description: "Automatic lead enrichment and activity logging." },
    { name: "Stripe", category: "Billing", description: "Secure customer billing state checks and invoice lookups." },
    { name: "Twilio & LiveKit", category: "Telephony", description: "Ultra-low-latency WebRTC and SIP voice infrastructure." },
  ],
  securitySummary: [
    "Dedicated tenant isolation: customer data never mixes with other accounts.",
    "Zero training guarantee: your data is never used to train foundation models.",
    "Granular token-level audit logs for every agent query and tool execution.",
    "SOC2-ready architectural controls with end-to-end encryption.",
  ],
};
