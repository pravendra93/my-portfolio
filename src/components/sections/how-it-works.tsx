"use client";

import { motion } from "framer-motion";
import { Map, BarChart3, Target, BookOpen, ShieldCheck, Activity, MessageSquare } from "lucide-react";

const WORK_STEPS = [
    {
        icon: Map,
        title: "Structured project roadmap",
        description: "Every step is defined before a single line of code is written."
    },
    {
        icon: BarChart3,
        title: "Weekly progress reports",
        description: "Clear updates on progress, roadblocks, and next steps every 7 days."
    },
    {
        icon: Target,
        title: "Transparent milestone tracking",
        description: "Real-time visibility into the status of your AI infrastructure build."
    },
    {
        icon: BookOpen,
        title: "Architecture documentation",
        description: "Full technical handovers so your team can maintain and scale the systems."
    },
    {
        icon: ShieldCheck,
        title: "Clear system boundaries",
        description: "Strict definitions of what the AI can and cannot do inside your business."
    },
    {
        icon: Activity,
        title: "Recorded decision logs",
        description: "Every architectural choice is documented and justified for future audits."
    },
    {
        icon: MessageSquare,
        title: "Dedicated async channels",
        description: "Slack/Discord communication optimized for globally distributed teams."
    }
];

export function HowWeWork() {
    return (
        <section className="py-24 px-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold mb-4">How We Work</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                            We operate as an async-first engineering partner, built for globally distributed SaaS teams.
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-medium text-accent uppercase tracking-wider">
                            Remote Optimized
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        {WORK_STEPS.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">{step.title}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}
