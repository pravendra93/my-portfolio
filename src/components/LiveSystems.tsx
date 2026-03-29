"use client";

import { motion } from "framer-motion";
import { MessageSquare, Database, Zap, ArrowRight, PlayCircle } from "lucide-react";

const systems = [
  {
    title: "AI Support System",
    description: "24/7 sub-200ms latency customer success agent with human-like nuance.",
    icon: MessageSquare,
    color: "from-brand-purple/20 to-transparent",
    accent: "text-brand-purple"
  },
  {
    title: "RAG Knowledge Bot",
    description: "Semantic search engine over 50,000+ pages of technical documentation.",
    icon: Database,
    color: "from-brand-cyan/20 to-transparent",
    accent: "text-brand-cyan"
  },
  {
    title: "Workflow Automation Tool",
    description: "Automating 80% of repetitive enterprise logic with LLM-orchestrated flows.",
    icon: Zap,
    color: "from-blue-500/20 to-transparent",
    accent: "text-blue-500"
  }
];

export function LiveSystems() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
             <PlayCircle className="w-3 h-3 text-brand-cyan" /> Production Ready
           </div>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
             Live <span className="text-gradient">Systems</span>
           </h2>
        </div>
        <p className="text-muted text-lg max-w-md font-medium text-right hidden md:block">
           Real-world deployments currently processing data for our engineering partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {systems.map((system, i) => (
          <motion.div
            key={system.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-300 overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${system.color} blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000`} />
            
            <div className="relative z-10 space-y-6">
               <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${system.accent} group-hover:scale-110 transition-transform duration-500`}>
                  <system.icon className="w-7 h-7" />
               </div>
               
               <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white">{system.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-medium">
                    {system.description}
                  </p>
               </div>

               <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors pt-4 border-t border-white/5 w-full">
                  View Live Demo <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
