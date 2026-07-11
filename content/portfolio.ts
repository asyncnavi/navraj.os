/* ============================================================
   All portfolio copy lives here. Edit placeholders freely.
   Items marked  // TODO  are placeholders to fill in.
   ============================================================ */

export const profile = {
  name: "Your Name", // TODO
  role: "SDE-1 @ Marzi (by Primus)",
  tagline: "building • learning • shipping",
  email: "you@email.com", // TODO
  github: "https://github.com", // TODO
  linkedin: "https://linkedin.com", // TODO
};

export const aboutParagraphs: string[] = [
  "I started coding in 8th grade with HTML and never really stopped. That early curiosity — sharpened by strong fundamentals (CS50, systems thinking) — grew into building real products and leading communities.",
  "Today I work as an SDE-1 at Marzi (by Primus), focused on building reliable, scalable software and learning how production systems work at scale. Earlier, I led a 2,000+ member Google Developer Student Club as Web Developer Lead — running hackathons, workshops, and mentoring peers.",
  "I've worked across health-tech, e-commerce, and backend systems, with hands-on Golang and distributed-systems experience. I once explored building my own SaaS venture — it didn't succeed, but it taught me more about execution, trade-offs, and ownership than anything else.",
  "I like looking at problems from multiple angles and turning ideas into working systems. Always learning. Always building.",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Distributed Job Queue",
    description:
      "A Go-based distributed task queue with retries, exponential backoff, and at-least-once delivery across workers.",
    tags: ["Go", "Redis", "gRPC"],
    github: "https://github.com", // TODO
    demo: "#", // TODO
  },
  {
    title: "HealthSync API",
    description:
      "Health-tech backend for appointments and patient records — role-based access, audit logs, and a clean REST surface.",
    tags: ["Node", "Postgres", "JWT"],
    github: "https://github.com", // TODO
    demo: "#", // TODO
  },
  {
    title: "ShopKit",
    description:
      "An e-commerce storefront with cart, checkout, and inventory split into small, independently deployable services.",
    tags: ["React", "Go", "Docker"],
    github: "https://github.com", // TODO
    demo: "#", // TODO
  },
  {
    title: "GDSC Community Portal",
    description:
      "Events, hackathons, and RSVP platform built for a 2,000+ member developer community. Led as Web Dev Lead.",
    tags: ["Next.js", "Firebase"],
    github: "https://github.com", // TODO
    demo: "#", // TODO
  },
];

export type Post = {
  date: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
};

export const posts: Post[] = [
  {
    date: "2026-06",
    title: "Understanding Backoff & Retries in Distributed Systems",
    summary:
      "Why naive retries make outages worse, and how jitter + exponential backoff keep systems from stampeding.",
    readTime: "6 min read",
    href: "#", // TODO
  },
  {
    date: "2026-04",
    title: "Why I Rewrote My Side Project in Go",
    summary:
      "Concurrency, single-binary deploys, and the moment I stopped fighting my old stack.",
    readTime: "8 min read",
    href: "#", // TODO
  },
  {
    date: "2026-02",
    title: "Lessons from a Failed SaaS Venture",
    summary:
      "Execution, trade-offs, and ownership — the expensive lessons that no tutorial teaches you.",
    readTime: "5 min read",
    href: "#", // TODO
  },
  {
    date: "2025-11",
    title: "CS50 → Production: What Actually Transferred",
    summary:
      "The fundamentals that still pay rent every day once you're shipping real software.",
    readTime: "7 min read",
    href: "#", // TODO
  },
];

export const nowItems: string[] = [
  "Building reliable, scalable systems @ Marzi",
  "Learning: distributed systems & Go",
  "Reading about production systems at scale",
  "Tinkering with side projects on weekends",
  "Open to interesting problems & collaborations",
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
    title: "SDE-1 — Marzi (by Primus)",
    meta: "Present",
    body: "Building reliable, scalable software and learning how production systems behave at scale.",
  },
  {
    dot: "var(--c-projects)",
    title: "Web Developer Lead — Google DSC",
    meta: "Community of 2,000+",
    body: "Organized hackathons and workshops, mentored peers, and led web initiatives for a large student developer community.",
  },
  {
    dot: "var(--c-now)",
    title: "Engineering across Health-tech & E-commerce",
    meta: "Backend systems",
    body: "Hands-on with Golang and distributed-systems concepts; also explored a solo SaaS venture end to end.",
  },
];

export const skills: string[] = [
  "Go",
  "Distributed Systems",
  "JavaScript",
  "React",
  "Postgres",
  "Docker",
];

export const education = {
  title: "CS50 — Harvard (online)",
  body: "Computer science fundamentals & systems thinking. Self-taught since 8th grade.",
};

export const resumePdf = "#"; // TODO: link to real resume PDF in /public
