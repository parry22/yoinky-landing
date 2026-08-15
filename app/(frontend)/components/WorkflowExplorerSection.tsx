"use client";

import { useState } from "react";
import { FiBarChart2, FiChevronRight, FiCompass, FiMessageSquare, FiRepeat } from "react-icons/fi";
import SectionPill from "./SectionPill";

const WORKFLOWS = [
  {
    title: "Capture Knowledge",
    description: "Add a note, call, document, or link to your company knowledge.",
    previewKey: "knowledge-capture",
    icon: FiMessageSquare,
  },
  { title: "Review Insights", description: "Check quotes, claims, and customer proof alongside their sources.", previewKey: "insight-review", icon: FiCompass },
  { title: "Shape Narrative", description: "Organise approved insights into shared themes and messages.", previewKey: "narrative-system", icon: FiRepeat },
  { title: "Create Briefs", description: "Turn a narrative into a source-backed brief for any campaign.", previewKey: "content-brief", icon: FiBarChart2 },
  { title: "Approve Content", description: "Review the message and approve publish-ready content in one place.", previewKey: "content-approval", icon: FiMessageSquare },
];

export default function WorkflowExplorerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWorkflow = WORKFLOWS[activeIndex];

  return (
    <section id="use-cases" className="workflow-explorer-section" aria-labelledby="workflow-explorer-heading">
      <div className="workflow-explorer-pill"><SectionPill>Use cases</SectionPill></div>
      <h2 id="workflow-explorer-heading" className="workflow-explorer-heading">
        Give every message
        <br />
        <strong>a reason to exist.</strong>
      </h2>

      <div className="workflow-explorer-shell">
        <div className="workflow-explorer-list">
          {WORKFLOWS.map(({ title, description, icon: Icon }, index) => {
            const active = index === activeIndex;
            return (
            <button
              key={title}
              type="button"
              aria-expanded={active}
              aria-controls="workflow-preview"
              onClick={() => setActiveIndex(index)}
              className={`workflow-explorer-item ${active ? "workflow-explorer-item--active" : ""}`}
            >
              <div className="workflow-explorer-item-main">
                <Icon className="workflow-explorer-icon" size={22} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <span className="workflow-explorer-item-title">{title}</span>
                  <span className="workflow-explorer-item-copy">{description}</span>
                </div>
              </div>
              <FiChevronRight className="workflow-explorer-chevron" size={28} strokeWidth={1.8} aria-hidden="true" />
            </button>
          )})}
        </div>
        <div
          id="workflow-preview"
          className="workflow-explorer-canvas"
          data-workflow={activeWorkflow.previewKey}
          aria-label={`${activeWorkflow.title} visual preview area`}
        />
      </div>
    </section>
  );
}
