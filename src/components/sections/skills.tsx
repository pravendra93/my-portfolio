"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold mb-4">Technical<br />Arsenal</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                            A curated list of technologies I use to build scalable, high-performance applications.
                        </p>
                    </div>

                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                        {SKILLS.map((category, idx) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-zinc-900 dark:text-white">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <Badge key={skill} variant="outline" className="bg-white dark:bg-zinc-900">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
