"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Copy, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "founder@rakrilabs.com";

  // Use the Formspree React hook with your provided ID
  const [state, handleSubmit] = useForm("xojpjbya");

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 w-full mb-12 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Ready to <span className="text-gradient">build</span><br />
              the future?
            </h2>
            <p className="text-lg text-muted max-w-md">
              Whether you need to launch an MVP or rebuild legacy infrastructure into an AI-first system, we're your partner.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="flex items-center justify-center gap-2 group px-8 py-4 rounded-xl text-lg font-medium text-white transition-all overflow-hidden bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-medium text-muted hover:text-white glass glass-hover transition-all w-full sm:w-auto border border-white/10"
            >
              {copied ? (
                <span className="flex items-center gap-2 text-green-400"><CheckCircle2 className="w-5 h-5" /> Copied</span>
              ) : (
                <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-brand-purple" /> {email} <Copy className="w-4 h-4 ml-2 opacity-50" /></span>
              )}
            </button>
          </div>

          <div className="pt-8 flex gap-8 items-center border-t border-white/5">
            <div className="text-sm font-semibold text-white/40 tracking-widest uppercase">Trusted By</div>
            <div className="flex gap-4">
              <div className="h-6 w-20 bg-white/10 rounded-sm animate-pulse" />
              <div className="h-6 w-20 bg-white/10 rounded-sm animate-pulse delay-75" />
              <div className="h-6 w-20 bg-white/10 rounded-sm animate-pulse delay-150" />
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-2xl"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <h3 className="text-2xl font-semibold text-white mb-6">Request Callback</h3>

          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-muted font-medium uppercase tracking-wider ml-1" htmlFor="firstName">First Name</label>
                <input
                  required
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-white/10 shadow-inner"
                  placeholder="Satoshi"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted font-medium uppercase tracking-wider ml-1" htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 transition-all placeholder:text-white/10 shadow-inner"
                  placeholder="Nakamoto"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted font-medium uppercase tracking-wider ml-1" htmlFor="email">Email</label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 transition-all placeholder:text-white/10 shadow-inner"
                placeholder="satoshi@network.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted font-medium uppercase tracking-wider ml-1" htmlFor="message">Project Details</label>
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="w-full bg-[#111] border border-white/5 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-white/10 resize-none shadow-inner"
                placeholder="We need an AI agent that..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-300 mt-1" />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className={`w-full py-4 rounded-xl flex items-center justify-center font-semibold transition-all duration-300 ${state.succeeded
                  ? "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/50 border shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  : "bg-white text-[#0A0A0A] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                  }`}
              >
                {state.submitting ? (
                  <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Sending...</span>
                ) : state.succeeded ? (
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Request Sent!</span>
                ) : (
                  "Send Request"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
