import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { ArrowRight, Home, Compass, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-brand-purple/30">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-brand-cyan">
            Error 404 &bull; Page Not Found
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
              Lost in the vector space?
            </h1>
            <p className="text-muted text-base lg:text-lg leading-relaxed">
              The page you are looking for doesn&apos;t exist, was moved, or had its endpoint reconfigured. Let&apos;s get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all text-sm group"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-sm"
            >
              <Compass className="w-4 h-4 text-brand-cyan" />
              <span>Explore Case Studies</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-white/10 text-white/70 font-semibold hover:text-white hover:border-white/20 transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <CalendlyProvider />
    </div>
  );
}
