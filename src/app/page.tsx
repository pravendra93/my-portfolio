import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/skills";
import { Team } from "@/components/sections/team";
import { Projects } from "@/components/sections/projects";
import { Approach } from "@/components/sections/approach";
import { HowWeWork } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-accent/30">
            <Navigation />
            <Hero />
            <Services />
            <Team />
            <Approach />
            <HowWeWork />
            <Pricing />
            <Projects />
            <Contact />

        </main>
    );
}
