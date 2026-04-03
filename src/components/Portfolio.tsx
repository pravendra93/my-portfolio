"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, ExternalLink, Sparkles, Mic, Bot, Zap } from "lucide-react";

const assistraProduct = {
  title: "Assistra",
  tag: "In-house AI Product",
  description: "Built a real-world AI assistant platform designed to automate workflows and assist teams. Focused on practical business use cases like task handling, query resolution, and internal support. Designed with scalability and performance in mind.",
  badges: ["In-house Product", "Actively Developing"],
  upcoming: [
    { title: "Voice AI", icon: Mic, description: "Voice-enabled AI interaction (real-time voice support)" },
    { title: "Personal AI Assistant", icon: Bot, description: "Task management, contextual help, and smart responses" }
  ],
  demoUrl: "https://stage.assistra.app/",
  color: "from-brand-purple/20 to-brand-cyan/20"
};

const internalBuilds = [
  {
    title: "AI Systems (In Development)",
    tag: "Internal Builds",
    description: "Designing AI-driven automation systems for business workflows. Exploring real-world use cases in support, operations, and productivity. Focused on building scalable and practical AI solutions.",
    color: "from-white/5 to-transparent",
    badges: ["Research & Dev"]
  }
];

export function Portfolio() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div className="space-y-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]"
          >
             <Sparkles className="w-3 h-3 text-brand-cyan" /> Building the Future
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >
            Selected Work & <span className="text-gradient">AI Systems</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 font-medium md:max-w-xl"
          >
            A focused showcase of our in-house AI product and systems we are actively building for real-world business use.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Assistra Featured Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 group relative p-[1px] rounded-[3rem] bg-gradient-to-br from-white/10 via-brand-purple/20 to-brand-cyan/20 overflow-hidden"
        >
          <div className="relative h-full bg-[#080808] rounded-[2.9rem] p-8 lg:p-14 flex flex-col gap-10">
             <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
             <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

             <div className="flex flex-wrap gap-3 relative z-10">
                {assistraProduct.badges.map(b => (
                  <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white/60 uppercase tracking-widest">{b}</span>
                ))}
                <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[9px] font-black text-brand-cyan uppercase tracking-widest flex items-center gap-2">
                  <Mic className="w-3 h-3" /> Voice AI (Coming Soon)
                </span>
             </div>

             <div className="space-y-6 relative z-10 max-w-2xl">
                <div className="space-y-2">
                   <p className="text-xs font-black text-brand-purple uppercase tracking-[0.3em]">{assistraProduct.tag}</p>
                   <h3 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">{assistraProduct.title}</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed font-medium italic">
                  "{assistraProduct.description}"
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-y border-white/5 relative z-10">
                <div className="space-y-6">
                   <h4 className="text-[10px] font-black uppercase text-white/30 tracking-[0.4em]">Now Building</h4>
                   <div className="space-y-6">
                      {assistraProduct.upcoming.map((feature, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-brand-cyan">
                              <feature.icon className="w-5 h-5" />
                           </div>
                           <div className="space-y-1">
                              <p className="text-sm font-bold text-white">{feature.title}</p>
                              <p className="text-xs text-neutral-500 leading-relaxed font-medium">{feature.description}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-4">
                   <p className="text-xs text-neutral-500 font-medium italic max-w-[200px]">
                     "Expanding Assistra into a voice-enabled and more personalized AI assistant for deeper business integration."
                   </p>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <div className="flex flex-col items-center sm:items-start gap-2">
                   <a 
                    href={assistraProduct.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all group/btn"
                   >
                     Try Demo <Play className="w-5 h-5 fill-current" />
                   </a>
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Quick signup • Instant access</p>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Secondary Card (In Development) */}
        {internalBuilds.map((build, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-[1px] rounded-[3rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all flex flex-col"
          >
             <div className="p-8 lg:p-10 flex flex-col gap-8 h-full">
                <div className="flex flex-wrap gap-2">
                   {build.badges.map(b => (
                     <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest">{b}</span>
                   ))}
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{build.tag}</p>
                   <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{build.title}</h3>
                   <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                      {build.description}
                   </p>
                </div>
                
                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                   <ul className="space-y-3">
                      {[
                        "Designing AI-driven automation systems",
                        "Exploring real-world use cases",
                        "Scalable and practical solutions"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[10px] font-bold text-white/30 uppercase tracking-tighter leading-none">
                           <div className="w-1 h-1 rounded-full bg-white/20" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
