import type { MetadataRoute } from "next";
import { site } from "@/content/portfolio";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    ...getPosts().map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
    })),
  ];
}
