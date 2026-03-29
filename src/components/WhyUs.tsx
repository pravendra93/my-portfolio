"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Code2 } from "lucide-react";
import { useFounderMode } from "./FounderContext";

const features = [
  {
    title: "Speed as a Moat",
    description: "From strategy to production-grade deployment in 30 days. We ship while your competitors are still debating their tech stack.",
    icon: Zap,
    accent: "text-brand-purple",
  },
  {
    title: "AI-First Architecture",
    description: "We don't 'bolt on' AI. We architect systems with the LLM at the core to ensure sub-200ms latency and high-frequency leverage.",
    icon: Cpu,
    accent: "text-brand-cyan",
  },
  {
    title: "Business-First Outcomes",
    description: "Token counts are vanity metrics. We focus on engineering direct financial ROI and automated operational leverage.",
    icon: Code2,
    accent: "text-blue-500",
  },
];

export function WhyUs() {
  const { isFounderMode } = useFounderMode();

  return (
    <section id="why-us" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase ${
                isFounderMode ? "bg-brand-purple/10 border-brand-purple/20 text-brand-purple" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
              }`}
            >
              {isFounderMode ? "The High-Leverage Playbook" : "The Contrarian Edge"}
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] text-balance">
              {isFounderMode 
                ? <>We Don't Build Features. <span className="text-gradient">We Build Leverage.</span></>
                : <>Visionary Founders Don’t Need More Devs. <span className="text-gradient">They Need Results.</span></>
              }
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed font-medium italic border-l-2 border-white/10 pl-6 max-w-sm">
            {isFounderMode 
              ? "\"Most founders waste 6 months with generic developers. Our partners launch their core moat in 30 days or we don't start.\""
              : "\"Most agencies build features that die in months. We build AI-native infrastructure that scales revenue from Day 1.\""
            }
          </p>
          
          <div className="pt-8 space-y-4">
             <div className="flex items-center gap-4 group">
                <div className={`w-1.5 h-1.5 rounded-full ${isFounderMode ? "bg-brand-purple shadow-[0_0_10px_rgba(139,92,246,0.5)] animate-pulse" : "bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]"}`} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  {isFounderMode ? "Only 1 Engineering Slot Remaining for Q2" : "Technical Blueprint in 60s"}
                </span>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Zero Project Failure Rate</span>
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 relative flex flex-col items-center text-center justify-start space-y-8 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none -z-10 group-hover:bg-brand-purple/5 transition-all duration-700" />
              
              <div className={`p-6 rounded-[2rem] bg-white/5 border border-white/10 ${f.accent} inline-flex mx-auto group-hover:scale-110 transition-transform duration-500`}>
                <f.icon className="w-8 h-8" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-medium italic">
                  "{f.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
