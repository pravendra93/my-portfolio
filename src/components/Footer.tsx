"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative bg-[#050505]">
      {/* Gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <span className="text-xl font-bold tracking-tight text-white">RakriLabs<span className="text-brand-cyan">.ai</span></span>
          <p className="text-sm text-muted font-medium">Building AI-native companies.</p>
        </motion.div>

        <div className="flex items-center gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); console.log('Navigating to Twitter'); }} className="text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); console.log('Navigating to LinkedIn'); }} className="text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); console.log('Navigating to Github'); }} className="text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Github className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-muted/60 text-center md:text-right">
          © {new Date().getFullYear()} RakriLabs. All rights reserved.<br />
          <span onClick={() => console.log('Opened Privacy Policy')} className="hover:text-white cursor-pointer transition-colors">Privacy</span> • <span onClick={() => console.log('Opened Terms')} className="hover:text-white cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}
