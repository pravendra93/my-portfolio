"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, ArrowRight, Target, Zap, Bot, Users } from "lucide-react";
import { useFounderMode } from "./FounderContext";

const products = [
  {
    id: "documind",
    title: "DocuMind RAG",
    description: "Multi-agent RAG system parsing 1M+ documents with sub-200ms latency.",
    founderDescription: "10x Research Velocity. Stop reading. Query your global document moat.",
    status: "LIVE",
    users: 24,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    id: "support-ai",
    title: "Support OS",
    description: "Autonomous support agents handling 90% of tickets without human intervention.",
    founderDescription: "Slash Support Costs by 70% with Autonomous Multi-Agent Workflows.",
    status: "BETA",
    users: 12,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/20",
  },
  {
    id: "workflow-engine",
    title: "LogicForge",
    description: "Low-latency workflow engine for mission-critical business automation.",
    founderDescription: "Eliminate Human Bottlenecks. High-Frequency Executive Automations.",
    status: "ALPHA",
    users: 8,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
];

export function AILab() {
  const { isFounderMode } = useFounderMode();
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.status.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="lab" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${
            isFounderMode ? "bg-brand-purple/10 border-brand-purple/20 text-brand-purple" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
          }`}>
             {isFounderMode ? "High-Leverage Tooling" : "SaaS Forge"}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
             AI Innovation <span className="text-gradient">Lab.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl font-medium">
             {isFounderMode 
               ? "Battle-tested systems we use to automate revenue engines."
               : "Real-world AI products we've built and deployed for early-stage teams."
             }
          </p>
        </div>

        <div className="flex bg-white/5 border border-white/10 p-1 rounded-2xl">
          {["all", "live", "beta"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? "bg-white text-black" : "text-white/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="group relative flex flex-col p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-300 overflow-hidden"
          >
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-10 relative z-10">
               <div className={`px-3 py-1 rounded-full ${product.bg} ${product.border} ${product.color} text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5`}>
                  {product.status === "LIVE" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />}
                  {product.status}
               </div>
               <div className="flex -space-x-2">
                 {[1,2,3].map(u => (
                   <div key={u} className="w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-white/10 flex items-center justify-center text-[8px] font-black overflow-hidden">
                      <Users className="w-3 h-3 text-white/40" />
                   </div>
                 ))}
                 <div className="w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-white/5 flex items-center justify-center text-[8px] font-black text-white/40">
                    +{product.users}
                 </div>
               </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-cyan transition-colors">
                {product.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                {isFounderMode ? product.founderDescription : product.description}
              </p>

              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2">
                Join Early Access <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Gradient Backglow */}
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-full ${product.bg}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
