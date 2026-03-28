"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Bot, Database } from "lucide-react";

const services = [
  {
    title: "Production AI",
    description: "Architecting $1M+ ARR products with custom LLM orchestration and secure RAG layers.",
    icon: Cpu,
    color: "from-purple-500/20 to-purple-500/0",
    borderColor: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  },
  {
    title: "30-Day Ship Cycle",
    description: "Launch your core business logic fast. We specialize in high-velocity, high-fidelity deployments.",
    icon: Rocket,
    color: "from-blue-500/20 to-blue-500/0",
    borderColor: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    title: "Agentic Workflows",
    description: "Automate complex business operations with multi-agent autonomous systems built for scale.",
    icon: Bot,
    color: "from-cyan-500/20 to-cyan-500/0",
    borderColor: "group-hover:border-cyan-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  {
    title: "Scale Infrastructure",
    description: "Infrastructure designed for 100k+ concurrent users. No technical debt, just raw performance.",
    icon: Database,
    color: "from-indigo-500/20 to-indigo-500/0",
    borderColor: "group-hover:border-indigo-500/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Capabilities that <span className="text-gradient">Scale</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl mx-auto"
        >
          We build with the latest stack to ensure your product is future-proof, fast, and secure.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative rounded-2xl p-6 glass border border-white/5 transition-all duration-300 overflow-hidden cursor-pointer ${service.borderColor} ${service.shadow}`}
          >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <service.icon className="w-full h-full text-white/80" />
              </div>
              
              <div className="space-y-2 mt-auto">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
