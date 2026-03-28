"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { useFounderMode } from "./FounderContext";

export function WhyUs() {
  const { isFounderMode } = useFounderMode();
const features = [
  {
    title: "Engineering Leverage",
    description: "We don't build features. We build lever. Our systems are designed for sub-ms latency and high-frequency token processing.",
    icon: Cpu,
    accent: "text-brand-purple",
  },
  {
    title: "Capital Efficiency",
    description: "Startups burn through cash. We ship production-ready flagships in sub-30 days to maximize your fundraising window.",
    icon: Zap,
    accent: "text-brand-cyan",
  },
  {
    title: "Zero-Debt Ops",
    description: "Infrastructure built to scale from 1 to 100k+ concurrent users without rewrite. Scale is integrated, not added.",
    icon: ShieldCheck,
    accent: "text-blue-500",
  },
  {
    title: "Direct Equity Focus",
    description: "Working directly with founders as fractional CTOs to translate business vision into engineering reality.",
    icon: Code2,
    accent: "text-indigo-400",
  },
];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            {isFounderMode ? "The Result" : "The Advantage"}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {isFounderMode ? "Engineering results. No fluff." : "Why visionary founders choose us."}
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            {isFounderMode 
              ? "We don't build features. We build infrastructure that prints profit. If it doesn't scale on Day 1, we don't code it."
              : "Generic development agencies build code. We build companies. We understand the high-stakes engineering requirements of the AI era."
            }
          </p>
          
          <div className="pt-8 border-t border-white/5 space-y-4">
             <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Exclusive Q2 Availability</span>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Y-Combinator Alumni Experience</span>
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass glass-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none -z-10 group-hover:bg-brand-purple/5 transition-all duration-700" />
              <f.icon className={`w-10 h-10 mb-6 ${f.accent}`} />
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
