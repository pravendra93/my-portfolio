import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and international data protection standards for RakriLabs.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
      <Navigation />

      <div className="pt-36 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-white/50 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-sm text-muted/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              {siteConfig.legalEntity} ("RakriLabs", "we", "us", or "our") respects your privacy and is committed to protecting the personal and proprietary information you share with us. This policy details how we collect, process, store, and safeguard data across our website ({siteConfig.domain}), software products, and consulting engagements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Data Handling for AI Sprints & Consulting</h2>
            <p>
              In our capacity as an AI engineering studio, we handle client code, documents, and technical specifications under strict confidentiality:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-white/80">
              <li><strong>Zero Foundation Model Training:</strong> We mandate commercial Zero Data Retention (ZDR) APIs with foundation model providers (OpenAI, Anthropic, AWS Bedrock). Your proprietary code and business documents are never used to train third-party models.</li>
              <li><strong>Client-Owned Repositories:</strong> Code is committed directly to client-owned GitHub or GitLab organizations under strict intellectual property assignment.</li>
              <li><strong>Mutual NDA:</strong> All technical discovery calls, codebase access, and project discussions are governed by comprehensive non-disclosure protections.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Information We Collect</h2>
            <p>
              When you submit an inquiry or book a strategy session, we collect:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-white/80">
              <li>Contact details: Name, work email address, company name, and geographic region.</li>
              <li>Project scope specifications: Budget range, desired delivery timeline, and technical challenges.</li>
              <li>Usage telemetry: Minimal, privacy-friendly server logs (IP address, browser type) used strictly for security monitoring and fraud prevention.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. GDPR & International Data Protection</h2>
            <p>
              For visitors and clients in the European Union, UK, Australia, and California, we comply with relevant privacy frameworks (GDPR, UK GDPR, Australian Privacy Principles, and CCPA/CPRA). You have the right to request access to, correction of, or permanent deletion of any personal data we hold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention & Security</h2>
            <p>
              We retain prospective inquiry records only as long as necessary to facilitate commercial discussions. All databases and secret keys are encrypted using AES-256 at rest and TLS 1.3 in transit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact & Data Protection Officer</h2>
            <p>
              For privacy inquiries, data deletion requests, or compliance documentation, contact our engineering office directly at{" "}
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
