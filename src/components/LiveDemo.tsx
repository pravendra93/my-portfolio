"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Cpu, Database, Network } from "lucide-react";

export function LiveDemo() {
  const [status, setStatus] = useState("Idle");
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(["Processing LLM", "Fetching Vector DB", "Optimizing Weights", "Serving API"][Math.floor(Math.random() * 4)]);
      setLatency(Math.floor(Math.random() * 150) + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest">
           Live Infrastructure Preview
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
           Built for <span className="text-gradient">Production.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Terminal Module */}
        <div className="lg:col-span-2 group relative p-1 rounded-[3rem] bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 overflow-hidden">
           <div className="p-10 rounded-[2.9rem] bg-[#050505] h-full space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                 </div>
                 <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">us-east-1 / master-node-ai</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-4">
                <div className="flex gap-4">
                   <span className="text-brand-purple">$</span>
                   <span className="text-white/80">initializing_distributed_inference_v4.sh ...</span>
                </div>
                <div className="flex gap-4">
                   <span className="text-brand-cyan ml-4">●</span>
                   <span className="text-white/50">Loading quantized weights [Llama-3-70B]...</span>
                   <span className="text-brand-cyan ml-auto">DONE</span>
                </div>
                <div className="flex gap-4">
                   <span className="text-brand-cyan ml-4">●</span>
                   <span className="text-white/50">Establishing Pinecone Index Connection...</span>
                   <span className="text-brand-cyan ml-auto">READY</span>
                </div>
                <div className="flex gap-4 pt-4 border-t border-white/5">
                   <span className="text-white/30 tracking-widest uppercase text-[10px]">Active Pipeline: </span>
                   <motion.span 
                    animate={{ opacity: [1, 0.4, 1] }} 
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-brand-cyan font-bold"
                   >
                     {status}
                   </motion.span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[8px] font-black text-white/30 uppercase">Latency</span>
                    <p className="text-xl font-black text-white">{latency}ms</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[8px] font-black text-white/30 uppercase">GPU Util</span>
                    <p className="text-xl font-black text-white">82%</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[8px] font-black text-white/30 uppercase">Tokens/s</span>
                    <p className="text-xl font-black text-white">124</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-[8px] font-black text-white/30 uppercase">Uptime</span>
                    <p className="text-xl font-black text-white">99.9%</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Status Module */}
        <div className="flex flex-col gap-8">
           <div className="flex-1 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center">
                 <Cpu className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Neural Compute</h3>
              <p className="text-muted text-sm leading-relaxed">
                 Auto-scaling inference clusters that optimize for cost and speed in real-time.
              </p>
           </div>
           <div className="flex-1 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center">
                 <Database className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Vector Fabric</h3>
              <p className="text-muted text-sm leading-relaxed">
                 Proprietary RAG orchestration with <span className="text-white">sub-50ms</span> semantic retrieval.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
