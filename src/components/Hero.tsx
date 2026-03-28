"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 max-w-2xl relative z-40"
        >
          {/* Scarcity Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold tracking-[0.2em] uppercase w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Limited Q2 Capacity: 2 Slots Remaining
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95] text-white">
              Engineering the <span className="text-gradient">AI-Native</span> Future
            </h1>
            <p className="text-xl sm:text-2xl text-muted text-balance max-w-xl leading-relaxed font-medium">
              We translate complex AI research into battle-hardened products. Zero fluff, pure engineering depth. Ship your MVP in weeks, not months.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button 
              onClick={openCalendly} 
              className="relative group px-10 py-5 rounded-2xl text-lg font-bold text-black transition-all overflow-hidden bg-white hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] flex items-center justify-center border-none"
            >
               <span className="relative z-10 flex items-center gap-3">
                 Schedule Technical Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            <a href="#projects" className="px-10 py-5 rounded-2xl text-lg flex items-center justify-center font-bold text-white glass glass-hover transition-all border border-white/10">
              View Case Studies
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-10 flex flex-col gap-5">
             <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-cyan/30" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 italic">Battle-Tested Engineering Depth</p>
             </div>
             <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-white/80 tracking-tight">
                  Our founders bring experience from <span className="text-white">Unicorn scaling teams</span> & global product leaders.
                </p>
                <div className="flex gap-4 opacity-50 text-[10px] font-black uppercase tracking-widest text-brand-purple">
                   <span>FinTech</span>
                   <span className="text-white/20">•</span>
                   <span>HealthTech</span>
                   <span className="text-white/20">•</span>
                   <span>DevTools</span>
                   <span className="text-white/20">•</span>
                   <span>E-Commerce</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Floating Abstract UI/Dashboard */}
        <div className="relative h-[400px] lg:h-[650px] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center perspective-[1200px]"
          >
            {/* Main Floating Card */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotateX: [8, -4, 8], rotateY: [-8, 4, -8] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[550px] h-[380px] rounded-3xl bg-[#080808]/90 backdrop-blur-3xl border border-white/[0.1] shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-8 flex flex-col gap-4 overflow-hidden z-20 group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 pointer-events-none" />

              <div className="w-full flex justify-between items-center mb-6 border-b border-white/5 pb-6 relative z-10">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                 </div>
                 <div className="flex items-center gap-3">
                   <span className="text-[10px] text-brand-cyan font-mono tracking-[0.2em] px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 font-bold uppercase">Production Node</span>
                   <Terminal className="text-white/40 w-4 h-4" />
                 </div>
              </div>

              <div className="space-y-6 flex-1 relative z-10 flex flex-col">
                <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl bg-brand-purple/20 border border-brand-purple/40 animate-pulse" />
                   <div className="flex-1 space-y-3 pt-2">
                      <div className="w-3/4 h-3 rounded-full bg-white/10" />
                      <div className="w-1/2 h-2 rounded-full bg-white/5" />
                   </div>
                </div>
                
                {/* Visual Data/Analytics */}
                <div className="w-full h-full rounded-2xl bg-[#050505] p-5 flex flex-col gap-3 relative overflow-hidden border border-white/[0.05]">
                   <div className="flex justify-between items-end gap-2 h-24">
                      {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }} 
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                          className="flex-1 bg-gradient-to-t from-brand-purple/40 to-brand-cyan/40 rounded-t-sm" 
                        />
                      ))}
                   </div>
                   <div className="w-full h-1/3 mt-auto rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 flex items-center justify-center text-brand-cyan uppercase tracking-[0.3em] text-[10px] font-black shadow-[inset_0_0_30px_rgba(6,182,212,0.2)]">
                     Syncing Neural Weights...
                   </div>
                </div>
              </div>
            </motion.div>

             {/* Background Floating Elements upgraded */}
            <motion.div
              animate={{ y: [15, -45, 15], x: [0, 30, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 w-72 h-72 rounded-[40px] bg-[#0A0A0A]/40 backdrop-blur-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] z-10 hidden lg:block overflow-hidden"
            >
               <div className="p-8">
                  <div className="text-[10px] font-black text-brand-purple tracking-widest uppercase mb-4">Inference Speed</div>
                  <div className="text-4xl font-bold text-white tracking-tighter">142<span className="text-muted text-xl ml-1">ms</span></div>
                  <div className="mt-8 space-y-2 opacity-30">
                     <div className="w-full h-1 bg-white/20 rounded-full" />
                     <div className="w-2/3 h-1 bg-white/20 rounded-full" />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
