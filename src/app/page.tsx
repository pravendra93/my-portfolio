"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { EngineeringExplorer } from "@/components/EngineeringExplorer";
import { EngineeringFlow } from "@/components/EngineeringFlow";
import { TestimonialStrip } from "@/components/TestimonialStrip";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";

const capabilityPreviews = [
  {
    title: "AI Agents & Workflows",
    description: "Multi-step work with review and escalation paths shaped to the use case.",
    flow: ["Request", "Reasoning / Rules", "Tool Execution", "Validation / Human Approval"],
  },
  {
    title: "RAG & Search",
    description: "Source-aware retrieval across approved knowledge sources.",
    flow: ["Source Documents", "Retrieval", "Grounded Response", "Citations"],
  },
  {
    title: "AI Product Development",
    description: "Scope and engineer product systems around project requirements and integrations.",
    flow: ["Interface", "API / Services", "Data Layer", "Monitoring"],
  },
];

const projectLinks = [
  { id: "trust", label: "Security planning", href: "/services#trust" },
  { id: "pricing", label: "Pricing and engagement", href: "/services#pricing" },
  { id: "faq", label: "Common questions", href: "/services#faq" },
  { id: "contact", label: "Contact the studio", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen selection:bg-brand-purple/30 font-sans text-foreground bg-[#050505] overflow-x-hidden relative">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Navigation />
          <Hero />

          <section id="services" className="scroll-mt-28 w-full max-w-7xl px-6 pb-10 pt-16 sm:pb-12 sm:pt-20">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-10">
              <div className="max-w-2xl">
                <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-3">Engineering capabilities</p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">AI engineering for the work that matters</h2>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href="/services#services" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded">
                  Explore services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#engineering-explorer" className="inline-flex items-center gap-2 rounded-lg border border-brand-cyan/25 bg-brand-cyan/[0.07] px-4 py-2.5 text-sm font-bold text-brand-cyan transition-colors hover:border-brand-cyan/45 hover:bg-brand-cyan/[0.12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">
                  Explore Engineering Approach <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {capabilityPreviews.map((capability) => (
                <Link
                  key={capability.title}
                  href="/services#services"
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-colors hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-muted/80">{capability.description}</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <EngineeringFlow label={`${capability.title} preview`} nodes={capability.flow} compact />
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand-cyan">View engineering approach <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>

            <div id="process" className="scroll-mt-28 mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-relaxed text-muted/80">From discovery and agreed scope through engineering, validation, and handoff, with milestones shaped around the work.</p>
              <Link href="/services#process" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-white hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded">
                See the process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <EngineeringExplorer />

          <div id="projects" className="scroll-mt-28 w-full">
            <Showcase />
          </div>

          <TestimonialStrip />

          <section aria-label="Project details and next steps" className="w-full max-w-7xl px-6 pb-20">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {projectLinks.map((item) => (
                <Link
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm font-semibold text-white/80 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {item.label} <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
