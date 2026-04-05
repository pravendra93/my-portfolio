"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Bot } from "lucide-react";

const capabilities = [
  {
    title: "AI Product Engineering",
    description: "Architecting scalable AI systems with custom LLM orchestration and secure RAG layers.",
    features: ["Custom Agent Workflows", "Secure Data Ingestion", "Sub-200ms Latency"],
    icon: Cpu,
  },
  {
    title: "Rapid Venture Shipping",
    description: "Launch your core business logic fast with our high-velocity execution playbook.",
    features: ["30-Day MVP Launch", "Zero Technical Debt", "Market-Ready Fidelity"],
    icon: Rocket,
  },
  {
    title: "Enterprise Automation",
    description: "Automate complex operations with multi-agent autonomous systems built for leverage.",
    features: ["Operational Cost Reduction", "Human-in-the-Loop AI", "High-Volume Processing"],
    icon: Bot,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Capabilities that <span className="text-gradient">Scale</span>
        </motion.h2>
        <p className="text-lg text-muted max-w-xl mx-auto">
          We combine deep engineering with AI-native architecture to ship your flagship roadmap in weeks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((cap, index) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <cap.icon className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-8">{cap.description}</p>
            
            <ul className="space-y-3">
              {cap.features.map(feat => (
                <li key={feat} className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-cyan" /> {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
