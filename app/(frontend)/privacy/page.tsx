import Nav from "../components/Nav";
import CTAFooter from "../components/CTAFooter";

export const metadata = {
  title: "Privacy Policy — Yoinky",
  description: "How Yoinky collects, uses, stores, and protects your information.",
};

const PINK = "#F85BA9";
const DM = "DM Sans, sans-serif";

const S = {
  page:    { backgroundColor: "white", minHeight: "100vh" } as React.CSSProperties,
  wrap:    { maxWidth: 720, margin: "0 auto", padding: "clamp(72px,12vw,108px) clamp(24px,6vw,40px) clamp(64px,10vw,96px)" } as React.CSSProperties,
  tag:     { fontSize: 11, fontFamily: DM, fontWeight: 600, letterSpacing: "0.1em", color: PINK, textTransform: "uppercase" as const },
  h1:      { fontSize: "clamp(32px,6vw,52px)", fontWeight: 700, color: "#0C0C0C", lineHeight: 1.1, margin: "10px 0 14px", letterSpacing: "-0.5px" } as React.CSSProperties,
  meta:    { fontSize: 13, fontFamily: DM, color: "rgba(0,0,0,0.38)", marginBottom: 0 } as React.CSSProperties,
  divider: { border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", margin: "clamp(32px,5vw,48px) 0" } as React.CSSProperties,
  h2:      { fontSize: "clamp(16px,2.8vw,19px)", fontWeight: 650, color: "#0C0C0C", letterSpacing: "-0.2px", margin: "clamp(32px,5vw,44px) 0 10px" } as React.CSSProperties,
  h3:      { fontSize: "clamp(13px,2vw,14px)", fontWeight: 600, color: "#222", letterSpacing: "0.01em", margin: "20px 0 6px" } as React.CSSProperties,
  p:       { fontFamily: DM, fontSize: "clamp(14px,2.4vw,15.5px)", color: "rgba(0,0,0,0.65)", lineHeight: 1.85, margin: "0 0 14px" } as React.CSSProperties,
  ul:      { fontFamily: DM, fontSize: "clamp(14px,2.4vw,15.5px)", color: "rgba(0,0,0,0.65)", lineHeight: 1.85, paddingLeft: 22, margin: "0 0 14px" } as React.CSSProperties,
  li:      { marginBottom: 8 } as React.CSSProperties,
  strong:  { color: "rgba(0,0,0,0.78)", fontWeight: 600 } as React.CSSProperties,
  pill:    { display: "inline-block", background: "#FFF0F7", color: PINK, fontSize: 12, fontFamily: DM, fontWeight: 600, borderRadius: 100, padding: "2px 10px", marginRight: 6 } as React.CSSProperties,
  note:    { background: "#F9F9FB", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, padding: "14px 18px", margin: "16px 0 20px", fontFamily: DM, fontSize: 14, color: "rgba(0,0,0,0.6)", lineHeight: 1.7 } as React.CSSProperties,
};

export default function PrivacyPage() {
  return (
    <div style={S.page}>
      <Nav light />
      <main style={S.wrap} className="legal-body">

        {/* Header */}
        <p style={S.tag}>Legal</p>
        <h1 style={S.h1}>Privacy Policy</h1>
        <p style={S.meta}>Effective: 19 June 2026 &nbsp;·&nbsp; Last updated: 19 June 2026</p>
        <hr style={S.divider} />

        {/* Intro */}
        <p style={S.p}>
          Yoinky is developed and operated by <strong style={S.strong}>Giksn Research</strong> ("we," "us," or "our"). This Privacy Policy explains what information Yoinky collects when you use the desktop application and related services (the "Service"), how we use it, and the choices and controls you have over it.
        </p>
        <p style={S.p}>
          By installing or using Yoinky, you acknowledge that you have read and understood this Policy. If you do not agree, please uninstall the application and stop using the Service.
        </p>

        {/* 1 */}
        <h2 style={S.h2}>1. macOS Permissions We Request</h2>
        <p style={S.p}>
          Because Yoinky observes your workflow in real time, it requires certain macOS system permissions. We request only what is strictly necessary for each feature, and you can revoke any permission at any time from <em>System Settings → Privacy &amp; Security</em>.
        </p>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Accessibility API</strong> — allows Yoinky to read which application is in the foreground, window titles, and basic UI element content within supported apps. This is the primary mechanism for passive context capture.</li>
          <li style={S.li}><strong style={S.strong}>Screen Recording</strong> — required by macOS for certain apps to read window content beyond simple metadata. Yoinky captures structured data (text, titles, app state) and does <em>not</em> take screenshots or video recordings of your screen unless a user-initiated capture feature is explicitly enabled and you are notified.</li>
          <li style={S.li}><strong style={S.strong}>Network access</strong> — needed to sync your memory layer to our servers (if cloud sync is enabled) and to communicate with third-party tools you have connected.</li>
          <li style={S.li}><strong style={S.strong}>Login Items / Background Agent</strong> — to run passively in the background and capture context without requiring you to manually launch the app each session.</li>
        </ul>
        <div style={S.note}>
          Revoking a permission will disable the related feature but will not delete data already captured. Use Memory Controls (Section 5) to remove existing data.
        </div>

        {/* 2 */}
        <h2 style={S.h2}>2. Information We Collect</h2>

        <h3 style={S.h3}>2.1 Information you provide directly</h3>
        <ul style={S.ul}>
          <li style={S.li}>Name and email address when you apply for or activate beta access.</li>
          <li style={S.li}>Any feedback, bug reports, or support messages you send us.</li>
          <li style={S.li}>Preferences and settings you configure within the app.</li>
        </ul>

        <h3 style={S.h3}>2.2 Application activity data</h3>
        <p style={S.p}>Yoinky observes the following on your Mac to build contextual memory:</p>
        <ul style={S.ul}>
          <li style={S.li}>Names of active applications and window titles.</li>
          <li style={S.li}>Visible text content within the active window of supported apps (e.g. document titles, task names, design file names, note headings, thread subjects).</li>
          <li style={S.li}>URLs in supported browsers when the browser-context feature is active.</li>
          <li style={S.li}>File names and folder paths in supported file management contexts.</li>
          <li style={S.li}>Events from tools you explicitly connect (e.g. Notion page updates, Figma file changes, Slack thread flags, Linear ticket state changes).</li>
          <li style={S.li}>Duration of focus in each application.</li>
        </ul>
        <p style={S.p}>
          Yoinky does <strong style={S.strong}>not</strong> log every keystroke you type. It captures structured content that is already rendered in the UI — not raw keyboard input.
        </p>

        <h3 style={S.h3}>2.3 Inferred memory layer</h3>
        <p style={S.p}>From the activity data above, Yoinky builds and stores a personal memory layer that may include:</p>
        <ul style={S.ul}>
          <li style={S.li}>Workflow patterns and habits (e.g. "writes Notion brief before opening Figma").</li>
          <li style={S.li}>Project context and decisions you have made.</li>
          <li style={S.li}>Tool and communication preferences.</li>
          <li style={S.li}>Focus patterns and working-hour tendencies.</li>
          <li style={S.li}>Tags and AI-generated summaries of recurring behaviors.</li>
        </ul>
        <p style={S.p}>
          All memory entries are tagged with a timestamp and source. You can view the full contents of your memory layer at any time inside the app.
        </p>

        <h3 style={S.h3}>2.4 Usage and diagnostic data</h3>
        <ul style={S.ul}>
          <li style={S.li}>Crash reports and error logs.</li>
          <li style={S.li}>Feature interaction events (e.g. which suggestions you accept, dismiss, or edit).</li>
          <li style={S.li}>App version, macOS version, and anonymised device identifiers.</li>
          <li style={S.li}>During beta: additional diagnostic telemetry to help us identify and fix issues faster (see Section 11).</li>
        </ul>

        {/* 3 */}
        <h2 style={S.h2}>3. How We Use Your Information</h2>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Provide the Service</strong> — build and maintain your memory layer, restore cross-session context, and generate personalised workflow suggestions.</li>
          <li style={S.li}><strong style={S.strong}>Improve the Service</strong> — analyse aggregated, anonymised patterns to improve the accuracy of context capture and suggestion quality.</li>
          <li style={S.li}><strong style={S.strong}>AI inference</strong> — send relevant context to AI model APIs to produce summaries, completions, and suggestions on your behalf (see Section 6).</li>
          <li style={S.li}><strong style={S.strong}>Communications</strong> — send you product updates, beta changelogs, and respond to support requests.</li>
          <li style={S.li}><strong style={S.strong}>Safety and legal compliance</strong> — detect abuse, enforce our Terms of Service, and comply with applicable laws.</li>
        </ul>
        <p style={S.p}>
          We do <strong style={S.strong}>not</strong> use your personal activity data to train shared AI models that are exposed to other users, without your explicit, separately-obtained consent.
        </p>

        {/* 4 */}
        <h2 style={S.h2}>4. Storage and Security</h2>

        <h3 style={S.h3}>4.1 Where data is stored</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Locally</strong> — your memory layer is stored in an encrypted database on your Mac. This data stays on-device unless you enable cloud sync.</li>
          <li style={S.li}><strong style={S.strong}>Cloud (optional)</strong> — if you enable cross-device sync or backup, your memory layer is stored on our secure cloud infrastructure, encrypted at rest (AES-256) and in transit (TLS 1.2+).</li>
        </ul>

        <h3 style={S.h3}>4.2 Security measures</h3>
        <p style={S.p}>
          We implement technical and organisational safeguards including encryption, strict access controls, and regular security reviews. No system is entirely breach-proof. If we become aware of a security incident that affects your personal data, we will notify you as required by applicable law.
        </p>

        <h3 style={S.h3}>4.3 Retention periods</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Raw activity logs</strong>: retained for up to 90 days, then deleted or anonymised.</li>
          <li style={S.li}><strong style={S.strong}>Memory layer entries</strong>: retained until you delete them or close your account.</li>
          <li style={S.li}><strong style={S.strong}>Account data</strong>: deleted within 30 days of account closure.</li>
          <li style={S.li}><strong style={S.strong}>Diagnostic logs</strong>: retained for up to 12 months for debugging, then deleted.</li>
          <li style={S.li}><strong style={S.strong}>Anonymised aggregate statistics</strong>: may be retained indefinitely.</li>
        </ul>

        {/* 5 */}
        <h2 style={S.h2}>5. Your Memory Controls</h2>
        <p style={S.p}>
          Transparency and control are core to Yoinky. From <strong style={S.strong}>Settings → Memory Controls</strong> you can:
        </p>
        <ul style={S.ul}>
          <li style={S.li}><span style={S.pill}>View</span> every entry in your memory layer, including source, timestamp, and content.</li>
          <li style={S.li}><span style={S.pill}>Edit</span> or annotate individual entries to correct inaccuracies.</li>
          <li style={S.li}><span style={S.pill}>Delete</span> specific entries or entire categories.</li>
          <li style={S.li}><span style={S.pill}>Pause</span> context capture entirely without uninstalling the app.</li>
          <li style={S.li}><span style={S.pill}>Export</span> your full memory dataset in JSON format for portability.</li>
          <li style={S.li}><span style={S.pill}>Delete all</span> to wipe your entire memory layer and associated data from our systems.</li>
        </ul>

        {/* 6 */}
        <h2 style={S.h2}>6. AI Processing and Third-Party Model Providers</h2>
        <p style={S.p}>
          Yoinky sends relevant portions of your memory layer and captured context to AI model APIs (such as those provided by Anthropic, OpenAI, or similar providers) to generate summaries, suggestions, and completions. When doing so:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>We send the minimum context necessary for each inference request.</li>
          <li style={S.li}>We bind AI providers by data processing agreements that prohibit them from using your data to train their own models.</li>
          <li style={S.li}>Inference happens transiently; providers do not persistently store your data beyond the scope of each request.</li>
          <li style={S.li}>You can disable AI-powered suggestions from Settings, in which case no data is sent to external model providers.</li>
        </ul>

        {/* 7 */}
        <h2 style={S.h2}>7. Sharing and Disclosure</h2>
        <p style={S.p}>We do not sell your personal information. We may share it in the following limited circumstances:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Service providers</strong> — hosting, analytics, and AI inference providers who process data on our behalf, bound by contractual data protection obligations.</li>
          <li style={S.li}><strong style={S.strong}>Connected integrations</strong> — only the data necessary to perform an integration you have authorised (e.g. sending a Notion note title back to Notion to update context). We do not share your full memory layer with third-party tools.</li>
          <li style={S.li}><strong style={S.strong}>Legal requirements</strong> — if required by applicable law, court order, or governmental authority, after taking reasonable steps to notify you where legally permitted.</li>
          <li style={S.li}><strong style={S.strong}>Business transfer</strong> — if Yoinky is acquired, merged, or its assets transferred, your data may pass to the successor entity. We will provide notice before your data becomes subject to a materially different privacy policy, and you may delete your account before the transfer takes effect.</li>
          <li style={S.li}><strong style={S.strong}>With your consent</strong> — for any other purpose, with your prior explicit consent.</li>
        </ul>

        {/* 8 */}
        <h2 style={S.h2}>8. Third-Party Integrations</h2>
        <p style={S.p}>
          Yoinky can connect to tools including Notion, Figma, Slack, Linear, and others added in future updates. When you connect an integration:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>You explicitly authorise access via that tool's OAuth flow or API key.</li>
          <li style={S.li}>We access only the scopes necessary for the integration's stated purpose.</li>
          <li style={S.li}>Your continued use of those tools is governed by their own terms and privacy policies — we encourage you to review them.</li>
          <li style={S.li}>You can disconnect any integration at any time from <strong style={S.strong}>Settings → Integrations</strong>. Disconnecting stops future data capture from that tool but does not automatically delete memory entries already derived from it — use Memory Controls for that.</li>
        </ul>

        {/* 9 */}
        <h2 style={S.h2}>9. Your Rights</h2>

        <h3 style={S.h3}>9.1 All users</h3>
        <p style={S.p}>
          You have the right to access your personal data, correct inaccuracies, delete your data, and export it in a portable format. These controls are available directly in the app (Section 5). You may also withdraw consent to processing at any time, which may require you to discontinue using the Service.
        </p>

        <h3 style={S.h3}>9.2 European Economic Area and United Kingdom (GDPR / UK GDPR)</h3>
        <p style={S.p}>
          If you are located in the EEA or UK, our lawful bases for processing your personal data are your consent and our legitimate interest in providing and improving the Service. You have additional rights including: restriction of processing, objection to processing based on legitimate interests, and the right to lodge a complaint with your local supervisory authority (e.g. the ICO in the UK, or your national DPA in the EU).
        </p>

        <h3 style={S.h3}>9.3 California residents (CCPA / CPRA)</h3>
        <p style={S.p}>
          California residents have the right to know what personal information we collect and how it is used, to delete personal information, to correct inaccurate information, to opt out of the sale or sharing of personal information (we do not sell or share your data), and not to be discriminated against for exercising these rights.
        </p>

        <p style={S.p}>To exercise any of the above rights, use the in-app controls or contact us at <strong style={S.strong}>parry@meetyoinky.com</strong>. We will respond within the timeframe required by applicable law (typically 30 days).</p>

        {/* 10 */}
        <h2 style={S.h2}>10. Children's Privacy</h2>
        <p style={S.p}>
          Yoinky is not directed at children under 16 years of age and we do not knowingly collect personal information from anyone under 16. If you believe we have inadvertently collected data from a child under 16, please contact us immediately at <strong style={S.strong}>parry@meetyoinky.com</strong> and we will delete it without delay.
        </p>

        {/* 11 */}
        <h2 style={S.h2}>11. Beta Program Notice</h2>
        <p style={S.p}>
          Yoinky is currently in private beta. During the beta period, we may collect additional diagnostic and interaction data to help us identify bugs, understand usage patterns, and prioritise improvements. Beta users may experience changes in features, data handling, and this Privacy Policy as the product evolves. We will update this Policy and notify you of material changes when they occur.
        </p>

        {/* 12 */}
        <h2 style={S.h2}>12. Changes to This Policy</h2>
        <p style={S.p}>
          We may update this Privacy Policy from time to time. For material changes — changes that significantly affect your rights or our data practices — we will notify you by email (if you have provided one) or by a prominent in-app notice at least 14 days before the change takes effect. Your continued use of the Service after the effective date of any update constitutes your acceptance of the revised Policy.
        </p>

        {/* 13 */}
        <h2 style={S.h2}>13. Contact</h2>
        <p style={S.p}>For privacy questions, data requests, or to exercise your rights:</p>
        <div style={S.note}>
          <strong style={S.strong}>Giksn Research</strong> (operating Yoinky)<br />
          Email: <a href="mailto:parry@meetyoinky.com" style={{ color: PINK, textDecoration: "none" }}>parry@meetyoinky.com</a><br />
          Subject line: "Privacy Request — [your name]"
        </div>

      </main>
      <CTAFooter />
    </div>
  );
}
