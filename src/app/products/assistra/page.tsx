import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { assistraProduct, AssistraSection } from "@/content/products/assistra";
import { generatePageMetadata } from "@/lib/metadata";
import { QuarterBadge } from "@/components/QuarterBadge";
import {
  Bot,
  Mic,
  Cpu,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
  Server,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Assistra — Modular AI Operations Platform",
  description: "Explore Assistra: section-by-section automation for Voice AI, executive assistance, team workflows, and mission-critical business logic.",
  path: "/products/assistra",
});

function SectionIcon({ id }: { id: string }) {
  switch (id) {
    case "voice-ai":
      return <Mic className="w-5 h-5 text-brand-cyan" />;
    case "personal-assistant":
      return <Bot className="w-5 h-5 text-brand-purple" />;
    case "team-workflows":
      return <Workflow className="w-5 h-5 text-emerald-400" />;
    default:
      return <Cpu className="w-5 h-5 text-amber-400" />;
  }
}

function SectionComponent({ sec, idx }: { sec: AssistraSection; idx: number }) {
  const isBeta = sec.status === "Beta";
  const isAlpha = sec.status === "Alpha";

  return (
    <section
      id={sec.id}
      className="scroll-mt-28 py-16 px-6 sm:px-10 rounded-3xl bg-white/[0.02] border border-white/5 mb-16"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <SectionIcon id={sec.id} />
            </div>
            <span
              className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                isBeta
                  ? "bg-amber-400/10 text-amber-300 border-amber-400/20"
                  : isAlpha
                  ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              }`}
            >
              {sec.status}
            </span>
            <span className="text-xs font-mono text-white/40">Area 0{idx + 1}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
            {sec.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-cyan font-semibold">
            {sec.outcome}
          </p>
        </div>

        <div className="shrink-0">
          {sec.ctaHref.startsWith("http") ? (
            <a
              href={sec.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all"
            >
              <span>{sec.ctaText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>{sec.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Left: Problem & Automation Scope */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block mb-2">
              Problem Removed
            </span>
            <p className="text-sm text-white/90 leading-relaxed font-medium">
              {sec.problemRemoved}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple block mb-3">
              What Gets Automated
            </span>
            <ul className="space-y-2.5">
              {sec.whatGetsAutomated.map((item) => (
                <li key={item} className="text-xs text-white/80 flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: How It Works & Architecture Diagram Flow */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-3">
              Execution Flow (Step-by-Step)
            </span>
            <div className="space-y-3">
              {sec.howItWorks.map((step, sIdx) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/5 text-brand-cyan text-[10px] font-mono flex items-center justify-center shrink-0 font-bold mt-0.5">
                    {sIdx + 1}
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram Representation */}
          <div className="p-5 rounded-2xl bg-[#09090c] border border-white/10 font-mono text-[11px] text-white/60">
            <div className="flex items-center gap-2 mb-2 text-white/40 text-[9px] uppercase tracking-wider font-sans font-bold">
              <Server className="w-3 h-3 text-brand-cyan" /> Pipeline Diagram
            </div>
            <p className="text-white/80 leading-relaxed break-words">
              {sec.diagramDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AssistraProductPage() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />

        <div className="pt-36 pb-24 px-6 max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[11px] font-black uppercase tracking-widest mb-4">
              <Bot className="w-3.5 h-3.5" /> Product Architecture
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Assistra: <span className="text-gradient">Modular AI Operations</span>
            </h1>
            <p className="text-lg text-muted/90 leading-relaxed font-normal mb-8">
              {assistraProduct.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {assistraProduct.isDemoPublic && (
                <a
                  href={assistraProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Discuss Custom Deployment
              </Link>
            </div>
          </div>

          {/* Automation Map (Summary Cards linking to in-page sections) */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" /> Automation Map
              </h2>
              <span className="text-xs text-muted/70">Click to inspect area details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {assistraProduct.sections.map((sec, idx) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-white/40">0{idx + 1}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-brand-cyan font-bold uppercase">
                      {sec.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors mb-1">
                    {sec.title}
                  </h3>
                  <p className="text-[11px] text-muted/70 leading-relaxed line-clamp-2">
                    {sec.outcome}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Sticky Section Sub-Navigation */}
          <div className="sticky top-20 z-40 mb-12 py-3 px-4 rounded-2xl bg-[#0c0c0e]/90 backdrop-blur-xl border border-white/10 flex items-center gap-2 overflow-x-auto text-xs font-bold">
            <span className="text-white/40 uppercase tracking-widest text-[10px] shrink-0 mr-2">Jump to:</span>
            {assistraProduct.sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-3 py-1.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0 whitespace-nowrap"
              >
                {sec.title.split("&")[0].trim()}
              </a>
            ))}
          </div>

          {/* Data-Driven Section Implementations */}
          <div className="space-y-4">
            {assistraProduct.sections.map((sec, idx) => (
              <SectionComponent key={sec.id} sec={sec} idx={idx} />
            ))}
          </div>

          {/* Integrations Section */}
          <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-purple block mb-2">Ecosystem</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Production-Ready Integrations
              </h2>
              <p className="text-xs text-muted/80 mt-1">
                Assistra coordinates seamlessly with your current technical stack and databases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {assistraProduct.integrations.map((item) => (
                <div key={item.name} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-muted/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Data Isolation Summary */}
          <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Security & Tenant Isolation</h3>
                <p className="text-xs text-muted/80">Every deployment conforms to strict enterprise data privacy.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {assistraProduct.securitySummary.map((item) => (
                <div key={item} className="p-4 rounded-xl bg-white/[0.015] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-white/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final Call to Action */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <QuarterBadge variant="compact" className="mb-3" />
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Deploy Assistra for Your SaaS Operations
            </h3>
            <p className="text-sm text-muted/80 max-w-md mx-auto mb-6">
              Launch dedicated agent workflows or embed Assistra voice AI inside your product in a 30-day sprint.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all"
              >
                Schedule Technical Discovery
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
