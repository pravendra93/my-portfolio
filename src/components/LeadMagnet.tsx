"use client";

import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // 1. Capture email for waitlist
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: "AI Blueprint Lead Magnet" }),
      });

      // 2. Trigger automatic download
      const link = document.createElement("a");
      link.href = "/ai-product-blueprint.pdf";
      link.download = "ai-product-blueprint.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 3. UI Success States
      setStatus("success");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error("BluePrint download failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      {/* Premium Toast */}
      {showToast && (
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, scale: 0.9 }}
           className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] px-8 py-4 bg-white text-black rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.4)] font-black text-xs uppercase tracking-widest flex items-center gap-4"
        >
           Blueprint downloaded 🚀
        </motion.div>
      )}

      <div className="group relative rounded-[3rem] bg-gradient-to-br from-brand-purple/20 via-black to-brand-cyan/10 p-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-[#080808] rounded-[2.9rem] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-10" />
           <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-purple/10 blur-[150px] animate-pulse rounded-full" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 lg:p-20 items-center">
           <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand-cyan" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Exclusive Blueprint</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                Architecting for <span className="text-gradient">Millions.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-sm">
                Get our technical blueprint on scaling LLMs, custom inference engines, and production RAG.
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-white text-sm font-bold opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    Used by seed to Series B founders
                 </div>
                 <div className="flex items-center gap-4 text-white text-sm font-bold opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    High-performance engineering depth
                 </div>
              </div>
           </div>

           <div className="relative">
              {status !== "success" ? (
                <motion.form 
                   onSubmit={handleSubmit}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/5 space-y-6 shadow-2xl"
                >
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-widest px-1">Institutional Email</label>
                      <div className="relative group">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-hover:text-brand-cyan transition-colors" />
                         <input 
                           type="email" 
                           placeholder="founder@unicorn.ai" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
                           required
                         />
                      </div>
                   </div>
                   
                   <motion.button 
                     disabled={status === "loading"}
                     whileTap={{ scale: 0.95 }}
                     type="submit"
                     className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all group/btn"
                   >
                     {status === "loading" ? "Preparing File..." : "Get the Blueprint"} 
                     <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                   </motion.button>
                   
                   <p className="text-[9px] text-center text-white/20 font-bold uppercase tracking-widest leading-relaxed">
                     By subcribing you agree to our <br/> High-Performance Data Privacy Policy
                   </p>
                </motion.form>
              ) : (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="p-10 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 text-center space-y-6"
                >
                   <div className="w-16 h-16 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <Sparkles className="w-8 h-8 text-brand-cyan" />
                   </div>
                   <h3 className="text-2xl font-bold text-white tracking-tight text-white">Transmission Sent.</h3>
                   <p className="text-muted text-sm leading-relaxed">
                     The Scaling Blueprint is being routed to your inbox. High-performance growth starts now.
                   </p>
                   <p className="text-white/40 text-[10px] uppercase font-black tracking-widest pt-4">
                      Download should start automatically.
                   </p>
                </motion.div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
}
