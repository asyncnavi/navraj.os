import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getPosts } from "@/lib/posts";
import s from "./page.module.css";

// Only slugs from content/posts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { title, summary } = post.meta;
  return {
    title: `${title} · navraj.s`,
    description: summary,
    openGraph: { title, description: summary, type: "article" },
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, markdown } = post;

  return (
    <main className={s.page}>
      <article className={s.card}>
        <Link href="/" className={s.back}>
          ← back to desktop
        </Link>
        <div className={s.meta}>
          {meta.dateLabel} · {meta.readTime}
        </div>
        <h1 className={s.title}>{meta.title}</h1>
        <div className={s.body}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
