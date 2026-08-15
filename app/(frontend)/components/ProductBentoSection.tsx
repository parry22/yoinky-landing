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
    description: "Every platform gets its own skills.md for native formatting, voice, and audience fit.",
    className: "product-bento-card--small",
  },
  {
    title: "Work wherever you want",
    description: "Run everything from the web app, or simply talk to Yoinky through Telegram or Slack.",
    className: "product-bento-card--small",
  },
  {
    title: "Stop spraying. Start learning.",
    description: "Yoinky tracks what actually performs, learns from the results, and adjusts your content strategy over time.",
    className: "product-bento-card--small",
  },
]; 

export default function ProductBentoSection() {
  return (
    <section id="product" className="product-bento-section" aria-labelledby="product-bento-heading">
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
          </article>
        ))}
      </div>
    </section>
  );
}
import SectionPill from "./SectionPill";
