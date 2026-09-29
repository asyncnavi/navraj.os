import Link from "next/link";
import { posts } from "@/content/portfolio";
import s from "./apps.module.css";

export default function BlogApp() {
  return (
    <div className={s.padTight}>
      <div className={s.blogMeta}>~/writing · {posts.length} posts</div>
      <div className={s.postList}>
        {posts.map((p) => (
          <Link key={p.slug} className={s.post} href={`/blog/${p.slug}`}>
            <span className={s.postDate}>{p.date}</span>
            <span style={{ flex: 1 }}>
              <span className={s.postTitle}>{p.title}</span>
              <span className={s.postSummary}>{p.summary}</span>
              <span className={s.postRead}>{p.readTime} →</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
