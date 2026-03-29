"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { openCalendly } from "./CalendlyProvider";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 500px of scrolling
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.8, y: 20 }}
           className="fixed bottom-8 right-8 z-[100]"
        >
           <button 
             onClick={openCalendly}
             className="relative group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
           >
              {/* Pulsing Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-20 pointer-events-none" />
              
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Book Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
