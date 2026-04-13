"use client";

import { useEffect, useRef, useState } from "react";
import styles from './Blog.module.css';

/* ─── Inline SVG icons ─── */
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconShare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

/* ─── Data ─── */
const TOC = [
  "Don't Start With Services — Start With Their Thinking",
  "Don't Get Distracted by Tools — Focus on Judgment",
  "Look Beyond Performance Metrics",
  "Honest Conversations Matter More Than Perfect Promises",
  "Real Work Is More Powerful Than Well-Known Names",
  "Your Business Stage Matters More Than Your Industry",
  "Think Beyond Short-Term Campaigns",
];

const TAKEAWAYS = [
  "Strategy beats tactics — always ask 'how they think' first.",
  "Tools are commodities. Judgment is the differentiator.",
  "Brand + performance together, not one or the other.",
  "Transparency about risk builds long-term trust.",
  "Ask for case stories, not just logo walls.",
];

/* ─── Sections ─── */
const sections = [
  {
    id: "s1",
    heading: "Don't Start With Services — Start With Their Thinking",
    content: (
      <>
        <p>
          Most agencies will quickly tell you what they do. Fewer will explain <em>why</em> they do it.
          Services are easy to list. Strategic thinking is not. Instead of asking{" "}
          <strong>&ldquo;What services do you offer?&rdquo;</strong> — ask{" "}
          <strong>&ldquo;How do you approach a new business problem?&rdquo;</strong>
        </p>
        <p>A strong agency will dig deeper before suggesting anything. They&apos;ll want to understand:</p>
        <p>
          • What makes your business different<br />
          • Who your audience really is<br />
          • Where your growth is coming from<br />
          • What&apos;s holding you back
        </p>
        <p>If they jump straight into tactics, they&apos;re selling execution — not expertise.</p>
      </>
    ),
  },
  {
    id: "s2",
    heading: "Don't Get Distracted by Tools — Focus on Judgment",
    content: (
      <>
        <p>
          By 2026, all agencies will have equal access to AI, platforms, and tools. That is no longer a
          differentiator. It&apos;s not <em>which</em> tools they use — it&apos;s <em>how</em> they use them.
        </p>
        <div className={styles.pullquote}>
          <p>Technology can speed things up, but it can&apos;t define your positioning, understand human behaviour deeply, or build trust with your audience.</p>
        </div>
        <p>
          • Define your positioning<br />
          • Understand human behaviour deeply<br />
          • Build trust with your audience
        </p>
        <p>If an agency leads with tools instead of thinking, they miss the core strategy behind effective targeting.</p>
      </>
    ),
  },
  {
    id: "s3",
    heading: "Look Beyond Performance Metrics",
    content: (
      <>
        <p>
          Clicks, impressions, and ROAS matter — but they&apos;re not the whole story. Performance marketing
          can bring quick wins, but it doesn&apos;t create lasting brand value on its own.
        </p>
        <p>Ask yourself:</p>
        <p>
          • Are they only talking about numbers?<br />
          • Or are they also talking about brand perception and recall?
        </p>
        <p>
          The best agencies understand that performance drives immediate results while branding builds
          long-term growth. Without brand strength, performance becomes more expensive over time.
        </p>
      </>
    ),
  },
  {
    id: "s4",
    heading: "Honest Conversations Matter More Than Perfect Promises",
    content: (
      <>
        <p>
          A good agency won&apos;t promise that everything will go as planned — because it won&apos;t. Instead,
          they will set realistic expectations, explain risks and trade-offs, and be honest about what requires time.
        </p>
        <p>It&apos;s a red flag if everything sounds exact.</p>
        <div className={styles.pullquote}>
          <p>When an organization is open and honest rather than overpromising, trust is built — and that outlasts any campaign.</p>
        </div>
      </>
    ),
  },
  {
    id: "s5",
    heading: "Real Work Is More Powerful Than Well-Known Names",
    content: (
      <>
        <p>
          Seeing big brand logos can be impressive — but it doesn&apos;t always mean relevant experience.
          What matters more is the problem they solved, the approach they took, and the results they delivered.
        </p>
        <p>
          • The problem they solved<br />
          • The approach they took<br />
          • The results they delivered
        </p>
        <p>Ask for stories, not just names. Good agencies explain their thinking. Great agencies explain their impact.</p>
      </>
    ),
  },
  {
    id: "s6",
    heading: "Your Business Stage Matters More Than Your Industry",
    content: (
      <>
        <p>
          Not all businesses need the same strategy — even within the same industry. A startup needs clarity
          and traction. A growing brand needs scalability. An established business needs optimization and consistency.
        </p>
        <p>The right agency adjusts based on:</p>
        <p>
          • Where you are today<br />
          • Where you want to go<br />
          • What resources you have
        </p>
        <p>If the strategy feels generic, it probably is.</p>
      </>
    ),
  },
  {
    id: "s7",
    heading: "Think Beyond Short-Term Campaigns",
    content: (
      <>
        <p>
          A campaign can be managed by anyone. Building a brand is not something that everyone can do.
          The right agency focuses on consistency as opposed to sudden increases, systems that need more
          than one effort, and growth over noise in the short run.
        </p>
        <p>Because in the long run:</p>
        <p>
          • Attention fades<br />
          • Trends change<br />
          • But strong brands stay
        </p>
      </>
    ),
  },
];

