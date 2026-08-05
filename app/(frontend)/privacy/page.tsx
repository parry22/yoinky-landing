/* eslint-disable react/no-unescaped-entities -- policy prose uses literal quotation marks for readability */
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { BG, TEXT, TEXT_SOFT, LINE, SERIF, UI } from "../components/theme";

export const metadata = {
  title: "Privacy Policy — Yoinky",
  description: "How Yoinky collects, uses, stores, and protects your information.",
};

const S = {
  page:    { backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" } as React.CSSProperties,
  wrap:    { maxWidth: 720, margin: "0 auto", padding: "clamp(24px,4vw,44px) clamp(24px,6vw,40px) clamp(64px,10vw,96px)", flex: 1, width: "100%", boxSizing: "border-box" } as React.CSSProperties,
  tag:     { fontSize: 11, fontFamily: UI, fontWeight: 700, letterSpacing: "0.1em", color: TEXT_SOFT, textTransform: "uppercase" as const },
  h1:      { fontFamily: SERIF, fontSize: "clamp(40px,7vw,64px)", fontWeight: 400, color: TEXT, lineHeight: 1.05, margin: "10px 0 14px", letterSpacing: 0 } as React.CSSProperties,
  meta:    { fontSize: 13, fontFamily: UI, color: TEXT_SOFT, marginBottom: 0, letterSpacing: 0 } as React.CSSProperties,
  divider: { border: "none", borderTop: `1px solid ${LINE}`, margin: "clamp(32px,5vw,48px) 0" } as React.CSSProperties,
  h2:      { fontFamily: SERIF, fontSize: "clamp(20px,3.2vw,26px)", fontWeight: 400, color: TEXT, letterSpacing: 0, margin: "clamp(32px,5vw,44px) 0 10px" } as React.CSSProperties,
  h3:      { fontFamily: UI, fontSize: "clamp(13px,2vw,14px)", fontWeight: 700, color: TEXT, letterSpacing: 0, margin: "20px 0 6px" } as React.CSSProperties,
  p:       { fontFamily: UI, fontSize: "clamp(14px,2.4vw,15.5px)", color: TEXT_SOFT, lineHeight: 1.8, margin: "0 0 14px", letterSpacing: 0 } as React.CSSProperties,
  ul:      { fontFamily: UI, fontSize: "clamp(14px,2.4vw,15.5px)", color: TEXT_SOFT, lineHeight: 1.8, paddingLeft: 22, margin: "0 0 14px", letterSpacing: 0 } as React.CSSProperties,
  li:      { marginBottom: 8 } as React.CSSProperties,
  strong:  { color: TEXT, fontWeight: 700 } as React.CSSProperties,
  pill:    { display: "inline-block", background: "rgba(255,255,255,0.1)", color: TEXT, fontSize: 12, fontFamily: UI, fontWeight: 600, borderRadius: 100, padding: "2px 10px", marginRight: 6, letterSpacing: 0 } as React.CSSProperties,
  note:    { background: "rgba(255,255,255,0.05)", border: `1px solid ${LINE}`, borderRadius: 10, padding: "14px 18px", margin: "16px 0 20px", fontFamily: UI, fontSize: 14, color: TEXT_SOFT, lineHeight: 1.7, letterSpacing: 0 } as React.CSSProperties,
};

export default function PrivacyPage() {
  return (
    <div style={S.page}>
      <SiteHeader />
      <main style={S.wrap}>

        {/* Header */}
        <p style={S.tag}>Legal</p>
        <h1 style={S.h1}>Privacy Policy</h1>
        <p style={S.meta}>Effective: 9 July 2026 &nbsp;·&nbsp; Last updated: 9 July 2026</p>
        <hr style={S.divider} />

        {/* Intro */}
        <p style={S.p}>
          This Privacy Policy explains what information Yoinky ("we," "us," or "our") collects when you talk to the Yoinky bot on Telegram, connect your public accounts, or use the browser extension (together, the "Service"), how we use it, and the choices and controls you have over it.
        </p>
        <p style={S.p}>
          By starting a conversation with Yoinky or connecting an account, you acknowledge that you have read and understood this Policy. If you do not agree, please stop using the Service.
        </p>

        {/* 1 */}
        <h2 style={S.h2}>1. Information We Collect</h2>

        <h3 style={S.h3}>1.1 What you send us directly</h3>
        <ul style={S.ul}>
          <li style={S.li}>Text messages you send to the Yoinky bot on Telegram.</li>
          <li style={S.li}>Your Telegram account identifiers (username, user ID) needed to run the bot conversation.</li>
          <li style={S.li}>Highlights and links you save with the browser extension.</li>
          <li style={S.li}>Any feedback, bug reports, or support messages you send us.</li>
        </ul>

        <h3 style={S.h3}>1.2 Your connected public history</h3>
        <p style={S.p}>
          When you connect your X or LinkedIn account, you authorise Yoinky to read your public posts, profile information, and public engagement on that platform. This is how Yoinky builds your brand diagnosis and voice profile. We only request access to public, already-visible content — we do not request access to your private messages on those platforms, and connecting an account never lets Yoinky post on it without your say.
        </p>

        <h3 style={S.h3}>1.3 Your memory layer</h3>
        <p style={S.p}>From everything above, Yoinky builds and stores a personal memory layer that may include:</p>
        <ul style={S.ul}>
          <li style={S.li}>Your brand diagnosis: intellectual fingerprint, voice signature, consistency notes, and unsaid patterns.</li>
          <li style={S.li}>Individual ideas and fragments extracted from your messages and saved highlights.</li>
          <li style={S.li}>Drafts, repurposed posts, and pitches generated on your behalf.</li>
          <li style={S.li}>Your reactions to resurfaced ideas (useful, not now, forget this), which shape what gets surfaced going forward.</li>
        </ul>
        <p style={S.p}>
          All memory entries are tagged with a timestamp and source. You can ask the bot to show you the full contents of your memory layer at any time.
        </p>

        <h3 style={S.h3}>1.4 Usage and diagnostic data</h3>
        <ul style={S.ul}>
          <li style={S.li}>Crash reports and error logs.</li>
          <li style={S.li}>Feature interaction events (e.g. which drafts you approve, edit, or dismiss).</li>
          <li style={S.li}>Bot version and anonymised device or client identifiers.</li>
          <li style={S.li}>During beta: additional diagnostic telemetry to help us identify and fix issues faster (see Section 10).</li>
        </ul>

        {/* 2 */}
        <h2 style={S.h2}>2. How We Use Your Information</h2>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Provide the Service</strong> — build and maintain your memory layer, generate your brand diagnosis, and produce drafts, resurfaced ideas, and moment matches.</li>
          <li style={S.li}><strong style={S.strong}>Improve the Service</strong> — analyse aggregated, anonymised patterns to improve the accuracy of diagnosis and draft quality.</li>
          <li style={S.li}><strong style={S.strong}>AI inference</strong> — send relevant context to AI model APIs to produce your diagnosis, drafts, and suggestions (see Section 5).</li>
          <li style={S.li}><strong style={S.strong}>Communications</strong> — send you product updates, beta changelogs, and respond to support requests.</li>
          <li style={S.li}><strong style={S.strong}>Safety and legal compliance</strong> — detect abuse, enforce our Terms of Service, and comply with applicable laws.</li>
        </ul>
        <p style={S.p}>
          We do <strong style={S.strong}>not</strong> use your personal data to train shared AI models that are exposed to other users, without your explicit, separately-obtained consent.
        </p>

        {/* 3 */}
        <h2 style={S.h2}>3. Storage and Security</h2>

        <h3 style={S.h3}>3.1 Where data is stored</h3>
        <p style={S.p}>
          Your memory layer is stored on our secure cloud infrastructure, encrypted at rest (AES-256) and in transit (TLS 1.2+). We do not store copies of your data on your personal devices beyond what Telegram itself caches locally, which is governed by Telegram's own policies.
        </p>

        <h3 style={S.h3}>3.2 Security measures</h3>
        <p style={S.p}>
          We implement technical and organisational safeguards including encryption, strict access controls, and regular security reviews. No system is entirely breach-proof. If we become aware of a security incident that affects your personal data, we will notify you as required by applicable law.
        </p>

        <h3 style={S.h3}>3.3 Retention periods</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Memory layer entries</strong>: retained until you delete them or close your account.</li>
          <li style={S.li}><strong style={S.strong}>Account data</strong>: deleted within 30 days of account closure.</li>
          <li style={S.li}><strong style={S.strong}>Diagnostic logs</strong>: retained for up to 12 months for debugging, then deleted.</li>
          <li style={S.li}><strong style={S.strong}>Anonymised aggregate statistics</strong>: may be retained indefinitely.</li>
        </ul>

        {/* 4 */}
        <h2 style={S.h2}>4. Your Controls</h2>
        <p style={S.p}>
          Transparency and control are core to Yoinky. By messaging the bot, you can:
        </p>
        <ul style={S.ul}>
          <li style={S.li}><span style={S.pill}>View</span> every entry in your memory layer, including source, timestamp, and content.</li>
          <li style={S.li}><span style={S.pill}>Delete</span> any single memory entry, permanently, in one action.</li>
          <li style={S.li}><span style={S.pill}>Pause</span> resurfacing and moment matching without disconnecting your accounts.</li>
          <li style={S.li}><span style={S.pill}>Export</span> your full memory dataset for portability, anytime.</li>
          <li style={S.li}><span style={S.pill}>Delete all</span> to wipe your entire memory layer and associated data from our systems.</li>
        </ul>

        {/* 5 */}
        <h2 style={S.h2}>5. AI Processing and Third-Party Model Providers</h2>
        <p style={S.p}>
          Yoinky sends relevant portions of your memory layer to AI model APIs (such as those provided by Anthropic, OpenAI, or similar providers) to generate your diagnosis, drafts, and suggestions. When doing so:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>We send the minimum context necessary for each inference request.</li>
          <li style={S.li}>We bind AI providers by data processing agreements that prohibit them from using your data to train their own models.</li>
          <li style={S.li}>Inference happens transiently; providers do not persistently store your data beyond the scope of each request.</li>
        </ul>

        {/* 6 */}
        <h2 style={S.h2}>6. Sharing and Disclosure</h2>
        <p style={S.p}>We do not sell your personal information. We may share it in the following limited circumstances:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Service providers</strong> — hosting, analytics, and AI inference providers who process data on our behalf, bound by contractual data protection obligations.</li>
          <li style={S.li}><strong style={S.strong}>Connected platforms</strong> — only the data necessary to perform an action you have explicitly approved (e.g. publishing a reply you approved back to X). We do not share your full memory layer with X, LinkedIn, or Telegram.</li>
          <li style={S.li}><strong style={S.strong}>Legal requirements</strong> — if required by applicable law, court order, or governmental authority, after taking reasonable steps to notify you where legally permitted.</li>
          <li style={S.li}><strong style={S.strong}>Business transfer</strong> — if Yoinky is acquired or its assets transferred, your data may pass to the successor entity. We will provide notice before your data becomes subject to a materially different privacy policy, and you may delete your account before the transfer takes effect.</li>
          <li style={S.li}><strong style={S.strong}>With your consent</strong> — for any other purpose, with your prior explicit consent.</li>
        </ul>

        {/* 7 */}
        <h2 style={S.h2}>7. Connected Platforms</h2>
        <p style={S.p}>
          Yoinky connects to Telegram (to talk to you), and to X and LinkedIn (to read your public history, with your authorisation). When you connect an account:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>You explicitly authorise access via that platform's own OAuth flow.</li>
          <li style={S.li}>We access only the scopes necessary for diagnosis and drafting — public content, not private messages.</li>
          <li style={S.li}>Your use of Telegram, X, and LinkedIn is separately governed by their own terms and privacy policies.</li>
          <li style={S.li}>You can disconnect any platform at any time by messaging the bot. Disconnecting stops future data capture from that platform but does not automatically delete memory entries already derived from it — use your Controls (Section 4) for that.</li>
        </ul>

        {/* 8 */}
        <h2 style={S.h2}>8. Your Rights</h2>

        <h3 style={S.h3}>8.1 All users</h3>
        <p style={S.p}>
          You have the right to access your personal data, delete your data, and export it in a portable format. These controls are available directly through the bot (Section 4). You may also withdraw consent to processing at any time, which may require you to discontinue using the Service.
        </p>

        <h3 style={S.h3}>8.2 European Economic Area and United Kingdom (GDPR / UK GDPR)</h3>
        <p style={S.p}>
          If you are located in the EEA or UK, our lawful bases for processing your personal data are your consent and our legitimate interest in providing and improving the Service. You have additional rights including: restriction of processing, objection to processing based on legitimate interests, and the right to lodge a complaint with your local supervisory authority (e.g. the ICO in the UK, or your national DPA in the EU).
        </p>

        <h3 style={S.h3}>8.3 California residents (CCPA / CPRA)</h3>
        <p style={S.p}>
          California residents have the right to know what personal information we collect and how it is used, to delete personal information, to correct inaccurate information, to opt out of the sale or sharing of personal information (we do not sell or share your data), and not to be discriminated against for exercising these rights.
        </p>

        <p style={S.p}>To exercise any of the above rights, message the bot or contact us at <strong style={S.strong}>parry@meetyoinky.com</strong>. We will respond within the timeframe required by applicable law (typically 30 days).</p>

        {/* 9 */}
        <h2 style={S.h2}>9. Children's Privacy</h2>
        <p style={S.p}>
          Yoinky is not directed at children under 16 years of age and we do not knowingly collect personal information from anyone under 16. If you believe we have inadvertently collected data from a child under 16, please contact us immediately at <strong style={S.strong}>parry@meetyoinky.com</strong> and we will delete it without delay.
        </p>

        {/* 10 */}
        <h2 style={S.h2}>10. Beta Program Notice</h2>
        <p style={S.p}>
          Yoinky is currently in private beta. During the beta period, we may collect additional diagnostic and interaction data to help us identify bugs, understand usage patterns, and prioritise improvements. Beta users may experience changes in features, data handling, and this Privacy Policy as the product evolves. We will update this Policy and notify you of material changes when they occur.
        </p>

        {/* 11 */}
        <h2 style={S.h2}>11. Changes to This Policy</h2>
        <p style={S.p}>
          We may update this Privacy Policy from time to time. For material changes — changes that significantly affect your rights or our data practices — we will notify you by email (if you have provided one) or by a message from the bot at least 14 days before the change takes effect. Your continued use of the Service after the effective date of any update constitutes your acceptance of the revised Policy.
        </p>

        {/* 12 */}
        <h2 style={S.h2}>12. Contact</h2>
        <p style={S.p}>For privacy questions, data requests, or to exercise your rights:</p>
        <div style={S.note}>
          Email: <a href="mailto:parry@meetyoinky.com" style={{ color: TEXT, fontWeight: 600, textDecoration: "none" }}>parry@meetyoinky.com</a><br />
          Subject line: "Privacy Request — [your name]"
        </div>

      </main>
      <SiteFooter />
    </div>
  );
}
