import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/content/team";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

interface FounderSectionProps {
  className?: string;
}

export function FounderSection({ className = "" }: FounderSectionProps) {
  const founders = teamMembers.filter((member) => member.published && member.isFounder);
  if (founders.length === 0) return null;

  const [lead, ...others] = founders;

  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className={cn("scroll-mt-28 w-full max-w-7xl px-6 py-16 sm:py-20", className)}
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        <p className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-3">Who you work with</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <FounderAvatar name={lead.name} image={lead.image} size="lg" />

          <div>
            <h2 id="founder-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {lead.name}
            </h2>
            <p className="text-sm text-brand-purple mt-1">{lead.role}</p>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-muted/90">
              {lead.story ?? lead.bio}
            </p>
            {(lead.linkedin || lead.twitter) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {lead.linkedin && (
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                )}
                {lead.twitter && (
                  <a
                    href={lead.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    Follow on X
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {lead.highlights && lead.highlights.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-white/40">Results from past roles</p>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {lead.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="block text-2xl font-black text-white">{item.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {lead.career && lead.career.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-white/40">Career</p>
            <ol className="relative space-y-3 border-l border-white/10 pl-5">
              {lead.career.map((step) => (
                <li key={`${step.company}-${step.years}`} className="relative">
                  <span aria-hidden="true" className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-brand-cyan" />
                  <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
                    <span className="font-bold text-white">{step.company}</span>
                    <span className="text-muted/80">{step.role}</span>
                    <span className="text-xs text-white/40">· {step.years}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {others.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            {others.map((member) => (
              <div key={member.name} className="flex items-start gap-4">
                <FounderAvatar name={member.name} image={member.image} size="sm" />
                <div>
                  <p className="text-sm font-bold text-white">{member.name}</p>
                  <p className="text-xs text-brand-purple">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted/80 hover:text-white"
                    >
                      <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FounderAvatar({ name, image, size }: { name: string; image: string; size: "lg" | "sm" }) {
  const dimension = size === "lg" ? 144 : 48;
  const boxClass = size === "lg" ? "h-36 w-36 rounded-3xl text-4xl" : "h-12 w-12 rounded-xl text-sm";

  if (image) {
    return (
      <Image
        src={image}
        alt={`Photo of ${name}`}
        width={dimension}
        height={dimension}
        className={`${boxClass} object-cover border border-white/10`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${boxClass} flex shrink-0 items-center justify-center border border-white/10 bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 font-black text-white`}
    >
      {initials(name)}
    </div>
  );
}
