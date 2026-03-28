"use client";

import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Logic for email capture would go here
    }
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
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
                Get our 40-page technical blueprint on scaling LLMs, custom inference engines, and production RAG.
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-white text-sm font-bold opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    Used by seed to Series B founders
                 </div>
                 <div className="flex items-center gap-4 text-white text-sm font-bold opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    40+ pages of raw engineering depth
                 </div>
              </div>
           </div>

           <div className="relative">
              {!subscribed ? (
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
                   
                   <button 
                     type="submit"
                     className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
                   >
                     Get the Blueprint <Download className="w-5 h-5" />
                   </button>
                   
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
                   <h3 className="text-2xl font-bold text-white tracking-tight">Transmission Sent.</h3>
                   <p className="text-muted text-sm leading-relaxed">
                     The Scaling Blueprint is being routed to your inbox. High-performance growth starts now.
                   </p>
                </motion.div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
}
