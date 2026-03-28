import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BookingAssistant } from "@/components/BookingAssistant";
import { HowWeWork } from "@/components/HowWeWork";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Qualification } from "@/components/Qualification";
import { FounderNote } from "@/components/FounderNote";
import { LiveStatus } from "@/components/LiveStatus";
import { ProjectPlanner } from "@/components/ProjectPlanner";
import { PlannerNextStep } from "@/components/PlannerNextStep";
import { SuccessStats } from "@/components/SuccessStats";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { UrgencyStrip } from "@/components/UrgencyStrip";
import { CursorFollower } from "@/components/CursorFollower";

import { FounderProvider } from "@/components/FounderContext";
import { ROICalculator } from "@/components/ROICalculator";
import { LiveDemo } from "@/components/LiveDemo";
import { LeadMagnet } from "@/components/LeadMagnet";
import { LiveActivity } from "@/components/LiveActivity";

export default function Home() {
    return (
        <FounderProvider>
            <UrgencyStrip />
            <CursorFollower />
            <main className="min-h-screen selection:bg-brand-purple/30 font-sans text-foreground bg-[#050505] overflow-x-hidden relative">
                <AnimatedBackground />
                <CalendlyProvider />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                  <Navigation />

                  <Hero />
                  <SuccessStats />
                  <div id="services"><Services /></div>
                  <WhyUs />
                  <ProjectTimeline />
                  <div id="projects"><Portfolio /></div>
                  <Qualification />
                  <ROICalculator />
                  <ProjectPlanner />
                  <PlannerNextStep />
                  <FounderNote />
                  <LiveDemo />
                  <LeadMagnet />
                  <Testimonials />
                  <BookingAssistant />
                  <div id="pricing"><Pricing /></div>
                  <FinalCTA />
                  <div id="contact"><Contact /></div>
                  <Footer />
                </div>
                

            </main>
        </FounderProvider>
    );
}
