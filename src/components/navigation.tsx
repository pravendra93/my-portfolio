"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Bot, MessageSquare } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { siteConfig } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { nivoraHQProduct } from "@/content/products/nivorahq";
import { activateDialogFocus } from "@/lib/dialogFocus";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!isMenuOpen || !menu) return;
    return activateDialogFocus(menu, () => setIsMenuOpen(false));
  }, [isMenuOpen]);

  const hasPublishedCaseStudies = caseStudies.some((cs) => cs.published);

  const mainLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/services#process" },
    ...(hasPublishedCaseStudies ? [{ name: "Work", href: "/case-studies" }] : []),
    { name: "Insights", href: "/insights/from-powerful-llms-to-intelligent-workflows" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full",
          scrolled
            ? "py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-5 sm:py-6 bg-transparent"
        )}
      >
        {!scrolled && <div className="nav-gradient-blur" />}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-[110] relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-white/90 transition-colors">
              {siteConfig.name}
              <span className="text-brand-cyan text-sm sm:text-base font-bold ml-0.5"> studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className={cn(
              "hidden lg:flex items-center gap-1 rounded-full px-3 py-1.5 transition-all duration-300 text-xs font-bold tracking-wide",
              scrolled
                ? "glass shadow-[0_8px_30px_rgb(0,0,0,0.4)] border-white/10"
                : "bg-white/[0.03] border border-white/5"
            )}
          >
            <Link
              href="/services"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              Services
            </Link>

            <Link
              href="/services#process"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              Process
            </Link>

            {hasPublishedCaseStudies && (
              <Link
                href="/case-studies"
                className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                Work
              </Link>
            )}

            <Link
              href="/insights/from-powerful-llms-to-intelligent-workflows"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              Insights
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
                className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-expanded={isProductsDropdownOpen}
              >
                Products <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isProductsDropdownOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl bg-[#0c0c0e] border border-white/10 shadow-2xl backdrop-blur-2xl z-[120]"
                  >
                    <Link
                      href="/products/assistra"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple mt-0.5 group-hover:scale-105 transition-transform">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          Assistra <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400/15 text-amber-300 uppercase">Coming Soon</span>
                        </div>
                        <p className="text-xs text-muted/70 leading-relaxed mt-0.5">AI Knowledge Assistant</p>
                      </div>
                    </Link>

                    <Link
                      href="/products/nivorahq"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group mt-1"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mt-0.5 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          NivoraHQ <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 uppercase">{nivoraHQProduct.statusBadge}</span>
                        </div>
                        <p className="text-xs text-muted/70 leading-relaxed mt-0.5">Keyword Auto-Reply Engine</p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCalendly}
              className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-white text-black hover:bg-white/90 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Book Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[95] lg:hidden bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-center px-8 py-16"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-24 rounded-full p-3 text-white/70 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <X size={22} />
            </button>
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-brand-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="w-full my-2 h-px bg-white/10" />

              <div className="w-full text-left space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block text-center">Products</span>
                <Link
                  href="/products/assistra"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 text-white"
                >
                  <span className="font-bold text-sm">Assistra (AI Knowledge Assistant)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">Coming Soon</span>
                </Link>
                <Link
                  href="/products/nivorahq"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 text-white"
                >
                  <span className="font-bold text-sm">NivoraHQ (Keyword Reply)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">{nivoraHQProduct.statusBadge}</span>
                </Link>
              </div>

              <div className="w-full pt-4">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openCalendly();
                  }}
                  className="w-full py-4 rounded-xl bg-white text-black text-sm font-bold flex items-center justify-center gap-2"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
