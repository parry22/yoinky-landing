import type { FC } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";
import CTAFooter from "../../components/CTAFooter";
import { POSTS } from "../data";
import TheContextTax from "../content/the-context-tax";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Yoinky Blog`,
    description: post.excerpt,
  };
}

const CONTENT_MAP: Record<string, FC> = {
  "the-context-tax": TheContextTax,
};

const PINK = "#F85BA9";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const Content = CONTENT_MAP[post.slug];
  if (!Content) notFound();

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Nav light />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(56px,9vw,88px) clamp(24px,6vw,40px) clamp(64px,10vw,96px)" }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: "clamp(28px,4vw,40px)" }}>
          <Link
            href="/blog"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "rgba(0,0,0,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Blog
          </Link>
        </div>

        {/* Tag */}
        <span style={{
          display: "inline-block",
          fontSize: 11,
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: PINK,
          background: "#FFF0F7",
          borderRadius: 100,
          padding: "3px 10px",
          marginBottom: "clamp(14px,2vw,20px)",
        }}>
          {post.tag.toUpperCase()}
        </span>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(28px,5.5vw,46px)",
          fontWeight: 700,
          color: "#0C0C0C",
          lineHeight: 1.1,
          letterSpacing: "-0.8px",
          margin: "0 0 clamp(16px,2.5vw,24px)",
        }}>
          {post.title}
        </h1>

        {/* Meta bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontFamily: "DM Sans, sans-serif",
          fontSize: 13,
          color: "rgba(0,0,0,0.38)",
          marginBottom: "clamp(32px,5vw,48px)",
          flexWrap: "wrap",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: PINK, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
              {post.author[0]}
            </span>
            {post.author}
          </span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "clamp(32px,5vw,48px)" }} />

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden", marginBottom: "clamp(32px,5vw,48px)" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Article body */}
        <div
          className="legal-body article-body"
          style={{
            fontSize: "clamp(15px,2.5vw,17px)",
            lineHeight: 1.85,
            color: "rgba(0,0,0,0.7)",
          }}
        >
          <Content />
        </div>

        {/* CTA */}
        <div style={{
          marginTop: "clamp(48px,7vw,72px)",
          background: "#0C0C0C",
          borderRadius: 20,
          padding: "clamp(28px,4vw,44px)",
          textAlign: "center",
        }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 10px" }}>
            Private Beta
          </p>
          <h3 style={{ fontSize: "clamp(22px,3.5vw,30px)", color: "white", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px" }}>
            Stop paying the context tax.
          </h3>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(13px,2vw,15px)", color: "rgba(255,255,255,0.45)", margin: "0 0 24px", lineHeight: 1.6 }}>
            Yoinky remembers your work so you don&apos;t have to re-explain it every time.
          </p>
          <a
            href="https://tally.so/r/Ek6zbo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: PINK,
              color: "white",
              fontFamily: "DM Sans, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 100,
              padding: "10px 24px",
              textDecoration: "none",
            }}
          >
            Apply for early access
          </a>
        </div>

      </main>

      <CTAFooter />
    </div>
  );
}
