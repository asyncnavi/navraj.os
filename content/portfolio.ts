/* ============================================================
   All portfolio copy lives here. Edit placeholders freely.
   Items marked  // TODO  are placeholders to fill in.
   ============================================================ */

export const profile = {
  name: "Navraj", // TODO
  role: "Founding Engineer @ Marzi (by Primus)",
  tagline: "building • systems • shipping",
  email: "asyncnavi@gmail.com",
  github: "https://github.com/asyncnavi", // TODO
  linkedin: "https://www.linkedin.com/in/navraj-sandhu-557aa91bb/",
};

export const aboutParagraphs: string[] = [
  "Just a human building software. Occasionally breaking it. Mostly fixing it.",
  "Currently a Founding Engineer at Marzi by Primus, where I spend my days building things that involve money, databases, and a healthy amount of paranoia about what could go wrong.",
  "I've worked across health-tech, e-commerce, and startups. Even tried building my own SaaS once. It failed. Spectacularly educational experience, though.",
  "These days, I work mostly with Go, TypeScript, PostgreSQL, and AWS. Payments, wallets, ledgers, rewards, the kind of stuff where \"it works on my machine\" isn't particularly reassuring.",
  "I like problems that don't have obvious answers. The weird edge cases, the 2 AM production mysteries, and those moments when a simple feature turns into a distributed systems lesson.",
  "I believe good engineering isn't about writing clever code. It's about building things that make sense, survive reality, and don't make the next engineer question their career choices.",
  "Still learning. Still building. Still occasionally wondering why something worked on the first try.",
  "That's about it.",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  // TODO: add real projects here
];

export const nowItems: string[] = [
  "Building wallet and transaction infrastructure @ Marzi",
  "Shipping production-ready systems for campaigns and operations",
  "Deepening distributed systems, cloud, and mobile engineering",
  "Working on startup-native ownership and engineering leadership",
  "Open to interesting problems and collaborations",
];

export type ResumeEntry = {
  dot: string; // css color var
  title: string;
  meta: string;
  body: string;
};

export const experience: ResumeEntry[] = [
  {
    dot: "var(--accent)",
    title: "Founding Engineer — Marzi (by Primus)",
    meta: "Bangalore, India · 02/2026 - Present",
    body: "Built and scaled the core platform from the ground up, owning end-to-end engineering across backend, frontend, cloud infrastructure, and deployments. Designed serverless services on AWS Lambda and DynamoDB saving ₹30K+ in costs, built a 4M+ signed coupon distribution system, and rewrote legacy Python services to Node.js. Led major partner campaigns with Google Pay, PharmEasy, Pronto, and Tata 1mg (50K+ users), and built a Next.js admin platform with real-time WebSocket workflows.",
  },
  {
    dot: "var(--c-projects)",
    title: "Founder and Engineer — Coacheasy",
    meta: "India · 11/2025 - 01/2026",
    body: "Explored and built an MVP for a fitness coaching SaaS to support nutrition, workouts, scheduling, and engagement. Developed core features using Elixir and Phoenix with a strong emphasis on product execution and delivery.",
  },
  {
    dot: "var(--c-now)",
    title: "Software Developer Engineer — Vision11 (Haanaa)",
    meta: "Gurugram, India · 06/2025 - 10/2025",
    body: "Migrated 3.5M+ users from PostgreSQL to CleverTap, refactored 2 of 9 microservices in a distributed system, and built a fault-tolerant KYC flow using the Easebuzz API. Reduced landing page bundle size by 50% and handled frontend deployments on Vercel.",
  },
  {
    dot: "var(--c-photos)",
    title: "Software Developer Engineer — Burpy AI",
    meta: "Remote · 12/2024 - 05/2025",
    body: "Wrote Go and Python scripts for DB optimization and schema stability, built 8 real-time analytics trackers for smartwatches and access devices, and delivered an Astro + GraphQL website with 95%+ Lighthouse scores. Added 60+ reusable components and built 2 GraphQL services using Python, GraphQL, and MongoDB.",
  },
  {
    dot: "var(--c-blog)",
    title: "Freelance Developer — STAN",
    meta: "Remote · 12/2024 - 04/2025",
    body: "Built a scalable React and Next.js eCommerce frontend integrating multiple REST APIs. Packaged the web app into a React Native WebView for iOS and Android release.",
  },
];

export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Elixir",
  "Golang",
  "HTML/CSS",
  "Node.js",
  "Express",
  "Django",
  "Phoenix",
  "GraphQL",
  "Redis",
  "Gin",
  "Fiber",
  "React",
  "Next.js",
  "Astro",
  "Redux Toolkit",
  "Tailwind",
  "MUI",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Linux",
  "Postman",
  "Supabase",
  "Firebase",
];

export const education = {
  title: "Bachelor of Computer Applications, Chandigarh University",
  body: "Mohali, Punjab · CGPA 7.48 (2022-2025).",
};

export const resumePdf =
  "https://drive.google.com/file/d/1ut-nKIwEi1VUsH_sLE1zBE2UvUc4twhb/view?usp=sharing";
