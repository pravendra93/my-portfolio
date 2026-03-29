"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

const roadmap = [
  {
    week: "Week 1: Architecture & Scope",
    title: "The Strategic Blueprint",
    description: "Technical roadmap, API design, model selection, and sub-ms latency targets. We finalize the build plan exactly 72 hours in.",
    icon: Search,
    color: "text-brand-purple",
    bg: "bg-brand-purple/5",
    border: "border-brand-purple/20",
  },
  {
    week: "Week 2: Front-End & UX",
    title: "The Flagship Experience",
    description: "Elite UI engineering using Next.js and Framer Motion. Your product will feel expensive and highly technical.",
    icon: PenTool,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/5",
    border: "border-brand-cyan/20",
  },
  {
    week: "Week 3: Core AI Logic",
    title: "The Intelligent Engine",
    description: "LLM orchestration, custom RAG layers, and secure distributed inference. We build for scale from day 1.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    border: "border-blue-500/20",
  },
  {
    week: "Week 4: Beta & Ship",
    title: "Production Release",
    description: "Stress testing, sub-100ms inference verification, and global deployment. Your product is live and scaling.",
    icon: Rocket,
    color: "text-green-500",
    bg: "bg-green-500/5",
    border: "border-green-500/20",
  },
];

export function ProjectTimeline() {
  return (
    <section id="timeline" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest">
             The 30-Day Sprint
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
             From Idea to <span className="text-gradient">Production.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
             We don't do year-long roadmaps. We build flagship products in high-velocity 30-day cycles. 
             Here's how we execute:
          </p>
        </div>
        <div className="hidden lg:block">
           <button 
            onClick={openCalendly}
            className="px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all flex items-center gap-2 group"
           >
              Reserve Build Slot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmap.map((item, i) => (
          <motion.div
            key={item.week}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-[3rem] ${item.bg} border ${item.border} flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-opacity-10`}
          >
            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 w-fit ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            
            <div className="space-y-3">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{item.week}</span>
               <h3 className="text-xl font-black text-white">{item.title}</h3>
               <p className="text-sm text-muted leading-relaxed font-medium">
                  {item.description}
               </p>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none -z-10 group-hover:bg-white/10 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
