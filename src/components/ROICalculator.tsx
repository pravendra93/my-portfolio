"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Zap, Users } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(80000);
  const [automationRate, setAutomationRate] = useState(0.3); // 30% savings

  const annualCost = employees * salary;
  const annualSavings = annualCost * automationRate;
  const deliveryCostAgency = 25000; // Flat fee for a major project
  const roi = (annualSavings / deliveryCostAgency) * 100;

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black tracking-widest uppercase">
              ROI Engine v1.0
           </div>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              Calculate your <span className="text-gradient">AI Advantage.</span>
           </h2>
           <p className="text-muted text-lg leading-relaxed max-w-md">
              Discover the real-world impact of automating core workflows. Our systems pay for themselves within months, not years.
           </p>
           
           <div className="space-y-8 pt-8 border-t border-white/5">
              {/* Sliders */}
              <div className="space-y-4">
                 <div className="flex justify-between">
                    <span className="text-sm font-bold text-white/60">Employees involved in operations</span>
                    <span className="text-brand-cyan font-bold">{employees}</span>
                 </div>
                 <input 
                    type="range" min="1" max="100" value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-brand-cyan cursor-pointer"
                 />
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between">
                    <span className="text-sm font-bold text-white/60">Average annual salary ($)</span>
                    <span className="text-brand-cyan font-bold">${salary.toLocaleString()}</span>
                 </div>
                 <input 
                    type="range" min="30000" max="250000" step="5000" value={salary} 
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-brand-cyan cursor-pointer"
                 />
              </div>
           </div>
        </div>

        {/* Results Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="relative p-12 rounded-[3.5rem] bg-[#0A0A0A] border-2 border-brand-cyan/20 shadow-2xl overflow-hidden group"
        >
           <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-pulse" />
           <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-center text-white/40">
                 <Calculator className="w-8 h-8" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Projection results</span>
              </div>
              
              <div className="space-y-2">
                 <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Est. Annual Efficiency Gains</p>
                 <h3 className="text-6xl lg:text-8xl font-black text-white tracking-tighter">
                   ${Math.round(annualSavings / 1000)}<span className="text-brand-cyan text-4xl">k</span>
                 </h3>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                 <div className="space-y-2">
                    <p className="text-[11px] font-bold text-white/40 uppercase">Breakeven speed</p>
                    <p className="text-2xl font-black text-white flex items-center gap-2">
                       <Zap className="w-5 h-5 text-brand-purple" /> ~3.2 months
                    </p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[11px] font-bold text-white/40 uppercase">Project ROI</p>
                    <p className="text-2xl font-black text-white">
                       {Math.round(roi)}%
                    </p>
                 </div>
              </div>

              <button className="w-full py-5 rounded-2xl bg-brand-cyan text-black font-black text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                 Generate Detailed Audit
              </button>
           </div>
           
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transition-all duration-1000 group-hover:opacity-20">
              <Users className="w-64 h-64" />
           </div>
        </motion.div>
      </div>
    </section>
  );
}
