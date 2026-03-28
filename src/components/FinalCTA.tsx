"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="relative rounded-[4rem] bg-gradient-to-br from-brand-purple/20 via-black to-brand-cyan/20 p-1 bg-white/5 overflow-hidden group">
         <div className="absolute inset-0 bg-[#050505] rounded-[3.9rem]" />
         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
         
         <div className="relative z-10 p-12 lg:p-24 flex flex-col items-center text-center space-y-10">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.4em] uppercase text-white/40"
            >
               <Zap className="w-3 h-3 text-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
               Limited Performance Capacity
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-tight max-w-4xl">
               Ready to ship your next <br />
               <span className="text-gradient">$1M ARR product?</span>
            </h2>

            <div className="flex flex-col items-center gap-8">
               <button 
                  onClick={openCalendly}
                  className="px-14 py-7 rounded-[2.5rem] bg-white text-black font-black text-2xl hover:bg-white/90 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:shadow-[0_0_100px_rgba(255,255,255,0.4)] flex items-center gap-5 group"
               >
                  Secure Your Technical Partner <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
               </button>
               
               <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                  </span>
                  Q2 Availability: <span className="text-white">Accepted 2/4 founders</span>
               </p>
            </div>
         </div>
         
         {/* Animated Background Orbs */}
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-cyan/20 blur-[150px] rounded-full animate-pulse transition-all duration-[5s]" />
      </div>
    </section>
  );
}
