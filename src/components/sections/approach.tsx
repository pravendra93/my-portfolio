"use client";

import { motion } from "framer-motion";
import { Shield, FastForward, Lock, Zap } from "lucide-react";

const APPROACH_ITEMS = [
    {
        icon: Zap,
        title: "Systems before features",
        description: "We don't build isolated AI tools. We architect integrated systems that solve core business problems."
    },
    {
        icon: FastForward,
        title: "Infrastructure before automation",
        description: "Automation only works on solid foundations. We harden your infrastructure first to ensure reliability."
    },
    {
        icon: Shield,
        title: "Guardrails before autonomy",
        description: "Safety is not an afterthought. Every agent we deploy operates within strict permission and cost boundaries."
    },
    {
        icon: Lock,
        title: "Measured iteration over hype",
        description: "We ignore the noise and focus on auditable, observable results that move the needle for your team."
    }
];

export function Approach() {
    return (
        <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Engineering Philosophy</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        How we build durable AI infrastructure for serious product teams.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12">
                    {APPROACH_ITEMS.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
