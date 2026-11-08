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
  "Building a Go/PostgreSQL double-entry wallet ledger",
  "Reserve, capture and release flows for event bookings",
  "Hardening Razorpay settlement between Lambdas and the ledger",
  "Writing about outbox and idempotency on the blog",
  "Growing a three-person founding team. Open to hard backend problems",
];

export type ResumeEntry = {
  dot: string; // css color var
  title: string;
  meta: string;
  bullets: string[];
};

export const experience: ResumeEntry[] = [
  {
    dot: "var(--accent)",
    title: "Founding Engineer — Marzi by Primus",
    meta: "Bengaluru, India · Feb 2026 - Present",
    bullets: [
      "Built and launched a Go/PostgreSQL wallet ledger with immutable double-entry accounting and grant-backed reserve, capture and release operations for event bookings.",
      "Implemented per-wallet row locking, scoped idempotency and request fingerprint checks to prevent overspending and duplicate debits during concurrent requests and retries.",
      "Engineered event-booking and payment flows with seat reservations, Razorpay capture and amount verification, and durable settlement and reconciliation between Lambda services and the ledger.",
      "Generated and distributed 4M+ signed coupon codes; supported four partner campaigns reaching 50K+ users across Google Pay, PharmEasy, Pronto and Tata 1mg.",
      "Designed serverless services using AWS Lambda and DynamoDB, reducing infrastructure costs by over INR 30,000; migrated legacy Python services to Node.js.",
      "Secured ledger APIs with HMAC signatures, scoped service identities, nonce replay protection and rate limiting; implemented versioned migrations and isolated PostgreSQL integration tests.",
      "Built a three-person founding engineering team, owning technical hiring, engineering standards and backend delivery.",
    ],
  },
  {
    dot: "var(--c-projects)",
    title: "Founder and Engineer — Coacheasy",
    meta: "India · Nov 2025 - Jan 2026",
    bullets: [
      "Built a fitness-coaching SaaS MVP in Elixir and Phoenix, delivering core features for client nutrition, workouts, scheduling and engagement.",
    ],
  },
  {
    dot: "var(--c-now)",
    title: "Software Development Engineer — Vision11 (Haanaa)",
    meta: "Gurugram, India · Jun 2025 - Oct 2025",
    bullets: [
      "Migrated 3.5M+ user profiles from PostgreSQL to CleverTap for customer engagement and analytics.",
      "Refactored two of nine microservices to improve maintainability; built a fault-tolerant production KYC integration with the Easebuzz API.",
    ],
  },
  {
    dot: "var(--c-photos)",
    title: "Software Development Engineer — Burpy AI",
    meta: "Remote · Dec 2024 - May 2025",
    bullets: [
      "Developed two Python/GraphQL services backed by MongoDB; wrote Go and Python scripts for database query optimization and schema maintenance.",
      "Implemented eight user-activity trackers for smartwatch and access-device analytics.",
    ],
  },
  {
    dot: "var(--c-blog)",
    title: "Freelance Developer — STAN",
    meta: "Remote · Dec 2024 - Apr 2025",
    bullets: [
      "Integrated REST APIs into a React/Next.js commerce application and packaged it for iOS and Android using React Native WebView.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python", "Elixir", "SQL"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Gin", "GORM", "Phoenix", "REST APIs", "GraphQL"],
  },
  { label: "Data", items: ["PostgreSQL", "DynamoDB", "MongoDB", "Redis"] },
  {
    label: "Infrastructure",
    items: [
      "AWS (Lambda, EC2, S3, API Gateway, CloudWatch)",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Linux",
    ],
  },
];

export const education = {
  title: "Bachelor of Computer Applications, Chandigarh University",
  body: "Mohali, Punjab · CGPA 7.48 (2022-2025).",
};

export const resumePdf = "/resume.pdf";
