"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, X, ArrowRight, ShieldCheck } from "lucide-react";

export function PreQualModal({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      q: "Is your investment budget at least $4,500?",
      options: ["Yes", "Not yet"]
    },
    {
      q: "Are you looking to ship within 60 days?",
      options: ["Yes", "No, just exploring"]
    }
  ];

  const handleSelect = (option: string) => {
    if (option === "Not yet" || option === "No, just exploring") {
       alert("We might not be the best fit right now, but feel free to check our Blueprint!");
       onClose();
       return;
    }
    
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      onConfirm();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 lg:p-12">
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             onClick={onClose}
             className="absolute inset-0 bg-black/80 backdrop-blur-md" 
           />
           
           <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.9, y: 20 }}
             className="relative w-full max-w-xl bg-[#0A0A0A] rounded-[3rem] border border-white/10 p-10 lg:p-14 shadow-2xl overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-purple animate-pulse" />
              
              <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors">
                 <X className="w-6 h-6" />
              </button>

              <div className="space-y-10">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Founder Pre-Qualification</span>
                 </div>
                 
                 <div className="space-y-4">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                       {questions[step-1].q}
                    </h2>
                    <p className="text-muted text-sm font-medium">
                       We only take on 5 projects per month to ensure sub-30 day delivery.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 gap-4">
                    {questions[step-1].options.map(option => (
                       <button
                         key={option}
                         onClick={() => handleSelect(option)}
                         className="flex items-center justify-between group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all text-left"
                       >
                          <span className="font-bold text-white group-hover:text-brand-cyan transition-colors">{option}</span>
                          <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-brand-cyan transition-all transform group-hover:translate-x-1" />
                       </button>
                    ))}
                 </div>
                 
                 <div className="flex justify-center gap-2">
                    {questions.map((_, i) => (
                       <div key={i} className={`w-12 h-1 rounded-full transition-all ${i + 1 === step ? "bg-brand-cyan" : "bg-white/10"}`} />
                    ))}
                 </div>
              </div>
           </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
