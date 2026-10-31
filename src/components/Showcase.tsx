"use client";

import { Bot, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { assistraProduct } from "@/content/products/assistra";
import { nivoraHQProduct } from "@/content/products/nivorahq";
import { caseStudies } from "@/content/case-studies";

export function Showcase() {
  const publishedCaseStudies = caseStudies.filter((cs) => cs.published);

  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto relative z-10 w-full font-sans">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-[11px] font-black uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Flagship Products & Work
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          Selected <span className="text-gradient">Engineering Work</span>
        </h2>
        <p className="text-base sm:text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
          Explore RakriLabs product initiatives and project case studies, with each project's status and available evidence stated clearly.
        </p>
      </div>

      {/* Flagship Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card 1: Assistra */}
        <div
          className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/40 transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{assistraProduct.name}</h3>
                  <span className="text-xs text-brand-cyan font-bold">AI Knowledge Assistant</span>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Coming Soon
              </span>
            </div>

            <p className="text-sm text-muted/90 leading-relaxed mb-6">
              {assistraProduct.description}
            </p>

            <p className="text-xs text-white/55 mb-8">Read the engineering case study for the project-brief architecture. The public product is not live.</p>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/case-studies/assistra-knowledge-assistant"
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-cyan transition-colors"
            >
              <span>Read the Engineering Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card 2: NivoraHQ */}
        <div
          className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{nivoraHQProduct.name}</h3>
                  <span className="text-xs text-brand-purple font-bold">Social Media Keyword Auto-Reply</span>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {nivoraHQProduct.statusBadge}
              </span>
            </div>

            <p className="text-sm text-muted/90 leading-relaxed mb-6">
              {nivoraHQProduct.heroSummary}
            </p>

            <div className="space-y-2 mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Safety Guardrails & Modes:</span>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/80">Human-in-the-Loop Queue</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/80">Rate Limiting</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/80">Brand Blocklists</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/80">Audit Trail</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/products/nivorahq"
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-purple transition-colors"
            >
              <span>Try Interactive Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products/nivorahq#simulator"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 hover:bg-brand-cyan/20 text-xs font-bold text-brand-cyan transition-all"
            >
              <span>Test Rules</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Case Studies Strip (if published) */}
      {publishedCaseStudies.length > 0 && (
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Selected Engineering Case Studies</h3>
              <p className="text-sm text-muted/80">Client work and product engineering concepts, with evidence notes on each case study.</p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:underline"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publishedCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                    <span>{cs.industry}</span>
                    {cs.projectStatus && <span>{cs.projectStatus}</span>}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-muted/80 leading-relaxed mb-4 line-clamp-2">
                    {cs.summary}
                  </p>
                </div>

                {cs.metrics.length > 0 && (
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white/60">{cs.metrics[0].label}</span>
                    <span className="font-bold text-white text-brand-cyan">{cs.metrics[0].value}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
