export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/pravendra.jpg". Leave empty to show initials. */
  image: string;
  /** Short first-person story for the founder section (2–4 sentences). */
  story?: string;
  /** Measurable results from past roles, shown as stat tiles. */
  highlights?: { value: string; label: string }[];
  /** Career timeline, most recent first. */
  career?: { company: string; role: string; years: string }[];
  linkedin?: string;
  /** X (Twitter) profile URL. */
  twitter?: string;
  github?: string;
  published: boolean;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Pravendra Kumar",
    role: "Founder & Lead Engineer",
    bio: "12+ years building web products end to end with Python, Node.js, React, and Next.js, from startups to high-traffic platforms. Now helping creators and founders build, fix, and add AI to their products.",
    image: "/profile_pic.png",
    story:
      "I've been building web products since 2013, at app builders, travel platforms, and high-traffic sports platforms. I started RakriLabs to help creators and founders who have the idea or the audience, but need someone they can trust to build the product, fix what's broken, and use AI where it actually helps. I also built NivoraHQ, our own product for creators. You work directly with me, from the first call to launch.",
    highlights: [
      { value: "12+ yrs", label: "Building web products" },
      { value: "85%", label: "Manual work removed by an automated data workflow" },
      { value: "40%", label: "Faster deployments after rebuilding CI/CD" },
      { value: "30%", label: "Faster API responses through caching and query tuning" },
    ],
    career: [
      { company: "RakriLabs", role: "Founder", years: "Now" },
      { company: "ThinkSys Inc", role: "Senior Software Engineer", years: "2020 – now" },
      { company: "Air Tickets India", role: "Software Engineer", years: "2016 – 2020" },
      { company: "Appy Pie", role: "Software Engineer", years: "2015 – 2016" },
      { company: "Udaan Technologies", role: "Web Developer", years: "2013 – 2015" },
    ],
    // linkedin: "https://www.linkedin.com/in/pravendra93/",
    twitter: "https://x.com/pravendra93",
    github: "https://github.com/pravendra93",
    published: true,
    isFounder: true,
  },
  {
    name: "Akshay kr Ojha",
    role: "Founder & Product Engineering Lead",
    bio: "Software Engineer with 10+ years of experience building scalable web applications and digital products. Founder of RakriLabs, passionate about solving real-world problems through technology, AI, and innovation.",
    image: "", // Add a real headshot and set its path here
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
