export interface NivoraRuleTemplate {
  id: string;
  name: string;
  category: "Pricing" | "Support" | "Lead Inquiry" | "Brand Mention";
  keywords: string[];
  systemPrompt: string;
  defaultMode: "auto-send" | "human-approve";
  exampleInput: string;
  mockGeneratedReply: string;
}

export interface NivoraProductConfig {
  published: boolean;
  name: string;
  tagline: string;
  statusBadge: "Beta" | "Early Access" | "Live";
  heroSummary: string;
  howItWorksSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  ruleTemplates: NivoraRuleTemplate[];
  guardrails: {
    title: string;
    description: string;
    badge: string;
  }[];
  platformComplianceDisclaimer: {
    title: string;
    notice: string;
    points: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export const nivoraHQProduct: NivoraProductConfig = {
  published: true,
  name: "NivoraHQ",
  tagline: "Intelligent Social Media Keyword Auto-Reply Engine",
  statusBadge: "Early Access",
  heroSummary: "Turn social media comments and direct messages into qualified revenue pipeline with intent-aware, keyword-triggered AI responses that sound like your best team members.",
  howItWorksSteps: [
    {
      step: 1,
      title: "Connect Social Accounts",
      description: "Securely link official business profiles (X/Twitter, LinkedIn, Instagram) via official developer APIs with OAuth permissions.",
    },
    {
      step: 2,
      title: "Define Keyword Rules",
      description: "Set targeted keyword triggers, phrases, or semantic intent filters (e.g., 'pricing', 'demo', 'broken', 'comparison').",
    },
    {
      step: 3,
      title: "Attach Brand-Aligned Reply Prompts",
      description: "Craft specific instructions, knowledge context, tone guidelines, and optional call-to-action links for each keyword group.",
    },
    {
      step: 4,
      title: "Choose Execution Mode",
      description: "Toggle between instant Autonomous Auto-Send for low-risk queries, or Human-in-the-Loop review for high-touch leads.",
    },
    {
      step: 5,
      title: "Monitor, Audit & Optimize",
      description: "Review sentiment trends, conversion click-throughs, and full cryptographic logs of every inbound comment and generated reply.",
    },
  ],
  ruleTemplates: [
    {
      id: "rule-pricing",
      name: "Pricing & Cost Inquiry",
      category: "Pricing",
      keywords: ["pricing", "how much", "cost", "rates", "quote", "budget"],
      systemPrompt: "You are a helpful product specialist. Acknowledge their interest warmly, provide transparent pricing tier starting points ($4.5k - $15k sprints), and invite them to share their project scope for a custom quote.",
      defaultMode: "auto-send",
      exampleInput: "What does it cost to build a full AI agent MVP with your team?",
      mockGeneratedReply: "Hey! Our dedicated AI MVP sprints start at $4,599 for lean launches, with full production agent architectures at $15k-$25k. We scope every sprint around 30-day deliverables with full code ownership. Drop us a DM or visit rakrilabs.com to discuss your specific roadmap!",
    },
    {
      id: "rule-support",
      name: "Support Complaint / Bug Report",
      category: "Support",
      keywords: ["broken", "bug", "error", "not working", "down", "issue"],
      systemPrompt: "You are an empathetic customer success lead. Validate the user's issue immediately, apologize for the inconvenience, avoid making promises you cannot verify, and route them to our priority human triage channel.",
      defaultMode: "human-approve",
      exampleInput: "Your staging demo keeps throwing a 502 gateway error on my login screen.",
      mockGeneratedReply: "Thanks for flagging this! We are so sorry for the friction. Our engineering team has been alerted to the 502 status. Could you send us a quick DM with your browser/device so we can prioritize the patch? We are on it right now.",
    },
    {
      id: "rule-lead-inquiry",
      name: "Enterprise Partnership & Pilot",
      category: "Lead Inquiry",
      keywords: ["enterprise", "pilot", "partner", "call", "hire", "consulting"],
      systemPrompt: "You are an executive partnerships lead. Greet the prospect with professional warmth, reference our 30-day technical sprint model and US/EU timezone overlap, and provide a direct booking link to the founding engineers.",
      defaultMode: "human-approve",
      exampleInput: "We are an enterprise logistics firm in Frankfurt looking for an engineering studio to architect our internal RAG search.",
      mockGeneratedReply: "Hello! We would love to collaborate. We specialize in enterprise-grade RAG and vector search with dedicated European data residency and full GDPR alignment. Let's arrange a 20-minute architecture discussion with our founders: rakrilabs.com/contact.",
    },
    {
      id: "rule-brand-mention",
      name: "General Brand Mention & Shoutout",
      category: "Brand Mention",
      keywords: ["rakrilabs", "assistra", "nivorahq", "great work", "cool product"],
      systemPrompt: "You are a brand ambassador. Respond with genuine gratitude, match their excitement, and ask an open question to build community engagement.",
      defaultMode: "auto-send",
      exampleInput: "Loving what the @rakrilabs team is building with autonomous agents!",
      mockGeneratedReply: "Thank you so much for the love! 🙌 Building AI systems that provide genuine business leverage is our obsession. What kind of workflows are you exploring with agents this quarter?",
    },
  ],
  guardrails: [
    {
      title: "Human Approval Queue",
      description: "Flag any reply containing sensitive keywords, negative sentiment, or high-value accounts for one-click human sign-off before publishing.",
      badge: "Zero-Blunder Safety",
    },
    {
      title: "Strict Velocity & Rate Limits",
      description: "Per-handle frequency caps and platform throttling safeguard your accounts from looking spammy or tripping platform bot filters.",
      badge: "Account Protection",
    },
    {
      title: "Negative Keyword Blocklists",
      description: "Automatic silence when offensive language, competitive disputes, or crisis keywords appear in the comment stream.",
      badge: "Brand Defense",
    },
    {
      title: "Tone & Voice Constraints",
      description: "Strict system prompt wrappers enforce company tone guidelines, prohibition on financial/legal advice, and banned phrases.",
      badge: "Voice Consistency",
    },
    {
      title: "Immutable Audit Trail",
      description: "Searchable history of every inbound trigger, prompt template, model temperature, and dispatched reply with timestamp verification.",
      badge: "Full Transparency",
    },
  ],
  platformComplianceDisclaimer: {
    title: "Platform Policy & API Compliance Transparency",
    notice: "NivoraHQ connects solely through official developer APIs. We strictly adhere to platform developer terms and anti-spam policies.",
    points: [
      "We operate within official platform API rate limits (X Developer API, LinkedIn Marketing Developer Platform, Meta Graph API).",
      "We do not engage in unauthorized scraping, private account brute-forcing, or synthetic engagement pod rings.",
      "Automated replies must comply with each platform's automation rules. Some platforms require explicit user opt-in or human confirmation for outbound messaging.",
      "RakriLabs makes no representations or guarantees regarding third-party platform algorithm favorability or account standing beyond strict technical adherence to published API guidelines.",
    ],
  },
  faq: [
    {
      question: "Does NivoraHQ violate social media platform terms of service?",
      answer: "No. NivoraHQ operates exclusively through official, documented partner APIs (Meta Graph API, X API v2, LinkedIn API). We comply strictly with developer policies prohibiting deceptive automation, impersonation, and aggressive spam tactics.",
    },
    {
      question: "Can I review replies before they get posted publicly?",
      answer: "Yes! Every keyword rule supports 'Human-in-the-Loop' mode. Replies queue in your NivoraHQ dashboard or private Slack channel where team members can approve, edit, or reject them with a single click.",
    },
    {
      question: "How does NivoraHQ prevent hallucinations or awkward replies?",
      answer: "Every response is generated against strict grounding context and bounded prompt templates. If a comment does not clearly match known facts, the system defaults to a courteous human-handoff response or stays silent.",
    },
  ],
};
