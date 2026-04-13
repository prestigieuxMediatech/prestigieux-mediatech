import styles from "../styles/HeroAbout.module.css";
import { FaBullseye, FaSearch, FaBolt, FaUsers } from "react-icons/fa";

export default function HeroAbout() {
  return (
    <div id="page-about" className={styles["page-view"]}>
      
      {/* HERO */}
      <div className={styles["page-hero"]}>
        <div className={styles["page-hero-inner"]}>
          <div className={styles.tag}>Our Story</div>

          <h1>
            From Registration<br />
            to Recognition
          </h1>

          <p className={styles["ph-sub"]}>
            We started with one mission: help Indian businesses compete globally.
            Today, 50+ brands across India, USA and Australia trust us with their digital growth.
          </p>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className={styles.section}>
        <div className={styles["section-inner"]}>
          <div className={styles["about-two-col"]}>
            
            <div>
              <div className={`${styles.tag} ${styles.reveal}`}>Who We Are</div>

              <h2 className={`${styles["section-title"]} ${styles.reveal}`}>
                India&apos;s Next-Gen MediaTech Agency
              </h2>

              <p className={`${styles.reveal} ${styles["text-muted"]}`}>
                Prestigieux Mediatech Pvt Ltd was founded with a simple belief:
                every business deserves world-class digital marketing.
              </p>

              <p className={`${styles.reveal} ${styles["text-muted"]}`}>
                Our multidisciplinary team of designers, developers, marketers and strategists work as an extension of your team — fast, accountable and obsessed with your growth.
              </p>
            </div>

            {/* STATS */}
            <div className={`${styles["stats-grid"]} ${styles.reveal}`}>
              <div className={styles["stat-cell"]}>
                <span className={styles["stat-num"]}>50+</span>
                <span className={styles["stat-label"]}>Brands</span>
              </div>

              <div className={styles["stat-cell"]}>
                <span className={styles["stat-num"]}>3+</span>
                <span className={styles["stat-label"]}>Countries</span>
              </div>

              <div className={styles["stat-cell"]}>
                <span className={styles["stat-num"]}>98%</span>
                <span className={styles["stat-label"]}>Retention</span>
              </div>

              <div className={styles["stat-cell"]}>
                <span className={styles["stat-num"]}>7</span>
                <span className={styles["stat-label"]}>Days/Week</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className={`${styles.section} ${styles["section-alt"]}`}>
        <div className={`${styles["section-inner"]} ${styles["about-two-col"]}`}>

          <div className={styles.reveal}>
            <div className={styles.tag}>Mission</div>
            <h3>Democratise world-class digital marketing for every Indian business</h3>
            <p className={styles.about_innersection_p}>
              We believe SMEs deserve the same quality of strategy and execution that Fortune 500 companies get — at prices that make business sense.
            </p>
          </div>

          <div className={styles.reveal}>
            <div className={styles.tag}>Vision</div>
            <h3>To be the most trusted growth partner for 500 brands by 2027</h3>
            <p className={styles.about_innersection_p}>
              Expanding our footprint across India and Southeast Asia, building technology-first marketing solutions that create sustainable, compounding growth.
            </p>
          </div>

        </div>
      </div>

      {/* VALUES */}
      <div className={styles.section}>
        <div className={styles["section-inner"]}>

          <div className={styles.tag}>Core Values</div>
          <h2 className={styles["section-title"]}>What We Stand For</h2>

          <div className={styles["services-grid"]}>

            {/* Results First */}
            <div className={styles["svc-card"]}>
              <div className={styles["svc-icon"]}>
                <FaBullseye />
              </div>
              <div className={styles["svc-name"]}>Results First</div>
              <p className={styles["svc-desc"]}>
                Every decision is measured against one question: does this grow your business? Vanity metrics don&apos;t pay bills.
              </p>
            </div>

            {/* Transparency */}
            <div className={styles["svc-card"]}>
              <div className={styles["svc-icon"]}>
                <FaSearch />
              </div>
              <div className={styles["svc-name"]}>Radical Transparency</div>
              <p className={styles["svc-desc"]}>
                Full access to all accounts, reports and data. You own everything. We have nothing to hide.
              </p>
            </div>

            {/* Speed */}
            <div className={styles["svc-card"]}>
              <div className={styles["svc-icon"]}>
                <FaBolt />
              </div>
              <div className={styles["svc-name"]}>Speed & Quality</div>
              <p className={styles["svc-desc"]}>
                We move fast without cutting corners. Most agencies take weeks — we deliver in days.
              </p>
            </div>

            {/* Partnership */}
            <div className={styles["svc-card"]}>
              <div className={styles["svc-icon"]}>
                <FaUsers />
              </div>
              <div className={styles["svc-name"]}>Long-Term Partnership</div>
              <p className={styles["svc-desc"]}>
                We&apos;re invested in your success beyond the invoice. 98% of our clients renew their engagement.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
