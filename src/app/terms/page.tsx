import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms of service and engineering engagement agreements for RakriLabs.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
      <Navigation />

      <div className="pt-36 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-white/50 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-sm text-muted/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using {siteConfig.domain} or engaging {siteConfig.legalEntity} ("RakriLabs") for engineering consulting, AI development sprints, or software products (including Assistra and NivoraHQ), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Engineering Sprints & Intellectual Property</h2>
            <p>
              Unless otherwise specified in an executed Master Services Agreement (MSA) or Statement of Work (SOW):
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-white/80">
              <li><strong>Complete IP Assignment:</strong> Upon receipt of full payment for an agreed milestone or sprint, 100% of the custom software code, database models, and documentation created specifically for the client are assigned to the client.</li>
              <li><strong>Pre-Existing Tools:</strong> General-purpose libraries, open-source dependencies, and internal scaffolding utilized remain under their respective licenses or general studio toolkits.</li>
              <li><strong>Warranty:</strong> Custom sprint deliverables include a 14-day post-launch warranty period to correct any reproducible bugs against the agreed technical PRD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Fixed-Price Milestone Structure</h2>
            <p>
              Our 30-day sprints are scoped on transparent, fixed-price milestone schedules. Clients never face surprise billings or unapproved scope overages. Any material additions to the approved PRD are quoted as separate sprint phases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party AI APIs & Model Disclaimers</h2>
            <p>
              AI systems incorporate third-party foundation models and cloud infrastructure (such as OpenAI, Anthropic, AWS, or Google Cloud). While RakriLabs implements deterministic validation, guardrails, and citation verifications:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-white/80">
              <li>RakriLabs does not guarantee third-party API uptime, latency fluctuations outside our direct control, or upstream provider pricing changes.</li>
              <li>Clients are responsible for their own third-party API account keys, token usage expenses, and compliance with foundation model acceptable use policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall RakriLabs be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use our website, products, or custom code deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. For commercial contracts with overseas entities, standard international commercial arbitration or agreed neutral forum clauses in individual SOWs take precedence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
            <p>
              For legal inquiries regarding these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-cyan hover:underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
