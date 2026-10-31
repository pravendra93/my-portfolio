"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider, openCalendly } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { caseStudies } from "@/content/case-studies";
import { QuarterBadge } from "@/components/QuarterBadge";
import { ArrowRight, Filter, Sparkles } from "lucide-react";

export default function CaseStudiesIndexPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const published = caseStudies.filter((cs) => cs.published);

  const filtered = published.filter((cs) => {
    if (selectedIndustry !== "All" && cs.industry !== selectedIndustry) return false;
    if (selectedService !== "All" && cs.service !== selectedService) return false;
    if (selectedRegion !== "All" && cs.region !== selectedRegion) return false;
    return true;
  });

  const industries = ["All", ...Array.from(new Set(published.map((cs) => cs.industry)))];
  const services = ["All", ...Array.from(new Set(published.map((cs) => cs.service)))];
  const regions = ["All", ...Array.from(new Set(published.map((cs) => cs.region)))];

  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />

        <div className="pt-36 pb-24 px-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[11px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
              Engineering <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-base sm:text-lg text-muted/90 leading-relaxed font-normal">
              Deep dives into production architectures, performance metrics, and technical deliverables we have shipped for global teams.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase tracking-widest">
              <Filter className="w-3.5 h-3.5 text-brand-cyan" /> Filter Case Studies
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Industry Filter */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-[#121215] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-cyan"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Service Type</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#121215] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-cyan"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-[#121215] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-cyan"
                >
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>{reg}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white/[0.01] border border-white/5">
              <p className="text-muted/70 text-sm">No case studies match the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedService("All");
                  setSelectedRegion("All");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-brand-purple">{cs.industry}</span>
                      <span>{cs.region}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                      {cs.title}
                    </h2>

                    <p className="text-xs text-brand-cyan/80 font-mono mb-4">
                      Client: {cs.clientLabel}
                    </p>

                    <p className="text-xs text-muted/80 leading-relaxed mb-6 line-clamp-3">
                      {cs.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cs.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    {cs.metrics.length > 0 && (
                      <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-[11px] text-white/60">{cs.metrics[0].label}</span>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white text-brand-cyan block">{cs.metrics[0].value}</span>
                          <span className="text-[8px] uppercase tracking-wider text-white/30">({cs.metrics[0].source})</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-bold text-white/80 group-hover:text-white">
                      <span>Read Architecture Detail</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <QuarterBadge variant="compact" className="mb-2" />
              <h3 className="text-2xl font-bold text-white">Have a similar technical challenge?</h3>
              <p className="text-xs text-muted/80 mt-1">Review your requirements directly with our founding systems architect.</p>
            </div>
            <button
              onClick={openCalendly}
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shrink-0"
            >
              Book Strategy Session
            </button>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
