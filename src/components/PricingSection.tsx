"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { pricingConfig } from "@/content/pricing";

export function PricingSection() {
  if (!pricingConfig.published) return null;

  const publishedTiers = pricingConfig.tiers.filter((tier) => tier.published);
  if (publishedTiers.length === 0) return null;

  return (
    <section id="pricing" className="scroll-mt-28 py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[11px] font-black uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Predictable Engagements
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          {pricingConfig.introHeading}
        </h2>
        <p className="text-base sm:text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
          {pricingConfig.introDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {publishedTiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all relative ${
              tier.highlight
                ? "bg-white/[0.04] border-2 border-brand-purple/50 shadow-[0_15px_40px_rgba(139,92,246,0.15)]"
                : "bg-white/[0.02] border border-white/5 hover:border-white/15"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                Most Popular for B2B Teams
              </div>
            )}

            <div>
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-muted/80 block mb-2">{tier.name}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">{tier.price}</span>
                  <span className="text-xs text-muted/70">{tier.billingBasis}</span>
                </div>
                <p className="text-xs text-brand-cyan font-bold mt-2">Delivery: {tier.timeline}</p>
                <p className="text-xs text-muted/80 leading-relaxed mt-3">{tier.tagline}</p>
              </div>

              <div className="pt-6 border-t border-white/5 mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3">Key Deliverables:</span>
                <ul className="space-y-3">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="text-xs text-white/80 flex items-start gap-2.5 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <button
                onClick={openCalendly}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  tier.highlight
                    ? "bg-white text-black hover:bg-white/90 shadow-lg"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <span>Book Sprint Discovery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-muted/60 max-w-2xl mx-auto">
        <p>{pricingConfig.disclaimer}</p>
      </div>
    </section>
  );
}
