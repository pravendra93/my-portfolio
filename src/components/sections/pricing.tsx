"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-zinc-50/30 dark:bg-zinc-950/30 border-t border-zinc-200 dark:border-zinc-800">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 opacity-20 blur-[100px] pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto w-full space-y-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Transparent Pricing <br />
                        <span className="ai-gradient-text text-2xl md:text-4xl">for Ambitious Startups</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Choose the speed and depth that fits your runway. No hidden fees, no drama, just shipping.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PRICING_PLANS.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <Card
                                className={cn(
                                    "h-full p-8 flex flex-col relative transition-all duration-500 group border-zinc-200 dark:border-zinc-800",
                                    plan.highlight 
                                        ? "bg-zinc-50 dark:bg-zinc-900 border-accent/30 shadow-2xl lg:scale-105 z-10" 
                                        : "bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1"
                                )}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="space-y-6 flex-grow">
                                    {/* Top Area */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-accent" />
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                                                <Clock className="w-3 h-3 text-zinc-500" />
                                                <span className="text-[10px] font-bold uppercase tracking-tight text-zinc-600 dark:text-zinc-400">
                                                    {(plan as any).delivery}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                                                {plan.name}
                                            </h3>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                                                {plan.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                                    {/* Pricing */}
                                    <div className="space-y-1">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-lg font-bold text-zinc-400">
                                                {plan.period}
                                            </span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                            Starting Investment
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 pt-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 group/item">
                                                <div className="mt-1 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors">
                                                    <Check className="w-2.5 h-2.5 text-accent group-hover/item:text-white transition-colors" />
                                                </div>
                                                <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Footer/Action */}
                                <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                    <Link
                                        href="#contact"
                                        className={cn(
                                            "w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl font-bold transition-all text-sm group/btn",
                                            plan.highlight
                                                ? "bg-accent text-white hover:bg-accent/90 shadow-xl shadow-accent/20 scale-[1.02]"
                                                : "bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-[1.02] shadow-lg"
                                        )}
                                    >
                                        Book initial call <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                    <p className="text-[10px] text-zinc-400 text-center mt-4 font-medium italic">
                                        *30-minute structured discovery session
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
