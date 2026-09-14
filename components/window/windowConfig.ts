export type AppId =
  | "about"
  | "projects"
  | "blog"
  | "resume"
  | "now"
  | "contact";

export type WindowMeta = {
  id: AppId;
  /** Filename-style label shown in titlebar / icon / dock */
  label: string;
  /** Glyph used for icon + dock + titlebar */
  glyph: string;
  /** CSS var for the accent color */
  accentVar: string;
  /** Desktop default geometry */
  top: number;
  left: number;
  width: number;
};

export const WINDOWS: Record<AppId, WindowMeta> = {
  about: {
    id: "about",
    label: "about.me",
    glyph: "◍",
    accentVar: "var(--c-about)",
    top: 88,
    left: 300,
    width: 620,
  },
  projects: {
    id: "projects",
    label: "projects/",
    glyph: "▤",
    accentVar: "var(--c-projects)",
    top: 120,
    left: 360,
    width: 740,
  },
  blog: {
    id: "blog",
    label: "blog.md",
    glyph: "≣",
    accentVar: "var(--c-blog)",
    top: 130,
    left: 420,
    width: 620,
  },
  resume: {
    id: "resume",
    label: "resume.pdf",
    glyph: "▦",
    accentVar: "var(--c-resume)",
    top: 82,
    left: 470,
    width: 660,
  },
  now: {
    id: "now",
    label: "now.log",
    glyph: "◉",
    accentVar: "var(--c-now)",
    top: 120,
    left: 150,
    width: 440,
  },
  contact: {
    id: "contact",
    label: "contact.card",
    glyph: "✦",
    accentVar: "var(--c-contact)",
    top: 150,
    left: 520,
    width: 560,
  },
};

/** Order used for icons + dock */
export const APP_ORDER: AppId[] = [
  "about",
  "projects",
  "blog",
  "resume",
  "now",
  "contact",
];
