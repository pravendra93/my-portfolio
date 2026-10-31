export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  published: boolean;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Pravendra Kumar",
    role: "Founder & AI Systems Architect",
    bio: "10+ years engineering scalable web systems, RAG infrastructure, and autonomous agent workflows for startups and enterprise teams. Deep focus on high-reliability AI pipelines, prompt engineering with guardrails, and production Next.js architecture.",
    image: "/logo.png", // Verified brand asset
    linkedin: "https://www.linkedin.com/in/pravendra93/",
    github: "https://github.com/pravendra93",
    published: true,
    isFounder: true,
  },
  {
    name: "Akshay kr Ojha",
    role: "Founder & Product Engineering Lead",
    bio: "Software Engineer with 10+ years of experience building scalable web applications and digital products. Founder of RakriLabs, passionate about solving real-world problems through technology, AI, and innovation.",
    image: "/logo.png", // Verified brand asset
    linkedin: "https://www.linkedin.com/in/akshay-kr-ojha-2454a019/",
    github: "https://github.com/ojhakumarakshay1",
    published: true,
    isFounder: true,
  },
  {
    name: "TODO: Senior Full Stack Engineer",
    role: "Senior Full Stack Engineer",
    bio: "TODO: Provide verified bio and credentials before publishing.",
    image: "",
    published: false,
    isFounder: false,
  },
  {
    name: "TODO: AI Product Designer",
    role: "AI Product Designer",
    bio: "TODO: Provide verified bio and credentials before publishing.",
    image: "",
    published: false,
    isFounder: false,
  },
];
