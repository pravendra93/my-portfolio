"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function Qualification() {
  const criteria = [
    {
      type: "for",
      title: "We are for you if:",
      items: [
        "You are a growth-stage founder shipping a flagship AI product.",
        "You prioritize engineering velocity over absolute lowest cost.",
        "You need a technical partner, not just a feature factory.",
        "You understand that sub-ms latency is a competitive feature.",
        "You are scaling towards Series A/B and need zero-debt architecture.",
      ],
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-500/5",
      border: "border-green-500/20",
    },
    {
      type: "not-for",
      title: "We are NOT for you if:",
      items: [
        "You are looking for the cheapest offshore dev shop.",
        "You need a simple CRUD app with zero intelligent logic.",
        "You don't care about technical debt or long-term scale.",
        "You want to manage pixel-pushers instead of technical peers.",
        "Your budget for a core product is under $5,000.",
      ],
      icon: XCircle,
      color: "text-red-500",
      bg: "bg-red-500/5",
      border: "border-red-500/20",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest">
           Founders Only
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
           Are we the <span className="text-gradient">right partner?</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto font-medium">
           We work with exactly 4 founders per quarter to ensure elite engineering depth. 
           Self-qualify below to see if your project fits our current cycle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {criteria.map((group, i) => (
          <motion.div
            key={group.type}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[3rem] ${group.bg} border ${group.border} flex flex-col gap-8 transition-all hover:bg-opacity-10`}
          >
            <div className="flex items-center gap-4">
               <group.icon className={`w-8 h-8 ${group.color}`} />
               <h3 className="text-2xl font-black text-white">{group.title}</h3>
            </div>
            
            <ul className="space-y-6 flex-1">
              {group.items.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-sm font-medium leading-relaxed">
                   <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${i === 0 ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"}`} />
                   <span className={i === 0 ? "text-white/80" : "text-white/40"}>{item}</span>
                </li>
              ))}
            </ul>

            {i === 0 && (
              <div className="pt-6 border-t border-white/10 space-y-4">
                 <button 
                  onClick={openCalendly}
                  className="w-full py-4 rounded-2xl bg-white text-[#0A0A0A] font-black flex items-center justify-center gap-2 group hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                 >
                    Book Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <p className="text-[10px] font-black uppercase text-center tracking-widest text-green-500 animate-pulse">
                   Only 2 slots available this month
                 </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
