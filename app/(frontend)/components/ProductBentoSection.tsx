"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionPill from "./SectionPill";

const INTEGRATION_LOGOS = [
  ["X", "/x.png"],
  ["LinkedIn", "/linkedin.png"],
  ["Mailchimp", "/mailchimp-yoinky.png"],
  ["Brevo", "/brevo.png"],
  ["Omnisend", "/omnisend.png"],
  ["Slack", "/slack.png"],
  ["Granola", "/granola.png"],
  ["Notion", "/notion.png"],
  ["GitHub", "/Octicons-mark-github.svg"],
  ["Blog webhook", "/blog-webhook.svg"],
] as const;

const FEATURES = [
  {
    title: "Open source by design",
    description: "Use Yoinky for free. Self host it, bring your own AI keys, and keep full control of your stack.",
    className: "product-bento-card--image",
  },
  {
    title: "Your ideas. Your voice.",
    description: "Yoinky pulls ideas from the tools you already use, learns how you think, and writes like you actually sound.",
    className: "product-bento-card--video",
  },
  {
    title: "Built for each platform",
    description: "Each platform have specific\nskills.md for best optimisation",
    className: "product-bento-card--small product-bento-card--platform",
  },
  {
    title: "Work wherever you want",
    description: "Use the web app, or talk to Yoinky via Telegram or Slack.",
    className: "product-bento-card--small product-bento-card--work",
  },
  {
    title: "Stop spraying. Start learning.",
    description: "Yoinky tracks what actually performs, learns from the results, and adjusts your content strategy over time.",
    className: "product-bento-card--small product-bento-card--learning",
  },
];

export default function ProductBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product"
      className={`product-bento-section ${isVisible ? "product-bento-section--visible" : ""}`}
      aria-labelledby="product-bento-heading"
    >
      <div className="product-bento-header">
        <div className="product-bento-pill"><SectionPill>Capabilities</SectionPill></div>
        <h2 id="product-bento-heading" className="product-bento-heading">
          Stop starting from
          <br />
          <span>a blank page.</span>
        </h2>
      </div>

      <div className="product-bento-grid">
        {FEATURES.map((feature) => (
          <article key={feature.title} className={`product-bento-card ${feature.className}`}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {feature.title === "Open source by design" && (
              <div className="product-open-source-art" aria-hidden="true">
                <Image className="product-open-source-art__image" src="/open-source-code-mark.png" alt="" width={1254} height={1254} />
              </div>
            )}
            {feature.title === "Built for each platform" && (
              <div className="product-platform-art" aria-hidden="true">
                <Image className="product-platform-art__image" src="/platform-skills-preview.png" alt="" width={1448} height={1086} priority />
              </div>
            )}
            {feature.title === "Work wherever you want" && (
              <div className="product-work-art" aria-hidden="true">
                <Image className="product-work-art__image" src="/work-anywhere-preview.png" alt="" width={1672} height={941} />
              </div>
            )}
            {feature.title === "Stop spraying. Start learning." && (
              <div className="product-learning-art" aria-hidden="true">
                <svg className="product-learning-art__svg" viewBox="0 0 320 116" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="learning-green" x1="96" y1="76" x2="304" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#59C96A" stopOpacity="0.4" />
                      <stop offset="0.52" stopColor="#78E884" />
                      <stop offset="1" stopColor="#A6FF92" />
                    </linearGradient>
                    <linearGradient id="learning-area" x1="0" y1="0" x2="0" y2="116" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#67D978" stopOpacity="0.26" />
                      <stop offset="1" stopColor="#67D978" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="product-learning-art__area" d="M0 90C39 90 60 86 88 82C122 78 150 72 179 63C217 51 260 30 320 8V116H0Z" />
                  <path className="product-learning-art__white" d="M0 90C39 90 60 86 88 82C122 78 150 72 179 63C217 51 260 30 320 8" />
                  <path className="product-learning-art__green" d="M0 90C39 90 60 86 88 82C122 78 150 72 179 63C217 51 260 30 320 8" />
                </svg>
              </div>
            )}
            {feature.title === "Your ideas. Your voice." && (
              <div className="product-integration-ticker" aria-hidden="true">
                <div className="product-integration-ticker__line">
                  {INTEGRATION_LOGOS.slice(0, 5).map(([name, src]) => (
                    <span className="product-integration-ticker__logo" key={`left-${name}`}>
                      <Image className={name === "X" ? "product-integration-ticker__image product-integration-ticker__image--light" : "product-integration-ticker__image"} style={name === "X" ? { filter: "brightness(0) invert(1)" } : undefined} src={src} alt="" width={30} height={30} />
                    </span>
                  ))}
                </div>
                <div className="product-integration-ticker__line">
                  {INTEGRATION_LOGOS.slice(5).reverse().map(([name, src]) => (
                    <span className="product-integration-ticker__logo" key={`right-${name}`}>
                      <Image className={name === "Notion" || name === "GitHub" ? "product-integration-ticker__image product-integration-ticker__image--light" : "product-integration-ticker__image"} style={name === "Notion" || name === "GitHub" ? { filter: "brightness(0) invert(1)" } : undefined} src={src} alt="" width={30} height={30} />
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
