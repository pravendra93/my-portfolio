"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, X, ArrowRight, Zap, Target, TrendingUp, ShieldCheck } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";

const pricingData = [
  {
    name: "AI Launchpad",
    price: "$4,599",
    tagline: "Get your first AI system live fast",
    roi: "Save 50+ hours/month",
    cta: "Get Started",
    description: "Perfect for founders and teams looking to validate AI's impact with a quick, high-ROI win.",
    features: [
      "1 high-impact AI use-case identification",
      "AI strategy audit (actionable roadmap)",
      "Basic AI chatbot / automation",
      "Reduce manual work by 30–40%",
      "Basic integrations (CRM/APIs)",
      "Go-live in 2–3 weeks"
    ],
    highlight: false,
    color: "amber-400"
  },
  {
    name: "AI Growth System",
    price: "$7,999",
    tagline: "Turn AI into your daily operations engine",
    roi: "Automate 70% of operations",
    cta: "Book a Call",
    description: "The complete system for scaling operations without scaling headcount.",
    features: [
      "Everything in Launchpad +",
      "2-3 AI workflows",
      "Custom UI/UX design",
      "Advanced integrations",
      "50–70% efficiency improvement",
      "Scalable backend",
      "Cloud deployment",
      "Priority support"
    ],
    highlight: true,
    color: "red-500"
  },
  {
    name: "AI Production Engine",
    price: "$15K–25K",
    tagline: "Build a real AI product, not just automation",
    roi: "Production-grade performance",
    cta: "Contact Us",
    description: "For companies building proprietary AI products and advanced RAG architectures.",
    features: [
      "Everything in Growth +",
      "Deep AI strategy + research",
      "Full custom UI/UX",
      "Proprietary RAG architecture",
      "Vector database integration",
      "Sub-100ms inference targets",
      "CI/CD pipeline + monitoring",
      "Dedicated 24/7 Slack support"
    ],
    highlight: false,
    color: "amber-400"
  },
  {
    name: "Enterprise AI",
    price: "Custom",
    tagline: "AI as your competitive advantage",
    roi: "Total business transformation",
    cta: "Contact Us",
    description: "Custom-built infrastructure and models tailored to your unique enterprise requirements.",
    features: [
      "Custom AI models / fine-tuning",
      "On-premise / private cloud",
      "Dedicated AI team",
      "Security + compliance",
      "Long-term scaling roadmap",
      "Strategic R&D partnership"
    ],
    highlight: false,
    color: "amber-400"
  }
];

const comparisonTable = {
  columns: ["Plan", "AI Workflows", "Custom UI", "RAG System", "Deployment Type", "Support Level"],
  rows: [
    {
      name: "Launchpad",
      workflows: "1 Core Case",
      ui: "Basic",
      rag: "-",
      deployment: "Basic API",
      support: "Email"
    },
    {
      name: "Growth",
      workflows: "2-3 Workflows",
      ui: "Full Design",
      rag: "-",
      deployment: "Cloud Managed",
      support: "Priority"
    },
    {
      name: "Production",
      workflows: "Full Stack",
      ui: "Premium UI/UX",
      rag: "Proprietary",
      deployment: "Production CI/CD",
      support: "24/7 Slack"
    },
    {
      name: "Enterprise",
      workflows: "Unlimited",
      ui: "Custom",
      rag: "Custom Architecture",
      deployment: "Private Cloud",
      support: "Dedicated Team"
    }
  ]
};

export function Pricing() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-semibold tracking-wide"
          >
            <Zap className="w-4 h-4 fill-amber-400" />
            <span className="uppercase tracking-widest text-[10px]">Pricing & Investment</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
          >
            We don’t build AI — we build <br />
            <span className="bg-gradient-to-r from-amber-400 via-red-500 to-amber-500 bg-clip-text text-transparent">revenue-generating systems</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto font-medium"
          >
            From automation to full-scale AI products, we help you reduce costs, increase efficiency, and scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 pt-4"
          >
            <div className="flex items-center gap-2 text-red-500 font-bold animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              We only onboard 3 clients per month
            </div>
            <div className="flex -space-x-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-400 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                 </div>
               ))}
            </div>
            <p className="text-xs text-neutral-500">Trusted by founders globally</p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {pricingData.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative flex flex-col p-8 rounded-[32px] border-2 transition-all duration-300 group ${
                plan.highlight 
                ? "bg-neutral-900 border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.15)] ring-1 ring-red-500/50 scale-[1.03] z-10" 
                : "bg-white/[0.03] border-white/10 hover:border-amber-400/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl border border-red-400/50 uppercase tracking-widest whitespace-nowrap">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors uppercase tracking-tight">{plan.name}</h3>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-red-500' : 'text-white'}`}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-neutral-500 text-sm font-medium">/project</span>}
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-amber-400 uppercase tracking-widest mb-4">
                  🚀 ROI: {plan.roi}
                </div>
              </div>

              <div className="h-px w-full bg-white/5 mb-8" />

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-sm text-neutral-300 leading-tight">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-red-500' : 'text-amber-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openCalendly}
                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group-hover:gap-3 ${
                  plan.highlight
                  ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-amber-400/50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black mb-4">Compare Features</h3>
            <p className="text-neutral-400 font-medium tracking-tight">Decide which engine fits your current growth stage.</p>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {comparisonTable.columns.map(col => (
                    <th key={col} className="p-6 text-xs font-black uppercase tracking-widest text-neutral-500">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-bold text-white uppercase tracking-tight">{row.name}</td>
                    <td className="p-6 text-neutral-400 text-sm font-medium">{row.workflows}</td>
                    <td className="p-6 text-neutral-400 text-sm font-medium">{row.ui}</td>
                    <td className="p-6 text-neutral-400 text-sm font-medium">{row.rag}</td>
                    <td className="p-6 text-neutral-400 text-sm font-medium">{row.deployment}</td>
                    <td className="p-6 text-neutral-400 text-sm font-medium">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing Security/Trust */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: <ShieldCheck className="w-5 h-5" />, label: "Secure Data" },
             { icon: <Target className="w-5 h-5" />, label: "Focused ROI" },
             { icon: <TrendingUp className="w-5 h-5" />, label: "Scalable Tech" },
             { icon: <Zap className="w-5 h-5" />, label: "Rapid Shipping" }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3 text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">{item.icon}</div>
                {item.label}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
