"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "MVP Launchpad",
    price: "$8k - $12k",
    description: "Perfect for early validation and seed startups.",
    features: [
      "Core architecture setup",
      "Authentication & DB config",
      "2-4 weeks delivery",
      "Basic AI integrations",
      "1 month post-launch support"
    ],
    highlight: false,
  },
  {
    name: "Product Sprint+",
    price: "$15k - $30k",
    description: "For startups needing robust, scalable mechanics.",
    features: [
      "Advanced multi-agent AI features",
      "High-availability infrastructure",
      "Custom UI/UX component library",
      "CI/CD pipelines implemented",
      "3 months priority engineering support"
    ],
    highlight: true,
  },
  {
    name: "Custom Enterprise",
    price: "Let's Talk",
    description: "Complex distributed systems for established orgs.",
    features: [
      "Dedicated senior engineering team",
      "Custom compliance & security",
      "Legacy codebase migration",
      "SLA & priority response",
      "Continuous strategy consulting"
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-purple to-brand-cyan opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Transparent <span className="text-gradient">Pricing</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl mx-auto"
        >
          Invest in top-tier architecture without the agency bloated costs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative rounded-3xl p-8 transition-all duration-300 ${
              plan.highlight 
              ? "glass-dark border border-brand-cyan/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] scale-100 md:scale-105 z-20 hover:shadow-[0_0_80px_rgba(139,92,246,0.2)]" 
              : "glass border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] z-10"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              </div>
            )}
            
            <div className="space-y-6 flex flex-col h-full">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="flex items-baseline text-4xl font-extrabold tracking-tight text-white mb-2">
                  <span className={plan.highlight ? "text-gradient" : ""}>{plan.price}</span>
                </div>
                <p className="text-sm text-muted">
                  {plan.description}
                </p>
              </div>

              <div className="w-full h-px bg-white/10 my-2" />

              <ul className="space-y-4 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm text-white/80 items-start">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-brand-cyan" : "text-white/50"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 mt-auto">
                <a 
                  href="#contact"
                  className={`block text-center flex items-center justify-center w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlight
                    ? "bg-white text-[#0A0A0A] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.name === "Custom Enterprise" ? "Contact Us" : "Start Project"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
