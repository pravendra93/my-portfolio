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

export type OfferId = "build" | "fix" | "ai";

export interface Offer {
  id: OfferId;
  label: string;
  title: string;
  startingPrice: string;
  summary: string;
  examples: string[];
  /** What the buyer gets, in order: shown as a 3-step strip on each offer card. */
  breakdown: { value: string; label: string }[];
}

/**
 * The three homepage offers. Prices here drive the hero, the offer cards,
 * and the pricing tiers below — change them in one place.
 */
export const offers: Offer[] = [
  {
    id: "build",
    label: "Build my product",
    title: "Build",
    startingPrice: "$4,599",
    summary: "Turn your idea or audience into a working product: launched, hosted, and yours.",
    examples: [
      "Course, membership, or community platform",
      "Booking, waitlist, or payments flow",
      "SaaS MVP for your niche",
    ],
    breakdown: [
      { value: "Week 1", label: "Written scope & design" },
      { value: "Weekly", label: "Demos you can click" },
      { value: "Launch", label: "Hosted & handed over" },
    ],
  },
  {
    id: "fix",
    label: "Fix my app",
    title: "Fix",
    startingPrice: "$500",
    summary: "Your app is half-built, slow, or broken. We find what's wrong and fix it.",
    examples: [
      "Bugs, crashes, and failed deployments",
      "Apps built with AI tools that stopped working",
      "Slow pages, payment, and login issues",
    ],
    breakdown: [
      { value: "48 h", label: "Audit & fix list" },
      { value: "1–2 wks", label: "Fixes shipped" },
      { value: "Plain English", label: "Report of what changed" },
    ],
  },
  {
    id: "ai",
    label: "Add AI",
    title: "Add AI",
    startingPrice: "$1,500",
    summary: "Add AI where it saves you time or makes your product better for your audience.",
    examples: [
      "Support agent trained on your docs or FAQs",
      "Comment and DM auto-replies for your socials",
      "AI features and automations inside your product",
    ],
    breakdown: [
      { value: "Week 1", label: "Goal agreed, content in" },
      { value: "~3 wks", label: "Pilot live" },
      { value: "Report", label: "Results vs. the goal" },
    ],
  },
];

/**
 * Founding-client offer: a real, limited discount in exchange for a testimonial
 * and case study. Lower `spotsLeft` as clients sign; set `published: false`
 * when it reaches 0 (the homepage hides the section).
 */
export const foundingOffer = {
  published: true,
  spotsTotal: 3,
  spotsLeft: 3,
  discount: "40%",
  terms: [
    "40% off your first project (Fix from $300, Add AI from $900)",
    "Same fixed scope, same quality, same warranty",
    "In return: an honest testimonial and permission to write a short case study",
  ],
};

export const offerById = (id: OfferId) => offers.find((offer) => offer.id === id)!;

export const pricingConfig: PricingConfig = {
  published: true,
  introHeading: "Fixed prices. No surprises.",
  introDescription: "Every project starts with a short call and a written scope. You know the price before we write a line of code.",
  disclaimer: "Starting prices for typical projects. Final scope and price are confirmed in writing after a short call.",
  tiers: [
    {
      id: "fix-sprint",
      name: "Fix & Rescue Sprint",
      price: "$500–$1,000",
      billingBasis: "Fixed price",
      tagline: "We audit your app, agree the list of fixes with you, and ship them.",
      timeline: "Usually 1–2 weeks",
      targetAudience: "Creators and founders with an app that is broken, unfinished, or slow.",
      deliverables: [
        "Code and hosting review with a written list of issues",
        "Fixes for the agreed bugs, deployment, or performance problems",
        "Plain-English summary of what was wrong and what changed",
        "Works with apps built by other developers or AI tools",
      ],
      highlight: false,
      published: true,
    },
    {
      id: "add-ai-pilot",
      name: "Add AI Pilot",
      price: "$1,500–$2,500",
      billingBasis: "Fixed price",
      tagline: "One AI feature, live in your product or workflow, measured against a goal we agree up front.",
      timeline: "About 3 weeks",
      targetAudience: "Creators and founders who want AI to save time or improve their product.",
      deliverables: [
        "One AI feature: support agent, social auto-replies, or an automation",
        "Trained on your own content, docs, or FAQs",
        "Hand-off to you when the AI is unsure",
        "Report against the agreed goal",
        "Full rollout from $3,000 if the pilot works",
      ],
      highlight: true,
      published: true,
    },
    {
      id: "mvp-launchpad",
      name: "Product Build",
      price: "From $4,599",
      billingBasis: "Fixed project price",
      tagline: "From idea to a launched product, with a scoped plan and milestones you can follow.",
      timeline: "Confirmed after scoping",
      targetAudience: "Creators and founders turning an idea or audience into a product.",
      deliverables: [
        "Clear written scope and milestones before we start",
        "Web app built with Next.js, ready on desktop and mobile",
        "Login, payments, and email set up",
        "AI features where they help (optional)",
        "Hosting and deployment handled for you",
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
      published: false,
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
      published: false,
    },
  ],
};
