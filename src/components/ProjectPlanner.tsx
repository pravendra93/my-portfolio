"use client";

import { useState, useEffect } from "react";
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
    const { type, timeline, budget } = finalAnswers;

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
        cost: "$15k+",
        timeline: "8–12 Weeks",
        description: "Enterprise-grade distributed AI infrastructure built for scale, security, and complex multi-agent workflows."
      };
    }

    if (type === "AI Tool" && (budget === "$5k–$10k" || budget === "$10k+")) {
      return {
        name: "Product Sprint+",
        cost: "$12k - $20k",
        timeline: "6–8 Weeks",
        description: "Full-cycle product development including custom LLM fine-tuning and premium UI engineering."
      };
    }

    return {
      name: "Starter Build Plan",
      cost: "$5k - $8k",
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
      
      // Simulate analysis delay
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
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Build your project plan in <span className="text-gradient">60 seconds.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl">
          Answer 3 quick questions to receive a tailored technical scope and cost roadmap for your AI product.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Progress Tracker */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-10 relative px-2">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 -z-10" />
            {stepsHeader.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-3">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                    step >= s.id 
                    ? "bg-brand-purple/20 border-brand-purple text-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.3)]" 
                    : "bg-[#0A0A0A] border-white/10 text-white/30"
                  }`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s.id ? "text-white" : "text-white/20"}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <div className="glass-dark border border-white/5 rounded-3xl p-8 min-h-[400px] flex flex-col shadow-2xl relative overflow-hidden">
          {/* Subtle Back Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold text-white">What are you building?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["SaaS Product", "AI Tool", "Automation System", "Internal Tool"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("type", opt)}
                      className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all text-left flex justify-between items-center"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">{opt}</span>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold text-white">What's your timeline?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {["2–4 Weeks", "1–2 Months", "3+ Months"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("timeline", opt)}
                      className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all text-left flex justify-between items-center"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">{opt}</span>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold text-white">What's your budget?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {["$2k–$5k", "$5k–$10k", "$10k+"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect("budget", opt)}
                      className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all text-left flex justify-between items-center"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">{opt}</span>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-4"
              >
                {isAnalyzing ? (
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                       <Loader2 className="w-16 h-16 text-brand-cyan animate-spin" />
                       <Bot className="w-8 h-8 text-brand-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="font-mono text-brand-cyan tracking-widest text-sm uppercase"
                    >
                      Analyzing requirements...
                    </motion.p>
                  </div>
                ) : result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="w-full space-y-8"
                  >
                    <div className="flex flex-col items-center gap-2">
                       <CheckCircle2 className="w-10 h-10 text-brand-cyan mb-2" />
                       <h3 className="text-[10px] font-bold tracking-widest text-brand-purple uppercase">Optimal Plan Identified</h3>
                       <h2 className="text-4xl font-bold text-white">{result.name}</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-8 border-y border-white/5">
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Estimated Cost</span>
                          <span className="text-2xl font-bold text-brand-cyan">{result.cost}</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Timeline</span>
                          <span className="text-2xl font-bold text-white">{result.timeline}</span>
                       </div>
                    </div>

                    <p className="text-muted leading-relaxed px-4">
                      {result.description}
                    </p>

                    <div className="pt-4">
                      <button 
                        onClick={openCalendly}
                        className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-bold hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                      >
                         Book Strategy Call <ArrowRight className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setStep(1)}
                        className="mt-4 text-xs font-medium text-white/40 hover:text-white transition-colors"
                      >
                         Restart Planner
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
