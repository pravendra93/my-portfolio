"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Activity } from "lucide-react";

export function LiveStatus() {
  const [activeCount, setActiveCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCount(prev => (Math.random() > 0.5 ? Math.min(prev + 1, 8) : Math.max(prev - 1, 3)));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[100] hidden md:block">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-dark border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-xl group hover:border-brand-cyan/40 transition-all duration-500"
      >
        <div className="relative">
           <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
              <Users className="w-5 h-5 text-brand-cyan" />
           </div>
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
           </span>
        </div>
        
        <div className="flex flex-col gap-0.5">
           <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Status: High Intensity</p>
           <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">{activeCount} founders</span>
              <span className="text-[10px] text-white/30 font-medium">drafting plans right now</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
