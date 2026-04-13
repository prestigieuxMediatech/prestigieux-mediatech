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
  "Too Many False Assurances",
  "Influencer Culture Seems False",
  "Overload of Ads Everywhere",
  "Poor Customer Experiences",
  "Insufficient Transparency",
  '"Too Good to Be True" Weariness',
  "What Indian Consumers Actually Want",
];

const TAKEAWAYS = [
  "Trust erodes when brands overpromise and underdeliver.",
  "Audiences can detect scripted influencer content instantly.",
  "Ad overload creates irritation, not interest.",
  "One bad experience breeds long-term scepticism.",
  "Authenticity and honesty are the new growth strategy.",
];

/* ─── Sections ─── */
const sections = [
  {
    id: "s1",
    heading: "Too Many False Assurances",
    content: (
      <>
        <p>
          People feel deceived — that&apos;s one of the main causes of eroding trust. How many times
          have we seen ads like:
        </p>
        <p>
          • Lose 10 kg in 10 days<br />
          • Earn ₹1 lakh per month from home<br />
          • 100% guaranteed results
        </p>
        <p>
          At first, people believed these claims. But over time, they realized most of it was
          exaggerated — or completely fake. Now, even genuine brands suffer because the audience has
          built a mindset: <em>&ldquo;This is probably another scam.&rdquo;</em>
        </p>
      </>
    ),
  },
  {
    id: "s2",
    heading: "Influencer Culture Seems False",
    content: (
      <>
        <p>
          Influencer marketing was meant to encourage trust, but it frequently had the opposite effect.
          People notice things like:
        </p>
        <p>
          • Promoting a product they clearly don&apos;t use<br />
          • Saying &ldquo;this changed my life&rdquo; for every brand<br />
          • No honest pros and cons
        </p>
        <div className={styles.pullquote}>
          <p>Indian viewers are intelligent. When anything is programmed, they can detect it — and scepticism replaces trust.</p>
        </div>
        <p>
          Rather than thinking &ldquo;This must be good,&rdquo; they consider: <em>&ldquo;They simply get paid to say this.&rdquo;</em>
        </p>
      </>
    ),
  },
  {
    id: "s3",
    heading: "Overload of Ads Everywhere",
    content: (
      <>
        <p>
          There are advertisements everywhere — from Google to YouTube to Instagram. It eventually
          becomes too much to handle:
        </p>
        <p>
          • You always carry the same goods with you<br />
          • Every video begins with an advertisement<br />
          • Pop-ups appear on every webpage
        </p>
        <p>
          This irritates rather than sparks attention. And individuals avoid situations that irritate
          them rather than trusting them.
        </p>
      </>
    ),
  },
  {
    id: "s4",
    heading: "Poor Customer Experiences",
    content: (
      <>
        <p>
          Trust isn&apos;t built by ads — it&apos;s built by experiences. Many Indian consumers have faced
          issues like:
        </p>
        <p>
          • Product not matching what was shown online<br />
          • No proper customer support<br />
          • Complicated return and refund processes
        </p>
        <p>
          After one bad experience, people become cautious. After multiple bad experiences, they become
          distrustful of all online marketing.
        </p>
      </>
    ),
  },
  {
    id: "s5",
    heading: "Insufficient Transparency",
    content: (
      <>
        <p>Many brands continue hiding important information:</p>
        <p>
          • Unreported fees<br />
          • False savings through inflated initial pricing<br />
          • Paid reviews that appear authentic
        </p>
        <div className={styles.pullquote}>
          <p>Customers&apos; confidence is immediately damaged when they uncover hidden practices. And it is extremely difficult to restore trust after it has been broken.</p>
        </div>
      </>
    ),
  },
  {
    id: "s6",
    heading: '"Too Good to Be True" Weariness',
    content: (
      <>
        <p>
          Indian customers have come to the conclusion that anything that sounds too wonderful is
          inherently untrustworthy. In reality, this indicates market maturity. Individuals today:
        </p>
        <p>
          • Read reviews prior to purchasing<br />
          • Examine several sources<br />
          • Ask family and friends before trusting a brand
        </p>
        <p>
          The effectiveness of digital marketing has not decreased — but blind confidence has vanished.
          That&apos;s not a problem; it&apos;s an opportunity for honest brands.
        </p>
      </>
    ),
  },
  {
    id: "s7",
    heading: "What Indian Consumers Actually Want",
    content: (
      <>
        <p>It&apos;s not complicated. People want:</p>
        <p>
          • Authenticity over hype<br />
          • Actual outcomes over high expectations<br />
          • Honesty above clever deception
        </p>
        <p>
          Companies that are aware of this are currently doing well — because trust is slowly shifting
          toward those who keep things real. Digital marketing will only grow more effective if it shifts
          its focus from quick sales to gradual, genuine trust-building.
        </p>

        {/* ── Bottom image ── */}
        <div className={styles["hero-image-wrap"]} style={{ marginTop: "2rem", borderRadius: "12px", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blog2-bottom.png"
            alt="What Indian consumers want from digital brands"
            width={860}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }}
          />
          <div className={styles["hero-image-overlay"]} />
        </div>
      </>
    ),
  },
];

/* ══ COMPONENT ══ */
export default function Blog2() {
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

          <span className={styles.tag}>Consumer Insights</span>

          <h1>
            Indian People Don&apos;t Trust<br />
            Digital Marketing —<br />
            Here&apos;s&nbsp;Why
          </h1>

          <p className={styles["ph-sub"]}>
            An honest look at why Indian consumers have grown sceptical of online advertising —
            and what brands can do to genuinely earn their trust back.
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
              April 10, 2026
            </div>

            <div className={styles["meta-divider"]} />

            <div className={styles["meta-item"]}>
              <IconClock />
              6 min read
            </div>
          </div>
        </div>

        {/* Feature image — TOP */}
        <div className={styles["hero-image-wrap"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blog2-hero.png"
            alt="Indian People Don't Trust Digital Marketing — Here's Why"
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
              To be honest, the last few years have seen an explosion in digital marketing in India.
              Every vendor is running advertisements, every brand is online, and every second individual
              identifies as a &ldquo;digital marketer.&rdquo; However, trust hasn&apos;t kept up with all of this
              growth. When they come across internet advertisements, influencer campaigns, or even brand
              websites, many Indian customers remain dubious — not because they don&apos;t understand the
              internet, but because they&apos;ve learned to distrust it.
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
              <h2>Final Thought: Stop Selling. Start Being Real.</h2>
              <p>
                Indian audiences are not &ldquo;difficult to persuade.&rdquo; They are simply tired of being
                misled. Digital marketing will only become more effective when it shifts its focus from
                fast sales and viral moments to gradual, genuine trust-building.
              </p>
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                Because in the long run — attention fades, trends change, but honest brands stay.
              </p>
            </div>

            {/* Article footer */}
            <footer className={styles["article-footer"]}>
              <span className={styles["share-label"]}>Share this article</span>
              <div className={styles["share-btns"]}>
                <button
                  className={styles["share-btn"]}
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Indian People Don't Trust Digital Marketing — Here's Why")}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`, "_blank")}
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