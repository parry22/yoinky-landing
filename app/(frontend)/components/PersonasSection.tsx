"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LINE, SERIF, TEXT, TEXT_FAINT, TEXT_SOFT, UI } from "./theme";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const PERSONAS = [
  {
    name: "Founders",
    pain: "Your build in public went quiet.",
    useCases: [
      "Buyer radar flags the posts looking for a tool like yours the hour they go up, so you reply first, not last",
      "Release notes become story arcs: drafted in your voice, scheduled for the right hour, posted",
      "Auto-agent keeps you visible straight through launch-week chaos, when you'd normally vanish",
    ],
  },
  {
    name: "Creators",
    pain: "You already had the idea.",
    useCases: [
      "Your best old posts resurface exactly when they become relevant again, with the reasoning attached",
      "Same-day trend drafts, so you're early to the conversation instead of quote-tweeting it late",
      "A daily viral breakdown shows you the pattern behind the one post that beat the algorithm today",
    ],
  },
  {
    name: "Consultants",
    pain: "Nobody can find your expertise.",
    useCases: [
      "People describing your exact problem get flagged before your competitors even open the app",
      "Authority drafts that never contradict your stated positions, because the consistency check runs first",
      "Your whole X presence handled from one chat: drafts, replies, scheduling, zero context switching",
    ],
  },
  {
    name: "Everyone",
    pain: "You don't really have a brand online.",
    useCases: [
      "A throughline gets pulled out of your scattered posts: the version of you that was already there",
      "Told what to post and when, so the blank page never gets a vote",
      "Impressions grow on autopilot, and everything still reads like you, never like a model",
    ],
  },
];

export default function PersonasSection() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ background: "transparent", position: "relative" }}>
      <div
        className="px-6 md:px-12"
        style={{
          maxWidth: 900, margin: "0 auto",
          paddingTop: "clamp(80px,11vw,140px)", paddingBottom: "clamp(20px,3vw,32px)",
        }}
      >
        <SectionHead
          kicker="Who it's for"
          title="Built for anyone the timeline"
          accent="has been ignoring."
          sub="Four kinds of people open Yoinky every morning. Same agent, same radar. A different week for each of them."
        />

        <div style={{ marginTop: "clamp(40px,5vw,56px)" }}>
          {PERSONAS.map((p, i) => {
            const isOpen = i === open;
            return (
              <Reveal key={p.name} delay={i * 70}>
                <div style={{ borderTop: "1px solid " + LINE }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="persona-row"
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      gap: "clamp(14px,3vw,24px)", cursor: "pointer",
                      background: "none", border: "none", textAlign: "left",
                      padding: "clamp(16px,2.4vw,22px) 4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: UI, fontSize: 11.5, color: TEXT_FAINT,
                        fontVariantNumeric: "tabular-nums", width: 24, flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="persona-name"
                      style={{
                        fontFamily: SERIF, fontWeight: 400,
                        fontSize: "clamp(24px,3.4vw,36px)", lineHeight: 1.1,
                        color: isOpen ? TEXT : TEXT_SOFT,
                        transition: "color 400ms ease",
                        flexShrink: 0,
                      }}
                    >
                      {p.name}
                    </span>
                    <span
                      className="hidden md:block"
                      style={{
                        fontFamily: SERIF, fontStyle: "italic",
                        fontSize: 16, color: TEXT_FAINT,
                        flex: 1, textAlign: "right",
                        opacity: isOpen ? 0.9 : 0.55,
                        transition: "opacity 400ms ease",
                      }}
                    >
                      {p.pain}
                    </span>
                    <span
                      className="liquid-glass"
                      style={{
                        width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginLeft: "auto",
                        backgroundColor: isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                        transition: "background 400ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <FiPlus size={15} color={TEXT} />
                    </span>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 600ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div
                        className="grid"
                        style={{
                          gap: "clamp(18px,3vw,40px)",
                          padding: "4px 4px clamp(24px,3vw,32px) clamp(38px,5vw,48px)",
                        }}
                      >
                        <div style={{ display: "grid", gap: 11, alignContent: "start" }}>
                          {p.useCases.map((u, j) => (
                            <div
                              key={j}
                              style={{
                                display: "flex", gap: 12, alignItems: "flex-start",
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? "translateY(0)" : "translateY(8px)",
                                transition: "opacity 450ms ease " + (140 + j * 100) + "ms, transform 450ms ease " + (140 + j * 100) + "ms",
                              }}
                            >
                              <span
                                style={{
                                  width: 5, height: 5, borderRadius: "50%",
                                  background: TEXT, flexShrink: 0, marginTop: 7,
                                  boxShadow: "0 0 6px rgba(255,255,255,0.5)",
                                }}
                              />
                              <span style={{ fontFamily: UI, fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT, maxWidth: 560 }}>
                                {u}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <div style={{ borderTop: "1px solid " + LINE }} />
        </div>
      </div>
    </section>
  );
}
