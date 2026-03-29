"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { openCalendly } from "./CalendlyProvider";
import { useFounderMode } from "./FounderContext";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const { isFounderMode } = useFounderMode();
  const words = ["SaaS Products", "AI Tools", "Automations", "Internal Tools", "MVPs"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10 max-w-2xl relative z-40"
        >
          {/* Scarcity Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black tracking-[0.2em] uppercase w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            {isFounderMode ? "High-Speed Execution Only" : "Accepting 2 New Projects for Q2"}
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.85] text-balance">
               {isFounderMode 
                 ? <><span className="text-gradient">Scale Your</span> <br /> Engineering Moat.</>
                 : <>We Build <span className="text-gradient">AI Products</span> <br /> That Generate Revenue.</>
               }
            </h1>
            <p className="text-xl sm:text-2xl text-muted text-balance max-w-xl leading-relaxed font-bold">
               {isFounderMode 
                 ? "Zero fluff. Deep engineering leverage. We ship your flagship roadmap in 4 weeks."
                 : "From idea to production in 30 days. No fluff. Just results."
               }
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl">
              <button 
                onClick={() => document.getElementById("planner")?.scrollIntoView({ behavior: "smooth" })} 
                className="relative group px-12 py-6 rounded-2xl text-xl font-black text-black transition-all overflow-hidden bg-white hover:bg-white/90 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center justify-center border-none flex-1"
              >
                 <span className="relative z-10 flex items-center gap-3">
                   {isFounderMode ? "Secure Q2 Dev Slot" : "Start Your AI Project"} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </span>
              </button>
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-12 py-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-black text-xl hover:bg-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl flex items-center justify-center gap-3 group flex-1"
              >
                {isFounderMode ? "ROI Verification" : "View Case Studies"}
              </button>
            </div>
            <div className="flex items-center gap-3 text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest pl-2">
               <span className="flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${isFounderMode ? "bg-brand-purple animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.5)]" : "bg-brand-cyan"}`} />
                 {isFounderMode ? "High-Leverage Engineering Only" : "Built using OpenAI, Next.js, Pinecone, Supabase"}
               </span>
            </div>
          </div>

          <div className="flex items-center gap-12 pt-6">
             <div className="flex flex-col gap-2">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-white font-black text-4xl tracking-tighter"
                >
                  30+
                </motion.span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Products Shipped</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col gap-2">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white font-black text-4xl tracking-tighter"
                >
                  87%
                </motion.span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Target Hit Rate</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10 invisible sm:visible" />
             <div className="hidden sm:flex flex-col gap-2">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white font-black text-4xl tracking-tighter"
                >
                  Fast
                </motion.span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Delivery Cycle</span>
             </div>
          </div>

          <div className="mt-12 flex flex-col gap-5">
             <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-brand-cyan/40" />
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Enterprise Tech Stack</p>
             </div>
             <div className="flex flex-wrap gap-10 items-center grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                <span className="text-xl font-black text-white tracking-widest">OPENAI</span>
                <span className="text-xl font-black text-white tracking-widest">Next.js</span>
                <span className="text-xl font-black text-white tracking-widest">PINECONE</span>
                <span className="text-xl font-black text-white tracking-widest">SUPABASE</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Virtual Production Dashboard */}
        <div className="relative h-[400px] lg:h-[700px] w-full flex items-center justify-center overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center perspective-[2000px]"
          >
            {/* Main Interactive Matrix Card */}
            <motion.div
              animate={{ 
                y: [-25, 25, -25], 
                rotateX: [12, -8, 12], 
                rotateY: [-12, 12, -12] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[600px] h-[400px] rounded-[3rem] bg-[#080808]/90 backdrop-blur-3xl border border-white/[0.1] shadow-[0_50px_120px_rgba(0,0,0,0.9)] p-10 flex flex-col gap-6 overflow-hidden z-20 group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 pointer-events-none" />

              <div className="w-full flex justify-between items-center mb-4 border-b border-white/5 pb-8 relative z-10">
                 <div className="flex gap-3">
                   <div className="w-4 h-4 rounded-full bg-red-500/60 blur-[1px] shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                   <div className="w-4 h-4 rounded-full bg-yellow-500/60 blur-[1px] shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
                   <div className="w-4 h-4 rounded-full bg-green-500/60 blur-[1px] shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                 </div>
                 <div className="flex items-center gap-4">
                   <span className="text-[11px] text-brand-cyan font-black tracking-[0.3em] px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 uppercase">System Active</span>
                   <Sparkles className="text-brand-purple w-5 h-5 animate-pulse" />
                 </div>
              </div>

              <div className="space-y-8 flex-1 relative z-10 flex flex-col">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-cyan/30 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                      <Terminal className="w-10 h-10 text-white" />
                   </div>
                   <div className="flex-1 space-y-3">
                      <div className="w-full h-4 rounded-full bg-white/10 relative overflow-hidden">
                         <motion.div 
                           animate={{ x: ["-100%", "100%"] }} 
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" 
                         />
                      </div>
                      <div className="w-2/3 h-3 rounded-full bg-white/5" />
                   </div>
                </div>
                
                <div className="w-full h-full rounded-2xl bg-[#050505] p-6 flex flex-col gap-4 shadow-inner border border-white/[0.05]">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Neural Processing</span>
                      <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] animate-pulse">99.8% Eff</span>
                   </div>
                   <div className="flex flex-col gap-2">
                       <div className="w-full h-2 rounded-full bg-white/5" />
                       <div className="w-4/5 h-2 rounded-full bg-white/5" />
                       <div className="w-full h-2 rounded-full bg-brand-purple/20" />
                   </div>
                   <div className="w-full h-1/3 mt-auto rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-center text-brand-cyan uppercase tracking-[0.4em] text-[10px] font-black shadow-[inset_0_0_40px_rgba(6,182,212,0.1)]">
                     Establishing Tunnel...
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Sub-Floating Element 1 */}
            <motion.div
              animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-16 -top-16 w-80 h-80 rounded-[4rem] bg-[#0A0A0A]/60 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] z-10 hidden lg:block overflow-hidden"
            >
               <div className="p-10 flex flex-col h-full">
                  <div className="text-[11px] font-black text-brand-purple tracking-widest uppercase mb-6 flex justify-between items-center">
                    Avg Velocity <span className="w-2 h-2 rounded-full bg-brand-purple animate-ping" />
                  </div>
                  <div className="text-5xl font-black text-white tracking-tighter mb-2">18.4<span className="text-muted text-xl ml-1">days</span></div>
                  <div className="text-[10px] font-bold text-white/40 mb-10 tracking-wide uppercase">Idea to MVP average</div>
                  <div className="mt-auto space-y-3">
                     <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div animate={{width: ["0%", "85%"]}} transition={{duration: 2, repeat: Infinity}} className="absolute inset-y-0 left-0 bg-brand-purple rounded-full" />
                     </div>
                     <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
