"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code, TrendingUp } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    title: "Discover & Strategy",
    description: "Deep dive into your business model, target audience, and core product mechanics to define the perfect MVP scope.",
    icon: Search,
  },
  {
    title: "Design & Architect",
    description: "Creating high-fidelity prototypes and planning scalable system architectures tailored for AI integration.",
    icon: PenTool,
  },
  {
    title: "Build & Iterate",
    description: "Agile engineering cycles delivering functional builds fast. We prioritize core logic over fluff.",
    icon: Code,
  },
  {
    title: "Launch & Scale",
    description: "Deploying to production with observability, analytics, and infrastructure built to handle hypergrowth.",
    icon: TrendingUp,
  },
];

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto relative z-10 w-full" ref={containerRef}>
      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Zero Chaos <span className="text-gradient">Process</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted max-w-2xl mx-auto"
        >
          Our continuous delivery engine ensures you go from idea to market in record time without sacrificing quality.
        </motion.p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
        {/* Animated Line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-white/5 rounded-full" />
        <motion.div 
          className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 w-1 bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent rounded-full origin-top z-10"
          style={{ height: lineHeight, opacity: glowOpacity, boxShadow: "0 0 20px rgba(6,182,212,0.8)" }}
        />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.title}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 group ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex-1 w-full pl-12 md:pl-0 relative z-20 ${
                    isEven ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div className={`p-6 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                    <h3 className="text-2xl font-bold text-white mb-2">
                       {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                       {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Node icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-4 md:-translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-[#0A0A0A] z-30 flex items-center justify-center p-2 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-5 h-5 text-brand-cyan relative z-10" />
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
