"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function PlannerNextStep() {
  return (
    <section className="py-12 px-6 lg:px-12 max-w-5xl mx-auto relative z-10 w-full mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-dark border border-brand-cyan/20 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-brand-cyan/5 to-transparent relative overflow-hidden group hover:border-brand-cyan/40 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="space-y-6 relative z-10 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest">
              Level 2: Strategic Alignment
           </div>
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter leading-tight max-w-xl">
             Your Roadmap is Ready. <br />
             <span className="text-gradient">Now let's execute.</span>
           </h2>
           <p className="text-muted text-lg max-w-lg leading-relaxed">
             We don't just provide PDFs. We provide the engineering muscle to bring your AI vision to production in under 30 days.
           </p>
        </div>

        <div className="flex flex-col items-center gap-6 relative z-10">
           <button 
             onClick={openCalendly}
             className="px-12 py-6 rounded-2xl bg-white text-[#0A0A0A] font-black text-xl hover:bg-brand-cyan hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-500 flex items-center gap-3 group/btn shadow-2xl"
           >
             Book Free AI Audit <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
           </button>
           <div className="flex items-center gap-4 text-white/30 text-[10px] uppercase font-black tracking-widest">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> 2 Slots Left for Q2</span>
              <span className="w-[1px] h-3 bg-white/10" />
              <span>No-fluff call</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
