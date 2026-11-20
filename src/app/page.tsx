"use client";

import Link from "next/link";
import { ArrowRight, Check, Hammer, Wrench, Sparkles, MessageSquare, FileSearch, Rocket, Plus, UserRound, BadgeDollarSign, LifeBuoy } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { TestimonialStrip } from "@/components/TestimonialStrip";
import { Footer } from "@/components/Footer";
import { CalendlyProvider, openCalendly } from "@/components/CalendlyProvider";
import { FounderSection } from "@/components/FounderSection";
import { NivoraSimulator } from "@/components/NivoraSimulator";
import { AuditForm } from "@/components/AuditForm";
import { offers, foundingOffer, type OfferId } from "@/content/pricing";

const offerIcons: Record<OfferId, typeof Hammer> = {
  build: Hammer,
  fix: Wrench,
  ai: Sparkles,
};

const differentiators = [
  {
    icon: UserRound,
    title: "You talk to the person doing the work",
    description: "No account managers or hand-offs. Kumar scopes the work, builds it, and answers your messages directly.",
  },
  {
    icon: BadgeDollarSign,
    title: "The price is fixed before we start",
    description: "A written scope and one price. If something bigger turns up, we stop and ask before doing more.",
  },
  {
    icon: LifeBuoy,
    title: "We rescue apps others gave up on",
    description: "Built with Lovable, Bolt, Replit, or a freelancer who disappeared? We untangle it and you keep 100% of the code.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Free call or audit",
    description: "Tell us what you have and what you want. We look at your product or idea and tell you honestly what it needs.",
  },
  {
    icon: FileSearch,
    title: "Written scope, fixed price",
    description: "You get a short written plan: what we'll do, by when, and the price. Nothing starts until you agree.",
  },
  {
    icon: Rocket,
    title: "We ship, you own it",
    description: "We build or fix it, keep you updated in plain English, and hand over everything. Ongoing help is optional.",
  },
];

const homeFaqs = [
  {
    question: "I'm not technical. Is that a problem?",
    answer: "No. Most of the people we work with aren't. We explain everything in plain English and handle the technical decisions, hosting, and setup for you.",
  },
  {
    question: "Do I own the code and the product?",
    answer: "Yes, 100%. The code lives in your account from day one, and you can take it to any developer later.",
  },
  {
    question: "My app was built by someone else or with an AI tool. Can you still fix it?",
    answer: "Yes. We start with an audit, tell you what's wrong and what it will cost to fix, and only then start work.",
  },
  {
    question: "What if the fix turns out to be bigger than expected?",
    answer: "We stop and tell you before doing extra work. You decide whether to expand the scope. There are no surprise invoices.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, as an optional monthly plan once the project is done. Many clients keep us on for fixes and new features.",
  },
];

