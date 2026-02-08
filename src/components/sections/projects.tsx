"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-zinc-900 text-white relative overflow-hidden">
            {/* Decorative background noise/grain could go here */}
            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
                    <span className="text-zinc-500 hidden sm:inline-block">2013 — Present</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full flex flex-col p-6 hover:border-accent/50 transition-colors group bg-zinc-800/50 border-zinc-700 text-zinc-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs font-mono text-accent/80 border border-accent/20 px-2 py-1 rounded-full">
                                        {project.tech.split(',')[0]}
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>

                                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-4 border-t border-zinc-700/50">
                                    <span className="text-xs text-zinc-500 font-mono">{project.tech}</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
