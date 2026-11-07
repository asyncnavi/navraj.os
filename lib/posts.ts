import "server-only";
import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  dateLabel: string;
  readTime: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseFrontmatter(raw: string): { data: Record<string, string>; markdown: string } {
  const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("post is missing frontmatter");
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const value = line.slice(i + 1).trim();
    data[line.slice(0, i).trim()] = value.replace(/^"(.*)"$/, "$1");
  }
  return { data, markdown: match[2] };
}

function toMeta(slug: string, data: Record<string, string>, markdown: string): PostMeta {
  const { title, date, summary } = data;
  if (!title || !date || !summary) throw new Error(`post ${slug} needs title, date, summary`);
  const [year, month] = date.split("-");
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title,
    summary,
    date,
    dateLabel: `${MONTHS[Number(month) - 1]} ${year}`,
    readTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
  };
}

function readPost(slug: string): { meta: PostMeta; markdown: string } {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, markdown } = parseFrontmatter(raw);
  return { meta: toMeta(slug, data, markdown), markdown };
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(f.slice(0, -3)).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): { meta: PostMeta; markdown: string } | null {
  if (!fs.existsSync(path.join(POSTS_DIR, `${slug}.md`))) return null;
  return readPost(slug);
}
