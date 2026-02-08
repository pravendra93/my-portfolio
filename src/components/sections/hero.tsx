"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-4 pt-16">
            <div className="max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl">
                        Full Stack <br />
                        <span className="text-zinc-400 dark:text-zinc-600">Engineer</span> & <br />
                        Problem Solver.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        I'm <span className="font-semibold text-zinc-900 dark:text-white">{PROFILE.name}</span>. {PROFILE.bio.split('.')[0]}.
                        Specializing in <span className="text-accent">Python</span>, <span className="text-accent">Node.js</span>, and <span className="text-accent">React</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium transition-transform hover:scale-105"
                        >
                            Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-zinc-900 dark:text-white font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                            View Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
