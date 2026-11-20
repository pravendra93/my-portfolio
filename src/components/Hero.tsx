"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Hammer, Wrench, Sparkles, Link2 } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { requestAudit } from "./AuditForm";
import { offers, foundingOffer, type OfferId } from "@/content/pricing";

const offerIcons: Record<OfferId, typeof Hammer> = {
  build: Hammer,
  fix: Wrench,
  ai: Sparkles,
};

const proofPoints = [
  { value: "12+ yrs", label: "Building web products" },
  { value: "Fixed", label: "Price before we start" },
  { value: "100%", label: "Code ownership" },
  { value: "Direct", label: "Work with the founder" },
];

export function Hero() {
  const [url, setUrl] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    requestAudit({ url: url.trim() });
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-36 pb-20 px-6 max-w-6xl mx-auto text-center">
      <div className="flex flex-col items-center gap-6 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-widest text-white/80">
          <span className="w-2 h-2 rounded-full bg-brand-cyan" aria-hidden="true" />
          <span>For creators, founders &amp; entrepreneurs</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] text-balance max-w-5xl">
          You bring the idea. We <span className="text-gradient">build it, fix it</span>, and make it smarter with AI.
        </h1>

        <p className="text-lg sm:text-xl text-muted/90 max-w-2xl mx-auto leading-relaxed text-balance font-normal">
          A small product studio for people with an audience or an idea, and a product that needs to ship, work properly, or do more.
        </p>

        {/* Primary action: paste a link, get a free audit */}
        <div className="mt-2 w-full max-w-2xl">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.04] p-2 shadow-[0_10px_35px_rgba(255,255,255,0.06)] sm:flex-row"
          >
            <label htmlFor="hero-audit-url" className="sr-only">Link to your app or website</label>
            <div className="flex flex-1 items-center gap-2 px-3">
              <Link2 className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
              <input
                id="hero-audit-url"
                type="text"
                inputMode="url"
                required
                maxLength={200}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your app or website link"
                className="w-full bg-transparent py-3 text-base text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              Get my free audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <p className="mt-3 text-sm text-muted/80">
            A short video of what we&apos;d fix or build first, <span className="text-white">within 48 hours</span>. No card, no call.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
            <button type="button" onClick={() => requestAudit({ noApp: true })} className="font-bold text-white/80 underline-offset-4 hover:text-white hover:underline">
              I don&apos;t have an app yet
            </button>
            <span className="hidden text-white/20 sm:inline" aria-hidden="true">·</span>
            <button type="button" onClick={openCalendly} className="font-bold text-white/80 underline-offset-4 hover:text-white hover:underline">
              Book a free call instead
            </button>
          </div>
          {foundingOffer.published && foundingOffer.spotsLeft > 0 && (
            <a
              href="#founding"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200 hover:bg-amber-300/15"
            >
              Founding clients: {foundingOffer.discount} off · {foundingOffer.spotsLeft} of {foundingOffer.spotsTotal} spots left
            </a>
          )}
        </div>

        {/* Three entry points: each jumps to its offer card */}
        <div className="mt-6 w-full max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Or pick what you need</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {offers.map((offer) => {
              const Icon = offerIcons[offer.id];
              return (
                <a
                  key={offer.id}
                  href={`#offer-${offer.id}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition-colors hover:border-brand-cyan/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-cyan" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-bold text-white">{offer.label}</span>
                      <span className="block text-xs text-muted/70">from {offer.startingPrice}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/5 w-full max-w-3xl">
          {proofPoints.map((point) => (
            <div key={point.label} className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-black text-white">{point.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted/80 font-bold mt-1">{point.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-purple/10 blur-[160px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
}
