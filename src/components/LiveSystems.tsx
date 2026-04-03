"use client";

import { motion } from "framer-motion";
import { MessageSquare, Database, Zap, ArrowRight, PlayCircle, BarChart3 } from "lucide-react";

const systems = [
  {
    title: "AI Response Engine",
    description: "24/7 sub-200ms latency customer success agent processing 10,000+ monthly queries.",
    icon: MessageSquare,
    color: "from-amber-400/20 to-transparent",
    accent: "text-amber-400",
    border: "border-amber-400/20"
  },
  {
    title: "Enterprise RAG Bot",
    description: "Deep semantic search engine over entire internal documentation libraries.",
    icon: Database,
    color: "from-red-500/20 to-transparent",
    accent: "text-red-500",
    border: "border-red-500/20"
  },
  {
    title: "Workflow Autopilot",
    description: "Multi-agent systems orchestrating complex cross-platform business operations.",
    icon: Zap,
    color: "from-amber-400/20 to-transparent",
    accent: "text-amber-400",
    border: "border-amber-400/20"
  }
];

export function LiveSystems() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">
             <PlayCircle className="w-3 h-3" /> Production Status: Active
           </div>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
             Battle-Tested <br/><span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">AI Systems</span>
           </h2>
        </div>
        <p className="text-neutral-400 text-lg max-w-md font-medium text-right hidden md:block">
           Real-world deployments currently automating operations for our high-growth partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                    {system.description}
                  </p>
               </div>

               <div className="pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-amber-400 transition-colors w-full">
                     View System Case Study <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
