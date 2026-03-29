"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { openCalendly } from "./CalendlyProvider";
import { useFounderMode } from "./FounderContext";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const { isFounderMode, toggleFounderMode } = useFounderMode();

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
        { name: "Planner", href: "#planner" },
        { name: "Work", href: "#projects" },
        { name: "Lab", href: "#lab" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full",
                scrolled 
                    ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                    : "py-6 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 z-50 group">
                    <span className="text-2xl font-black tracking-tighter text-white">
                        RakriLabs<span className="text-brand-cyan">.ai</span>
                    </span>
                </Link>

                <nav className={cn(
                    "hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all text-[11px] font-black uppercase tracking-widest",
                    scrolled ? "glass shadow-xl" : ""
                )}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                   {/* Founder Mode Toggle */}
                   <div className="hidden md:flex items-center gap-3 glass-dark border border-white/5 px-4 py-1.5 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                      <span className={cn("text-[8px] font-black uppercase tracking-widest transition-colors", !isFounderMode ? "text-brand-cyan" : "text-white/20")}>Standard</span>
                      <button 
                        onClick={toggleFounderMode}
                        className="w-10 h-5 rounded-full bg-white/5 border border-white/10 relative p-1 group hover:border-brand-purple transition-all shadow-inner"
                      >
                         <motion.div 
                           animate={{ x: isFounderMode ? 20 : 0 }}
                           className={cn(
                             "w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                             isFounderMode ? "bg-brand-purple shadow-brand-purple/50" : "bg-white/40"
                           )} 
                         />
                      </button>
                      <span className={cn("text-[8px] font-black uppercase tracking-widest transition-colors", isFounderMode ? "text-brand-purple" : "text-white/20")}>Founder Mode</span>
                   </div>

                   <button
                        onClick={openCalendly}
                        className="glow-border px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest bg-white/5 border border-white/10 hover:bg-white text-white hover:text-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                   >
                        Book Call
                   </button>
                </div>

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
