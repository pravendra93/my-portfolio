import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TrustSecurity } from "@/components/TrustSecurity";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Engineering Services and Process",
  description: "Explore RakriLabs engineering capabilities, delivery process, project-level security planning, engagement options, and common questions.",
  path: "/services",
});

const sections = [
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Security", href: "#trust" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export default function ServicesPage() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />
        <header className="px-6 pt-36 pb-10 max-w-5xl mx-auto text-center">
          <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-4">Engineering services</p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-5">A clear path from problem to delivery</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-muted/90">
            Explore the capabilities, working process, project-level considerations, and engagement options that help define a suitable scope.
          </p>
          <nav aria-label="Services page sections" className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <Link key={section.href} href={section.href} className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">
                {section.label}
              </Link>
            ))}
          </nav>
        </header>

        <Services />
        <Process />
        <TrustSecurity />
        <PricingSection />
        <FAQSection />

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Link href="/contact" className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">
            <span>
              <span className="block text-xl font-bold text-white">Discuss your project</span>
              <span className="mt-1 block text-sm text-muted/80">Share your requirements through the contact page.</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">Contact RakriLabs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </div>

        <Footer />
      </main>
    </>
  );
}
