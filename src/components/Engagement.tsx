"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Mail, Loader2, CheckCircle2, ArrowRight, ShieldCheck, Clock, Globe } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { siteConfig } from "@/content/site";
import { offers, foundingOffer } from "@/content/pricing";
import { createInitialContactFormData, createSendAnotherInquiryState } from "@/lib/contactFormState";

interface EngagementProps {
  headingLevel?: "h1" | "h2";
}

export function Engagement({ headingLevel = "h2" }: EngagementProps) {
  const Heading = headingLevel;
  const [visitorTimezone, setVisitorTimezone] = useState<string>("UTC");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const submissionInFlight = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState(createInitialContactFormData);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setVisitorTimezone(tz);
    } catch {
      // fallback
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submissionInFlight.current) return;
    submissionInFlight.current = true;
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (json.success) {
        setIsSuccess(true);
        try {
          const { trackEvent } = await import("@/lib/analytics");
          trackEvent({
            name: "contact_form_submitted",
            props: { region: formData.region, projectType: formData.projectType },
          });
        } catch {}
      } else {
        setErrorMessage(json.error || "Failed to submit. Please email us directly.");
      }
    } catch {
      setErrorMessage("We couldn't send your inquiry just now. Your details are still here. Please try again.");
    } finally {
      submissionInFlight.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 px-6 max-w-6xl mx-auto relative z-10 w-full mb-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[11px] font-black uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5" /> Get in touch
        </div>
        <Heading className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          Tell us what you <span className="text-gradient">want to build or fix</span>
        </Heading>
        <p className="text-base sm:text-lg text-muted/90 max-w-xl mx-auto leading-relaxed">
          You&apos;ll hear back from Kumar directly, in plain English. No salespeople, no jargon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Calendar & Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
            {foundingOffer.published && foundingOffer.spotsLeft > 0 && (
              <Link
                href="/#founding"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200 hover:bg-amber-300/15"
              >
                Founding clients: {foundingOffer.discount} off · {foundingOffer.spotsLeft} of {foundingOffer.spotsTotal} spots left
              </Link>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">Book a free 30-minute call</h3>
            <p className="text-sm text-muted/90 leading-relaxed mb-6">
              Talk through your idea or your app. You&apos;ll get a written scope and a fixed price afterwards, with no pressure to go ahead.
            </p>

            <button
              onClick={openCalendly}
              className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>Pick a time</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Detected timezone: <strong className="text-white font-mono">{visitorTimezone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-purple shrink-0" />
                <span>{siteConfig.workingHoursNote}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Happy to sign an NDA before you share code or ideas.</span>
              </div>
            </div>
          </div>

          {/* Plain Contact Email */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Or email directly</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm font-mono text-white hover:text-brand-cyan transition-colors">
                {siteConfig.contactEmail}
              </a>
            </div>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Project inquiry form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative">
          <h3 className="text-xl font-bold text-white mb-2">Send a message</h3>
          <p className="text-xs text-muted/80 mb-6">We reply within one working day with next steps and a rough price.</p>

          {isSuccess ? (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" aria-hidden="true" />
              <h4 className="text-2xl font-bold text-white">Message sent</h4>
              <p className="text-sm text-muted/90 max-w-md mx-auto leading-relaxed">
                Thanks! Kumar will reply within one working day.
              </p>
              <button
                type="button"
                onClick={() => {
                  const resetState = createSendAnotherInquiryState();
                  setFormData(resetState.formData);
                  setErrorMessage(resetState.errorMessage);
                  setIsSuccess(resetState.isSuccess);
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot - hidden from real visitors */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_trap"
                  tabIndex={-1}
                  value={formData.website_trap}
                  onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="text-xs font-bold text-white/70 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="form-name"
                    required
                    type="text"
                    maxLength={120}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="text-xs font-bold text-white/70 block mb-1.5">
                    Email *
                  </label>
                  <input
                    id="form-email"
                    required
                    type="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-company" className="text-xs font-bold text-white/70 block mb-1.5">
                    Website, app, or social link
                  </label>
                  <input
                    id="form-company"
                    type="text"
                    maxLength={200}
                    placeholder="yourapp.com or @yourhandle"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-region" className="text-xs font-bold text-white/70 block mb-1.5">
                    Your Location / Region
                  </label>
                  <select
                    id="form-region"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  >
                    <option value="North America (US / Canada)">North America (US / Canada)</option>
                    <option value="Europe / United Kingdom">Europe / United Kingdom</option>
                    <option value="Middle East / Gulf (GCC)">Middle East / Gulf (GCC)</option>
                    <option value="Australia / New Zealand">Australia / New Zealand</option>
                    <option value="Asia / Other">Asia / Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-projectType" className="text-xs font-bold text-white/70 block mb-1.5">
                    What do you need?
                  </label>
                  <select
                    id="form-projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  >
                    {offers.map((offer) => (
                      <option key={offer.id} value={offer.label}>
                        {offer.label} (from {offer.startingPrice})
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-budget" className="text-xs font-bold text-white/70 block mb-1.5">
                    Rough budget
                  </label>
                  <select
                    id="form-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  >
                    <option value="Not sure">Not sure yet</option>
                    <option value="Under $1k">Under $1,000</option>
                    <option value="$1k - $3k">$1,000 – $3,000</option>
                    <option value="$3k - $6k">$3,000 – $6,000</option>
                    <option value="$6k+">$6,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="form-message" className="text-xs font-bold text-white/70 block mb-1.5">
                  What&apos;s going on?
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  maxLength={5000}
                  placeholder="e.g. My course site was built with Lovable and checkout fails on mobile. Or: I have 30k followers and want a paid community app."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all resize-none"
                />
              </div>

              {errorMessage && (
                <div role="alert" className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex flex-col gap-2">
                  <span>{errorMessage}</span>
                  <button
                    type="button"
                    onClick={() => formRef.current?.requestSubmit()}
                    disabled={isSubmitting}
                    className="self-start font-bold text-white underline underline-offset-2 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:opacity-60"
                  >
                    Try again
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
