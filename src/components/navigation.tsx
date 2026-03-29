"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { useFounderMode } from "./FounderContext";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isFounderMode, toggleFounderMode } = useFounderMode();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const links = [
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Work", href: "#projects" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full",
                    scrolled 
                        ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                        : "py-5 sm:py-6 bg-transparent"
                )}
            >
                {!scrolled && <div className="nav-gradient-blur" />}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 z-[110] relative">
                        <motion.span 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="text-lg sm:text-2xl font-black tracking-tighter text-white whitespace-nowrap"
                        >
                            RakriLabs<span className="text-brand-cyan">.ai</span>
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={cn(
                        "hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 text-[11px] font-black uppercase tracking-widest",
                        scrolled ? "glass shadow-[0_8px_30px_rgb(0,0,0,0.4)] border-white/10" : "bg-transparent border-transparent"
                    )}>
                        {links.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-all block"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-6">
                        {/* Founder Mode Toggle - Hidden on small mobile */}
                        <div className="hidden sm:flex items-center gap-3 glass-dark border border-white/5 px-4 py-1.5 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                            <span className={cn("text-[8px] font-black uppercase tracking-widest transition-colors", !isFounderMode ? "text-brand-cyan" : "text-white/20")}>Standard</span>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
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
                            </motion.button>
                            <span className={cn("text-[8px] font-black uppercase tracking-widest transition-colors", isFounderMode ? "text-brand-purple" : "text-white/20")}>Founder Mode</span>
                        </div>

                        {/* CTA Button - Desktop & Mobile (Compact version on mobile) */}
                        <motion.button
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={openCalendly}
                            className="glow-border px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest bg-white text-black hover:bg-white/90 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                        >
                            Book Call
                        </motion.button>

                        {/* Hamburger Menu Toggle */}
                        <motion.button 
                            whileTap={{ scale: 0.9 }}
                            className="lg:hidden z-[110] relative p-1.5 sm:p-2 text-white hover:bg-white/5 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[90] lg:hidden bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center items-center p-8"
                    >
                        {/* Background Decorative Gradients */}
                        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />

                        <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-3xl sm:text-4xl font-black text-white hover:text-brand-cyan transition-colors tracking-tighter block py-2"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: links.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full pt-8 flex flex-col gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        openCalendly();
                                    }}
                                    className="w-full py-5 rounded-2xl bg-white text-black text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-transform"
                                >
                                    Book Call <ArrowRight size={20} />
                                </motion.button>
                                
                                {/* Founder Mode Toggle for Mobile */}
                                <div className="sm:hidden flex items-center justify-between p-4 glass rounded-2xl border border-white/10 w-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Founder Mode</span>
                                    <motion.button 
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleFounderMode}
                                        className="w-12 h-6 rounded-full bg-white/5 border border-white/10 relative p-1 transition-all"
                                    >
                                        <motion.div 
                                            animate={{ x: isFounderMode ? 24 : 0 }}
                                            className={cn(
                                                "w-4 h-4 rounded-full",
                                                isFounderMode ? "bg-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.6)]" : "bg-white/40"
                                            )} 
                                        />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
