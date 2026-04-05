"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { openCalendly } from "./CalendlyProvider";
import { useForm, ValidationError } from '@formspree/react';

export function Engagement() {
  const [state, handleSubmit] = useForm("xojpjbya");

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto relative z-10 w-full mb-12">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          Ready to <span className="text-gradient">Build?</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Whether you need a flagship AI product or high-leverage automation, we are your engineering partner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Call Selection */}
        <div className="space-y-8">
          <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-brand-purple/30 transition-all group">
            <Calendar className="w-10 h-10 text-brand-purple mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Book a Strategy Call</h3>
            <p className="text-sm text-muted mb-8">Discuss your roadmap directly with our founding engineering team.</p>
            <button 
              onClick={openCalendly}
              className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
            >
              Reserve Slot <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-4 px-6 text-[10px] font-black uppercase tracking-widest text-white/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Strictly 2 slots remaining for Q2 delivery
          </div>
        </div>

        {/* Message Form */}
        <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 relative overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />
            </div>
            
            <div className="space-y-2">
              <textarea
                required
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400" />
            </div>

            <button
              type="submit"
              disabled={state.submitting || state.succeeded}
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {state.submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : state.succeeded ? <><CheckCircle2 className="w-5 h-5" /> Sent</> : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
