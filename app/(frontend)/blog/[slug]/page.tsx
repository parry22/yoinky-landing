import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";
import CTAFooter from "../../components/CTAFooter";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const revalidate = 60;

const PINK = "#F85BA9";

async function getPost(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "posts", limit: 1000, select: { slug: true } });
  return docs.map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const meta = post.meta as { title?: string; description?: string; image?: { url?: string } } | undefined;

  return {
    title: meta?.title ?? `${post.title} | Yoinky Blog`,
    description: meta?.description ?? (post.excerpt as string | undefined),
    openGraph: {
      title: meta?.title ?? post.title,
      description: meta?.description ?? (post.excerpt as string | undefined),
      images: meta?.image?.url ? [{ url: meta.image.url }] : undefined,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ?? post.title,
      description: meta?.description ?? (post.excerpt as string | undefined),
      images: meta?.image?.url ? [meta.image.url] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://meetyoinky.com";
  const meta = post.meta as { title?: string; description?: string; image?: { url?: string } } | undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta?.title ?? post.title,
    description: meta?.description ?? (post.excerpt as string | undefined),
    image: meta?.image?.url ?? (post.image as string | undefined),
    author: {
      "@type": "Person",
      name: post.author as string | undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "Yoinky",
      url: SITE_URL,
    },
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div style={{ backgroundColor: "#FDF6EF", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav light />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(56px,9vw,88px) clamp(24px,6vw,40px) clamp(64px,10vw,96px)" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "clamp(28px,4vw,40px)" }}>
          <Link href="/blog" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(0,0,0,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Blog
          </Link>
        </div>

        {/* Tag */}
        {post.tag && (
          <span style={{ display: "inline-block", fontSize: 11, fontFamily: "DM Sans, sans-serif", fontWeight: 600, letterSpacing: "0.08em", color: PINK, background: "#FFF0F7", borderRadius: 100, padding: "3px 10px", marginBottom: "clamp(14px,2vw,20px)" }}>
            {(post.tag as string).toUpperCase()}
          </span>
        )}

        {/* Title */}
        <h1 style={{ fontSize: "clamp(28px,5.5vw,46px)", fontWeight: 700, color: "#0C0C0C", lineHeight: 1.1, letterSpacing: "-0.8px", margin: "0 0 clamp(16px,2.5vw,24px)" }}>
          {post.title}
        </h1>

        {/* Meta bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(0,0,0,0.38)", marginBottom: "clamp(32px,5vw,48px)", flexWrap: "wrap" }}>
          {post.author && (
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: PINK, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                {(post.author as string)[0]}
              </span>
              {post.author as string}
            </span>
          )}
          {post.author && post.publishedAt && <span>·</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          )}
          {post.readTime && <><span>·</span><span>{post.readTime as number} min read</span></>}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "clamp(32px,5vw,48px)" }} />

        {/* Hero image */}
        {post.image && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden", marginBottom: "clamp(32px,5vw,48px)" }}>
            <Image src={post.image as string} alt={post.title} fill style={{ objectFit: "cover" }} priority />
          </div>
        )}

        {/* Article body */}
        {post.content && (
          <div className="legal-body article-body" style={{ fontSize: "clamp(15px,2.5vw,17px)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)" }}>
            <RichText data={post.content as Parameters<typeof RichText>[0]["data"]} />
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: "clamp(48px,7vw,72px)", background: "#0C0C0C", borderRadius: 20, padding: "clamp(28px,4vw,44px)", textAlign: "center" }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 10px" }}>
            Private Beta
          </p>
          <h3 style={{ fontSize: "clamp(22px,3.5vw,30px)", color: "white", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px" }}>
            Stop paying the context tax.
          </h3>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(13px,2vw,15px)", color: "rgba(255,255,255,0.45)", margin: "0 0 24px", lineHeight: 1.6 }}>
            Yoinky remembers your work so you don&apos;t have to re-explain it every time.
          </p>
          <a href="https://tally.so/r/Ek6zbo" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: PINK, color: "white", fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500, borderRadius: 100, padding: "10px 24px", textDecoration: "none" }}>
            Apply for early access
          </a>
        </div>

      </main>

      <CTAFooter />
    </div>
  );
}
