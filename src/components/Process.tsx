"use client";

import { Search, PenTool, Code2, Rocket, CheckCircle2, Calendar } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { QuarterBadge } from "./QuarterBadge";

const stages = [
  {
    number: "01",
    title: "Discover the Problem",
    focus: "Business context",
    icon: Search,
    details: [
      "Understand the workflow, users, and current friction",
      "Clarify constraints, systems, and data readiness",
      "Agree the outcome to measure",
    ],
  },
  {
    number: "02",
    title: "Define the Scope",
    focus: "Solution and acceptance",
    icon: PenTool,
    details: [
      "Select the right AI, RAG, or integration approach",
      "Map the architecture and dependencies",
      "Set deliverables, milestones, and acceptance criteria",
    ],
  },
  {
    number: "03",
    title: "Engineer & Integrate",
    focus: "Working software",
    icon: Code2,
    details: [
      "Build the agreed product or workflow",
      "Connect to the client’s existing applications and data",
      "Share progress and decisions at agreed checkpoints",
    ],
  },
  {
    number: "04",
    title: "Validate & Prepare Delivery",
    focus: "Quality and handoff",
    icon: Rocket,
    details: [
      "Test agreed behaviors, edge cases, and integrations",
      "Review results against acceptance criteria",
      "Prepare documentation and deployment handoff",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-[11px] font-black uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5" /> A Clear Working Model
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          From Business Problem <span className="text-gradient">to Working AI</span>
        </h2>
        <p className="text-base sm:text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
          RAG systems, agents, and integrations have different requirements. We agree on scope, milestones, and communication before engineering begins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((step) => (
          <div
            key={step.number}
            className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-brand-cyan px-2.5 py-1 rounded-full bg-brand-cyan/10">
                  Stage {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:scale-105 group-hover:text-brand-purple transition-all">
                  <step.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
              <p className="text-xs font-medium text-white/40 mb-6">{step.focus}</p>

              <ul className="space-y-2.5">
                {step.details.map((item) => (
                  <li key={item} className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-bold text-white/30 uppercase tracking-wider">
              Agreed checkpoints
            </div>
          </div>
        ))}
      </div>

      <QuarterBadge variant="banner" className="mt-8" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center sm:text-left">
        <div>
          <span className="text-sm font-bold text-white block">Indicative timing for a mid-sized AI/RAG project</span>
          <span className="text-xs text-muted/80 leading-relaxed">A mid-sized RAG/AI project may take approximately 30–40 days, depending on scope and complexity. Integrations, data readiness, and validation needs can change the estimate.</span>
        </div>
        <button
          onClick={openCalendly}
          className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shrink-0"
        >
          Discuss Your Project
        </button>
      </div>
    </section>
  );
}
