import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/portfolio";
import s from "./page.module.css";

// Only slugs from content/portfolio.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} · navraj.s`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className={s.page}>
      <article className={s.card}>
        <Link href="/" className={s.back}>
          ← back to desktop
        </Link>
        <div className={s.meta}>
          {post.date} · {post.readTime}
        </div>
        <h1 className={s.title}>{post.title}</h1>
        <div className={s.body}>
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
