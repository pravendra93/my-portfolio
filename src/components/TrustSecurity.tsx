"use client";

import { ShieldCheck, Lock, Globe2, Check } from "lucide-react";
import { complianceConfig } from "@/content/compliance";

export function TrustSecurity() {
  if (!complianceConfig.published) return null;

  return (
    <section id="trust" className="scroll-mt-28 py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[11px] font-black uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3.5 h-3.5" /> Project-Level Security Planning
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          Security Requirements, <span className="text-gradient">Scoped Up Front</span>
        </h2>
        <p className="text-base sm:text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
          Data handling, model providers, hosting, and review controls depend on the system and its requirements. We define the technical scope with the client; legal obligations and provider capabilities must be confirmed for each project.
        </p>
      </div>

      {/* Main Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {complianceConfig.sections.map((section) => (
          <div
            key={section.title}
            className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan">
                  {section.badge}
                </span>
                <Lock className="w-5 h-5 text-white/30" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
              <p className="text-sm text-muted/80 leading-relaxed mb-6">{section.summary}</p>

              <ul className="space-y-3">
                {section.practices.map((practice) => (
                  <li key={practice} className="text-xs text-white/80 flex items-start gap-2.5 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Deployment requirements */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="w-6 h-6 text-brand-cyan" />
          <div>
            <h3 className="text-xl font-bold text-white">Hosting and regional requirements</h3>
            <p className="text-xs text-muted/80">Target regions are reviewed against the client environment and available cloud-provider services.</p>
          </div>
        </div>
        <div className="pt-4 border-t border-white/5 text-sm text-muted/80 leading-relaxed">
          Before implementation, we confirm the customer’s deployment owner, location constraints, data flows, provider terms, and required controls. No region or regulatory outcome is assumed until these details are agreed.
        </div>
      </div>
    </section>
  );
}
