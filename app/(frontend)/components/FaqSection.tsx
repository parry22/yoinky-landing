"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import SectionPill from "./SectionPill";
import styles from "./FaqSection.module.css";

const FAQS = [
  ["Who is Yoinky for?", "Yoinky is for founder-led teams and lean marketing teams with real expertise, but no reliable way to turn it into a distinct market presence."],
  ["What problem does Yoinky solve?", "It stops your strongest ideas from being trapped in calls, documents, and a few people’s heads, then helps your team turn them into messages that move work forward."],
  ["Will our content still sound like us?", "Yes. Yoinky works from your company’s language, evidence, and perspective, so your work sounds specific, not like borrowed generic advice."],
  ["Do we need a large content team?", "No. It gives smaller teams the clarity and shared context to create consistent work without starting from scratch every time."],
  ["Can we use what we already have?", "Yes. Begin with the calls, documents, customer proof, and market knowledge your team already trusts."],
  ["How do we get started?", "Start with the team and sources closest to your story, then grow the workspace as Yoinky becomes part of how you go to market."],
] as const;

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
              const index = FAQS.indexOf(FAQS.find(([itemQuestion]) => itemQuestion === question)!);
              const isOpen = open === index;
              return (
                <article className={`${styles.item} ${isOpen ? styles.open : ""}`} key={question}>
                  <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{question}</span>{isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                  </button>
                  <div className={styles.answer}><p>{answer}</p></div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
