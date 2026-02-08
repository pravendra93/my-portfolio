"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">Simple, Transparent Pricing</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Whether you need a quick consultation or a dedicated partner for your next big project.
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
                            className="relative"
                        >
                            <Card
                                className={cn(
                                    "h-full p-8 flex flex-col relative transition-all duration-300 hover:shadow-lg",
                                    plan.highlight ? "border-accent/50 bg-accent/5 dark:bg-accent/5 shadow-md scale-105 z-10" : "hover:-translate-y-1"
                                )}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-zinc-900 text-xs font-bold rounded-full shadow-sm">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">{plan.price}</span>
                                        <span className="text-sm text-zinc-500">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                                            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="#contact"
                                    className={cn(
                                        "w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors text-sm",
                                        plan.highlight
                                            ? "bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                                            : "border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
