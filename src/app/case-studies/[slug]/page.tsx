import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider, openCalendly } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { caseStudies } from "@/content/case-studies";
import { siteConfig, SITE_URL } from "@/content/site";
import { QuarterBadge } from "@/components/QuarterBadge";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ArrowLeft,
  ArrowRight,
  Server,
  Quote,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies
    .filter((cs) => cs.published)
    .map((cs) => ({
      slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((item) => item.slug === slug && item.published);

  if (!cs) {
    return { title: "Case Study Not Found" };
  }

  return generatePageMetadata({
    title: `${cs.title} — Case Study`,
    description: cs.summary,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((item) => item.slug === slug && item.published);

  if (!cs) {
    notFound();
  }

  const related = caseStudies
    .filter((item) => item.slug !== cs.slug && item.published)
    .slice(0, 2);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.summary,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/case-studies/${cs.slug}`,
    },
  };

  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
        />

        <Navigation />

        <article className="pt-36 pb-24 px-6 max-w-5xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
            </Link>
          </div>

          {/* Meta Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-cyan mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
                {cs.service}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">{cs.industry}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">{cs.region}</span>
              <span className="text-white/40">•</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-white/50">
                {cs.permission === "named" ? "Verified Client" : "Anonymised Client"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {cs.title}
            </h1>

            <p className="text-lg text-muted/90 leading-relaxed font-normal">
              {cs.summary}
            </p>
          </div>

          {/* Project Snapshot Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 mb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Client Profile</span>
              <span className="text-sm font-bold text-white block">{cs.clientLabel}</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Timeline</span>
              <span className="text-sm font-bold text-white block">{cs.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Team Deployed</span>
              <span className="text-sm font-bold text-white block">{cs.teamSize}</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Code Ownership</span>
              <span className="text-sm font-bold text-emerald-400 block">100% Client Transferred</span>
            </div>
          </div>

          {/* Results & Metrics Strip (shown only when present) */}
          {cs.metrics.length > 0 && (
            <div className="mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-brand-purple block mb-4">
                Measured Outcomes & Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cs.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs text-white/70 block mb-1">{metric.label}</span>
                      <span className="text-[9px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-white/5 text-white/40">
                        Source: {metric.source}
                      </span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-brand-cyan tracking-tight">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/5">
              <span className="text-xs font-black uppercase tracking-widest text-red-400/80 block mb-3">
                The Engineering Challenge
              </span>
              <h2 className="text-xl font-bold text-white mb-4">System Bottlenecks & Operational Drag</h2>
              <p className="text-sm text-muted/90 leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/5">
              <span className="text-xs font-black uppercase tracking-widest text-brand-cyan block mb-3">
                The Architecture Solution
              </span>
              <h2 className="text-xl font-bold text-white mb-4">Production-Grade Execution</h2>
              <p className="text-sm text-muted/90 leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </div>

          {/* Technical Architecture Flow Diagram */}
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5 text-brand-cyan" />
              <h2 className="text-xl font-bold text-white">System Architecture & Pipeline Flow</h2>
            </div>

            <div className="space-y-4">
              {cs.architectureSteps.map((step, stepIdx) => (
                <div key={step} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <span className="w-7 h-7 rounded-lg bg-brand-cyan/10 text-brand-cyan font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                    0{stepIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3">
              Technologies & Infrastructure Deployed
            </span>
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs font-mono font-bold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Quote (if provided) */}
          {cs.quote && (
            <div className="mb-16 p-8 rounded-3xl bg-white/[0.03] border border-brand-purple/30 relative">
              <Quote className="w-8 h-8 text-brand-purple/40 mb-4" />
              <p className="text-base sm:text-lg text-white/90 italic leading-relaxed mb-4">
                "{cs.quote.text}"
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <span className="text-sm font-bold text-white block">{cs.quote.author}</span>
                  <span className="text-xs text-brand-cyan">{cs.quote.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Contextual CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center mb-20">
            <QuarterBadge variant="compact" className="mb-3" />
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Planning a similar AI or MVP initiative?
            </h3>
            <p className="text-sm text-muted/90 max-w-lg mx-auto mb-6">
              Review your technical roadmap with our founding systems architect and get a concrete 30-day sprint scope.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Browse All Case Studies
              </Link>
            </div>
          </div>

          {/* Related Case Studies */}
          {related.length > 0 && (
            <div>
              <h4 className="text-lg font-bold text-white mb-6">More Engineering Case Studies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/${item.slug}`}
                    className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-white/15 transition-all group"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-bold block mb-2">{item.industry}</span>
                    <h5 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors mb-2">{item.title}</h5>
                    <p className="text-xs text-muted/70 line-clamp-2">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <Footer />
      </main>
    </>
  );
}
