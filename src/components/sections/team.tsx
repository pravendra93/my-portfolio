"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/lib/data";
import Image from "next/image";

export function Team() {
    return (
        <section id="team" className="py-24 px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-3xl font-bold mb-16 text-center">Our Core Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{member.name}</h3>
                            <p className="text-sm font-medium text-accent mb-4">{member.role}</p>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
