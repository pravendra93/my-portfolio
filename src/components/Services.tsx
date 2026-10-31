"use client";

import { Rocket, Bot, ArrowRight, Database, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Autonomous AI Agents",
    tagline: "Multi-agent workflows with human-in-the-loop oversight.",
    description: "We design AI agents for multi-step operations, customer triage, and data workflows, with review and escalation paths shaped to the use case.",
    features: [
      "Custom tool-calling & structured JSON schema enforcement",
      "Human-in-the-loop review queues & escalation protocols",
      "Comprehensive prompt regression test suites & audit logs",
    ],
    icon: Bot,
    badge: "Operations Leverage",
    link: "/products/assistra",
    linkText: "Explore Agent Architecture",
  },
  {
    title: "Enterprise RAG & Search",
    tagline: "Source-aware retrieval across business knowledge.",
    description: "Replace generic keyword search with semantic retrieval over private documentation, contracts, and knowledge bases using hybrid dense-and-sparse vector embeddings.",
    features: [
      "Hybrid vector search (pgvector / Qdrant / Pinecone)",
      "Provider retention and data terms reviewed during scoping",
      "Source links and evaluation checks defined for the use case",
    ],
    icon: Database,
    badge: "Knowledge Retrieval",
    link: "/case-studies/enterprise-rag-document-intelligence",
    linkText: "View RAG Case Study",
  },
  {
    title: "AI Product Development",
    tagline: "From an agreed problem to a scoped delivery plan.",
    description: "For B2B founders and product teams building AI-enabled products. We scope and engineer Next.js and Python systems around the requirements, integrations, and readiness of each project.",
    features: [
      "Clear milestones and review checkpoints",
      "Clean, modular TypeScript architecture committed daily",
      "Integrations and release preparation defined by scope",
    ],
    icon: Rocket,
    badge: "Rapid Execution",
    link: "/services#process",
    linkText: "See How We Work",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[11px] font-black uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5" /> Engineering Capabilities
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          Production Systems, <span className="text-gradient">Not Toy Demos</span>
        </h2>
        <p className="text-base sm:text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
          We combine deep software engineering with modern AI orchestration to ship reliable, revenue-critical infrastructure for B2B teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-105 group-hover:text-brand-cyan transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-xs font-semibold text-brand-purple mb-4">{service.tagline}</p>
              <p className="text-muted/80 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs text-white/70 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-brand-cyan transition-colors"
              >
                <span>{service.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
