export const PROFILE = {
    name: "Pravendra Kumar",
    title: "AI Generalist & Full Stack Engineer",
    tagline: "Building Intelligent Systems with RAG & Agents",
    bio: "Senior Full Stack Engineer transformed into an AI Generalist. I specialize in building next-generation applications using Large Language Models (LLMs), RAG systems, and AI Agents. Leveraging tools like Claude Code, Cursor, and LangChain, I help founders and businesses deploy intelligent, scalable solutions.",
    location: "Noida, India",
    email: "prvndrkumar55@gmail.com",
    phone: "+91-8130345133",
    social: {
        github: "https://github.com/pravendra93",
        linkedin: "https://www.linkedin.com/in/pravendra93"
    },
    yearsOfExperience: "10+"
};

export const SKILLS = [
    { category: "AI & GenAI", items: ["RAG Systems", "LLMs (OpenAI, Anthropic)", "LangChain", "Vector Databases (Pinecone, Chroma)", "AI Agents", "Prompt Engineering"] },
    { category: "AI Tools", items: ["Claude Code", "Cursor", "Antigravity", "V0", "Perplexity", "Midjourney"] },
    { category: "Full Stack", items: ["Python (FastAPI)", "Node.js", "React / Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"] },
    { category: "Cloud & DevOps", items: ["AWS (Lambda, Bedrock)", "Docker", "CI/CD", "Serverless", "System Architecture"] }
];

export const EXPERIENCE = [
    {
        company: "Thinksys Pvt Ltd.",
        role: "Senior Software Engineer",
        location: "Noida, India",
        period: "Oct 2020 – Present",
        achievements: [
            "Led implementation of multiple production apps using React, Next.js, Node.js and Python services; owned feature delivery end‑to‑end.",
            "Designed and optimized REST APIs and data flows, reducing average API response times by ~30% for critical endpoints.",
            "Built CI/CD pipelines on AWS (ECS & Lambda) and automated deployments, cutting deployment time by ~40% and lowering rollback incidents.",
            "Mentored junior developers, improved code review quality, and introduced architecture patterns for maintainability."
        ]
    },
    {
        company: "AirTickets India Pvt Ltd",
        role: "Full‑Stack Developer",
        location: "Noida, India",
        period: "Dec 2016 – Oct 2020",
        achievements: [
            "Owned booking platform features integrating multiple airline/GDS services; worked across Node.js, PHP (Yii), Redis and PostgreSQL.",
            "Improved booking reliability and implemented background processing for payment reconciliation and notification flows."
        ]
    },
    {
        company: "ONS Interactive Solution (AppyPie)",
        role: "Full‑Stack Developer",
        location: "Noida, India",
        period: "Jun 2015 – Nov 2016",
        achievements: [
            "Contributed to the app‑builder platform using AngularJS, PHP and MongoDB; focused on plugin/theme dev and performance improvements."
        ]
    },
    {
        company: "Udaan Technologies Pvt Ltd",
        role: "Developer",
        location: "Noida, India",
        period: "Dec 2013 – Jun 2015",
        achievements: [
            "Worked on e‑commerce and content management projects using CakePHP, jQuery and MySQL; prioritized clean code and testable features."
        ]
    }
];

export const PROJECTS = [
    {
        title: "AI Agent Orchestrator",
        tech: "LangChain, Python, Next.js",
        description: "Built a multi-agent system capable of taking high-level user goals and breaking them down into executable tasks using LLMs.",
        highlight: true
    },
    {
        title: "Enterprise RAG System",
        tech: "Pinecone, OpenAI, FastAPI",
        description: "Developed a secure Retrieval-Augmented Generation system for internal document search, reducing information retrieval time by 90%.",
        highlight: true
    },
    {
        title: "CaptainU (StackSports)",
        tech: "Ruby on Rails, React, MySQL",
        description: "Implemented reusable React components and backend endpoints to support athlete profiles and search workflows. Improved page load and search throughput.",
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
