import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getPayload } from "payload";
import config from "@payload-config";
import { BG, TEXT, TEXT_SOFT, LINE, SERIF, UI } from "../components/theme";

export const metadata = {
  title: "Blog | Yoinky",
  description: "Thoughts on memory, voice, and building a personal brand that actually sounds like you.",
};

export const revalidate = 60;

async function getPosts() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    limit: 100,
    sort: "-publishedAt",
  });
  return docs;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      {/* Header */}
      <div className="px-6 md:px-12">
        <h1
          style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: "clamp(48px,8vw,84px)", lineHeight: 1,
            letterSpacing: "-0.01em", color: TEXT,
            margin: "clamp(24px,4vw,44px) 0 0",
          }}
        >
          Blog
        </h1>
        <p style={{ fontFamily: UI, fontSize: "clamp(15px,1.6vw,17px)", lineHeight: 1.55, color: TEXT_SOFT, margin: "clamp(14px,2vw,18px) 0 0", maxWidth: 460, letterSpacing: 0 }}>
          Notes on memory, voice, and building a brand people actually recognize.
        </p>
      </div>

      {/* Posts */}
      <div className="px-6 md:px-12" style={{ flex: 1, marginTop: "clamp(32px,5vw,48px)" }}>
        {posts.length === 0 ? (
          <p style={{ fontFamily: UI, color: TEXT_SOFT, fontSize: 15, borderTop: `1px solid ${LINE}`, padding: "24px 0" }}>
            No posts yet. Add your first one in the admin panel.
          </p>
        ) : (
          <div>
            <div style={{ borderTop: `1px solid ${LINE}` }} />
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="grid md:grid-cols-[160px_1fr_auto] items-center"
                  style={{ gap: "clamp(16px,2.5vw,28px)", borderBottom: `1px solid ${LINE}`, padding: "clamp(20px,3vw,28px) 0" }}
                >
                  {post.image ? (
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: 8, overflow: "hidden", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <Image src={post.image as string} alt={post.title} fill sizes="160px" style={{ objectFit: "cover" }} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  <div>
                    {post.tag && (
                      <span style={{ fontFamily: UI, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: TEXT_SOFT, display: "block", marginBottom: 8 }}>
                        {(post.tag as string).toUpperCase()}
                      </span>
                    )}
                    <h2 style={{ fontFamily: SERIF, fontSize: "clamp(20px,2.6vw,26px)", fontWeight: 400, color: TEXT, lineHeight: 1.2, letterSpacing: 0, margin: "0 0 6px" }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontFamily: UI, fontSize: 14, color: TEXT_SOFT, lineHeight: 1.6, margin: 0, maxWidth: 520, letterSpacing: 0 }}>
                        {post.excerpt as string}
                      </p>
                    )}
                  </div>

                  <div className="flex md:flex-col md:items-end gap-2 md:gap-1" style={{ whiteSpace: "nowrap" }}>
                    <span style={{ fontFamily: UI, fontSize: 12.5, color: TEXT_SOFT, letterSpacing: 0 }}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                    </span>
                    {post.readTime && (
                      <span style={{ fontFamily: UI, fontSize: 12.5, color: TEXT_SOFT, letterSpacing: 0 }}>
                        {post.readTime as number} min read
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
