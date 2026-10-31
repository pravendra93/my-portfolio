import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { nivoraHQProduct } from "@/content/products/nivorahq";
import { NivoraSimulator } from "@/components/NivoraSimulator";
import { generatePageMetadata } from "@/lib/metadata";
import { QuarterBadge } from "@/components/QuarterBadge";
import {
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Radio,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "NivoraHQ — Social Media Keyword Auto-Reply Engine",
  description: "Automate prompt-driven replies on social media triggered by specific keywords with human-in-the-loop approval and official API compliance.",
  path: "/products/nivorahq",
});

export default function NivoraHQProductPage() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />

        <div className="pt-36 pb-24 px-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-black uppercase tracking-widest mb-4">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> {nivoraHQProduct.statusBadge}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Keyword Auto-Reply for <span className="text-gradient">Social Media Pipeline</span>
            </h1>

            <p className="text-lg text-muted/90 leading-relaxed font-normal mb-8">
              {nivoraHQProduct.heroSummary}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#simulator"
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Try Interactive Simulator</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Request Early Access Pilot
              </Link>
            </div>
          </div>

          {/* Interactive Simulator Section */}
          <section className="mb-24">
            <NivoraSimulator />
          </section>

          {/* How It Works (5 Steps) */}
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-brand-cyan block mb-2">Workflow</span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                How NivoraHQ Works
              </h2>
              <p className="text-xs text-muted/80 mt-1">
                Five simple steps from official account authentication to automated revenue conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {nivoraHQProduct.howItWorksSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-white/[0.015] border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-7 h-7 rounded-lg bg-brand-cyan/10 text-brand-cyan font-mono text-xs flex items-center justify-center font-bold mb-4">
                      0{step.step}
                    </span>
                    <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-muted/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rule Library Showcase */}
          <section className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-brand-purple block mb-2">Rule Templates</span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Pre-Configured Rule Library
              </h2>
              <p className="text-xs text-muted/80 mt-1">
                Tailor prompt instructions and guardrails to specific commercial customer intents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nivoraHQProduct.ruleTemplates.map((template) => (
                <div
                  key={template.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                        {template.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        Mode: {template.defaultMode}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>

                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">
                        Trigger Keywords:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {template.keywords.map((kw) => (
                          <span key={kw} className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-white/70">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#09090c] border border-white/5 mb-4 text-xs text-muted/80 leading-relaxed">
                      <span className="text-[9px] font-mono uppercase text-brand-cyan block mb-1">Prompt Instruction:</span>
                      "{template.systemPrompt}"
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-white/60">Sample reply verified</span>
                    <a
                      href="#simulator"
                      className="text-xs text-brand-cyan hover:underline font-bold"
                    >
                      Test in Simulator →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Safety & Guardrails Section */}
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <h2 className="text-2xl font-black text-white">Commercial Safety & Guardrails</h2>
                <p className="text-xs text-muted/80">Protect your brand voice and account standing with multi-tier safeguards.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nivoraHQProduct.guardrails.map((guard) => (
                <div key={guard.title} className="p-5 rounded-2xl bg-white/[0.015] border border-white/5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {guard.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">{guard.title}</h3>
                  <p className="text-xs text-muted/70 leading-relaxed">{guard.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Platform Policy & Compliance Note (Rule 3.5 requirement) */}
          <section className="mb-24 p-8 sm:p-10 rounded-3xl bg-amber-500/[0.03] border border-amber-500/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {nivoraHQProduct.platformComplianceDisclaimer.title}
                </h3>
                <p className="text-xs text-muted/90 leading-relaxed mb-4">
                  {nivoraHQProduct.platformComplianceDisclaimer.notice}
                </p>
                <ul className="space-y-2">
                  {nivoraHQProduct.platformComplianceDisclaimer.points.map((pt) => (
                    <li key={pt} className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-[11px] font-black uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> NivoraHQ FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Common Questions on Social Automation
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {nivoraHQProduct.faq.map((item) => (
                <div key={item.question} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                  <p className="text-xs text-muted/80 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Early Access / Waitlist Form */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <QuarterBadge variant="compact" className="mb-3" />
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Request NivoraHQ Early Access
            </h3>
            <p className="text-sm text-muted/80 max-w-md mx-auto mb-6">
              Connect with our product engineers to configure custom keyword rules and pilot NivoraHQ for your accounts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all"
              >
                Request Pilot Access
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
