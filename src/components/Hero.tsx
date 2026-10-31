"use client";

import { ArrowRight, Play } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { siteConfig } from "@/content/site";
import { QuarterBadge } from "./QuarterBadge";
import Link from "next/link";

export function Hero() {
  const showDemo = siteConfig.demo.isPublic && Boolean(siteConfig.demo.url);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-36 pb-20 px-6 max-w-6xl mx-auto text-center">
      <div className="flex flex-col items-center gap-6 z-20">
        {/* Dynamic Quarter Capacity Badge */}
        <div className="flex items-center gap-2">
          <QuarterBadge variant="hero" />
        </div>

        {/* Primary Semantic H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] text-balance max-w-5xl">
          Architecting <span className="text-gradient">AI Systems</span> That Scale B2B SaaS.
        </h1>

        {/* Focused Sub-Headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted/90 max-w-3xl mx-auto leading-relaxed text-balance font-normal">
          We build custom AI agents, RAG systems, products, and workflow integrations for international B2B teams. Timelines are defined by scope, complexity, and agreed deliverables.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <button
            onClick={openCalendly}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_10px_35px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {showDemo && (
            <a
              href={siteConfig.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <Play className="w-4 h-4 fill-current text-brand-cyan" />
              <span>{siteConfig.demo.label}</span>
            </a>
          )}

          <Link
            href="/services#process"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent border border-white/10 text-white/80 font-bold text-base hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Delivery Process</span>
          </Link>
        </div>

        {/* Factual Trust & Proof Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/5 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Scope-led</span>
            <span className="text-[10px] uppercase tracking-widest text-muted/80 font-bold mt-1">Delivery Plan</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-muted/80 font-bold mt-1">Code Ownership</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Clear</span>
            <span className="text-[10px] uppercase tracking-widest text-muted/80 font-bold mt-1">Milestones</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Fixed-Fee</span>
            <span className="text-[10px] uppercase tracking-widest text-muted/80 font-bold mt-1">Agreed Scope</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-purple/10 blur-[160px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
}
