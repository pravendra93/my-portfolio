import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BookingAssistant } from "@/components/BookingAssistant";
import { HowWeWork } from "@/components/HowWeWork";
import { ProjectPlanner } from "@/components/ProjectPlanner";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand-purple/30 font-sans text-foreground bg-[#050505] overflow-x-hidden relative">
            <AnimatedBackground />
            <CalendlyProvider />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <Navigation />

              <Hero />
              <div id="services"><Services /></div>
              <WhyUs />
              <div id="process"><HowWeWork /></div>
              <ProjectPlanner />
              <div id="projects"><Portfolio /></div>
              <Testimonials />
              <BookingAssistant />
              <div id="pricing"><Pricing /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </div>
        </main>
    );
}
