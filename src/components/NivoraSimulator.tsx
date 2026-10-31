"use client";

import { useState } from "react";
import { nivoraHQProduct, NivoraRuleTemplate } from "@/content/products/nivorahq";
import { MessageSquare, Sparkles, ShieldCheck, RefreshCw } from "lucide-react";

export function NivoraSimulator() {
  const templates = nivoraHQProduct.ruleTemplates;
  const [selectedRuleId, setSelectedRuleId] = useState<string>(templates[0].id);
  const [userComment, setUserComment] = useState<string>(templates[0].exampleInput);
  const [activeMode, setActiveMode] = useState<"auto-send" | "human-approve">(templates[0].defaultMode);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedOutput, setSimulatedOutput] = useState<string>(templates[0].mockGeneratedReply);

  const activeRule = templates.find((r) => r.id === selectedRuleId) || templates[0];

  const handleSelectRule = (rule: NivoraRuleTemplate) => {
    setSelectedRuleId(rule.id);
    setUserComment(rule.exampleInput);
    setActiveMode(rule.defaultMode);
    setSimulatedOutput(rule.mockGeneratedReply);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);

    setTimeout(() => {
      // Determine if any keyword matches
      const lowerInput = userComment.toLowerCase();
      const matchedKeyword = activeRule.keywords.find((kw) => lowerInput.includes(kw.toLowerCase()));

      let reply: string;
      if (matchedKeyword) {
        reply = `[Matched Rule: "${activeRule.name}" on keyword "${matchedKeyword}"]\n\n${activeRule.mockGeneratedReply}`;
      } else {
        reply = `[Keyword Detection: No direct match from "${activeRule.keywords.join(", ")}"]\n\nAI Safe Default: "Thanks for reaching out! Let us look into this and get back to you shortly."`;
      }

      setSimulatedOutput(reply);
      setIsSimulating(false);

      try {
        import("@/lib/analytics").then((m) => {
          m.trackEvent({
            name: "nivora_simulator_used",
            props: { ruleId: activeRule.id, category: activeRule.category },
          });
        });
      } catch {}
    }, 450);
  };

  return (
    <div id="simulator" className="p-6 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block mb-1">
            Interactive Testbed (Client-Side Simulator)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Simulate Keyword Rule Execution
          </h3>
          <p className="text-xs text-muted/80 mt-1">
            Zero external API calls. See how NivoraHQ detects keywords, enforces system prompts, and drafts bounded replies.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
          Sandbox Mode Active
        </span>
      </div>

      {/* 1. Rule Library Selector */}
      <div className="mb-6">
        <label className="text-xs font-bold text-white/70 block mb-2">
          Step 1: Pick an Example Rule from Library:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {templates.map((rule) => {
            const isSelected = rule.id === selectedRuleId;
            return (
              <button
                key={rule.id}
                type="button"
                onClick={() => handleSelectRule(rule)}
                className={`p-3 rounded-xl text-left border transition-all text-xs ${
                  isSelected
                    ? "bg-brand-purple/20 border-brand-purple text-white font-bold shadow-md"
                    : "bg-white/[0.02] border-white/5 text-white/70 hover:bg-white/5"
                }`}
              >
                <span className="text-[9px] uppercase tracking-wider text-brand-cyan block mb-0.5">
                  {rule.category}
                </span>
                <span className="block truncate">{rule.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Rule Configuration Overview */}
      <div className="mb-6 p-4 rounded-2xl bg-white/[0.015] border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">
            Active Keywords Triggered:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeRule.keywords.map((kw) => (
              <span key={kw} className="px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan font-mono text-[11px]">
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">
            Execution Mode:
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveMode("auto-send")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeMode === "auto-send"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/5 text-white/40"
              }`}
            >
              Auto-Send
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("human-approve")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeMode === "human-approve"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                  : "bg-white/5 text-white/40"
              }`}
            >
              Human Approval Queue
            </button>
          </div>
        </div>
      </div>

      {/* 3. Inbound Comment Input & Generated Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left: Visitor Inbound Comment */}
        <div className="p-5 rounded-2xl bg-[#09090c] border border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white/80">Step 2: Inbound Social Comment / Mention</span>
              <span className="text-[10px] text-white/40 font-mono">Editable</span>
            </div>
            <textarea
              rows={4}
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all resize-none leading-relaxed"
              placeholder="Type or edit a sample inbound customer comment here..."
            />
            <p className="text-[10px] text-muted/60 mt-2">
              Tip: Include keywords like <span className="text-brand-cyan">{activeRule.keywords.slice(0, 3).join(", ")}</span> to trigger this rule.
            </p>
          </div>

          <button
            type="button"
            disabled={isSimulating}
            onClick={handleRunSimulation}
            className="mt-4 w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center justify-center gap-2"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Prompt Inference...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate AI Response Preview</span>
              </>
            )}
          </button>
        </div>

        {/* Right: AI Output Preview */}
        <div className="p-5 rounded-2xl bg-[#0c0c10] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white/90 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-brand-purple" /> Step 3: Generated Reply Preview
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60">
                Mode: {activeMode === "auto-send" ? "Instant Dispatch" : "Held for Human Sign-off"}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 min-h-[120px] text-xs text-white/90 leading-relaxed whitespace-pre-wrap font-sans">
              {simulatedOutput}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Grounded in prompt instructions
            </span>
            <span>Latency: ~400ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
