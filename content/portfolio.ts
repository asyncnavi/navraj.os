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
  "I began my engineering journey early and have since built and shipped scalable systems across backend, frontend, and infrastructure in startup environments.",
  "As a Founding Engineer at Marzi (by Primus), I built the core platform from day one across architecture, backend, frontend, cloud, and deployment, while supporting campaigns and experiences for tens of thousands of users.",
  "My recent work spans distributed systems, real-time workflows, product-focused execution, and cloud-native engineering, with hands-on experience in Node.js, Elixir, Golang, Python, and modern web stacks.",
  "I also built and learned through multiple product cycles in startups, focused on practical delivery, team growth, and durable engineering decisions under pressure.",
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

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  readTime: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "ai-is-changing-what-we-build",
    date: "Sep 2026",
    title: "AI Is Changing What We Build",
    summary:
      "New frameworks used to come from shared pain. Now a lot of that pain goes to AI instead.",
    readTime: "2 min read",
    body: [
      { type: "p", text: "There was a time when every other week brought a new JavaScript framework, library, or build tool. React, then Next.js, then Vite, Bun, and Remix." },
      { type: "p", text: "Each one came from the same place. Someone hit a painful problem and decided it shouldn't exist anymore." },
      { type: "p", text: "That loop drove the whole ecosystem. Build something, hit a wall, understand it, build a better abstraction, share it. Repeat." },
      { type: "h2", text: "Then AI showed up" },
      { type: "p", text: "Now a lot of developer problems don't need a new tool. They need a prompt." },
      { type: "p", text: "Broken config? Ask AI. Slow build? Ask AI. Weird bundler behavior or a terrible API? Ask AI." },
      { type: "p", text: "The problem is still there. It just costs less to live with it." },
      { type: "p", text: "That changes what we build. Before, when enough people felt the same pain, someone would say:" },
      { type: "quote", text: "There has to be a better way." },
      { type: "p", text: "And they'd build it. Now the reaction is more like:" },
      { type: "quote", text: "I'll just ask Claude." },
      { type: "h2", text: "AI may be soaking up the pain that creates frameworks" },
      { type: "p", text: "Nobody builds a framework when everything works. You build one because something keeps hurting." },
      { type: "p", text: "AI doesn't remove that complexity. It helps you get around it. And that can lower the drive to fix it for good." },
      { type: "p", text: "Why spend six months on a new abstraction when an AI agent can help thousands of developers work around the old one?" },
      { type: "p", text: "So the real question is: are we solving problems, or just getting better at tolerating them?" },
      { type: "h2", text: "Maybe innovation is moving to a new layer" },
      { type: "p", text: "Today's frameworks are already packed with engineering: compilers, bundlers, caching, streaming, server rendering, code splitting, and more. Big performance wins from yet another framework are getting harder to find." },
      { type: "p", text: "If AI can profile a component, spot bottlenecks, and suggest better caching, the next big speedup might happen inside the stack we already have." },
      { type: "h2", text: "Not good or bad, just different" },
      { type: "p", text: "The old loop was Pain → Tool → Framework → New abstraction. The new loop is Pain → AI → Workaround." },
      { type: "p", text: "Workarounds are fast. But abstractions create leverage. A workaround fixes one person's problem today. A good framework makes the problem disappear for millions of people for years." },
      { type: "p", text: "So let's not use AI as an excuse to stop improving the foundations. Sometimes the right move isn't asking AI how to fix something. It's asking:" },
      { type: "quote", text: "Why does this problem exist in the first place?" },
      { type: "p", text: "The next great developer tools might come from people who keep asking that question. Not despite AI, but because of it." },
    ],
  },
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
