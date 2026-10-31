"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, X, ArrowRight, ShieldCheck, Calendar, MessageSquare, Info } from "lucide-react";
import { siteConfig } from "@/content/site";
import { activateDialogFocus } from "@/lib/dialogFocus";

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

type ModalMode = "questions" | "qualified" | "declined";

export function PreQualModal({ isOpen, onClose, onConfirm }: PreQualModalProps) {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<ModalMode>("questions");
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || siteConfig.bookingUrl || "https://rakrilabs.zohobookings.in/#/421636000000040050";

  const resetAndClose = useCallback(() => {
    setStep(1);
    setMode("questions");
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

  const questions = [
    {
      q: "Is your investment budget at least $4,500?",
      options: ["Yes", "Not yet"]
    },
    {
      q: "Are you looking to ship within 60 days?",
      options: ["Yes", "No, just exploring"]
    }
  ];

  const handleSelect = (option: string) => {
    if (option === "Not yet" || option === "No, just exploring") {
      setMode("declined");
      return;
    }

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setMode("qualified");
    }
  };

  const handleDirectBookingClick = () => {
    if (onConfirm) onConfirm();
    resetAndClose();
  };

  const handleContactClick = () => {
    resetAndClose();
    router.push("/contact");
  };

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

            {mode === "questions" && (
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                    Sprint Pre-Qualification
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    {questions[step - 1].q}
                  </h2>
                  <p className="text-muted text-sm font-medium">
                    We take on a considered number of projects so each engagement receives focused engineering attention.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {questions[step - 1].options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className="flex items-center justify-between group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all text-left"
                    >
                      <span className="font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {option}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-cyan transition-all transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-white/40 font-mono">
                    Step {step} of {questions.length}
                  </span>
                  <div className="flex gap-2">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-1 rounded-full transition-all ${
                          i + 1 === step ? "bg-brand-cyan" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {mode === "qualified" && (
              <div className="space-y-6 py-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    Pre-Qualification Confirmed
                  </div>
                  <h2 id="modal-title" className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                    You&apos;re a great fit for a Sprint.
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    Your timeline and investment may fit our engineering process. We&apos;ll confirm scope, deliverables, and a realistic timeline during discovery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70 space-y-1">
                  <div className="font-semibold text-white">Direct Zoho Calendar Link:</div>
                  <div>30-minute technical discovery with founder &bull; Guaranteed non-sales engineering conversation.</div>
                </div>

                <div className="pt-2">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDirectBookingClick}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-cyan text-black font-bold hover:bg-brand-cyan/90 transition-all shadow-lg shadow-brand-cyan/20 group"
                  >
                    <Calendar className="w-5 h-5 text-black" />
                    <span>Schedule 30-Min Strategy Call</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[11px] text-center text-white/40 mt-3">
                    Direct calendar link opens in a new tab &bull; No popup blocker issues
                  </p>
                </div>
              </div>
            )}

            {mode === "declined" && (
              <div className="space-y-6 py-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  <Info className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h2 id="modal-title" className="text-2xl font-black text-white tracking-tight">
                    We might not be the best fit for an immediate sprint.
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    Our dedicated engineering projects require a minimum investment of $4,500 and a scoped delivery plan. Timelines depend on the work and its complexity.
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    If you have questions, need an architecture review, or want to discuss a custom scope, reach out through our contact form.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Project Brief</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-5 py-3 rounded-xl bg-transparent border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/20 transition-all text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
