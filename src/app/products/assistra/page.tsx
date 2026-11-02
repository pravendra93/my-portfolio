import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { MouseAura } from "@/components/MouseAura";
import { assistraProduct } from "@/content/products/assistra";
import { generatePageMetadata } from "@/lib/metadata";
import { ArrowRight, Bot } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Assistra — AI Knowledge Assistant · Coming Soon",
  description: "Assistra is an upcoming organizational knowledge assistant. Read the engineering case study and its clearly labeled project-brief architecture.",
  path: "/products/assistra",
});

export default function AssistraProductPage() {
  return (
    <>
      <MouseAura />
      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />
        <section className="px-6 pt-36 pb-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-amber-300">
              <Bot className="h-3.5 w-3.5" aria-hidden="true" /> Coming Soon
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{assistraProduct.name}: <span className="text-gradient">AI Knowledge Assistant</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted/90 sm:text-lg">{assistraProduct.description}</p>
            <Link href="/case-studies/assistra-knowledge-assistant" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">
              Read the engineering case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-white/45">The case study explains the architecture described in the project brief. It does not represent verified implementation or a deployed product.</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
