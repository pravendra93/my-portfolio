"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#" },
        { name: "Skills", href: "#skills" },
        { name: "Work", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white z-50">
                    PK<span className="text-accent">.</span>
                </Link>

                <nav className={cn(
                    "hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all text-sm font-medium",
                    scrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm" : ""
                )}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className={cn(
                        "md:hidden px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-black",
                        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    Contact
                </Link>
            </div>
        </motion.header>
    );
}
