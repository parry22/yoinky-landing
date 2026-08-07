/* eslint-disable react/no-unescaped-entities -- policy prose uses literal quotation marks for readability */
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { BG, TEXT, TEXT_SOFT, LINE, SERIF, UI } from "../components/theme";

export const metadata = {
  title: "Privacy Policy - Yoinky",
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
          This Privacy Policy explains what information Yoinky ("we," "us," or "our") collects when you use a Yoinky workspace, talk to the Yoinky bot on Telegram, upload company knowledge, or connect publishing accounts (together, the "Service"), how we use it, and the choices and controls you have over it.
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
          <li style={S.li}>Documents, transcripts, notes, links, and other sources you add to a workspace.</li>
          <li style={S.li}>Any feedback, bug reports, or support messages you send us.</li>
        </ul>

        <h3 style={S.h3}>1.2 Your connected public history</h3>
        <p style={S.p}>
          When you connect your X or LinkedIn account, you authorise Yoinky to read the public posts, profile information, and engagement permitted by that platform. This helps Yoinky learn voice, evidence, and content performance. We do not request access to private messages on those platforms. Publishing requires the permissions and approval rules configured for your workspace.
        </p>

        <h3 style={S.h3}>1.3 Your company knowledge layer</h3>
        <p style={S.p}>From the material above, Yoinky builds and stores a workspace knowledge layer that may include:</p>
        <ul style={S.ul}>
          <li style={S.li}>Insights, evidence, claims, quotes, objections, themes, and other structured objects extracted from approved sources.</li>
          <li style={S.li}>Narrative architecture, audiences, messaging, territories, and editorial decisions.</li>
          <li style={S.li}>Briefs, drafts, revisions, approvals, distribution records, and source lineage.</li>
          <li style={S.li}>Workspace permissions and member actions needed for access control and audit history.</li>
        </ul>
        <p style={S.p}>
          Knowledge objects retain their source and permission context. Workspace owners and authorised members can review or remove material through the controls available in the Service.
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
          <li style={S.li}><strong style={S.strong}>Provide the Service</strong> - structure permissioned knowledge, maintain narrative systems, and produce grounded briefs and drafts.</li>
          <li style={S.li}><strong style={S.strong}>Improve the Service</strong> - analyse aggregated, anonymised patterns to improve extraction and draft quality.</li>
          <li style={S.li}><strong style={S.strong}>AI inference</strong> - send relevant context to AI model APIs to extract knowledge, build narratives, and generate or review content (see Section 5).</li>
          <li style={S.li}><strong style={S.strong}>Communications</strong> - send product updates and respond to support requests.</li>
          <li style={S.li}><strong style={S.strong}>Safety and legal compliance</strong> - enforce permissions, detect abuse, enforce our Terms of Service, and comply with applicable laws.</li>
        </ul>
        <p style={S.p}>
          We do <strong style={S.strong}>not</strong> use your personal data to train shared AI models that are exposed to other users, without your explicit, separately-obtained consent.
        </p>

        {/* 3 */}
        <h2 style={S.h2}>3. Storage and Security</h2>

        <h3 style={S.h3}>3.1 Where data is stored</h3>
        <p style={S.p}>
          Your hosted workspace data is stored on our cloud infrastructure and protected in transit. Telegram and connected platforms may separately cache data under their own policies. Self-hosted installations are operated by the person or organisation deploying them and are outside our hosted data controls.
        </p>

        <h3 style={S.h3}>3.2 Security measures</h3>
        <p style={S.p}>
          We implement technical and organisational safeguards including encryption, strict access controls, and regular security reviews. No system is entirely breach-proof. If we become aware of a security incident that affects your personal data, we will notify you as required by applicable law.
        </p>

        <h3 style={S.h3}>3.3 Retention periods</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={S.strong}>Workspace knowledge and content</strong>: retained until an authorised user deletes it or the workspace is closed.</li>
          <li style={S.li}><strong style={S.strong}>Account data</strong>: deleted within 30 days of account closure.</li>
          <li style={S.li}><strong style={S.strong}>Diagnostic logs</strong>: retained for up to 12 months for debugging, then deleted.</li>
          <li style={S.li}><strong style={S.strong}>Anonymised aggregate statistics</strong>: may be retained indefinitely.</li>
        </ul>

        {/* 4 */}
        <h2 style={S.h2}>4. Your Controls</h2>
        <p style={S.p}>
          Transparency and control are core to Yoinky. Depending on your workspace role, the app and bot let you:
        </p>
        <ul style={S.ul}>
          <li style={S.li}><span style={S.pill}>View</span> knowledge objects with their source, permission, and review state.</li>
          <li style={S.li}><span style={S.pill}>Review</span> proposed insights and claims before they become approved company knowledge.</li>
          <li style={S.li}><span style={S.pill}>Control</span> workspace membership, source permissions, and publication approvals.</li>
          <li style={S.li}><span style={S.pill}>Disconnect</span> connected publishing platforms.</li>
          <li style={S.li}><span style={S.pill}>Delete</span> sources, content, or an account subject to workspace role and retention requirements.</li>
        </ul>

        {/* 5 */}
        <h2 style={S.h2}>5. AI Processing and Third-Party Model Providers</h2>
        <p style={S.p}>
          Yoinky sends relevant portions of permissioned workspace context to configured AI model APIs to extract knowledge, build narrative architecture, and generate or review content. When doing so:
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
          <li style={S.li}><strong style={S.strong}>Service providers</strong> - hosting, analytics, and AI inference providers who process data on our behalf.</li>
          <li style={S.li}><strong style={S.strong}>Connected platforms</strong> - only the data necessary to perform an authorised action. We do not send your full workspace knowledge layer to X, LinkedIn, or Telegram.</li>
          <li style={S.li}><strong style={S.strong}>Legal requirements</strong> - if required by applicable law, court order, or governmental authority, after taking reasonable steps to notify you where legally permitted.</li>
          <li style={S.li}><strong style={S.strong}>Business transfer</strong> - if Yoinky is acquired or its assets transferred, your data may pass to the successor entity. We will provide notice before your data becomes subject to a materially different privacy policy.</li>
          <li style={S.li}><strong style={S.strong}>With your consent</strong> - for any other purpose, with your prior explicit consent.</li>
        </ul>

        {/* 7 */}
        <h2 style={S.h2}>7. Connected Platforms</h2>
        <p style={S.p}>
          Yoinky connects to Telegram, X, LinkedIn, and configured knowledge or model providers. When you connect an account:
        </p>
        <ul style={S.ul}>
          <li style={S.li}>You explicitly authorise access via that platform's own OAuth flow.</li>
          <li style={S.li}>We request only the scopes necessary for the features you enable.</li>
          <li style={S.li}>Your use of Telegram, X, and LinkedIn is separately governed by their own terms and privacy policies.</li>
          <li style={S.li}>Authorised users can disconnect a platform. Disconnecting stops future access but does not automatically delete knowledge or content already derived from it. Use your Controls in Section 4 for that.</li>
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
          We may update this Privacy Policy from time to time. For material changes that significantly affect your rights or our data practices, we will notify you by email (if you have provided one) or by a message from the bot at least 14 days before the change takes effect. Your continued use of the Service after the effective date of any update constitutes your acceptance of the revised Policy.
        </p>

        {/* 12 */}
        <h2 style={S.h2}>12. Contact</h2>
        <p style={S.p}>For privacy questions, data requests, or to exercise your rights:</p>
        <div style={S.note}>
          Email: <a href="mailto:parry@meetyoinky.com" style={{ color: TEXT, fontWeight: 600, textDecoration: "none" }}>parry@meetyoinky.com</a><br />
          Subject line: "Privacy Request - [your name]"
        </div>

      </main>
      <SiteFooter />
    </div>
  );
}
