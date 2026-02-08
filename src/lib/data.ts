export const PROFILE = {
    name: "Pravendra Kumar",
    title: "Senior Full Stack Engineer",
    tagline: "Python • Node.js • React",
    bio: "Senior Full Stack Engineer with 10+ years building user‑facing applications and backend services. Deep experience with Python (FastAPI), Node.js, React / Next.js, TypeScript, and AWS (Lambda, ECS). I focus on shipping end‑to‑end features, improving system reliability, and mentoring engineers — all while delivering measurable outcomes that matter to the business.",
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
    { category: "Backend", items: ["Python (FastAPI)", "Node.js (Express)", "PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "DevOps & Cloud", items: ["AWS (Lambda, ECS)", "Docker", "CI/CD", "Git", "GitHub"] },
    { category: "Tools", items: ["VS Code", "Jira", "Slack", "AWS CLI", "Cursor", "Claude Code"] }
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
        title: "CaptainU (StackSports)",
        tech: "Ruby on Rails, React, MySQL",
        description: "Implemented reusable React components and backend endpoints to support athlete profiles and search workflows. Improved page load and search throughput resulting in faster recruiter search experiences.",
        highlight: true
    },
    {
        title: "Unruly — Scraping & Data Platform",
        tech: "Node.js, React, Chrome Extension, Airtable",
        description: "Built a three‑component system to automate collecting message and transaction data. Scraper automation reduced manual data collection time by 85%.",
        highlight: true
    },
    {
        title: "NewAgeIslam.com",
        tech: "Node.js, React, SSR (Next.js style)",
        description: "Rebuilt legacy site with a modern server‑rendering approach. Implemented SSR patterns, improving organic SEO ranking and traffic by approximately 20%.",
        highlight: true
    },
    {
        title: "Air Travel Ticketing System",
        tech: "Node.js, React, PHP, Redis, PostgreSQL",
        description: "Led full‑stack development for a booking platform. Introduced background job processing and caching which significantly improved throughput during peak booking windows.",
        highlight: false
    },
    {
        title: "AppyPie (App Builder)",
        tech: "AngularJS, PHP, MongoDB",
        description: "Developed features for the web‑based app builder; focused on plugin architecture and stability for a multi‑tenant environment.",
        highlight: false
    },
    {
        title: "RugStudio (E‑commerce)",
        tech: "AngularJS, CakePHP, MySQL",
        description: "Built storefront features, payment integrations and admin tooling; reduced cart abandonment by optimizing checkout flows.",
        highlight: false
    }
];

export const PRICING_PLANS = [
    {
        name: "Consultation",
        price: "$150",
        period: "/ hour",
        description: "Perfect for code reviews, architecture planning, or technical guidance.",
        features: [
            "1-on-1 Video Call",
            "Codebase Audit",
            "Architecture Review",
            "Career Mentorship"
        ],
        highlight: false
    },
    {
        name: "MVP Development",
        price: "$5k+",
        period: "/ project",
        description: "End-to-end development for startups and founders building their first product.",
        features: [
            "React/Next.js Frontend",
            "Node/Python Backend",
            "Database Design",
            "Deployment & CI/CD",
            "3 Weeks of Support"
        ],
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Enterprise/Retainer",
        price: "Custom",
        period: "",
        description: "Dedicated engineering resources for scaling teams and complex systems.",
        features: [
            "System Architecture",
            "Team Leadership",
            "Performance Optimization",
            "Priority Support",
            "Long-term Engagement"
        ],
        highlight: false
    }
];
