"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, X, ArrowRight, Calendar, FileSearch, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/content/site";
import { offers, type OfferId } from "@/content/pricing";
import { activateDialogFocus } from "@/lib/dialogFocus";

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

type Step = "need" | "budget" | "ready";
type NeedId = OfferId | "unsure";
type BudgetId = "under-3k" | "3-6k" | "6-12k" | "12k-plus";

const budgetOptions: { id: BudgetId; label: string }[] = [
  { id: "under-3k", label: "Under $3,000" },
  { id: "3-6k", label: "$3,000 – $6,000" },
  { id: "6-12k", label: "$6,000 – $12,000" },
  { id: "12k-plus", label: "$12,000+" },
];

export function PreQualModal({ isOpen, onClose, onConfirm }: PreQualModalProps) {
  const [step, setStep] = useState<Step>("need");
  const [need, setNeed] = useState<NeedId | null>(null);
  const [budget, setBudget] = useState<BudgetId | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || siteConfig.bookingUrl || "https://rakrilabs.zohobookings.in/#/421636000000040050";

  const resetAndClose = useCallback(() => {
    setStep("need");
    setNeed(null);
    setBudget(null);
    onClose();
  }, [onClose]);

  const resetAndCloseRef = useRef(resetAndClose);

  useEffect(() => {
    resetAndCloseRef.current = resetAndClose;
  }, [resetAndClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    return activateDialogFocus(dialog, () => resetAndCloseRef.current());
  }, [isOpen]);

  const needOptions: { id: NeedId; label: string; hint: string }[] = [
    ...offers.map((offer) => ({ id: offer.id as NeedId, label: offer.label, hint: `from ${offer.startingPrice}` })),
    { id: "unsure", label: "Not sure yet", hint: "We'll help you work it out" },
  ];

  const handleNeed = (id: NeedId) => {
    setNeed(id);
    if (id === "build") {
      setStep("budget");
    } else {
      finish(id, null);
    }
  };

  const finish = (needId: NeedId, budgetId: BudgetId | null) => {
    setBudget(budgetId);
    setStep("ready");
    import("@/lib/analytics")
      .then((m) => m.trackEvent({ name: "booking_need_selected", props: { need: needId, budget: budgetId ?? "n/a" } }))
      .catch(() => {});
  };

  const handleDirectBookingClick = () => {
    if (onConfirm) onConfirm();
    resetAndClose();
  };

  const handleAuditClick = () => {
    resetAndClose();
    router.push("/#audit");
  };

  const smallBuildBudget = need === "build" && budget === "under-3k";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 lg:p-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="relative w-full max-w-xl bg-[#0A0A0A] rounded-[2.5rem] border border-white/10 p-8 lg:p-12 shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-purple ${shouldReduceMotion ? "" : "animate-pulse"}`} />

            <button
              onClick={resetAndClose}
              aria-label="Close dialog"
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {step === "need" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan">Book a free call</p>
                  <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    What do you need help with?
                  </h2>
                  <p className="text-muted text-sm">So Kumar can come to the call prepared. Every option leads to the calendar.</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {needOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleNeed(option.id)}
                      className="flex items-center justify-between gap-4 group p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      <span>
                        <span className="block font-bold text-white group-hover:text-brand-cyan transition-colors">{option.label}</span>
                        <span className="block text-xs text-muted/70 mt-0.5">{option.hint}</span>
                      </span>
                      <ArrowRight className="w-5 h-5 shrink-0 text-white/20 group-hover:text-brand-cyan transition-all transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "budget" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setStep("need")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white/50 hover:text-white"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back
                  </button>
                  <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    Roughly what budget do you have in mind?
                  </h2>
                  <p className="text-muted text-sm">A rough idea is fine. It helps us suggest the right size of first version.</p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {budgetOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => finish("build", option.id)}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all text-left font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => finish("build", null)}
                  className="text-sm font-bold text-white/60 underline-offset-4 hover:text-white hover:underline"
                >
                  Not sure yet, skip this
                </button>
              </div>
            )}

            {step === "ready" && (
              <div className="space-y-6 py-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>

                <div className="space-y-2">
                  <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                    Pick a time that suits you
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    A 30-minute call with Kumar. Tell us what you have and what you want, and you&apos;ll get a written scope and a fixed price afterwards. No pressure to go ahead.
                  </p>
                </div>

                {smallBuildBudget && (
                  <p className="rounded-xl border border-amber-300/25 bg-amber-300/[0.06] p-4 text-sm leading-relaxed text-amber-100">
                    Full builds start at {offers.find((o) => o.id === "build")?.startingPrice}, but let&apos;s still talk. We can often start with a smaller first version, or fix and extend something you already have.
                  </p>
                )}

                <div className="flex flex-col gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDirectBookingClick}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    <span>Pick a time</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                  {(need === "unsure" || need === "fix") && (
                    <button
                      type="button"
                      onClick={handleAuditClick}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white hover:bg-white/10 transition-all"
                    >
                      <FileSearch className="w-4 h-4" aria-hidden="true" />
                      Or get a free video audit instead, no call needed
                    </button>
                  )}
                  <p className="text-[11px] text-center text-white/40">The calendar opens in a new tab.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
