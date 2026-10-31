"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/content/site";
import { QuarterBadge } from "./QuarterBadge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#050505] border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div className="flex flex-col gap-2 max-w-md">
            <Link href="/" className="text-xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted/80 leading-relaxed">
              AI engineering studio building custom agents, RAG systems, AI products, and workflow integrations for international B2B teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <QuarterBadge variant="compact" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Capabilities</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/services#services" className="hover:text-white transition-colors">AI Agents & Workflows</Link></li>
              <li><Link href="/services#services" className="hover:text-white transition-colors">Enterprise RAG Systems</Link></li>
              <li><Link href="/services#process" className="hover:text-white transition-colors">AI Product Development</Link></li>
              <li><Link href="/services#pricing" className="hover:text-white transition-colors">Indicative Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Products</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/products/assistra" className="hover:text-white transition-colors">Assistra (AI Knowledge Assistant · Coming Soon)</Link></li>
              <li><Link href="/products/nivorahq" className="hover:text-white transition-colors">NivoraHQ (Keyword Reply)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About RakriLabs</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/insights/from-powerful-llms-to-intelligent-workflows" className="hover:text-white transition-colors">AI Workflow Engineering</Link></li>
              <li><Link href="/services#trust" className="hover:text-white transition-colors">Security & Trust</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Connect</h4>
            <div className="flex items-center gap-3 mt-1">
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted/60 mt-4">
              Direct inquiries:<br />
              <a href={`mailto:${siteConfig.email}`} className="text-brand-cyan hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-muted/60">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved. Registered in {siteConfig.registeredOffice}.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
