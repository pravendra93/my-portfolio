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
    name: "Akshay Kumar Ojha",
    role: "Co-Founder & Tech Lead",
    bio: "12+ years building scalable web products and backend architectures, collaborating with prominent startups including top unicorns like Shiprocket. Co-founder and Tech Lead at RakriLabs, helping founders build, scale, and integrate practical AI.",
    image: "/akshay.png",
    story:
      "I've spent over 12 years building and scaling products across high-growth startups and tech unicorns, from e-commerce logistics to fintech infrastructure. I co-founded RakriLabs to help founders and engineering teams build reliable, production-ready systems from day one, unblock complex technical debt, and deploy practical AI where it drives genuine business value. You work directly with me from architecture to launch.",
    highlights: [
      { value: "12+ yrs", label: "Building and scaling web products" },
      { value: "Unicorn scale", label: "High-throughput systems at Shiprocket" },
      { value: "99.9%", label: "Uptime across fintech & logistics platforms" },
      { value: "10x", label: "Shipping velocity for early & growth-stage teams" },
    ],
    career: [
      { company: "RakriLabs", role: "Co-Founder & Tech Lead", years: "Now" },
      { company: "US Product Based Startup", role: "Tech Lead", years: "2024 – now" },
      { company: "LiquiLoans", role: "Lead Software Engineer", years: "2022 – 2024" },
      { company: "Shiprocket", role: "Senior Software Engineer", years: "2020 – 2022" },
      { company: "Air Tickets India", role: "Software Engineer", years: "2016 – 2019" },
      { company: "Kitchen Umbrella", role: "Software Engineer", years: "2014 – 2016" },
    ],
    twitter: "https://x.com/Ojhaakshaykumar",
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
