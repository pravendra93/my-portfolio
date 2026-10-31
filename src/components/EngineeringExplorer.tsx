"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { engineeringExplorations } from "@/content/engineering-explorations";
import { EngineeringFlow } from "@/components/EngineeringFlow";

export function EngineeringExplorer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const selectedJourney = engineeringExplorations.find((journey) => journey.id === selectedId);

  return (
    <section
      id="engineering-explorer"
      aria-labelledby="engineering-explorer-title"
      className="w-full max-w-7xl scroll-mt-28 px-6 pb-12 pt-6 sm:pb-16 sm:pt-8"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)_42%,rgba(6,182,212,0.025))] p-5 sm:p-8 lg:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-brand-cyan sm:text-[11px]">
              <span aria-hidden="true" className="h-px w-5 bg-brand-cyan/70" />
              Engineering approach explorer
            </p>
            <h2 id="engineering-explorer-title" className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Start with the problem. Design the approach.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted/80">
              Explore illustrative engineering paths shaped around the goal, constraints, and desired outcome—not a claim that every component is already in production.
            </p>
          </div>
        </div>

        <div role="group" aria-label="Choose a business or engineering goal" className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {engineeringExplorations.map((journey) => {
              const isSelected = journey.id === selectedId;
              return (
                <button
                  key={journey.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(journey.id)}
                  className={`group flex min-h-[3.75rem] items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-xs font-semibold leading-snug transition-[background-color,border-color,box-shadow] duration-150 hover:!transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan motion-reduce:transition-none sm:px-4 sm:text-sm ${
                    isSelected
                      ? "border-brand-cyan/45 bg-brand-cyan/[0.09] text-white shadow-[inset_0_0_0_1px_rgba(6,182,212,0.08)]"
                      : "border-white/10 bg-black/20 text-white/70 hover:border-white/20 hover:bg-white/[0.035] hover:text-white"
                  }`}
                >
                  <span aria-hidden="true" className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] transition-colors motion-reduce:transition-none ${isSelected ? "border-brand-cyan/35 bg-brand-cyan/10 text-brand-cyan" : "border-white/10 bg-white/[0.025] text-white/40 group-hover:text-white/70"}`}>
                    {String(engineeringExplorations.indexOf(journey) + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{journey.label}</span>
                  <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors motion-reduce:transition-none ${isSelected ? "bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.7)]" : "bg-white/15"}`} />
                </button>
              );
            })}
        </div>

        <div
            role="region"
            aria-label={selectedJourney ? `${selectedJourney.label} engineering approach` : "Engineering approach overview"}
            className="mt-4 min-w-0 rounded-2xl border border-white/10 bg-[#08090a]/80 p-4 sm:mt-5 sm:p-6 lg:p-7"
          >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedJourney?.id ?? "overview"}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.16, ease: "easeOut" }}
            >
              {selectedJourney ? (
                <div>
                  <p role="status" className="sr-only">Showing an illustrative approach for {selectedJourney.label}.</p>
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-4">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-cyan/80">
                        Journey {String(engineeringExplorations.indexOf(selectedJourney) + 1).padStart(2, "0")} <span className="text-white/25">/ 04</span>
                      </p>
                      <h3 id="engineering-explorer-result-title" className="text-lg font-bold text-white sm:text-xl">{selectedJourney.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-white/65 transition-colors hover:border-white/20 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan hover:!transform-none motion-reduce:transition-none"
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      Reset path
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/45">Business problem</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted/80">{selectedJourney.businessProblem}</p>
                    </div>
                    <div className="rounded-xl border border-brand-cyan/15 bg-brand-cyan/[0.025] p-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-cyan/70">Proposed approach</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/80">{selectedJourney.approach}</p>
                    </div>
                  </div>

                  <section aria-label="Illustrative architecture" className="mt-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50">Illustrative architecture</h4>
                      <span className="rounded-full border border-white/8 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/40">Conceptual flow</span>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-black/25 p-3 sm:p-4">
                      <EngineeringFlow
                        label={`${selectedJourney.label} architecture sequence`}
                        nodes={selectedJourney.architecture.nodes}
                        supportingComponents={selectedJourney.architecture.supportingComponents}
                        crossCutting={selectedJourney.architecture.crossCutting}
                      />
                    </div>
                  </section>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <section aria-labelledby="explorer-tradeoffs-title" className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                      <h4 id="explorer-tradeoffs-title" className="text-[10px] font-black uppercase tracking-widest text-white/50">Key decisions and trade-offs</h4>
                      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                        {selectedJourney.tradeoffs.map((tradeoff) => (
                          <li key={tradeoff.title}>
                            <h5 className="text-xs font-semibold text-white/90">{tradeoff.title}</h5>
                            <p className="mt-1 text-xs leading-relaxed text-muted/70">{tradeoff.description}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section aria-labelledby="explorer-risks-title" className="rounded-xl border border-brand-cyan/15 bg-brand-cyan/[0.025] p-4">
                      <h4 id="explorer-risks-title" className="text-[10px] font-black uppercase tracking-widest text-brand-cyan/75">Risks and safeguards</h4>
                      <ul className="mt-3 grid gap-2">
                        {selectedJourney.risksSafeguards.map((item) => (
                          <li key={item} className="text-xs leading-relaxed text-white/70">{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-white/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/45">Suggested delivery stages</h4>
                      <ol className="mt-2 flex flex-wrap gap-2">
                        {selectedJourney.deliveryStages.map((stage, index) => (
                          <li key={stage} className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-black/20 px-2.5 py-1.5 text-[11px] text-white/75">
                            <span aria-hidden="true" className="font-mono text-[10px] text-brand-cyan">0{index + 1}</span>
                            {stage}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <nav aria-label="Related engineering pages" className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                      {selectedJourney.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-brand-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan hover:!transform-none motion-reduce:transition-none"
                        >
                          {link.label}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      ))}
                    </nav>
                  </div>
                  {selectedJourney.id === "workflow-automation" && (
                    <p className="mt-3 text-[11px] leading-relaxed text-muted/55">
                      The linked NivoraHQ simulator uses sample rules and preset replies in the browser; it is not a production AI workflow.
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-cyan/80">A clear working sequence</p>
                      <h3 className="mt-1 text-base font-bold text-white sm:text-lg">An adaptable engineering approach</h3>
                      <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted/75">
                        The right design depends on the problem, constraints, and desired outcome. Understand the work first, then validate the simplest suitable architecture.
                      </p>
                    </div>
                    <span className="rounded-full border border-white/8 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/40">Illustrative</span>
                  </div>
                  <div className="mt-4">
                    <EngineeringFlow
                      label="Engineering overview: Problem Discovery, Architecture, Validation, Delivery"
                      nodes={["Problem Discovery", "Architecture", "Validation", "Delivery"]}
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/8 pt-4">
                    <Link href="/services" className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-brand-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan hover:!transform-none motion-reduce:transition-none">
                      Explore services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <Link href="/case-studies" className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-brand-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan hover:!transform-none motion-reduce:transition-none">
                      Browse case studies <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
