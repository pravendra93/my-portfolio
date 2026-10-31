interface QuarterBadgeProps {
  variant?: "hero" | "compact" | "pill" | "banner";
  className?: string;
}

export function QuarterBadge({
  variant = "pill",
  className = "",
}: QuarterBadgeProps) {
  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-white/70 font-medium ${className}`}>
        <span className="w-2 h-2 rounded-full bg-brand-cyan" aria-hidden="true" />
        <span>Focused project capacity</span>
      </span>
    );
  }

  if (variant === "banner") {
    return (
      <div className={`flex items-center justify-center gap-3 py-3 px-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs leading-relaxed text-white/80 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" aria-hidden="true" />
        <span>We take on a considered number of projects so each engagement receives focused engineering attention. Timelines are defined around scope, complexity, and agreed deliverables.</span>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-widest text-white/80 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-brand-cyan" aria-hidden="true" />
        <span>Now accepting AI engineering projects</span>
      </div>
    );
  }

  // Default: pill
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-white/90 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
      <span>Focused AI Engineering. Deliberate Project Capacity.</span>
    </div>
  );
}
