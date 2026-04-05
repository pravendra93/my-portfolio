"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Impact } from "@/components/Impact";
import { Showcase } from "@/components/Showcase";
import { Process } from "@/components/Process";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";

import { CalendlyProvider } from "@/components/CalendlyProvider";
import { FounderProvider } from "@/components/FounderContext";
import { MouseAura } from "@/components/MouseAura";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <FounderProvider>
            <MouseAura />
            <main className="min-h-screen selection:bg-brand-purple/30 font-sans text-foreground bg-[#050505] overflow-x-hidden relative">
                <CalendlyProvider />
                
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.3, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="relative z-10 w-full flex flex-col items-center"
                >
                  <Navigation />
                  
                  <Hero />
                  
                  <div id="services">
                    <Services />
                  </div>
                  
                  <div id="impact">
                    <Impact />
                  </div>
                  
                  <div id="projects">
                    <Showcase />
                  </div>
                  
                  <div id="process">
                    <Process />
                  </div>
                  
                  <Engagement />
                  
                  <Footer />
                </motion.div>
            </main>
        </FounderProvider>
    );
}