export default function Home() {
  return (
    <>
      <CalendlyProvider />

      <main className="min-h-screen selection:bg-brand-purple/30 font-sans text-foreground bg-[#050505] overflow-x-hidden relative">
        <div className="relative z-10 w-full flex flex-col items-center">
          <Navigation />
          <Hero />

          {/* Offers */}
          <section id="services" aria-labelledby="offers-title" className="scroll-mt-28 w-full max-w-7xl px-6 pb-12 pt-16 sm:pt-20">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-3">What we do</p>
              <h2 id="offers-title" className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Build it. Fix it. Add AI.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted/80">Three simple services with starting prices, so you know where you stand before the first call.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {offers.map((offer) => {
                const Icon = offerIcons[offer.id];
                return (
                  <div
                    key={offer.id}
                    id={`offer-${offer.id}`}
                    className="scroll-mt-28 flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 target:border-brand-cyan/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs text-muted/70">
                        from <span className="text-lg font-black text-white">{offer.startingPrice}</span>
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-white">{offer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted/80">{offer.summary}</p>
                    <ol aria-label={`What you get with ${offer.title}`} className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                      {offer.breakdown.map((item) => (
                        <li key={item.label} className="bg-[#0b0b0b] px-2.5 py-3 text-center">
                          <span className="block text-sm font-black text-white">{item.value}</span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-muted/70">{item.label}</span>
                        </li>
                      ))}
                    </ol>
                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/10 pt-5">
                      {offer.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2.5 text-sm text-white/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openCalendly}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      Book a call <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm text-muted/70">
              Full details and what&apos;s included:{" "}
              <Link href="/services#pricing" className="font-bold text-white hover:text-brand-cyan">
                see pricing <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </p>
          </section>

          {/* Differentiators */}
          <section aria-labelledby="why-title" className="w-full max-w-7xl px-6 py-12">
            <h2 id="why-title" className="mb-8 text-2xl sm:text-3xl font-black text-white tracking-tight">
              Three things you won&apos;t get from a big agency
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <item.icon className="h-6 w-6 text-brand-purple" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted/80">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Founding-client offer */}
          {foundingOffer.published && foundingOffer.spotsLeft > 0 && (
            <section id="founding" aria-labelledby="founding-title" className="scroll-mt-28 w-full max-w-7xl px-6 py-12">
              <div className="flex flex-col gap-8 rounded-3xl border border-amber-300/25 bg-amber-300/[0.04] p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[11px] font-black uppercase tracking-widest text-amber-200">Founding clients</p>
                  <h2 id="founding-title" className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    {foundingOffer.discount} off for our first {foundingOffer.spotsTotal} clients
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-muted/80">
                    RakriLabs is new as a studio, so we&apos;re trading a discount for honest feedback. This is a real limit, not a countdown timer.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {foundingOffer.terms.map((term) => (
                      <li key={term} className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" aria-hidden="true" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-4 md:items-center">
                  <div className="text-center">
                    <span className="block text-5xl font-black text-white">
                      {foundingOffer.spotsLeft}
                      <span className="text-2xl text-white/40">/{foundingOffer.spotsTotal}</span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted/70">spots left</span>
                  </div>
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-bold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    Claim a spot <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Try it live */}
          <section id="try-it" aria-labelledby="try-it-title" className="scroll-mt-28 w-full max-w-7xl px-6 py-16">
            <div className="max-w-2xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-brand-purple mb-3">Try it yourself</p>
              <h2 id="try-it-title" className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                See how AI could reply to your comments and DMs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted/80">
                This is a simulator from NivoraHQ, our own product for creators and brands. Pick a rule, edit the comment, and run it.
              </p>
            </div>
            <NivoraSimulator />
          </section>

          {/* Proof: NivoraHQ + case studies */}
          <div id="projects" className="scroll-mt-28 w-full">
            <Showcase />
          </div>

          {/* How it works */}
          <section id="process" aria-labelledby="process-title" className="scroll-mt-28 w-full max-w-7xl px-6 py-16">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-3">How it works</p>
              <h2 id="process-title" className="text-3xl sm:text-4xl font-black text-white tracking-tight">Three steps, no jargon</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm font-black text-brand-cyan">{i + 1}</span>
                    <step.icon className="h-5 w-5 text-white/50" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted/80">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <FounderSection />

          <TestimonialStrip />

          {/* Free audit */}
          <section id="audit" aria-labelledby="audit-title" className="scroll-mt-28 w-full max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 gap-10 rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/[0.06] to-brand-purple/[0.06] p-6 sm:p-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-3">Free product audit</p>
                <h2 id="audit-title" className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Send us your app or idea. Get a short video with what we&apos;d fix or build first.
                </h2>
                <ul className="mt-6 space-y-3">
                  {[
                    "A 3–5 minute screen recording of your actual product",
                    "The top issues or opportunities, in plain English",
                    "A rough price and timeline if you want us to do it",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-white/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted/70">
                  Prefer to talk?{" "}
                  <button onClick={openCalendly} className="font-bold text-white hover:text-brand-cyan">Book a free call</button>{" "}
                  or{" "}
                  <Link href="/contact" className="font-bold text-white hover:text-brand-cyan">use the contact form</Link>.
                </p>
              </div>
              <AuditForm />
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-title" className="scroll-mt-28 w-full max-w-3xl px-6 pb-24 pt-8">
            <h2 id="faq-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6 text-center">Common questions</h2>
            <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
              {homeFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-bold text-white">
                    {faq.question}
                    <Plus className="h-4 w-4 shrink-0 text-white/50 transition-transform group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
