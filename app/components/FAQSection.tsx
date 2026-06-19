"use client";

import { useState } from "react";

const PINK = "#F85BA9";

const CATEGORIES = ["General", "AI & Capabilities", "Integrations & Privacy"];

const FAQS: Record<string, { q: string; a: string }[]> = {
  General: [
    {
      q: "What is Yoinky?",
      a: "Yoinky is a background agent for Mac that automatically captures what you do across apps and builds persistent memory of how you work, so you don't have to keep re-explaining your context to AI tools.",
    },
    {
      q: "Who is Yoinky made for?",
      a: "Yoinky is built for power users like product designers, software engineers, and solo founders who work across multiple tools and projects and lose time re-establishing context.",
    },
    {
      q: "Can teams use Yoinky together?",
      a: "Yes. Yoinky supports shared team memory, allowing teams to maintain common context, decisions, and workflows while keeping individual memory private.",
    },
    {
      q: "How is Yoinky different from tools like Cursor or Claude?",
      a: "Cursor and Claude are great at generation, but they still require you to re-explain context in every session. Yoinky runs in the background and maintains long-term memory of your work so you don't have to.",
    },
    {
      q: "Do I need to change how I work to use Yoinky?",
      a: "No. Yoinky works in the background. You continue using your existing apps normally while it quietly builds memory and offers help when relevant.",
    },
    {
      q: "Is there an enterprise version of Yoinky?",
      a: "Yes. We offer an Enterprise plan with admin controls, SSO, audit logs, data residency options, and team memory governance.",
    },
  ],
  "AI & Capabilities": [
    {
      q: "What kind of memory does Yoinky have?",
      a: "Yoinky uses three types of memory: Episodic (what happened), Semantic (your principles and preferences), and Procedural (how you actually work and make decisions).",
    },
    {
      q: "How does Yoinky learn my workflow?",
      a: "It observes your actions across Mac apps over time and identifies repeating patterns. It then uses this to give relevant suggestions and automate repetitive steps.",
    },
    {
      q: "Can Yoinky automate tasks based on my patterns?",
      a: "Yes. Once it understands your recurring workflows, it can proactively suggest or execute repetitive steps without you having to set up rules manually.",
    },
    {
      q: "Does Yoinky work across multiple projects at the same time?",
      a: "Yes. Yoinky maintains separate memory contexts for different projects while still understanding your overall working style.",
    },
    {
      q: "Can my team share memory while keeping individual privacy?",
      a: "Yes. Yoinky allows shared team memory for common decisions and context, while keeping personal memory and sensitive information private to each user.",
    },
    {
      q: "How accurate is Yoinky's memory over long periods?",
      a: "Yoinky has built-in governance controls that let you review, edit, or delete memories. This helps prevent context drift and keeps memory accurate over months.",
    },
  ],
  "Integrations & Privacy": [
    {
      q: "Does Yoinky work with the apps I already use?",
      a: "Yoinky works across most Mac apps through system-level access. It understands context from tools like Figma, Cursor, Slack, Linear, Notes, and more without needing custom integrations for basic memory.",
    },
    {
      q: "Can Yoinky integrate with other AI tools like Claude or Cursor?",
      a: "Yes. Yoinky can work alongside Claude, Cursor, and other AI tools by providing them with relevant memory and context when needed.",
    },
    {
      q: "Where is my data stored?",
      a: "You can choose between local-only storage or encrypted cloud sync. Enterprise plans also support on-premise and private cloud deployment.",
    },
    {
      q: "How secure is my data with Yoinky?",
      a: "Yoinky uses end-to-end encryption for synced data. You have full control over what gets remembered, and sensitive data can be excluded or deleted at any time.",
    },
    {
      q: "Does Yoinky comply with enterprise security standards?",
      a: "Yes. Enterprise plans include SSO (SAML/OIDC), audit logs, role-based access control, and options for data residency and compliance certifications (SOC 2, GDPR, HIPAA on request).",
    },
    {
      q: "Can I control what Yoinky remembers and forgets?",
      a: "Yes. You have full visibility and control. You can review memories, set rules for what should not be remembered, and delete specific memories or entire projects at any time.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  const items = FAQS[activeCategory];

  return (
    <section className="bg-white px-6 md:px-16 pb-20 md:pb-28">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header — two-column editorial */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-14 items-end">
          <div>
            <span
              className="inline-block dm-sans text-[12px] font-medium px-3.5 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#FFF0F7", color: PINK }}
            >
              FAQ
            </span>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Common questions, </span>
              <span style={{ color: "rgba(0,0,0,0.35)" }}>answered.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/50 text-[15px] md:text-[17px] leading-relaxed dm-sans md:text-right">
              Learn how Yoinky works, what it connects to, how actions are handled,
              and what you can expect day to day.
            </p>
          </div>
        </div>

        {/* Body — sidebar + accordion */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">

          {/* Left sidebar */}
          <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col gap-4">

            {/* Category tabs */}
            <div
              style={{
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.07)",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.015)",
              }}
            >
              {/* Horizontal scroll on mobile */}
              <div className="flex md:flex-col p-2 gap-1 overflow-x-auto">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className="dm-sans text-[13px] md:text-[14px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer rounded-[20px] md:rounded-[8px]"
                    style={{
                      padding: "10px 16px",
                      backgroundColor: activeCategory === cat ? PINK : "transparent",
                      color: activeCategory === cat ? "white" : "rgba(0,0,0,0.45)",
                      textAlign: "left",
                      border: "none",
                      width: "100%",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Got Questions card — desktop only */}
            <div
              className="hidden md:block"
              style={{
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.07)",
                backgroundColor: "rgba(0,0,0,0.015)",
                padding: "clamp(20px, 2.5vw, 28px)",
              }}
            >
              <h3 className="text-[20px] leading-snug text-black mb-2">Got Questions?</h3>
              <p className="dm-sans text-[13px] text-black/45 leading-relaxed mb-5">
                Need help with something? Our team is here to make things easy. Don&apos;t hesitate to reach out.
              </p>
              <a
                href="mailto:hello@meetyoinky.com"
                className="dm-sans text-[13px] font-medium inline-flex items-center gap-1"
                style={{ color: PINK }}
              >
                Email us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex-1 flex flex-col gap-2">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={`${activeCategory}-${i}`}
                  style={{
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.07)",
                    backgroundColor: "white",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    style={{ padding: "clamp(16px, 2vw, 22px)", background: "none", border: "none" }}
                  >
                    <span className="text-[14px] md:text-[16px] text-black leading-snug">
                      {item.q}
                    </span>
                    <span
                      className="flex-shrink-0"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.25s ease, background-color 0.2s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        backgroundColor: isOpen ? PINK : "transparent",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke={isOpen ? "white" : "rgba(0,0,0,0.5)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <p
                      className="dm-sans text-[13px] md:text-[15px] leading-relaxed text-black/50"
                      style={{
                        padding: "0 clamp(16px, 2vw, 22px) clamp(16px, 2vw, 22px)",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Got Questions card — mobile only */}
        <div
          className="mt-4 md:hidden"
          style={{
            borderRadius: 20,
            border: "1px solid rgba(0,0,0,0.07)",
            backgroundColor: "rgba(0,0,0,0.015)",
            padding: "clamp(20px, 2.5vw, 28px)",
          }}
        >
          <h3 className="text-[20px] leading-snug text-black mb-2">Got Questions?</h3>
          <p className="dm-sans text-[13px] text-black/45 leading-relaxed mb-5">
            Need help with something? Our team is here to make things easy. Don&apos;t hesitate to reach out.
          </p>
          <a
            href="mailto:hello@meetyoinky.com"
            className="dm-sans text-[13px] font-medium inline-flex items-center gap-1"
            style={{ color: PINK }}
          >
            Email us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
