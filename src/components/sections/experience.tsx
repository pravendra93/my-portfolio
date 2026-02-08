"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-3xl font-bold mb-16">Work Experience</h2>

                <div className="space-y-12">
                    {EXPERIENCE.map((job, idx) => (
                        <motion.div
                            key={`${job.company}-${idx}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative pl-8 border-l border-zinc-200 dark:border-zinc-800"
                        >
                            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 group-hover:bg-accent transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{job.role}</h3>
                                <span className="text-sm font-medium text-zinc-500 font-mono">{job.period}</span>
                            </div>

                            <div className="text-base font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                                {job.company} · <span className="text-sm text-zinc-500 font-normal">{job.location}</span>
                            </div>

                            <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        • {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
