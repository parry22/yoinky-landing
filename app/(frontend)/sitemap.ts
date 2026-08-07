import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://meetyoinky.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: Array<{ slug: string; publishedAt: string | null; updatedAt: string }> = [];
  if (process.env.PAYLOAD_SECRET && process.env.DATABASE_URL) {
    try {
      const payload = await getPayload({ config });
      const result = await payload.find({
        collection: "posts",
        limit: 1000,
        select: { slug: true, publishedAt: true, updatedAt: true },
      });
      posts = result.docs.flatMap((post) =>
        typeof post.slug === "string"
          ? [{
              slug: post.slug,
              publishedAt: typeof post.publishedAt === "string" ? post.publishedAt : null,
              updatedAt: typeof post.updatedAt === "string" ? post.updatedAt : new Date().toISOString(),
            }]
          : [],
      );
    } catch {
      console.warn("CMS unavailable while generating the sitemap; publishing static routes only.");
    }
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date((post.publishedAt ?? post.updatedAt) as string),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...postEntries,
  ];
}
