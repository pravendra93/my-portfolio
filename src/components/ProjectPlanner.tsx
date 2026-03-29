"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Clock, Target, CreditCard, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

type Step = 1 | 2 | 3 | 4;

interface Answers {
  type: string;
  timeline: string;
  budget: string;
}

interface PlanResult {
  name: string;
  cost: string;
  timeline: string;
  description: string;
}

export function ProjectPlanner() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({ type: "", timeline: "", budget: "" });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PlanResult | null>(null);

  const stepsHeader = [
    { id: 1, title: "Concept", icon: Target },
    { id: 2, title: "Timeline", icon: Clock },
    { id: 3, title: "Budget", icon: CreditCard },
  ];

  const generatePlan = (finalAnswers: Answers): PlanResult => {
    const { timeline, budget } = finalAnswers;

    if (timeline === "2–4 Weeks") {
      return {
        name: "MVP Launchpad",
        cost: "$8k - $12k",
        timeline: "4 Weeks",
        description: "Focus on speed to market. We'll build your core value proposition using high-performance architecture."
      };
    }

    if (budget === "$10k+") {
      return {
        name: "Custom AI System",
        cost: "$15k - $25k+",
        timeline: "8–12 Weeks",
        description: "Enterprise-grade distributed AI infrastructure built for scale, security, and complex multi-agent workflows."
      };
    }

    return {
      name: "Starter Build Plan",
      cost: "$5k - $10k",
      timeline: "4–6 Weeks",
      description: "Ideal for early validation. Lean architecture focused on your most critical business automation."
    };
  };

  const handleSelect = (category: keyof Answers, value: string) => {
    const newAnswers = { ...answers, [category]: value };
    setAnswers(newAnswers);

    if (step < 3) {
      setStep((step + 1) as Step);
    } else {
      setIsAnalyzing(true);
      setStep(4);
      setTimeout(() => {
        setResult(generatePlan(newAnswers));
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  return (
    <section id="planner" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-bold tracking-widest uppercase"
        >
           <Sparkles className="w-3.5 h-3.5" /> Interactive Lab
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
           Build your project plan in <span className="text-gradient">60 seconds.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl font-medium">
           Answer 3 quick questions to receive a tailored technical scope and cost roadmap for your AI product.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {step < 4 && (
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex justify-between items-end px-2">
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-brand-purple uppercase tracking-[0.2em] block">Phase {step}</span>
                  <h3 className="text-xl font-black text-white leading-tight italic">Project DNA Capture</h3>
               </div>
               <span className="text-2xl font-black text-white/10 tracking-tighter italic">{step}/3</span>
            </div>
            
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${(step / 3) * 100}%` }}
                 className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-purple to-brand-cyan"
               />
            </div>

            <div className="flex justify-between items-center relative px-2">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 -z-10" />
              {stepsHeader.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 border-2 ${
                      step >= s.id 
                      ? "bg-brand-purple/20 border-brand-purple text-brand-purple shadow-[0_0_20px_rgba(139,92,246,0.4)]" 
                      : "bg-[#0A0A0A] border-white/10 text-white/30"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="glass-dark border border-white/10 rounded-[3rem] p-10 min-h-[450px] flex flex-col shadow-2xl relative overflow-hidden bg-[#0A0A0A]/80">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                className="space-y-10 flex-1 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">What are you <span className="text-gradient">building?</span></h3>
                  <p className="text-muted text-sm font-medium">Select the core architecture of your vision.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["SaaS Product", "AI Tool", "Automation System", "Internal Tool"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("type", opt)}
                      className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all text-left flex justify-between items-center shadow-inner"
                    >
                      <span className="font-black text-white/60 group-hover:text-white uppercase text-[11px] tracking-widest">{opt}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                className="space-y-10 flex-1 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">What's your <span className="text-gradient">launch target?</span></h3>
                  <p className="text-muted text-sm font-medium">Speed is a feature. Tell us when you need to be live.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {["2–4 Weeks", "1–2 Months", "3+ Months"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("timeline", opt)}
                      className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all text-left flex justify-between items-center shadow-inner"
                    >
                      <span className="font-black text-white/60 group-hover:text-white uppercase text-[11px] tracking-widest">{opt}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                className="space-y-10 flex-1 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">Project <span className="text-gradient">Investment?</span></h3>
                  <p className="text-muted text-sm font-medium">Select a range to help us align engineering resources.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {["$2k–$5k", "$5k–$10k", "$10k+"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("budget", opt)}
                      className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all text-left flex justify-between items-center shadow-inner"
                    >
                      <span className="font-black text-white/60 group-hover:text-white uppercase text-[11px] tracking-widest">{opt}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-4"
              >
                {isAnalyzing ? (
                  <div className="flex flex-col items-center gap-8">
                    <Loader2 className="w-24 h-24 text-brand-cyan animate-spin opacity-40" />
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="font-black text-brand-cyan tracking-[0.3em] text-xs uppercase"
                    >
                      Synthesizing Roadmap...
                    </motion.p>
                  </div>
                ) : result && (
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                     className="w-full space-y-10"
                   >
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                           <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Your <span className="text-gradient"> {result.name}</span></h2>
                     </div>

                    <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 text-left">
                       <div className="space-y-2">
                          <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Est. Investment</span>
                          <p className="text-3xl font-black text-brand-cyan">{result.cost}</p>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Delivery Window</span>
                          <p className="text-3xl font-black text-white">{result.timeline}</p>
                       </div>
                       <div className="col-span-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                          <p className="text-white text-sm font-medium italic">"{result.description}"</p>
                       </div>
                    </div>

                    <div className="space-y-8">
                      <button 
                         onClick={openCalendly}
                         className="w-full py-6 rounded-[2rem] bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all uppercase tracking-tighter italic"
                      >
                         Book Strategy Call <ArrowRight className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={() => setStep(1)}
                        className="text-[10px] font-black uppercase text-white/20 hover:text-white transition-colors"
                      >
                         ← Restart Planner
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
