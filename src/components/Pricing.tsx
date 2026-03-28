"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

const plans = [
  {
    name: "AI Strategy Audit",
    price: "$2,500",
    description: "Deep-dive technical assessment of your AI roadmap. 2-day session with a senior architect.",
    features: [
      "Technical feasibility analysis",
      "Model vs API evaluation",
      "Token cost forecasting",
      "MVP scoping document",
      "Immediate Q&A with Senior CTO"
    ],
    highlight: false,
    cta: "Book Audit"
  },
  {
    name: "Production Engine",
    price: "$15k - $25k",
    description: "Our core offering. We build and ship your flagship AI product in sub-40 days. 1 slot remaining for Q2.",
    features: [
      "Full custom UI/UX design",
      "Proprietary RAG architecture",
      "Sub-100ms inference targets",
      "Production-ready deployment",
      "Dedicated 24/7 Slack channel"
    ],
    highlight: true,
    cta: "Secure Slot"
  },
  {
    name: "Venture Partner",
    price: "Custom",
    description: "Long-term engineering partnership. Continuous R&D and scale-out for enterprise AI systems.",
    features: [
      "Fractional CTO advisory",
      "Custom Fine-tuning training",
      "Post-deployment R&D cycles",
      "Infinite scaling infrastructure",
      "Direct phone access to Founders"
    ],
    highlight: false,
    cta: "Discuss Venture"
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-purple to-brand-cyan opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Investment <span className="text-gradient">Tiers</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl mx-auto font-medium"
        >
          Transparent, value-based pricing designed for growth-stage founders who prioritize velocity over cost-saving.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative rounded-[40px] p-10 transition-all duration-300 ${
              plan.highlight 
              ? "bg-[#0A0A0A]/80 border-2 border-brand-cyan/40 shadow-[0_0_80px_rgba(6,182,212,0.1)] scale-100 md:scale-110 z-20 hover:border-brand-cyan transition-all" 
              : "bg-white/[0.02] border border-white/5 hover:border-white/10 z-10"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <div className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.5)] uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> Most Requested
                </div>
              </div>
            )}
            
            <div className="space-y-8 flex flex-col h-full">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline text-4xl font-black tracking-tighter text-white mb-2">
                  <span className={plan.highlight ? "text-gradient" : ""}>{plan.price}</span>
                </div>
                <p className="text-sm text-muted font-medium italic">
                  "{plan.description}"
                </p>
              </div>

              <div className="w-full h-px bg-white/5 my-2" />

              <ul className="space-y-5 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex gap-4 text-sm text-white/70 font-medium items-start leading-snug">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-brand-cyan" : "text-white/30"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 mt-auto">
                <button 
                  onClick={openCalendly}
                  className={`block text-center flex items-center justify-center w-full py-5 rounded-2xl font-bold transition-all duration-500 ${
                    plan.highlight
                    ? "bg-white text-black hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
