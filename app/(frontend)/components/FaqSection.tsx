"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import SectionPill from "./SectionPill";
import styles from "./FaqSection.module.css";

const FAQS: Array<[string, ReactNode]> = [
  ["Is Yoinky just another social media scheduler?", <>
    <p>No. Scheduling is only the last step.</p>
    <p>Yoinky learns your voice, ideas, positioning and past performance, then helps decide <strong>what to say, how to say it, and where it should go</strong>. It can research trends, repurpose ideas for different platforms, surface content opportunities and adjust based on what actually performs.</p>
  </>],
  ["Will the content actually sound like me?", <>
    <p>That’s the point.</p>
    <p>Yoinky learns from your existing posts, ideas and writing patterns instead of starting every prompt from scratch. It builds an understanding of your voice, beliefs and positioning, then uses that context whenever it writes for you.</p>
    <p>The more you use it, the more context it has to work with.</p>
  </>],
  ["Does Yoinky just repost the same content everywhere?", <>
    <p>No. Different platforms need different writing.</p>
    <p>Yoinky adapts the idea to the platform instead of simply resizing or rewriting the same post. A LinkedIn post should not read like an X thread with extra line breaks, despite what half the internet appears to believe.</p>
    <p>Each platform gets its own writing and optimisation logic while keeping the underlying idea and your voice intact.</p>
  </>],
  ["Can Yoinky run my content automatically?", <>
    <p>Yes, but you stay in control.</p>
    <p>You can use Yoinky as a copilot, review drafts before anything goes out, schedule posts yourself, or use Auto Agent workflows to handle more of the process for you.</p>
  </>],
  ["Do I have to use the web app every time?", <>
    <p>No.</p>
    <p>You can manage Yoinky from the web app, and supported conversational interfaces such as Telegram or Slack can let you capture ideas, request drafts, approve content and interact with the agent without constantly opening another dashboard.</p>
    <p>The goal is for Yoinky to fit into your existing workflow rather than become another tab you forget exists.</p>
  </>],
  ["Can I self-host Yoinky and keep control of my data?", <>
    <p>Yes.</p>
    <p>Yoinky is open source and can be self-hosted with your own database, infrastructure and API keys. Your provider credentials remain under your control, and self-hosters pay their AI and infrastructure providers directly.</p>
    <p>If you would rather not manage infrastructure, the hosted version handles that complexity for you.</p>
  </>],
];

const FAQ_COLUMNS = [
  FAQS.filter((_, index) => index % 2 === 0),
  FAQS.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <header className={styles.header}>
        <SectionPill>FAQ</SectionPill>
        <h2 id="faq-heading">Less noise. <span>More conviction.</span></h2>
      </header>
      <div className={styles.grid}>
        {FAQ_COLUMNS.map((column, columnIndex) => (
          <div className={styles.column} key={columnIndex}>
            {column.map(([question, answer]) => {
              const index = FAQS.findIndex(([itemQuestion]) => itemQuestion === question);
              const isOpen = open === index;
              return (
                <article className={`${styles.item} ${isOpen ? styles.open : ""}`} key={question}>
                  <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{question}</span>{isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                  </button>
                  <div className={styles.answer}><div className={styles.answerContent}>{answer}</div></div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
