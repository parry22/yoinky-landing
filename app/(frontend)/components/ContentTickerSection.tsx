import { FiAtSign, FiBookOpen, FiEdit3, FiFileText, FiLinkedin, FiMail, FiMic, FiTrendingUp } from "react-icons/fi";

const SERVICES = [
  { label: "Newsletter Campaigns", copy: "Turn one timely insight into an email your audience wants to open.", icon: FiMail },
  { label: "LinkedIn Thought Leadership", copy: "Turn founder expertise into posts with a clear, consistent point of view.", icon: FiLinkedin },
  { label: "X Trendjacking", copy: "Connect a market moment to your own perspective before the conversation moves on.", icon: FiAtSign },
  { label: "Founder Posts", copy: "Shape calls, notes, and expertise into posts only your founder could write.", icon: FiEdit3 },
  { label: "Customer Stories", copy: "Turn customer evidence into credible proof for sales and marketing to use.", icon: FiBookOpen },
  { label: "Launch Narratives", copy: "Give every launch one story that carries across all of its content.", icon: FiTrendingUp },
  { label: "Executive Briefs", copy: "Create a shared brief so leaders agree on the message before it goes out.", icon: FiFileText },
  { label: "Podcast Angles", copy: "Find the specific perspective your team can bring to the conversation.", icon: FiMic },
];

function ServiceSet() {
  return (
    <div className="content-ticker-set" aria-hidden="true">
      {SERVICES.map(({ label, copy, icon: Icon }) => (
        <article className="content-ticker-card" key={label}>
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          <h3>{label}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

export default function ContentTickerSection() {
  return (
    <section className="content-ticker-section" aria-labelledby="content-ticker-heading">
      <h2 id="content-ticker-heading">Be remembered<br /><span>where it matters.</span></h2>
      <div className="content-ticker-viewport" aria-label="Content formats Yoinky supports">
        <div className="content-ticker-track">
          <ServiceSet />
          <ServiceSet />
        </div>
      </div>
    </section>
  );
}
