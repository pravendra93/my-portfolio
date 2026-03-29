"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function LiveActivity() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const notifications = [
    { text: "Just Shipped: Fintech MVP in 14 days", icon: Zap, color: "text-brand-purple" },
    { text: "New Slot: Accepting Q3 2024 inquiries", icon: Sparkles, color: "text-brand-cyan" },
    { text: "Verified: $2.4M ROI for Client X", icon: CheckCircle2, color: "text-green-500" },
    { text: "Active: Infrastructure Audit for 500k users", icon: Zap, color: "text-brand-purple" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const note = notifications[currentNotification];

  return (
    <div className="fixed bottom-10 left-10 z-[100] pointer-events-none hidden lg:block">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="flex items-center gap-4 p-5 rounded-[2.5rem] bg-[#050505]/90 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden glass shadow-brand-cyan/10"
          >
             <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 ${note.color}`}>
                <note.icon className="w-6 h-6" />
             </div>
             
             <div className="flex flex-col gap-1 pr-6">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Live Execution Flow</span>
                <span className="text-sm font-bold text-white tracking-tight">{note.text}</span>
             </div>
             
             <motion.div 
               animate={{ x: ["-100%", "200%"] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-brand-cyan shadow-[0_0_15px_rgba(6,182,212,1)]" 
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
