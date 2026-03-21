"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-4 pt-20 pb-12 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 blur-[120px] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Trusted Partner for Startups</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                            Tech Partner <br />
                            <span className="ai-gradient-text">for Early Stage Founders & Startups</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                            We make it easy for startups to launch, grow, and scale with clean MVPs and superfast shipping.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold transition-all hover:scale-105 hover:shadow-lg active:scale-95 group"
                        >
                            Launch Your Project <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex items-center px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-zinc-900 dark:text-white font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        >
                            View Portfolio
                        </Link>
                    </div>

                    <div className="flex items-center gap-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">14 Days</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider">Avg. MVP Launch</span>
                        </div>
                        <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">100%</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider">Founder Satisfaction</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - Premium CSS Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative aspect-square max-w-[500px] ml-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-3xl border border-white/20 dark:border-zinc-800 backdrop-blur-3xl shadow-2xl flex items-center justify-center p-8">
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <FloatingCard 
                                    icon={<Rocket className="w-10 h-10 text-accent" />} 
                                    label="Launch" 
                                    delay={0} 
                                />
                                <FloatingCard 
                                    icon={<Zap className="w-10 h-10 text-yellow-500" />} 
                                    label="Speed" 
                                    delay={0.2} 
                                />
                                <FloatingCard 
                                    icon={<Target className="w-10 h-10 text-blue-500" />} 
                                    label="Scale" 
                                    delay={0.4} 
                                />
                                <div className="p-8 rounded-3xl bg-white/5 dark:bg-black/20 border border-white/10 backdrop-blur-md flex items-center justify-center">
                                    <span className="text-4xl font-black uppercase tracking-tighter opacity-20">MVPs</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements outside the container */}
                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-md z-10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center ring-2 ring-accent/20">
                                    <Zap className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <div className="text-base font-bold">Fast Shipping</div>
                                    <div className="text-xs text-zinc-500 font-medium whitespace-nowrap">Delivered in weeks, not months</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FloatingCard({ icon, label, delay }: { icon: React.ReactNode, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + delay }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-sm flex flex-col items-center justify-center gap-4"
        >
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                {icon}
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">{label}</span>
        </motion.div>
    );
}
