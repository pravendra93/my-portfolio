"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Globe } from "lucide-react";

const stats = [
  {
    label: "Net Savings Delivered",
    value: "We've saved founders $14.2M",
    context: "Client Victory",
    description: "Verified direct financial recovery through technical optimization.",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    label: "Delivery Speed",
    value: "28 Day Average Ship",
    context: "Velocity Bench",
    description: "From strategy to production-ready deployments at scale.",
    icon: Target,
    color: "text-brand-purple",
  },
  {
    label: "Scale Reliability",
    value: "30+ Systems Optimized",
    context: "Hard Experience",
    description: "Battle-tested products processing millions of real-time tokens.",
    icon: Globe,
    color: "text-brand-cyan",
  },
  {
    label: "Client Loyalty",
    value: "97% Repeat Partnership",
    context: "Technical Trust",
    description: "Founders scaling multiple generations of AI with our engineers.",
    icon: Users,
    color: "text-blue-500",
  },
];

export function SuccessStats() {
  return (
    <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12 border-t border-b border-white/5 bg-white/[0.01]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-brand-cyan mb-1">
                 {stat.context}
              </div>
              <h3 className="text-2xl font-black text-white tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                {stat.value}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan/60">{stat.label}</p>
            </div>
            <p className="text-[11px] text-muted leading-relaxed font-medium max-w-[160px]">
               {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
