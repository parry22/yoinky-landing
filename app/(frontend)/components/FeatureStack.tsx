"use client";

import Image from "next/image";
import FeatureVisual from "./FeatureVisual";

const PINK = "#F85BA9";

const FEATURES = [
  {
    id: "memory",
    tag: "Ambient Learning",
    heading: "Memory That Remembers How You Work",
    body: "Yoinky builds a living memory of your decisions, style, and workflow patterns so you never have to re-explain your context again.",
    image: "/memory.png",
    imageRight: true,
  },
  {
    id: "context",
    tag: "Cross Session Context",
    heading: "Stop Re-Explaining Your Work",
    body: "Every time you switch tools or return to a project, Yoinky already knows what you were doing, what you decided, and how you like to work.",
    image: "/context.png",
    imageRight: false,
  },
  {
    id: "automate",
    tag: "Personalised Workflows",
    heading: "Automations That Feel Personal",
    body: "Yoinky observes how you actually work and starts handling repetitive steps and suggestions based on your real patterns, not generic rules.",
    image: "/workflow.png",
    imageRight: true,
  },
  {
    id: "control",
    tag: "Controlled Privacy",
    heading: "Your Memory. Your Rules.",
    body: "See everything Yoinky remembers, set what it should forget, and control how your data is used across personal and team memory.",
    image: "/privacy.png",
    imageRight: false,
  },
];

export default function FeatureStack() {
  return (
    <section id="features" className="bg-[#FDF6EF] px-6 md:px-16 pb-0">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-14 items-end">
          <div>
            <span
              className="inline-block dm-sans text-[12px] font-medium px-3.5 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#FFF0F7", color: PINK }}
            >
              What you get
            </span>
            <h2 className="text-[34px] md:text-[52px] leading-[1.1]">
              <span className="text-black">Everything you need,</span>
              <br className="hidden md:block" />
              {" "}<span style={{ color: "rgba(0,0,0,0.35)" }}>done before you ask.</span>
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-black/50 text-[15px] md:text-[17px] leading-relaxed dm-sans md:text-right">
              Yoinky works like your best colleague, anticipating, preparing, and acting before you even have to ask.
            </p>
          </div>
        </div>

        {/* Feature rows */}
        <div>
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="py-10 md:py-14"
            >
              <div
                className={`flex flex-col gap-8 md:gap-16 items-start md:items-center ${
                  feature.imageRight ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-2 dm-sans text-[12px] font-medium mb-4" style={{ color: PINK }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PINK, display: "inline-block", flexShrink: 0 }} />
                    {feature.tag}
                  </span>
                  <h3 className="text-[26px] md:text-[36px] leading-[1.15] text-black mb-4">
                    {feature.heading}
                  </h3>
                  <p
                    className="dm-sans text-[14px] md:text-[16px] leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.45)" }}
                  >
                    {feature.body}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:flex-1 min-w-0">
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 16,
                      overflow: "hidden",
                      aspectRatio: "16 / 10",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                    <FeatureVisual id={feature.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
