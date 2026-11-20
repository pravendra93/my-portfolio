"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { offers, type OfferId } from "@/content/pricing";

/** Fired by the hero link box so the audit form can be prefilled. */
export const AUDIT_PREFILL_EVENT = "rakrilabs:audit-prefill";

export interface AuditPrefillDetail {
  url?: string;
  noApp?: boolean;
}

export function requestAudit(detail: AuditPrefillDetail) {
  window.dispatchEvent(new CustomEvent<AuditPrefillDetail>(AUDIT_PREFILL_EVENT, { detail }));
  document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-brand-cyan/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30";

export function AuditForm() {
  const [noApp, setNoApp] = useState(false);
  const [url, setUrl] = useState("");
  const [need, setNeed] = useState<OfferId>("fix");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<AuditPrefillDetail>).detail ?? {};
      if (detail.noApp) {
        setNoApp(true);
        setNeed("build");
      } else if (detail.url) {
        setNoApp(false);
        setUrl(detail.url);
      }
      window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500);
    };
    window.addEventListener(AUDIT_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(AUDIT_PREFILL_EVENT, onPrefill);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const needLabel = offers.find((offer) => offer.id === need)?.label ?? need;
    const message = [
      noApp ? "Product link: none yet (idea stage)" : `Product link: ${url.trim()}`,
      `Wants: ${needLabel}`,
      "",
      details.trim() || "No extra details.",
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: noApp ? "" : url.trim().slice(0, 200),
          projectType: `Free audit: ${needLabel}`,
          message,
          website_trap: trap,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string };
      if (!response.ok || !result.success) throw new Error(result.error || "Something went wrong. Please try again.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-6">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" aria-hidden="true" />
        <p className="text-lg font-bold text-white">Got it. Your audit is on its way.</p>
        <p className="text-sm text-muted/80">
          You&apos;ll get a short video from Kumar at <span className="text-white">{email}</span> within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4" noValidate={false}>
      {/* Honeypot: hidden from people, filled by bots */}
      <input
        type="text"
        name="website_trap"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {noApp ? (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="audit-details" className="text-xs font-bold uppercase tracking-widest text-white/60">
            Your idea
          </label>
          <textarea
            id="audit-details"
            required
            rows={3}
            maxLength={4000}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. A paid community for my 20k Instagram followers, with weekly live sessions"
            className={inputClass}
          />
          <button type="button" onClick={() => setNoApp(false)} className="self-start text-xs text-muted/70 hover:text-white">
            I have a link after all
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="audit-url" className="text-xs font-bold uppercase tracking-widest text-white/60">
            Link to your app or website
          </label>
          <input
            id="audit-url"
            type="text"
            inputMode="url"
            required
            maxLength={200}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourapp.com"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => {
              setNoApp(true);
              setNeed("build");
            }}
            className="self-start text-xs text-muted/70 hover:text-white"
          >
            I don&apos;t have an app yet
          </button>
        </div>
      )}

      <fieldset className="flex flex-col gap-1.5">
        <legend className="mb-1.5 text-xs font-bold uppercase tracking-widest text-white/60">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {offers.map((offer) => (
            <label
              key={offer.id}
              className={`cursor-pointer rounded-lg border px-3 py-2 text-sm font-bold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-cyan ${
                need === offer.id
                  ? "border-brand-cyan/60 bg-brand-cyan/10 text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              <input
                type="radio"
                name="audit-need"
                value={offer.id}
                checked={need === offer.id}
                onChange={() => setNeed(offer.id)}
                className="sr-only"
              />
              {offer.label}
            </label>
          ))}
        </div>
      </fieldset>

      {!noApp && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="audit-notes" className="text-xs font-bold uppercase tracking-widest text-white/60">
            Anything we should know? <span className="normal-case tracking-normal text-white/35">(optional)</span>
          </label>
          <textarea
            id="audit-notes"
            rows={2}
            maxLength={4000}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g. Checkout fails on mobile since last week"
            className={inputClass}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="audit-name" className="text-xs font-bold uppercase tracking-widest text-white/60">Your name</label>
          <input
            id="audit-name"
            ref={nameRef}
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="audit-email" className="text-xs font-bold uppercase tracking-widest text-white/60">Email</label>
          <input
            id="audit-email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-bold text-black transition-colors hover:bg-white/90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Get my free audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="text-xs text-muted/60">No card, no call, no obligation. We reply within 48 hours.</p>
    </form>
  );
}
