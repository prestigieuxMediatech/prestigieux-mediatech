"use client";

import {
  FaSearch,
  FaRocket,
  FaUsers,
  FaMobileAlt,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

import styles from "./Blogtwo.module.css";

export default function Blogtwo() {
  return (
    <div className={styles["page-view"]}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles["hero-inner"]}>

          <span className={styles.tag}>Development Insights</span>

          <h1>
            How Website Speed Directly Impacts SEO, Sales & User Trust in 2026
          </h1>

          <p className={styles.subtitle}>
            Website performance is no longer optional. In 2026, speed defines your
            SEO ranking, user trust, and conversion rate. A slow website silently
            kills your business growth.
          </p>

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop"
            alt="Website Speed Performance"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginTop: "2rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>

        {/* SECTION 1 */}
        <h2>
          <FaSearch style={{ marginRight: "8px", color: "#c8a96e" }} />
          SEO Rankings Depend on Speed
        </h2>

        <p>
          Search engines like Google prioritize fast-loading websites.
          If your website takes more than a few seconds to load, your ranking
          automatically drops. Even high-quality content cannot perform well
          without speed optimization.
        </p>

        {/* SECTION 2 */}
        <h2>
          <FaRocket style={{ marginRight: "8px", color: "#c8a96e" }} />
          Slow Website = Lost Sales Opportunities
        </h2>

        <p>
          Studies show that even a 1-second delay can reduce conversions
          significantly. Users expect instant results, and if your site is slow,
          they immediately switch to competitors — resulting in direct revenue loss.
        </p>

        {/* SECTION 3 */}
        <h2>
          <FaUsers style={{ marginRight: "8px", color: "#c8a96e" }} />
          User Trust & Brand Perception
        </h2>

        <p>
          A fast website creates a strong impression of professionalism and trust.
          On the other hand, slow loading pages make users doubt your credibility
          and reduce engagement dramatically.
        </p>

        {/* SECTION 4 */}
        <h2>
          <FaMobileAlt style={{ marginRight: "8px", color: "#c8a96e" }} />
          Mobile Performance Matters Most
        </h2>

        <p>
          More than 70% users browse through mobile devices. If your mobile site
          is not optimized for speed, you are losing the majority of your traffic
          and potential customers.
        </p>

        {/* SECTION 5 */}
        <h2>
          <FaChartLine style={{ marginRight: "8px", color: "#c8a96e" }} />
          Competitive Advantage in Market
        </h2>

        <p>
          Faster websites consistently outperform competitors in SEO rankings,
          ad performance, and user retention. Speed is now a core business
          advantage, not just a technical metric.
        </p>

        {/* FINAL */}
        <div className={styles.final}>
          <h2>
            <FaLightbulb style={{ marginRight: "8px", color: "#c8a96e" }} />
            Final Thoughts
          </h2>

          <p>
            In 2026, website speed is not optional — it is a critical business
            factor. Optimizing performance directly improves SEO rankings,
            conversions, and brand trust, giving you a clear edge over competitors.
          </p>
        </div>

      </div>
    </div>
  );
}
