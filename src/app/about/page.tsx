import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { siteConfig } from "@/content/site";
import { generatePageMetadata } from "@/lib/metadata";
import { QuarterBadge } from "@/components/QuarterBadge";
import {
  Globe2,
  CheckCircle2,
  Building,
  Target,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "About RakriLabs",
  description: "Learn how RakriLabs scopes and engineers AI systems, RAG workflows, integrations, and AI products for international B2B teams.",
  path: "/about",
});

export default function AboutPage() {
  const collaborationPractices = [
    {
      title: "Shared working windows",
      details: "We agree recurring live collaboration windows around the client team’s region, priorities, and project needs.",
    },
    {
      title: "Clear project updates",
      details: "Client communication is planned alongside engineering, with progress, decisions, and open questions made visible.",
    },
    {
      title: "Scope-led milestones",
      details: "Project checkpoints and review moments are agreed around the work, so decisions and dependencies stay visible across time zones.",
    },
  ];

  const engineeringValues = [
    {
      title: "Scope before build",
      description: "We define the problem, dependencies, deliverables, and acceptance criteria before agreeing to a delivery plan.",
    },
    {
      title: "Thoughtful system boundaries",
      description: "Model providers, data access, hosting choices, and retention requirements are discussed during scoping and documented for the engagement.",
    },
    {
      title: "Practical engineering",
      description: "We choose approaches that fit the existing product and workflow, including typed interfaces, validation, and review steps where appropriate.",
    },
    {
      title: "Delivery with a handoff in mind",
      description: "Testing, documentation, and operating context are planned as part of delivery, with the handoff agreed to match the project scope.",
    },
  ];

  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />

        <div className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[11px] font-black uppercase tracking-widest mb-4">
              <Building className="w-3.5 h-3.5" /> AI Engineering Studio
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Practical AI Engineering for <span className="text-gradient">B2B Teams</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted/90 leading-relaxed font-normal">
              We work with international B2B product and operations teams to scope and build custom AI systems, RAG workflows, integrations, and AI products—with clear deliverables and communication from discovery through handoff.
            </p>
          </div>

          {/* Mission & Who We Help */}
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-brand-purple block mb-2">Our Mission</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  Practical AI, grounded in the work that needs to get done.
                </h2>
                <p className="text-sm sm:text-base text-muted/80 leading-relaxed mb-6">
                  We start with a specific business problem and the systems around it. The right approach may be a RAG workflow, an agent, a product feature, or a conventional integration.
                </p>
                <p className="text-sm sm:text-base text-muted/80 leading-relaxed">
                  Together, we define success measures and scope first, then build, validate, and prepare a delivery that fits the product and its operating needs.
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-white/40 block">Who We Build For:</span>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Seed & Series A B2B SaaS Founders</strong>
                    <span className="text-xs text-muted/70">Who need to ship their flagship AI differentiator or automated workflows to accelerate runway.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Enterprise Operations & Product Teams</strong>
                    <span className="text-xs text-muted/70">Looking to eliminate high-volume manual triage, document search, or customer back-office friction.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Technical Founders Needing Velocity</strong>
                    <span className="text-xs text-muted/70">Who want to pair-program with seasoned systems engineers who write clean TypeScript and Python.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The RakriLabs Approach */}
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan mb-2 block">The RakriLabs Approach</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                From business problem to scoped engineering
              </h2>
              <p className="text-sm text-muted/80 max-w-2xl mx-auto mt-3 leading-relaxed">
                We clarify the business problem and surrounding systems, evaluate whether AI is a fit, then agree deliverables and acceptance criteria before building. Testing, documentation, and handoff are planned to match the project scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Understand the work", description: "Map the business problem, existing workflow, dependencies, and constraints before choosing an approach." },
                { title: "Scope before build", description: "Agree deliverables, assumptions, milestones, and acceptance criteria before development starts." },
                { title: "Validate and hand off", description: "Build and review against the agreed scope, with documentation and operating context planned for delivery." },
              ].map((step) => (
                <div key={step.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-brand-cyan mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-muted/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* International Collaboration Model */}
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-[11px] font-bold uppercase tracking-widest mb-3">
                <Globe2 className="w-3.5 h-3.5" /> International Collaboration
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-3">
                Clear communication across time zones
              </h2>
              <p className="text-sm text-muted/80 leading-relaxed">
                We agree practical meeting windows and update rhythms around each client team, combining live collaboration with written project context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collaborationPractices.map((practice) => (
                <div key={practice.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-sm font-bold text-white mb-2">{practice.title}</h3>
                  <p className="text-xs text-muted/70 leading-relaxed">{practice.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Standards */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple mb-2 block">Values & Standards</span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                How We Approach Engineering
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {engineeringValues.map((val) => (
                <div key={val.title} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-brand-cyan mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-muted/80 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Legal Entity & Location Summary */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white/[0.015] border border-white/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Company Details</span>
              <h4 className="text-lg font-bold text-white">{siteConfig.legalEntity}</h4>
              <p className="text-xs text-muted/70 mt-1">
                Registered in {siteConfig.registeredOffice} • Serving clients across North America, Europe, Gulf & Australia.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <QuarterBadge variant="compact" />
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shrink-0"
              >
                Book Sprint Call
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
