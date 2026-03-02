export const PROFILE = {
    name: "Vision-AI Studio",
    title: "AI-First Technical Engineering Agency",
    tagline: "Building High-Performance Intelligent Systems & MVPs",
    bio: "We are a team of 4 technical engineers specialized in building next-generation applications. From RAG systems and AI Agents to scalable Full Stack architectures, we leverage state-of-the-art AI tools to help founders and enterprises deploy intelligent solutions at speed.",
    location: "Remote / Noida, India",
    email: "hello@vision-ai.studio", // Placeholder
    phone: "+91-XXXXXXXXXX",
    social: {
        github: "https://github.com/vision-ai-studio",
        linkedin: "https://www.linkedin.com/company/vision-ai-studio"
    }
};

export const SERVICES = [
    { category: "AI & GenAI", items: ["Custom RAG Systems", "Multi-Agent Orchestration", "LLM Fine-tuning", "Vector Search Implementation", "AI Workflow Automation", "Prompt Engineering"] },
    { category: "Full Stack Engineering", items: ["Python (FastAPI/Django)", "Node.js Microservices", "React / Next.js (Vercel)", "TypeScript", "Tailwind CSS", "Scalable System Design"] },
    { category: "Data & Infrastructure", items: ["PostgreSQL / Supabase", "Vector DBs (Pinecone, Chroma)", "AWS / GCP Infrastructure", "Docker & Kubernetes", "CI/CD Automations"] }
];

export const TEAM = [
    {
        name: "Pravendra Kumar",
        role: "Lead AI Engineer",
        bio: "Specialist in RAG systems and LLM orchestration with 10+ years of engineering experience.",
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
        description: "We developed a multi-agent system capable of taking high-level user goals and breaking them down into executable tasks using LLMs.",
        highlight: true
    },
    {
        title: "Enterprise RAG System",
        tech: "Pinecone, OpenAI, FastAPI",
        description: "Our team built a secure Retrieval-Augmented Generation system for internal document search, reducing information retrieval time by 90%.",
        highlight: true
    },
    {
        title: "CaptainU (StackSports)",
        tech: "Ruby on Rails, React, MySQL",
        description: "We implemented reusable React components and backend endpoints to support athlete profiles and search workflows for international sports platforms.",
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
        name: "AI Strategy Call",
        price: "$200",
        period: "/ hour",
        description: "Deep dive into your AI needs. Feasibility analysis, tool selection (RAG vs Fine-tuning), and roadmap planning.",
        features: [
            "Use Case Analysis",
            "Tech Stack Recommendation",
            "RAG Feasibility Study",
            "Implementation Roadmap"
        ],
        highlight: false
    },
    {
        name: "MVP & AI Integration",
        price: "$8k+",
        period: "/ project",
        description: "Build your first AI-powered product. From concept to deployed MVP with integrated LLM capabilities.",
        features: [
            "RAG System Implementation",
            "Custom AI Agents",
            "Modern Next.js Frontend",
            "Production Deployment",
            "Prompt Engineering"
        ],
        highlight: true,
        badge: "AI Powered"
    },
    {
        name: "Enterprise RAG",
        price: "Custom",
        period: "",
        description: "Scalable, secure AI systems for larger organizations. Knowledge base integration and custom fine-tuning.",
        features: [
            "Private LLM Deployment",
            "Enterprise Data Security",
            "Multi-Agent Orchestration",
            "Legacy System Integration",
            "SLA Support"
        ],
        highlight: false
    }
];
