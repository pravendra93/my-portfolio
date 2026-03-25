export const PROFILE = {
    name: "RakriLabs.ai",
    title: "Tech Partner for Early Stage Founders & Startups",
    tagline: "We make it easy for startups to launch, grow, and scale with clean MVPs and superfast shipping",
    bio: "We partner with early-stage founders to build, launch, and scale high-performance MVPs with superfast shipping. Our focus is on technical excellence, execution velocity, and long-term structural leverage.",
    location: "Remote / Noida, India",
    email: "hello@rakrilabs.ai", // Placeholder
    phone: "+91-XXXXXXXXXX",
    social: {
        github: "https://github.com/rakrilabs-ai",
        linkedin: "https://www.linkedin.com/company/rakrilabs-ai"
    }
};

export const SERVICES = [
    {
        category: "Design",
        description: "Outcome-driven design that prioritizes user experience and brand clarity.",
        items: ["Product Design", "UX/UI Systems", "Branding & Identity", "Rapid Prototyping"],
        icon: "Palette"
    },
    {
        category: "Development",
        description: "Superfast shipping of MVPs and scalable web applications with zero technical debt.",
        items: ["Next.js/React MVPs", "Full-Stack Systems", "API Architecture", "Performance Optimization"],
        icon: "Code"
    },
    {
        category: "AI Integration",
        description: "Future-proof your product with intelligent agents and automated workflows.",
        items: ["Custom AI Agents", "RAG Infrastructure", "LLM Orchestration", "Process Automation"],
        icon: "Sparkles"
    }
];

export const TEAM = [
    {
        name: "Pravendra Kumar",
        role: "Founder & AI Systems Architect",
        bio: "Building AI execution systems for SaaS companies that want structural advantage. Specialist in RAG systems and LLM orchestration with 10+ years of engineering experience.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pravendra" // Placeholder
    },
    {
        name: "Team Member 2",
        role: "Senior Full Stack Engineer",
        bio: "Expert in building scalable React/Next.js architectures and robust backend services.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member2"
    },
    {
        name: "Team Member 3",
        role: "AI Product Designer",
        bio: "Focuses on creating intuitive UX for AI-native applications and branding.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member3"
    },
    {
        name: "Team Member 4",
        role: "DevOps & Cloud Architect",
        bio: "Managing high-availability infrastructure and automated AI deployment pipelines.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member4"
    }
];

export const EXPERIENCE = []; // Experience removed as per request

export const PROJECTS = [
    {
        title: "AI Agent Orchestrator",
        tech: "LangChain, Python, Next.js",
        description: "A multi-agent system capable of taking high-level user goals and breaking them down into executable tasks using LLMs.",
        highlight: true
    },
    {
        title: "Enterprise RAG System",
        tech: "Pinecone, OpenAI, FastAPI",
        description: "Secure Retrieval-Augmented Generation system for internal document search, reducing information retrieval time by 90%.",
        highlight: true
    },
    {
        title: "CaptainU (StackSports)",
        tech: "Ruby on Rails, React, MySQL",
        description: "Implemented reusable React components and backend endpoints to support athlete profiles and search workflows for international sports platforms.",
        highlight: true
    },
    {
        title: "Unruly — Scraping & Data Platform",
        tech: "Node.js, React, Chrome Extension",
        description: "Built a three‑component system to automate collecting message and transaction data. Scraper automation reduced manual data collection time by 85%.",
        highlight: false
    },
    {
        title: "NewAgeIslam.com",
        tech: "Node.js, React, SSR",
        description: "Rebuilt legacy site with a modern server‑rendering approach. Implemented SSR patterns, improving organic SEO ranking and traffic by approximately 20%.",
        highlight: false
    },
    {
        title: "Air Travel Ticketing System",
        tech: "Node.js, React, Redis",
        description: "Led full‑stack development for a booking platform. Introduced background job processing and caching which significantly improved throughput.",
        highlight: false
    }
];

export const PRICING_PLANS = [
    {
        name: "MVP Launchpad",
        price: "$4,499",
        period: "+",
        delivery: "4-6 weeks",
        description: "Ideal for lean teams or startups needing clean, fast design and functional delivery.",
        features: [
            "Complete MVP development",
            "Full Stack Development",
            "Deployment and launch support",
            "14 day complementary support",
            "PRD-based revisions included",
            "Scaling assistance available"
        ],
        highlight: false
    },
    {
        name: "Product Sprint+",
        price: "$9,950",
        period: "+",
        delivery: "6-10 weeks",
        description: "For founders who want a usable, credible product — not a prototype.",
        features: [
            "End-to-end MVP development",
            "Production-ready codebase",
            "Polished core user flows",
            "21 days post-launch support",
            "Analytics & monitoring setup",
            "Best for demos and early investors"
        ],
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Custom Enterprise",
        price: "$13,499",
        period: "+",
        delivery: "12-16 weeks",
        description: "Built for teams scaling fast and shipping mission-critical products.",
        features: [
            "Dedicated engineering team",
            "Custom UX & architecture",
            "Scalable cloud infrastructure",
            "Security & compliance ready",
            "Priority support & SLA-backed",
            "Roadmap & strategy planning"
        ],
        highlight: false
    }
];
