"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCategory = "All" | "AI" | "SaaS" | "Automation";

const projects = [
  {
    id: 1,
    title: "QuantumTrade AI",
    category: "AI",
    description: "High-frequency quantitative trading platform utilizing sub-100ms inference for real-time market positioning.",
    challenge: "Processing 1M+ data points/sec with sub-ms latency requirements.",
    solution: "Custom Rust-based inference engine with distributed LLM orchestration.",
    result: "Unlocked $2.4M Additional Yield/Quarter",
    tags: ["Rust", "PyTorch", "gRPC"],
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 2,
    title: "CloudScale CI/CD",
    category: "SaaS",
    description: "Next-generation DevOps infrastructure for enterprise-scale monorepos, automating 90% of deployment logic.",
    challenge: "Scaling CI/CD pipelines for 500+ developers across global regions.",
    solution: "Serverless build-topology with automated canary deployments.",
    result: "Accelerated Time-to-Market by 75%",
    tags: ["Go", "K8s", "Next.js"],
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: 3,
    title: "AutoSupply Logic",
    category: "Automation",
    description: "Multi-agent autonomous system for supply chain dynamic inventory reconciliation and predictive forecasting.",
    challenge: "Fragmented inventory data across 12 countries and 50+ vendors.",
    solution: "Autonomous agents with recursive self-correction logic.",
    result: "Recovered $4.2M in Lost Annual Revenue",
    tags: ["Python", "LangChain", "OpenAI"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Nova Health Engine",
    category: "AI",
    description: "Generative AI health platform automating patient triaging and medical record summarization with 99.9% accuracy.",
    challenge: "Ensuring HIPAA compliance while maintaining high-fidelity LLM outputs.",
    solution: "Secure RAG architecture with PII-redaction layers.",
    result: "Enabled 10x Scale with 0 New Hires",
    tags: ["React", "FastAPI", "AWS"],
    color: "from-indigo-500/20 to-transparent",
  },
];

const tabs: ProjectCategory[] = ["All", "AI", "SaaS", "Automation"];

import { useFounderMode } from "./FounderContext";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");
  const { isFounderMode } = useFounderMode();

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const getResult = (res: string) => {
    if (!isFounderMode) return res;
    return `Impact: ${res.split(' ').slice(0, 2).join(' ')} - Confirm`;
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div className="space-y-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Selected <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted"
          >
            A look into robust systems and intelligent products we've architected.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl border border-white/5"
        >
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-muted hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              onClick={() => console.log(`Navigated to details for ${project.title}`)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              className="group cursor-pointer relative glass rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-300 border border-white/5 hover:border-white/20"
            >
              {/* Abstract Cover / Background Accent */}
              <div className={`h-40 w-full bg-gradient-to-br ${project.color} border-b border-white/5 flex items-end p-6 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                 <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white/80 border border-white/10">
                        {tag}
                      </span>
                    ))}
                 </div>
                 
                 <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white/10">
                   <ArrowUpRight className="w-5 h-5 text-white" />
                 </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-6 flex-1 bg-black/20">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                 <div className="grid grid-cols-1 gap-6 py-4 border-y border-white/5">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-brand-purple uppercase tracking-widest leading-none">Problem</p>
                       <p className="text-sm font-medium text-white/80 leading-relaxed italic">"{project.challenge}"</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-brand-cyan uppercase tracking-widest leading-none">Solution</p>
                       <p className="text-sm font-medium text-white/80 leading-relaxed">{project.solution}</p>
                    </div>
                 </div>

                <div className="mt-auto pt-2">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                         <ArrowUpRight className="w-4 h-4 text-green-500" />
                      </div>
                      <p className="text-sm font-black text-white uppercase tracking-tight">
                        Impact: {getResult(project.result)}
                      </p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
