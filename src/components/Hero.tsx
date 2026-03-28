"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Your <span className="text-gradient">AI Engineering</span> Partner for Category-Defining Startups
            </h1>
            <p className="text-lg sm:text-xl text-muted text-balance max-w-xl leading-relaxed">
              We design, build, and scale AI-powered products with speed, clarity, and zero chaos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" onClick={openCalendly} className="relative group px-8 py-4 rounded-xl text-lg font-medium text-white transition-all overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-brand-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2">
                Book Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#projects" className="px-8 py-4 rounded-xl text-lg flex items-center justify-center font-medium text-muted hover:text-white glass glass-hover transition-all">
              View Work
            </a>
          </div>
        </motion.div>

        {/* Right Side: Floating Abstract UI/Dashboard */}
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center perspective-[1200px]"
          >
            {/* Main Floating Card */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotateX: [6, 0, 6], rotateY: [-6, 0, -6] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] h-[350px] rounded-2xl bg-[#080808]/80 backdrop-blur-3xl border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col gap-4 overflow-hidden z-20 group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 pointer-events-none" />

              <div className="w-full flex justify-between items-center mb-4 border-b border-white/5 pb-4 relative z-10">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-[10px] text-brand-cyan font-mono tracking-widest px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">SYSTEM.AI</span>
                   <Terminal className="text-white/40 w-4 h-4" />
                 </div>
              </div>

              <div className="space-y-4 flex-1 relative z-10 flex flex-col">
                <div className="w-3/4 h-8 rounded-lg bg-white/5 border border-white/5" />
                <div className="w-1/2 h-4 rounded-md bg-white/5 border border-white/5" />
                
                {/* Code Simulation */}
                <div className="w-full h-full rounded-xl bg-[#050505] mt-4 border border-white/[0.05] p-4 flex flex-col gap-2 relative overflow-hidden font-mono text-[10px] text-muted/60">
                   <div className="w-24 h-2 bg-brand-purple/40 rounded-sm" />
                   <div className="w-48 h-2 bg-white/10 rounded-sm opacity-50" />
                   <div className="w-32 h-2 bg-brand-cyan/40 rounded-sm ml-4" />
                   <div className="w-full h-1/2 mt-auto rounded border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-center text-brand-cyan uppercase tracking-widest font-semibold shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                     Optimal Performance
                   </div>
                </div>
              </div>
            </motion.div>

             {/* Background Floating Element 1 */}
            <motion.div
              animate={{ y: [15, -25, 15], x: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 -top-12 w-56 h-56 rounded-3xl bg-[#0A0A0A]/60 backdrop-blur-2xl border border-brand-purple/20 shadow-[0_20px_50px_rgba(139,92,246,0.15)] z-10 hidden lg:block overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent opacity-50" />
              <div className="w-full h-full p-6 flex flex-col items-end justify-end gap-3 relative z-10">
                <div className="w-full h-1 rounded-full bg-white/5 relative overflow-hidden">
                   <motion.div animate={{x:[-100, 200]}} transition={{duration: 2, repeat: Infinity}} className="absolute inset-y-0 left-0 w-1/2 bg-brand-purple" />
                </div>
                <div className="w-4/5 h-2 rounded-full bg-white/10" />
              </div>
            </motion.div>

            {/* Background Floating Element 2 */}
            <motion.div
              animate={{ y: [-20, 20, -20], x: [0, -15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 -bottom-16 w-64 h-36 rounded-3xl bg-[#0A0A0A]/60 backdrop-blur-2xl border border-brand-cyan/20 shadow-[0_20px_50px_rgba(6,182,212,0.15)] z-30 hidden lg:block overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-cyan/20 via-transparent to-transparent opacity-50" />
              <div className="w-full h-full p-5 flex items-center justify-between gap-4 relative z-10">
                 <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <div className="w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
                 </div>
                 <div className="flex flex-col gap-2 flex-1">
                    <div className="w-2/3 h-2 rounded bg-white/20" />
                    <div className="w-full h-3 rounded bg-white/5" />
                    <div className="w-1/2 h-2 rounded bg-white/10" />
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
