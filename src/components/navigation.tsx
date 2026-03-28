"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { openCalendly } from "./CalendlyProvider";

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
        { name: "Process", href: "#process" },
        { name: "Work", href: "#projects" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 z-50 group">
                    <span className="text-2xl font-bold tracking-tight text-white">
                        RakriLabs<span className="text-brand-cyan">.ai</span>
                    </span>
                </Link>

                <nav className={cn(
                    "hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all text-sm font-medium",
                    scrolled ? "glass shadow-xl" : ""
                )}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={openCalendly}
                    className={cn(
                        "hidden md:flex glow-border px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white transition-all",
                        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    Book Call
                </button>

                <Link
                    href="#contact"
                    className={cn(
                        "md:hidden px-4 py-2 rounded-full text-sm font-medium bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/50",
                        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    Contact
                </Link>
            </div>
        </motion.header>
    );
}
