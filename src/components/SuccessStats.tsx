"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Cpu, BarChart3, Target, ShieldCheck } from "lucide-react";

const impactStats = [
  {
    label: "Efficiency Multiplier",
    value: "100+ Hours Saved",
    context: "Monthly / User",
    description: "Average time recovery per team member through custom AI workflows.",
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-400/5",
    border: "border-amber-400/20"
  },
  {
    label: "Automation Depth",
    value: "70% Ops Automated",
    context: "Daily Workflows",
    description: "Core repetitive business logic offloaded to autonomous AI agents.",
    icon: Zap,
    color: "text-red-500",
    bg: "bg-red-500/5",
    border: "border-red-500/20"
  },
  {
    label: "Shipping Velocity",
    value: "Sub-40 Day Launch",
    context: "Strategy to Prod",
    description: "Rapid production cycles ensuring your AI roadmap is live, not theoretical.",
    icon: Target,
    color: "text-amber-400",
    bg: "bg-amber-400/5",
    border: "border-amber-400/20"
  },
  {
    label: "System Resilience",
    value: "Zero-Debt Ops",
    context: "Scale Architecture",
    description: "Production-ready systems built to handle 10x growth from day one.",
    icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-500/5",
    border: "border-red-500/20"
  },
];

export function SuccessStats() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="text-center mb-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold tracking-widest uppercase"
        >
          <BarChart3 className="w-4 h-4" /> Hard Impact
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
          Quantifiable <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">Business Outcomes</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
          We strip away the hype and focus on the metrics that drive actual growth: ROI, efficiency, and engineering velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impactStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`flex flex-col p-8 rounded-[2.5rem] border ${stat.border} ${stat.bg} backdrop-blur-xl group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 ${stat.border} ${stat.color} group-hover:scale-110`}>
              <stat.icon className="w-6 h-6" />
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-neutral-500 mb-1">
                 {stat.context}
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                {stat.value}
              </h3>
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${stat.color}`}>{stat.label}</p>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed font-medium">
               {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
