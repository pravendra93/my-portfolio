"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCategory = "All" | "AI" | "SaaS" | "Automation";

const projects = [
  {
    id: 1,
    title: "Nexus Intelligence",
    category: "AI",
    description: "An AI-driven analytics dashboard giving real-time strategy insights for quantitative trading firms.",
    result: "Increased insight speed by 300%",
    tags: ["Next.js", "Python", "OpenAI"],
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 2,
    title: "FlowOps SaaS",
    category: "SaaS",
    description: "A centralized platform for continuous integration and delivery tailored to enterprise-scale monorepos.",
    result: "Reduced CI bottlenecks by 60%",
    tags: ["React", "Express", "Kubernetes"],
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: 3,
    title: "SyncAgent",
    category: "Automation",
    description: "Multi-agent autonomous system for supply chain dynamic inventory reconciliation and forecasting.",
    result: "Saved $2.4M in overstock",
    tags: ["FastAPI", "PostgreSQL", "LangChain"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Nova Health",
    category: "AI",
    description: "Generative AI health assistant that automates patient on-boarding and pre-screening forms.",
    result: "Cut wait times by 40%",
    tags: ["Vue", "Django", "LLaMA-3"],
    color: "from-indigo-500/20 to-transparent",
  },
];

const tabs: ProjectCategory[] = ["All", "AI", "SaaS", "Automation"];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
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
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="group cursor-pointer relative glass rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 border border-white/5 hover:border-white/20"
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
              <div className="p-8 flex flex-col gap-4 flex-1 bg-black/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                     <p className="text-sm font-semibold text-white/90">
                       {project.result}
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
