"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, Play } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-8 z-20"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] text-balance">
          {isFounderMode 
            ? <>Engineering <span className="text-gradient">Leverage</span> for Visionary Founders.</>
            : <>We Build <span className="text-gradient">AI Systems</span> That Scale Revenue.</>
          }
        </h1>
        
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
          {isFounderMode 
            ? "Deep engineering for founders who need to ship their flagship roadmap in weeks, not months."
            : "From concept to production-ready AI systems in 30 days. No fluff, just technical excellence."
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto">
          <motion.a
            href="https://stage.assistra.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:bg-white/90 transition-all"
          >
            Try Demo
          </motion.a>
          
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="flex items-center gap-8 mt-12 opacity-40">
          <div className="flex flex-col items-center sm:items-start group">
            <span className="text-2xl font-bold text-white">30+</span>
            <span className="text-[10px] uppercase tracking-widest font-black">Shipped</span>
          </div>
          <div className="w-[1px] h-8 bg-white/20" />
          <div className="flex flex-col items-center sm:items-start group">
            <span className="text-2xl font-bold text-white">30d</span>
            <span className="text-[10px] uppercase tracking-widest font-black">Cycle</span>
          </div>
          <div className="w-[1px] h-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold">2 Slots Remaining</span>
          </div>
        </div>
      </motion.div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-purple/10 blur-[150px] -z-10 rounded-full" />
    </section>
  );
}
