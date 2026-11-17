import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Engagement } from "@/components/Engagement";
import { Footer } from "@/components/Footer";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { MouseAura } from "@/components/MouseAura";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact RakriLabs",
  description: "Tell RakriLabs what you want to build, fix, or add AI to. Book a free call or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <MouseAura />
      <CalendlyProvider />

      <main className="min-h-screen bg-[#050505] text-foreground font-sans relative selection:bg-brand-purple/30">
        <Navigation />
        <div className="pt-8">
          <Engagement headingLevel="h1" />
        </div>
        <Footer />
      </main>
    </>
  );
}
