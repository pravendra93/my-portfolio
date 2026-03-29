"use client";

import { motion } from "framer-motion";

export function UrgencyStrip() {
  return (
    <div className="w-full bg-brand-cyan/10 border-b border-brand-cyan/20 py-2.5 px-6 relative z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan">Limited Portfolio Capacity</span>
        </motion.div>
        <p className="text-[11px] font-black text-white/70 uppercase tracking-widest hidden sm:block">
           Only <span className="text-white underline decoration-brand-cyan/50 decoration-2 underline-offset-4">2 slots remaining</span> for Q2 development cycle.
        </p>
        <span className="text-[10px] font-black text-brand-cyan/50 uppercase tracking-[0.3em] overflow-hidden whitespace-nowrap">
           — Est. Ship Date: May 2026 — 
        </span>
      </div>
    </div>
  );
}
