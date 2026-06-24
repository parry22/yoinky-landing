import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import CTAFooter from "../components/CTAFooter";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata = {
  title: "Blog | Yoinky",
  description: "Thoughts on productivity, proactive AI, and the future of how we work.",
};

export const revalidate = 60;

const PINK = "#F85BA9";

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
    <div style={{ backgroundColor: "#FDF6EF", minHeight: "100vh" }}>
      <Nav light />

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(64px,10vw,100px) clamp(24px,6vw,64px) clamp(32px,4vw,48px)" }}>
        <span style={{ fontSize: 11, fontFamily: "DM Sans, sans-serif", fontWeight: 600, letterSpacing: "0.1em", color: PINK, textTransform: "uppercase" }}>
          Blog
        </span>
        <h1 style={{ fontSize: "clamp(36px,7vw,72px)", fontWeight: 700, color: "#0C0C0C", lineHeight: 1.05, margin: "10px 0 0", letterSpacing: "-1px" }}>
          Ideas worth
          <br className="hidden md:block" />
          {" "}<span style={{ color: "rgba(0,0,0,0.35)" }}>thinking about.</span>
        </h1>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px,6vw,64px)" }}>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(32px,5vw,56px) clamp(24px,6vw,64px) clamp(64px,10vw,100px)" }}>
        {posts.length === 0 ? (
          <p style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(0,0,0,0.4)", fontSize: 15 }}>
            No posts yet. Add your first one in the admin panel.
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "clamp(20px,3vw,32px)" }}>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="blog-card"
                  style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer", overflow: "hidden" }}
                >
                  {post.image && (
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", flexShrink: 0 }}>
                      <Image
                        src={post.image as string}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,28px)", display: "flex", flexDirection: "column", flex: 1 }}>
                    {post.tag && (
                      <span style={{
                        display: "inline-block", fontSize: 11, fontFamily: "DM Sans, sans-serif",
                        fontWeight: 600, letterSpacing: "0.08em", color: PINK, background: "#FFF0F7",
                        borderRadius: 100, padding: "3px 10px", marginBottom: "clamp(14px,2vw,20px)", alignSelf: "flex-start",
                      }}>
                        {(post.tag as string).toUpperCase()}
                      </span>
                    )}

                    <h2 style={{ fontSize: "clamp(18px,2.4vw,22px)", fontWeight: 700, color: "#0C0C0C", lineHeight: 1.25, letterSpacing: "-0.3px", margin: "0 0 clamp(10px,1.5vw,14px)", flex: 1 }}>
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(13px,1.8vw,15px)", color: "rgba(0,0,0,0.5)", lineHeight: 1.7, margin: "0 0 clamp(20px,2.5vw,28px)" }}>
                        {post.excerpt as string}
                      </p>
                    )}

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "rgba(0,0,0,0.35)" }}>
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}
                      </span>
                      {post.readTime && (
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "rgba(0,0,0,0.35)" }}>
                          {post.readTime as number} min read
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CTAFooter />
    </div>
  );
}
