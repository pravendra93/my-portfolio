"use client";

import { motion } from "framer-motion";
import { Play, Mic, Bot, Sparkles, ArrowRight } from "lucide-react";

const assistra = {
  title: "Assistra",
  tag: "Flagship AI Assistant",
  description: "A production-grade AI platform built to automate team workflows and handle mission-critical business logic.",
  capabilities: [
    { title: "Voice AI", icon: Mic, status: "Beta" },
    { title: "Personal Assistant", icon: Bot, status: "Active" }
  ],
  demoUrl: "https://stage.assistra.app/",
};

const systems = [
  { title: "DocuMind RAG", description: "Query 1M+ documents with sub-200ms latency.", status: "Live" },
  { title: "Support OS", description: "Autonomous agents handling 90% of tickets.", status: "Beta" },
  { title: "LogicForge", description: "Low-latency engine for business automation.", status: "Alpha" },
];

export function Showcase() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10 w-full font-sans">
      <div className="text-center mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4"
        >
           <Sparkles className="w-3 h-3" /> Flagship Development
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Product <span className="text-gradient">Showcase</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured: Assistra */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Bot className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 space-y-8">
            <div>
              <p className="text-xs font-black text-brand-cyan uppercase tracking-[0.3em] mb-2">{assistra.tag}</p>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">{assistra.title}</h3>
            </div>
            
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              {assistra.description}
            </p>

            <div className="flex flex-wrap gap-6 py-8 border-y border-white/5">
              {assistra.capabilities.map(cap => (
                <div key={cap.title} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <cap.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{cap.title}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-cyan/60">{cap.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <motion.a 
                href={assistra.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-all"
              >
                Try Assistra Demo <Play className="w-5 h-5 fill-current" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Secondary: Systems Grid */}
        <div className="flex flex-col gap-6">
          {systems.map((sys, i) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">{sys.title}</h4>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/20 border border-white/10 px-2 py-0.5 rounded-full">{sys.status}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{sys.description}</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                View Build <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
