import type { ReactNode } from "react";

const PINK = "#F85BA9";

const B = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: "rgba(0,0,0,0.82)", fontWeight: 650 }}>{children}</strong>
);

const Callout = ({ children }: { children: ReactNode }) => (
  <blockquote
    style={{
      borderLeft: `3px solid ${PINK}`,
      margin: "clamp(28px,4vw,40px) 0",
      paddingLeft: "clamp(18px,3vw,28px)",
      color: "rgba(0,0,0,0.72)",
      fontSize: "clamp(17px,2.8vw,21px)",
      lineHeight: 1.65,
      fontStyle: "italic",
      letterSpacing: "-0.2px",
    }}
  >
    {children}
  </blockquote>
);

export default function TheContextTax() {
  return (
    <>
      <p>
        Every morning, millions of knowledge workers sit down at their computers and do something
        that should feel like a warm-up but ends up eating a meaningful chunk of their day: explaining themselves.
      </p>
      <p>
        Not to colleagues. Not to clients. To AI.
      </p>
      <p>
        <em>"I&apos;m building a landing page for a productivity tool targeting indie founders..."</em> you type,
        and before the first sentence is done, you already feel the familiar weight of it. The context dump.
        The setup cost. The invisible tax on every single conversation.
      </p>
      <p>
        This is the context tax, and until recently, nobody talked about it because there was nothing to be done about it.
      </p>

      <h2>The Setup Cost Nobody Measures</h2>
      <p>
        Research on knowledge worker productivity focuses on meetings, email, and Slack notifications.
        Nobody measures the time spent reorienting AI tools to your specific situation. But the friction
        is real, and it compounds quietly.
      </p>
      <p>
        Think about a senior product manager running three active workstreams. Every time they want help
        from an AI assistant, they spend three to five minutes establishing context: who they are, what
        they&apos;re building, what decisions have already been made, what constraints exist, what tone
        they prefer.
      </p>
      <p>
        Three AI interactions a day. Five days a week. That&apos;s somewhere between 30 and 75 minutes
        spent not doing work, just getting a tool up to speed <em>so you can</em> do work.
      </p>

      <Callout>
        Over a year, that&apos;s more than 200 hours. Five full working weeks, handed to setup friction.
      </Callout>

      <p>
        The cruel irony is that AI is supposed to save you time. For many people doing serious, complex
        work, it does. In aggregate. But the context tax quietly erodes a significant portion of those gains.
      </p>

      <h2>Why AI Amnesia Exists</h2>
      <p>
        Current AI tools are stateless by design. Each conversation starts with a blank slate. There are
        legitimate reasons for this: privacy, compute cost, architectural simplicity. But it creates a
        product experience fundamentally at odds with how humans actually work.
      </p>
      <p>
        You don&apos;t re-introduce yourself every time you talk to a colleague. You don&apos;t re-explain
        your design philosophy every time you open Figma. You don&apos;t remind Notion what project you&apos;re in the middle of.
      </p>
      <p>
        But with AI, every session is a first date. And after the hundredth one, it gets exhausting.
      </p>
      <p>
        Some tools have attempted a solution with "memory" features: a persistent note system where the
        AI can recall things you&apos;ve explicitly told it. This is better than nothing. But it shifts
        the maintenance burden to you: now you have to curate a second brain, written for your AI&apos;s
        benefit, and keep it current. That&apos;s not a solution. That&apos;s just more admin with a
        different name.
      </p>

      <h2>Three Layers of Context That AI Misses</h2>
      <p>
        Real work context lives at three distinct levels, and current AI tools almost entirely ignore two of them.
      </p>
      <p>
        <B>Project context</B> is the what: what you&apos;re building, who it&apos;s for, what decisions
        have already been made, what constraints exist. This is the layer most tools try to address, badly.
      </p>
      <p>
        <B>Behavioral context</B> is the how: your workflow rhythms, communication style, tool preferences,
        creative process. Do you iterate visually or textually? Do you want bullet points or flowing prose?
        Do you prefer blunt feedback or diplomatic framing? This is almost entirely ignored.
      </p>
      <p>
        <B>Temporal context</B> is the where and when: where you were when you last touched this project,
        what you were in the middle of, what the natural next step looks like. This layer is completely missing.
      </p>

      <Callout>
        "I know what I told you three months ago. What I need from you is to know what I was doing
        three minutes ago when I switched apps."
      </Callout>

      <p>
        These three layers, understood together, are what make a colleague valuable after a few months
        working with you. They&apos;re what allow someone to hand you exactly the right document before
        you knew you needed it, or to send a draft message that sounds exactly like you.
      </p>
      <p>
        No current AI tool builds this understanding passively. They wait to be told. And the cost of
        telling them every time is the context tax.
      </p>

      <h2>The Shift From Reactive to Proactive</h2>
      <p>
        Every AI assistant today operates on a reactive model: you ask, it answers. The prompt is the
        atomic unit. The conversation is the scope.
      </p>
      <p>
        The paradigm shift we need is from reactive to <B>proactive</B>: AI that develops an
        understanding of your situation over time, across sessions and tools, and uses that understanding
        to reduce the activation energy required to get help.
      </p>
      <p>
        Not AI that does things without your permission. Not AI that operates unsupervised. AI that
        pays attention so you don&apos;t have to repeat yourself.
      </p>
      <p>
        The best analogy isn&apos;t a search engine or a chatbot. It&apos;s a really good chief of staff.
        Someone who attends every meeting, reads every document, tracks your priorities, and hands you
        the right thing at the right moment, not because you briefed them on every detail, but because
        they were paying attention over time.
      </p>

      <h2>What Actually Changes When AI Knows You</h2>
      <p>
        Imagine opening your laptop on a Tuesday morning, three days after finishing a sprint. You have
        a design review at 2pm. You&apos;ve been working on a rebrand. Last Thursday you decided to go
        with Verona for the headline font after testing three options. Your Figma file has evolved since
        then. Your designer left two comments you haven&apos;t addressed.
      </p>
      <p>
        An AI that knows your context doesn&apos;t need you to reconstruct any of this. It already knows
        the decision, the open questions, and where you left off. When you say <em>"help me prepare for
        the design review,"</em> it starts there, not from zero.
      </p>
      <p>
        The context tax, in that world, doesn&apos;t exist. You go from thinking to working in seconds,
        not minutes.
      </p>
      <p>
        This is what we mean by <B>ambient intelligence</B>: AI that builds up understanding by observing
        your real work, not by being briefed on it. The difference is the same as the difference between
        a new hire reading onboarding docs and an experienced colleague who&apos;s worked alongside you for six months.
      </p>

      <h2>What Yoinky Is Doing About It</h2>
      <p>
        Yoinky is our answer to the context tax.
      </p>
      <p>
        It runs quietly on your Mac, passively observing your workflow across the tools you already
        use: Figma, Notion, Slack, Linear, your browser. Over time, it builds a living memory of your
        decisions, workflow patterns, and project context across all three layers. When you return to a
        project after a week, Yoinky restores that context. When you start a new task, it knows where
        you left off.
      </p>
      <p>
        Critically, the memory is yours. You can view every single entry, edit it, delete it, or pause
        capture entirely from the app. There is no black box. What Yoinky knows about you, you can inspect.
      </p>
      <p>
        We believe the context tax is a solvable problem. The technology to build ambient, contextual AI
        exists. What&apos;s been missing is the product discipline to do it in a way that&apos;s actually
        useful, actually trustworthy, and actually invisible when it&apos;s working well.
      </p>
      <p>
        We&apos;re working on that.
      </p>
    </>
  );
}
