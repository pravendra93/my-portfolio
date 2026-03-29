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
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 sm:gap-10 max-w-2xl relative z-40"
        >
          {/* Scarcity Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black tracking-[0.2em] uppercase w-fit mx-auto sm:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            {isFounderMode ? "High-Speed Execution Only" : "Accepting 2 New Projects for Q2"}
          </motion.div>

          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[1.1] sm:leading-[0.85] text-balance">
               {isFounderMode 
                 ? <><span className="text-gradient">Scale Your</span> <br className="hidden sm:block" /> Engineering Moat.</>
                 : <>We Build <span className="text-gradient">AI Products</span> <br className="hidden sm:block" /> That Generate Revenue.</>
               }
            </h1>
            <p className="text-lg sm:text-2xl text-muted text-balance max-w-xl mx-auto sm:mx-0 leading-relaxed font-bold">
               {isFounderMode 
                 ? "Zero fluff. Deep engineering leverage. We ship your flagship roadmap in 4 weeks."
                 : "From idea to production in 30 days. No fluff. Just results."
               }
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("planner")?.scrollIntoView({ behavior: "smooth" })} 
                className="relative group px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-black text-black transition-all overflow-hidden bg-white hover:bg-white/90 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center justify-center border-none w-full sm:flex-1"
              >
                 <span className="relative z-10 flex items-center gap-3">
                   {isFounderMode ? "Secure Q2 Dev Slot" : "Start Your AI Project"} <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                 </span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 sm:px-12 py-5 sm:py-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-black text-lg sm:text-xl hover:bg-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl flex items-center justify-center gap-3 group w-full sm:flex-1"
              >
                {isFounderMode ? "ROI Verification" : "View Case Studies"}
              </motion.button>
            </div>
            
            <div className="flex items-center gap-3 text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest pl-2">
               <span className="flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${isFounderMode ? "bg-brand-purple animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.5)]" : "bg-brand-cyan"}`} />
                 {isFounderMode ? "High-Leverage Engineering Only" : "Built using OpenAI, Next.js, Pinecone, Supabase"}
               </span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-12 pt-4">
             <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-white font-black text-3xl sm:text-4xl tracking-tighter"
                >
                  30+
                </motion.span>
                <span className="text-[9px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Products Shipped</span>
             </div>
             <div className="w-[1px] h-10 sm:h-12 bg-white/10" />
             <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white font-black text-3xl sm:text-4xl tracking-tighter"
                >
                  87%
                </motion.span>
                <span className="text-[9px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Target Hit Rate</span>
             </div>
             <div className="w-[1px] h-10 sm:h-12 bg-white/10 hidden sm:block" />
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

          <div className="mt-8 flex flex-col gap-5">
             <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-6 h-[1px] bg-brand-cyan/40" />
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Enterprise Tech Stack</p>
             </div>
             <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center sm:justify-start grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                <span className="text-base sm:text-xl font-black text-white tracking-widest">OPENAI</span>
                <span className="text-base sm:text-xl font-black text-white tracking-widest">Next.js</span>
                <span className="text-base sm:text-xl font-black text-white tracking-widest">PINECONE</span>
                <span className="text-base sm:text-xl font-black text-white tracking-widest">SUPABASE</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Virtual Production Dashboard */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[700px] w-full flex items-center justify-center lg:overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center perspective-[2000px]"
          >
            {/* Main Interactive Matrix Card */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15], 
                rotateX: [10, -5, 10], 
                rotateY: [-10, 10, -10] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] lg:max-w-[600px] h-[300px] sm:h-[350px] lg:h-[400px] rounded-[2rem] sm:rounded-[3rem] bg-[#080808]/90 backdrop-blur-3xl border border-white/[0.1] shadow-[0_50px_120px_rgba(0,0,0,0.9)] p-6 sm:p-10 flex flex-col gap-4 sm:gap-6 overflow-hidden z-20 group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 pointer-events-none" />

              <div className="w-full flex justify-between items-center mb-2 sm:mb-4 border-b border-white/5 pb-4 sm:pb-8 relative z-10">
                 <div className="flex gap-2 sm:gap-3">
                   <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500/60 blur-[1px]" />
                   <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500/60 blur-[1px]" />
                   <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500/60 blur-[1px]" />
                 </div>
                 <div className="flex items-center gap-2 sm:gap-4">
                   <span className="text-[8px] sm:text-[11px] text-brand-cyan font-black tracking-[0.2em] sm:tracking-[0.3em] px-2 sm:px-4 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 uppercase">System Active</span>
                   <Sparkles className="text-brand-purple w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                 </div>
              </div>

              <div className="space-y-4 sm:space-y-8 flex-1 relative z-10 flex flex-col">
                <div className="flex items-center gap-4 sm:gap-6">
                   <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-cyan/30 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                      <Terminal className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                   </div>
                   <div className="flex-1 space-y-2 sm:space-y-3">
                      <div className="w-full h-3 sm:h-4 rounded-full bg-white/10 relative overflow-hidden">
                         <motion.div 
                           animate={{ x: ["-100%", "100%"] }} 
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" 
                         />
                      </div>
                      <div className="w-2/3 h-2 sm:h-3 rounded-full bg-white/5" />
                   </div>
                </div>
                
                <div className="w-full grow rounded-xl sm:rounded-2xl bg-[#050505] p-3 sm:p-6 flex flex-col gap-2 sm:gap-4 shadow-inner border border-white/[0.05]">
                   <div className="flex items-center justify-between">
                      <span className="text-[8px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Neural Processing</span>
                      <span className="text-[8px] sm:text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] animate-pulse">99.8% Eff</span>
                   </div>
                   <div className="flex flex-col gap-2">
                       <div className="w-full h-1.5 sm:h-2 rounded-full bg-white/5" />
                       <div className="w-4/5 h-1.5 sm:h-2 rounded-full bg-white/5" />
                       <div className="w-full h-1.5 sm:h-2 rounded-full bg-brand-purple/20" />
                   </div>
                   <div className="w-full h-8 sm:h-12 mt-auto rounded-xl sm:rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-center text-brand-cyan uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] font-black shadow-[inset_0_0_40px_rgba(6,182,212,0.1)]">
                     Establishing Tunnel...
                   </div>
                </div>
              </div>
            </motion.div>
            {/* Sub-Floating Element 1 */}
            <motion.div
              animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 sm:-right-16 -top-8 sm:-top-16 w-48 h-48 sm:w-80 sm:h-80 rounded-[2rem] sm:rounded-[4rem] bg-[#0A0A0A]/60 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] z-10 hidden sm:block overflow-hidden"
            >
               <div className="p-6 sm:p-10 flex flex-col h-full">
                  <div className="text-[9px] sm:text-[11px] font-black text-brand-purple tracking-widest uppercase mb-4 sm:mb-6 flex justify-between items-center">
                    Avg Velocity <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-purple animate-ping" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-1 sm:mb-2">18.4<span className="text-muted text-sm sm:text-xl ml-1">days</span></div>
                  <div className="text-[8px] sm:text-[10px] font-bold text-white/40 mb-6 sm:mb-10 tracking-wide uppercase">Idea to MVP average</div>
                  <div className="mt-auto space-y-2 sm:space-y-3">
                     <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div animate={{width: ["0%", "85%"]}} transition={{duration: 2, repeat: Infinity}} className="absolute inset-y-0 left-0 bg-brand-purple rounded-full" />
                     </div>
                     <div className="w-2/3 h-1 sm:h-1.5 bg-white/5 rounded-full" />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
