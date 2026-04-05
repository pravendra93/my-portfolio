"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Strategy & Architecture",
    description: "Technical roadmap and API design finalized in 72 hours.",
    icon: Search,
  },
  {
    title: "Elite UX Engineering",
    description: "Premium UI built with Next.js and high-fidelity motion.",
    icon: PenTool,
  },
  {
    title: "Core AI Logic",
    description: "Custom RAG layers and secure distributed inference.",
    icon: Code2,
  },
  {
    title: "Production Ship",
    description: "Stress testing and global deployment. Your product is live.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          The 30-Day <span className="text-gradient">Sprint</span>
        </h2>
        <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
          We don't do year-long roadmaps. We build flagship products in high-velocity cycles.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block -translate-y-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
