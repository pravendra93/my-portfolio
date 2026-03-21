"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Sparkles, ArrowRight } from "lucide-react";

const ICON_MAP = {
    Palette: Palette,
    Code: Code,
    Sparkles: Sparkles,
};

export function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto w-full space-y-16">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                            We help fast moving digital startups launch sharper products, MVPs and websites — <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">with clarity, speed, and no drama.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => {
                        const Icon = (ICON_MAP as any)[service.icon] || Sparkles;
                        return (
                            <motion.div
                                key={service.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all hover:shadow-2xl hover:border-accent/20 hover:-translate-y-1"
                            >
                                <div className="space-y-6">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6 text-accent group-hover:text-white" />
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                                            {service.category}
                                        </h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {service.items.map((item) => (
                                            <Badge 
                                                key={item} 
                                                variant="outline" 
                                                className="bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-wider font-bold"
                                            >
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-accent transition-colors">
                                        Details <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
