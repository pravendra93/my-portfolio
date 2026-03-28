"use client";

import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function FounderNote() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="glass-dark border border-white/5 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-brand-cyan/10 transition-all duration-1000" />
        
        <div className="lg:w-1/3 flex flex-col items-center gap-8 relative z-10">
           <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan p-1 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                 <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center p-2">
                    {/* Placeholder for real founder photo - using themed graphic */}
                    <ShieldCheck className="w-24 h-24 text-brand-cyan opacity-80" />
                 </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded bg-white text-black font-black text-[10px] uppercase tracking-widest shadow-2xl">
                 Engineering lead
              </div>
           </div>
           
           <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-white px-2 italic">"We don't build features. We build lever. Engineering is the only sustainable edge."</h3>
              <p className="text-brand-cyan font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                 <span className="w-8 h-[1px] bg-brand-cyan" /> AKSHAY RAKRI <span className="w-8 h-[1px] bg-brand-cyan" />
              </p>
           </div>
        </div>

        <div className="lg:w-2/3 space-y-8 relative z-10">
           <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-black uppercase tracking-widest">
                 A Word from the Founder
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                 Personal engineering <br /> <span className="text-gradient">accountability.</span>
              </h2>
           </div>
           
           <div className="space-y-6 text-muted text-lg leading-relaxed font-medium">
              <p>
                 I've spent a decade building at scale for companies like <span className="text-white">Apple and Stripe</span>. The biggest mistake founders make today isn't choosing the wrong model—it's building on a foundation of technical debt that collapses the moment they hit product-market fit.
              </p>
              <p>
                 At <span className="text-white">RakriLabs.ai</span>, we don't have project managers. You work directly with senior engineers who understand your business vision and translate it into high-performance architecture. No middle-men. No delays. Just raw technical execution.
              </p>
              <p>
                 If you're ready to ship your flagship AI product in sub-30 days with a partner who actually codes, let's talk.
              </p>
           </div>

           <div className="flex flex-wrap gap-6 pt-8">
              <button 
                onClick={openCalendly}
                className="px-10 py-5 rounded-2xl bg-white text-[#0A0A0A] font-black text-lg flex items-center gap-3 hover:bg-white/90 transition-all group"
              >
                 Book Technical Sync <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-black text-lg flex items-center gap-3 hover:bg-white/5 transition-all">
                 <Mail className="w-5 h-5 text-brand-cyan" /> Direct Email
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
