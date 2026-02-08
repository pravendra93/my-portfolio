import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-accent/30">
            <Navigation />
            <Hero />
            <Skills />
            <Experience />
            <Pricing />
            <Projects />
            <Contact />

        </main>
    );
}
