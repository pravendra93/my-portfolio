"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, CheckCircle2, Calendar } from "lucide-react";

type Stage = "initial" | "chat" | "calendar" | "confirmed";
type Message = { role: "user" | "ai"; text: string; delay?: number };

const slots = ["10:00 AM", "1:30 PM", "3:00 PM", "4:45 PM"];

export function BookingAssistant() {
  const [stage, setStage] = useState<Stage>("initial");
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hello. I'm your AI strategy assistant. What are you building and what is your timeline?" }
  ]);
  const [inputStr, setInputStr] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleStart = () => {
    setStage("chat");
  };

  const handleSend = () => {
    if (!inputStr.trim()) return;

    // Add user message
    const newMsgs: Message[] = [...messages, { role: "user", text: inputStr }];
    setMessages(newMsgs);
    setInputStr("");
    setIsThinking(true);

    // Simulate AI thinking and replying
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { role: "ai", text: "Got it. Based on your inputs, our 'Product Sprint+' fits best. Estimated MVP build is around $15k - $25k. Let's schedule a call to finalize architecture." }
      ]);
      setIsThinking(false);
      
      setTimeout(() => {
         setStage("calendar");
      }, 2500);
    }, 1500);
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      setIsConfirming(true);
      setTimeout(() => {
        setIsConfirming(false);
        setStage("confirmed");
      }, 1000);
    }
  };

  return (
    <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto relative z-10 w-full mb-12">
      <div className="absolute inset-0 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-12 items-center relative z-20">
        {/* Left Side: Context */}
        <div className="flex-1 space-y-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-medium"
          >
            <Bot className="w-4 h-4" /> Interactive Booking
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Let AI guide you to the right <span className="text-gradient">solution.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted text-balance max-w-lg"
          >
            Skip the generic forms. Chat with our intelligent assistant to scope your project, get price estimates, and lock in a strategy session instantly.
          </motion.p>
        </div>

        {/* Right Side: Interactive App */}
        <div className="flex-1 w-full max-w-md perspective-[1000px]">
          <motion.div 
             initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
             whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative min-h-[460px] bg-[#0A0A0A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden glass-dark flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                       <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#0A0A0A] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">RakriLabs Core</h4>
                    <p className="text-[10px] text-brand-cyan font-mono tracking-wider">ONLINE</p>
                  </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-y-auto no-scrollbar relative flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  {stage === "initial" && (
                    <motion.div 
                      key="initial"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full gap-6 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                         <Bot className="w-8 h-8 text-brand-purple" />
                      </div>
                      <button 
                        onClick={handleStart}
                        className="glow-border px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                      >
                        Start Assessment
                      </button>
                    </motion.div>
                  )}

                  {stage === "chat" && (
                    <motion.div 
                      key="chat"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      {messages.map((m, i) => (
                         <div key={i} className={`flex ${m.role === "ai" ? "justify-start" : "justify-end"}`}>
                            <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                                m.role === "ai" 
                                ? "bg-white/5 text-white/90 border border-white/10 rounded-bl-sm" 
                                : "bg-brand-purple/20 text-white border border-brand-purple/30 rounded-br-sm"
                            }`}>
                              {m.text}
                            </div>
                         </div>
                      ))}
                      {isThinking && (
                         <div className="flex justify-start">
                            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-bl-sm flex items-center gap-1.5">
                               <div className="w-1.5 h-1.5 bg-brand-cyan/60 rounded-full animate-bounce" style={{animationDelay: "0ms"}} />
                               <div className="w-1.5 h-1.5 bg-brand-cyan/60 rounded-full animate-bounce" style={{animationDelay: "150ms"}} />
                               <div className="w-1.5 h-1.5 bg-brand-cyan/60 rounded-full animate-bounce" style={{animationDelay: "300ms"}} />
                            </div>
                         </div>
                      )}
                    </motion.div>
                  )}

                  {stage === "calendar" && (
                    <motion.div 
                      key="calendar"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="w-full h-full flex flex-col pt-4 gap-4"
                    >
                       <div className="text-sm text-white/80 font-medium px-2 flex items-center gap-2">
                         <Calendar className="w-4 h-4 text-brand-cyan" />
                         Select a time for this Thursday
                       </div>
                       <div className="grid grid-cols-2 gap-3">
                         {slots.map(s => (
                           <button 
                             key={s} 
                             onClick={() => setSelectedSlot(s)}
                             className={`p-3 rounded-xl text-sm font-medium border transition-all ${
                               selectedSlot === s 
                               ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.2)]" 
                               : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20"
                             }`}
                           >
                             {s}
                           </button>
                         ))}
                       </div>
                       <div className="mt-auto">
                         <button 
                           disabled={!selectedSlot || isConfirming}
                           onClick={handleConfirm}
                           className="w-full py-3 rounded-xl bg-gradient-to-r flex items-center justify-center gap-2 from-brand-purple to-brand-cyan text-white font-semibold shadow-lg shadow-brand-purple/20 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity origin-bottom"
                         >
                           {isConfirming ? <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full block" /> : "Confirm Call"}
                         </button>
                       </div>
                    </motion.div>
                  )}

                  {stage === "confirmed" && (
                    <motion.div 
                      key="confirmed"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full gap-4 text-center pb-8"
                    >
                      <motion.div 
                         initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
                      >
                         <CheckCircle2 className="w-16 h-16 text-brand-cyan drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mt-2">Call Confirmed</h3>
                      <p className="text-sm text-muted">A calendar invite has been sent to your email.</p>
                      <button 
                        onClick={() => setStage("initial")}
                        className="mt-4 text-sm font-medium text-brand-purple hover:text-brand-cyan transition-colors"
                      >
                        Reset Booking
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            {stage === "chat" && (
              <div className="p-3 border-t border-white/5 bg-black/40">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={inputStr}
                    onChange={(e) => setInputStr(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..." 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-white/30"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-1 text-white/50 hover:text-brand-purple bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                  >
                     <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Ambient Background Base */}
            <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