/* ══ COMPONENT ══ */
export default function Blog(){
  const progressRef = useRef(null);
  const [copied, setCopied] = useState(false);

  /* Reading progress bar */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles["page-view"]}>

      {/* ── Reading progress ── */}
      <div className={styles["read-progress"]} aria-hidden="true">
        <div className={styles["read-progress-bar"]} ref={progressRef} />
      </div>

      {/* ══ HERO ══ */}
      <header className={styles["page-hero"]}>
        <div className={styles["page-hero-inner"]}>

          <span className={styles.tag}>Marketing Insights</span>

          <h1>
            How to Choose the Best<br />
            Digital Marketing Agency<br />
            in&nbsp;2026
          </h1>

          <p className={styles["ph-sub"]}>
            A strategic guide to help businesses choose the right growth partner
            in a performance-driven digital world.
          </p>

          {/* Meta bar */}
          <div className={styles["hero-meta"]}>
            <div className={styles["meta-author"]}>
              <div className={styles["meta-avatar"]}>RM</div>
              <div className={styles["meta-author-info"]}>
                <span className={styles["meta-author-name"]}>Rohan Mehta</span>
                <span className={styles["meta-author-role"]}>Strategy Lead</span>
              </div>
            </div>

            <div className={styles["meta-divider"]} />

            <div className={styles["meta-item"]}>
              <IconCalendar />
              April 7, 2026
            </div>

            <div className={styles["meta-divider"]} />

            <div className={styles["meta-item"]}>
              <IconClock />
              7 min read
            </div>
          </div>
        </div>

        {/* Feature image */}
        <div className={styles["hero-image-wrap"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
src="/blog-hero.png"
            alt="How to Choose the Best Digital Marketing Agency in 2026"
            width={860}
            height={460}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div className={styles["hero-image-overlay"]} />
        </div>
      </header>

      {/* ══ CONTENT ══ */}
      <div className={styles.section}>
        <div className={styles["section-inner"]}>

          {/* ── Main Article ── */}
          <article className={styles.article}>

            {/* Intro */}
            <p>
              Choosing a digital marketing agency in 2026 isn&apos;t about who talks the most — it&apos;s
              about who can make perfect decisions. Every agency provides the same range of services; the
              true distinction is in the way they plan, organize, and carry out their operations.
              Here&apos;s what matters now.
            </p>

            {/* Sections */}
            {sections.map((s, i) => (
              <section key={s.id} id={s.id}>
                <hr />
                <h2>
                  <span className={styles["section-num"]}>{i + 1}</span>
                  {s.heading}
                </h2>
                {s.content}
              </section>
            ))}

            {/* Final box */}
            <div className={styles["final-box"]}>
              <h2>Final Thought: Choose Understanding Over Hype</h2>
              <p>
                The top digital marketing companies in 2026 will make an effort to fully understand
                you before trying to impress you. They&apos;ll pose more insightful queries, question your
                assumptions, and provide clarity where there is uncertainty.
              </p>
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                Because wise judgments lead to actual development — not more aggressive marketing.
              </p>
            </div>

            {/* Article footer */}
            <footer className={styles["article-footer"]}>
              <span className={styles["share-label"]}>Share this article</span>
              <div className={styles["share-btns"]}>
                <button
                  className={styles["share-btn"]}
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("How to Choose the Best Digital Marketing Agency in 2026")}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`, "_blank")}
                  aria-label="Share on Twitter"
                >
                  <IconShare /> Twitter
                </button>
                <button
                  className={styles["share-btn"]}
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`, "_blank")}
                  aria-label="Share on LinkedIn"
                >
                  <IconShare /> LinkedIn
                </button>
                <button
                  className={styles["share-btn"]}
                  onClick={handleCopy}
                  aria-label="Copy link"
                >
                  <IconLink /> {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </footer>
          </article>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>

            {/* Table of Contents */}
            <div className={styles["sidebar-block"]}>
              <div className={styles["sidebar-block-title"]}>In this article</div>
              <ul className={styles["toc-list"]}>
                {TOC.map((item, i) => (
                  <li key={i}>
                    <a href={`#s${i + 1}`}>
                      <span className={styles["toc-num"]}>0{i + 1}</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className={styles["sidebar-block"]}>
              <div className={styles["sidebar-block-title"]}>Key Takeaways</div>
              <ul className={styles["takeaway-list"]}>
                {TAKEAWAYS.map((t, i) => (
                  <li key={i}>
                    <span className={styles["takeaway-dot"]} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className={styles["sidebar-cta"]}>
              <div className={styles["sidebar-cta-title"]}>Ready to grow?</div>
              <div className={styles["sidebar-cta-sub"]}>
                Let&apos;s talk strategy. Free 30-minute consultation, no strings attached.
              </div>
              <a href="#contact" className={styles["sidebar-cta-btn"]}>
                Book a Call →
              </a>
            </div>

          </aside>
        </div>
      </div>

    </div>
  );
}