"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function WaitlistModal({ isOpen, onClose, productName }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: productName }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to join waitlist. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl"
          >
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full -z-10" />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white/40" />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="text-center space-y-6 pt-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.1)]"
                >
                   <CheckCircle2 className="w-12 h-12 text-green-500" />
                </motion.div>
                <h2 className="text-4xl font-black text-white tracking-tighter">You're in 🚀</h2>
                <p className="text-muted text-lg font-medium leading-relaxed max-w-sm mx-auto">
                   Check your email. We've sent you the <span className="text-white">AI Strategy Blueprint</span> and your priority queue rank.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-6 rounded-3xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all mt-8 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] font-black uppercase tracking-widest">
                    {productName} Priority Queue
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                    Join Early <span className="text-gradient">Access Waitlist</span>
                  </h2>
                  <p className="text-muted text-base font-medium leading-relaxed">
                    Get priority access + our proprietary <span className="text-white underline decoration-brand-cyan/40">AI Strategy Blueprint</span> (PDF).
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-cyan transition-colors" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter founder email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/40 transition-all text-sm font-medium"
                    />
                  </div>

                  {status === "error" && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-black pl-2"
                    >
                      {errorMessage}
                    </motion.p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-white text-[#0A0A0A] font-black text-sm uppercase tracking-widest hover:bg-white/90 transition-all flex items-center justify-center gap-3 group/btn shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Join Priority Waitlist <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[10px] text-white/20 text-center font-bold uppercase tracking-[0.2em]">
                   10 slots remaining for founding members
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
