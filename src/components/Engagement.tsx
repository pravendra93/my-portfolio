"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Loader2, CheckCircle2, ArrowRight, ShieldCheck, Clock, Globe } from "lucide-react";
import { openCalendly } from "./CalendlyProvider";
import { siteConfig } from "@/content/site";
import { QuarterBadge } from "./QuarterBadge";
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
          <Calendar className="w-3.5 h-3.5" /> Book a Discovery Call
        </div>
        <Heading className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
          Ready to Ship Your <span className="text-gradient">Flagship AI Roadmap?</span>
        </Heading>
        <p className="text-base sm:text-lg text-muted/90 max-w-xl mx-auto leading-relaxed">
          Discuss your technical specifications directly with RakriLabs. No salespeople, no delays.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Calendar & Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
            <QuarterBadge variant="pill" className="mb-6" />

            <h3 className="text-2xl font-bold text-white mb-2">Reserve Strategy Session</h3>
            <p className="text-sm text-muted/90 leading-relaxed mb-6">
              Pick a 20-minute slot to review your architecture, verify feasibility, and estimate your 30-day timeline.
            </p>

            <button
              onClick={openCalendly}
              className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>Schedule on Calendar</span>
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
                <span>Mutual NDA signed prior to code/PRD review.</span>
              </div>
            </div>
          </div>

          {/* Plain Contact Email */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Direct Engineering Inbox</span>
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

        {/* Right Column: Structured B2B Project Inquiry Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative">
          <h3 className="text-xl font-bold text-white mb-2">Send Project Brief</h3>
          <p className="text-xs text-muted/80 mb-6">Receive a technical response and feasibility estimate within 12 hours.</p>

          {isSuccess ? (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" aria-hidden="true" />
              <h4 className="text-2xl font-bold text-white">Inquiry sent successfully</h4>
              <p className="text-sm text-muted/90 max-w-md mx-auto leading-relaxed">
                Thank you! Your inquiry has been sent successfully. We&apos;ll get back to you soon.
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
                Send another inquiry
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
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="text-xs font-bold text-white/70 block mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="form-email"
                    required
                    type="email"
                    maxLength={254}
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-company" className="text-xs font-bold text-white/70 block mb-1.5">
                    Company / Website
                  </label>
                  <input
                    id="form-company"
                    type="text"
                    maxLength={200}
                    placeholder="Acme SaaS Inc."
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
                    Engagement Scope
                  </label>
                  <select
                    id="form-projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  >
                    <option value="30-Day AI MVP Sprint">30-Day AI MVP Sprint</option>
                    <option value="Autonomous AI Agent System">Autonomous AI Agent System</option>
                    <option value="Enterprise RAG Search Engine">Enterprise RAG Search Engine</option>
                    <option value="Voice AI & Telephony">Voice AI & Telephony</option>
                    <option value="Technical Architecture Review">Technical Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-budget" className="text-xs font-bold text-white/70 block mb-1.5">
                    Indicative Budget Range
                  </label>
                  <select
                    id="form-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                  >
                    <option value="$5k - $10k">$5k – $10k (Lean MVP Sprint)</option>
                    <option value="$10k - $25k">$10k – $25k (Production Agent System)</option>
                    <option value="$25k - $50k">$25k – $50k (Enterprise Scale)</option>
                    <option value="$50k+">$50k+ (Comprehensive Partnership)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="form-message" className="text-xs font-bold text-white/70 block mb-1.5">
                  Project Context / Technical Challenges
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  maxLength={5000}
                  placeholder="Share a high-level summary of what you need built, existing tech stack, or problem you want automated..."
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
                    <span>Transmitting Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
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
