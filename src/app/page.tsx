import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/skills";
import { Team } from "@/components/sections/team";
import { Projects } from "@/components/sections/projects";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-accent/30">
            <Navigation />
            <Hero />
            <Services />
            <Team />
            <Pricing />
            <Projects />
            <Contact />

        </main>
    );
}
