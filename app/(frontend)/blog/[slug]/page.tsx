import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { BG, TEXT, TEXT_SOFT, LINE, SERIF, UI } from "../../components/theme";
import AppButton from "../../components/AppButton";

export const revalidate = 60;

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
    <div style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="px-6 md:px-12" style={{ flex: 1, maxWidth: 760, margin: "0 auto", width: "100%", paddingTop: "clamp(24px,4vw,40px)", paddingBottom: "clamp(56px,8vw,88px)" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "clamp(24px,3.5vw,32px)" }}>
          <Link href="/blog" style={{ fontFamily: UI, fontSize: 13, color: TEXT_SOFT, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, letterSpacing: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Blog
          </Link>
        </div>

        {/* Tag */}
        {post.tag && (
          <span style={{ fontFamily: UI, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: TEXT_SOFT, display: "block", marginBottom: "clamp(14px,2vw,18px)" }}>
            {(post.tag as string).toUpperCase()}
          </span>
        )}

        {/* Title */}
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(34px,6vw,56px)", fontWeight: 400, color: TEXT, lineHeight: 1.08, letterSpacing: 0, margin: "0 0 clamp(16px,2.5vw,22px)" }}>
          {post.title}
        </h1>

        {/* Meta bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: UI, fontSize: 13, color: TEXT_SOFT, marginBottom: "clamp(28px,4vw,40px)", flexWrap: "wrap", letterSpacing: 0 }}>
          {post.author && (
            <span style={{ fontFamily: UI, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: UI, width: 20, height: 20, borderRadius: "50%", background: TEXT, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#111", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>
                {(post.author as string)[0]}
              </span>
              {post.author as string}
            </span>
          )}
          {post.author && post.publishedAt && <span style={{ fontFamily: UI }}>·</span>}
          {post.publishedAt && (
            <span style={{ fontFamily: UI }}>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          )}
          {post.readTime && <><span style={{ fontFamily: UI }}>·</span><span style={{ fontFamily: UI }}>{post.readTime as number} min read</span></>}
        </div>

        <div style={{ borderTop: `1px solid ${LINE}`, marginBottom: "clamp(28px,4vw,40px)" }} />

        {/* Hero image */}
        {post.image && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden", marginBottom: "clamp(28px,4vw,40px)", backgroundColor: "rgba(255,255,255,0.06)" }}>
            <Image src={post.image as string} alt={post.title} fill style={{ objectFit: "cover" }} priority />
          </div>
        )}

        {/* Article body */}
        {post.content && (
          <div className="article-body" style={{ fontFamily: UI, fontSize: "clamp(15px,2.2vw,17px)", lineHeight: 1.8, color: TEXT_SOFT, letterSpacing: 0 }}>
            <RichText data={post.content as Parameters<typeof RichText>[0]["data"]} />
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: "clamp(44px,6vw,64px)", borderTop: `1px solid ${LINE}`, paddingTop: "clamp(28px,4vw,36px)" }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "clamp(24px,3.5vw,32px)", color: TEXT, fontWeight: 400, lineHeight: 1.2, letterSpacing: 0, margin: "0 0 10px" }}>
            Try Yoinky.
          </h3>
          <p style={{ fontFamily: UI, fontSize: 14, color: TEXT_SOFT, margin: "0 0 20px", lineHeight: 1.6, maxWidth: 440, letterSpacing: 0 }}>
            An AI agent that actually makes real sense of your growing personal brand.
          </p>
          <AppButton />
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
