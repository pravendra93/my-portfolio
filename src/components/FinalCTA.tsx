"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Mail } from "lucide-react";
import { useState } from "react";
import { openCalendly } from "./CalendlyProvider";
import { WaitlistModal } from "./WaitlistModal";
import { useFounderMode } from "./FounderContext";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isFounderMode } = useFounderMode();

  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden w-full group">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/[0.03] to-brand-purple/[0.05] pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
             <Sparkles className="w-3 h-3 text-brand-cyan" /> Final Call for Q2
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
            {isFounderMode 
              ? <>Ready to scale your <br /><span className="text-gradient">engineering moat?</span></>
              : <>Ready to build your <br /><span className="text-gradient">AI product?</span></>
            }
          </h2>
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto italic">
            {isFounderMode 
              ? "Let’s define your roadmap and lock in your execution window."
              : "Let’s define your roadmap and start execution."
            }
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
           <button 
             onClick={openCalendly}
             className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] group"
           >
              <Calendar className="w-6 h-6" /> Book Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </button>
           
           <button 
             onClick={() => setIsModalOpen(true)}
             className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-xl"
           >
              <Mail className="w-6 h-6 text-brand-cyan" /> Join Waitlist
           </button>
        </div>

        <div className="pt-12 flex flex-col items-center gap-4">
           <div className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              Accepting exactly 2 new projects for Q2
           </div>
           <p className="text-[9px] text-white/20 font-medium">© 2024 RakriLabs. All rights reserved.</p>
        </div>
      </motion.div>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="General Waitlist" 
      />
    </section>
  );
}
