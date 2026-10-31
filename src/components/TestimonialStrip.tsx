"use client";

import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { testimonials } from "@/content/testimonials";

export function TestimonialStrip() {
  const publishedTestimonials = testimonials.filter((t) => t.published);

  // Hidden when empty
  if (publishedTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="text-center mb-16">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan mb-2 block">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Verified Feedback from Engineering Teams
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {publishedTestimonials.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-white/10 mb-4" />
              <p className="text-sm text-white/80 italic leading-relaxed mb-6">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-white block">{item.name}</span>
                <span className="text-xs text-brand-purple">{item.role}, {item.company}</span>
              </div>

              {item.caseStudySlug && (
                <Link
                  href={`/case-studies/${item.caseStudySlug}`}
                  className="text-xs text-brand-cyan hover:underline flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
