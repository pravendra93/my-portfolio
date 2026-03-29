"use client";

import { motion } from "framer-motion";
import { Quote, MessageCircleCode } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Jordan Michaels",
      role: "CTO, Fintech Future",
      content: "Most agencies just build what you ask. RakriLabs actually told us what we *shouldn't* build to save cost. Their engineering depth is miles ahead of any outfit we've seen in SF.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
    {
      name: "Elena Rossi",
      role: "Founder, HealthFlow AI",
      content: "They shipped our HIPAA-compliant MVP in 18 days. The code quality was so high that our internal team didn't have to refactor a single line when they took over.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    },
    {
      name: "Marcus Thorne",
      role: "CEO, QuantLogic",
      content: "Technical mastery combined with business vision. They are more than an agency—they felt like our temporary co-founders for the 2 months we worked together.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-2xl text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <MessageCircleCode className="w-4 h-4" /> Proof of Excellence
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Unfiltered <span className="text-gradient">Feedback</span> from the Frontlines.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl flex flex-col items-start gap-8"
          >
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-brand-purple/20 transition-colors duration-500">
              <Quote className="w-16 h-16 fill-current" />
            </div>
            
            <p className="text-lg text-white/70 italic leading-relaxed relative z-10">
              "{t.content}"
            </p>

            <div className="mt-auto flex items-center gap-4 relative z-10">
               <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-white/5" />
               <div className="flex flex-col">
                  <span className="font-bold text-white tracking-tight">{t.name}</span>
                  <span className="text-xs text-brand-purple font-bold uppercase tracking-widest">{t.role}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
