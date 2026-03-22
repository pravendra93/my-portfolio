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
        { name: "Services", href: "#services" },
        { name: "Team", href: "#team" },
        { name: "Work", href: "#projects" },
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
                <Link href="/" className="flex items-center gap-3 z-50 group">
                    <div className="relative w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 border border-accent/20">
                        <img 
                            src="/logo.png" 
                            alt="RakriLabs.ai Logo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Rakri<span className="text-accent">Labs.ai</span>
                    </span>
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
