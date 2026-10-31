import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

interface EngineeringFlowProps {
  label: string;
  nodes: string[];
  compact?: boolean;
  supportingComponents?: string[];
  crossCutting?: string[];
}

export function EngineeringFlow({
  label,
  nodes,
  compact = false,
  supportingComponents = [],
  crossCutting = [],
}: EngineeringFlowProps) {
  return (
    <figure className="min-w-0">
      <ol
        aria-label={label}
        className={`flex flex-col ${compact ? "gap-0 xl:flex-row xl:items-stretch" : "gap-0 lg:flex-row lg:items-stretch"}`}
      >
        {nodes.map((node, index) => (
          <Fragment key={`${index}-${node}`}>
            <li className={`flex min-w-0 flex-col ${compact ? "xl:flex-1 xl:flex-row xl:items-stretch" : "lg:flex-1 lg:flex-row lg:items-stretch"}`}>
              <div className={`flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.065] to-white/[0.015] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${compact ? "xl:min-h-[4.5rem] xl:gap-2 xl:px-2.5 xl:py-2" : "lg:min-h-[5.25rem]"}`}>
                <span className="shrink-0 font-mono text-[10px] font-semibold tracking-wide text-brand-cyan/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`min-w-0 font-semibold leading-snug text-white/90 ${compact ? "text-xs xl:text-[10px]" : "text-xs sm:text-sm"}`}>
                  {node}
                </span>
              </div>
              {index < nodes.length - 1 && (
                <span aria-hidden="true" className={`flex h-7 shrink-0 items-center justify-center text-brand-cyan ${compact ? "xl:h-auto xl:w-7" : "lg:h-auto lg:w-8"}`}>
                  <ArrowDown className={compact ? "h-4 w-4 xl:hidden" : "h-4 w-4 lg:hidden"} />
                  <ArrowRight className={compact ? "hidden h-4 w-4 xl:block" : "hidden h-4 w-4 lg:block"} />
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>

      {(supportingComponents.length > 0 || crossCutting.length > 0) && (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {supportingComponents.length > 0 && (
            <div className="rounded-xl border border-white/8 bg-white/[0.025] px-3.5 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">Supporting components</p>
              <ul className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-white/75">
                {supportingComponents.map((component) => (
                  <li key={component} className="rounded-md border border-white/8 bg-black/25 px-2 py-1">{component}</li>
                ))}
              </ul>
            </div>
          )}
          {crossCutting.length > 0 && (
            <div className="rounded-xl border border-brand-cyan/20 bg-brand-cyan/[0.045] px-3.5 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan/80">Cross-cutting safeguards</p>
              <ul className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-white/80">
                {crossCutting.map((safeguard) => (
                  <li key={safeguard} className="rounded-md border border-brand-cyan/15 bg-black/20 px-2 py-1">{safeguard}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </figure>
  );
}
