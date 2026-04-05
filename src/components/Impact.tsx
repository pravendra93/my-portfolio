"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Zap, Clock, ShieldCheck, BarChart3 } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

const impactStats = [
  {
    label: "Efficiency gains",
    value: "100+ hrs recovered",
    description: "Average time saved per team member monthly.",
    icon: Clock,
  },
  {
    label: "Operational leverage",
    value: "70% automated",
    description: "Core repetitive logic offloaded to AI agents.",
    icon: Zap,
  },
  {
    label: "Delivery velocity",
    value: "30-day launch",
    description: "Rapid production cycles from idea to scale.",
    icon: BarChart3,
  }
];

export function Impact() {
  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(80000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const annualSavings = employees * salary * 0.3; // 30% savings

  return (
    <section id="impact" className="py-32 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="ROI Detailed Report" 
      />
      
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter"
        >
          Measurable <span className="text-gradient">Outcomes</span>
        </motion.h2>
        <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
          We focus on the metrics that drive actual growth: ROI, efficiency, and engineering velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-xs uppercase tracking-widest font-black text-brand-purple mb-1">{stat.label}</p>
                <p className="text-xs text-muted leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Predictor */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden"
        >
           <div className="flex justify-between items-center mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">ROI Predictor v1.0</span>
              <Calculator className="w-6 h-6 text-white/20" />
           </div>
           
           <div className="space-y-10">
              <div className="space-y-4">
                 <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/60">Operations Team Size</span>
                    <span className="text-white">{employees}</span>
                 </div>
                 <input 
                    type="range" min="1" max="100" value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none accent-brand-cyan"
                 />
              </div>

              <div className="space-y-4 border-b border-white/5 pb-10">
                 <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/60">Annual Salary Baseline</span>
                    <span className="text-white">${salary.toLocaleString()}</span>
                 </div>
                 <input 
                    type="range" min="30000" max="250000" step="5000" value={salary} 
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none accent-brand-cyan"
                 />
              </div>

              <div className="text-center group">
                 <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Annual Efficiency Gain</p>
                 <h3 className="text-6xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform">
                   ${Math.round(annualSavings / 1000)}k
                 </h3>
                 <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all uppercase tracking-widest"
                 >
                    Get Detailed Plan
                 </button>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
