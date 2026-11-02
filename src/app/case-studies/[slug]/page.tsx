import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { caseStudies } from "@/content/case-studies";
import { siteConfig, SITE_URL } from "@/content/site";
import { QuarterBadge } from "@/components/QuarterBadge";
import { EngineeringFlow } from "@/components/EngineeringFlow";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ArrowLeft,
  Server,
  Quote,
  ExternalLink,
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

  const snapshot = [
    { label: cs.projectKind === "RakriLabs product" ? "Project" : "Client", value: cs.clientLabel },
    ...(cs.timeline ? [{ label: "Timeline", value: cs.timeline }] : []),
    ...(cs.teamSize ? [{ label: "Team", value: cs.teamSize }] : []),
    ...(cs.projectStatus ? [{ label: "Status", value: cs.projectStatus }] : []),
  ];

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
              {cs.region !== "Not specified" && (
                <>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{cs.region}</span>
                </>
              )}
              <span className="text-white/40">•</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-white/50">
                {cs.projectKind === "RakriLabs product"
                  ? "RakriLabs Product"
                  : cs.permission === "named" ? "Named Client Project" : "Anonymised Client Project"}
              </span>
              {cs.projectStatus && (
                <span className={`px-2.5 py-1 rounded-full border text-[10px] ${cs.projectStatus === "Coming Soon" ? "border-amber-400/20 bg-amber-400/10 text-amber-300" : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"}`}>
                  {cs.projectStatus}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {cs.title}
            </h1>

            <p className="text-lg text-muted/90 leading-relaxed font-normal">
              {cs.summary}
            </p>
            {cs.liveUrl && (
              <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-brand-cyan/25 bg-brand-cyan/[0.06] px-4 py-2.5 text-sm font-bold text-brand-cyan transition-colors hover:border-brand-cyan/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">
                Visit the live website <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Project Snapshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 mb-16">
            {snapshot.map((item) => (
              <div key={item.label}>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">{item.label}</span>
                <span className="text-sm font-bold text-white block">{item.value}</span>
              </div>
            ))}
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
                The Problem
              </span>
              <h2 className="text-xl font-bold text-white mb-4">{cs.projectKind === "RakriLabs product" ? "Finding organizational knowledge" : "Project context"}</h2>
              <p className="text-sm text-muted/90 leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/5">
              <span className="text-xs font-black uppercase tracking-widest text-brand-cyan block mb-3">
                {cs.projectStatus === "Coming Soon" ? "Engineering approach" : "Engineering contribution"}
              </span>
              <h2 className="text-xl font-bold text-white mb-4">{cs.projectStatus === "Coming Soon" ? "A retrieval-based knowledge assistant" : "Website modernization"}</h2>
              <p className="text-sm text-muted/90 leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </div>

          {/* Technical Architecture Flow Diagram */}
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5 text-brand-cyan" />
              <h2 className="text-xl font-bold text-white">{cs.architectureLabel ?? "System Architecture & Pipeline Flow"}</h2>
            </div>

            {cs.architectureFlow ? (
              <EngineeringFlow label={cs.architectureFlow.label} nodes={cs.architectureFlow.nodes} />
            ) : (
              <ol aria-label={cs.architectureLabel ?? "Recorded project steps"} className="space-y-4">
                {cs.architectureSteps.map((step, stepIdx) => (
                  <li key={step} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                    <span aria-hidden="true" className="w-7 h-7 rounded-lg bg-brand-cyan/10 text-brand-cyan font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                      {String(stepIdx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Tech Stack */}
          {cs.techStack.length > 0 && (
            <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3">
                {cs.techStackLabel ?? "Technologies & Infrastructure Deployed"}
              </span>
              <div className="flex flex-wrap gap-2">
                {cs.techStack.map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs font-mono font-bold text-white">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {cs.evidenceNote && (
            <p className="mb-16 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/60">{cs.evidenceNote}</p>
          )}

          {cs.detailSections && cs.detailSections.length > 0 && (
            <section aria-label="Technical decisions and implementation notes" className="mb-16 space-y-5">
              {cs.detailSections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted/85">{section.body}</p>
                  {section.points && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => <li key={point} className="rounded-xl border border-white/8 bg-black/20 p-4 text-sm leading-relaxed text-white/75">{point}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

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
              {cs.slug === "assistra-knowledge-assistant"
                ? "Exploring an AI knowledge assistant?"
                : cs.slug === "newageislam" ? "Planning a similar publishing project?" : "Planning a similar AI or MVP initiative?"}
            </h3>
            <p className="text-sm text-muted/90 max-w-lg mx-auto mb-6">
              {cs.slug === "assistra-knowledge-assistant"
                ? "Discuss your organizational knowledge requirements and the engineering decisions involved."
                : cs.slug === "newageislam"
                  ? "Share the goals and constraints for your website modernization project."
                  : "Review your technical roadmap with our team and discuss a suitable project scope."}
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
