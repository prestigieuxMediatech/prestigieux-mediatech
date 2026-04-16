import styles from "../styles/Stats.module.css";

export default function Stats() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.statsGrid}>
          
          <div className={`reveal ${styles.statCell}`}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Brands Grown</span>
          </div>

          <div className={`reveal ${styles.statCell} ${styles.revealDelay1}`}>
            <span className={styles.statNum}>₹2Cr+</span>
            <span className={styles.statLabel}>Ad Spend Managed</span>
          </div>

          <div className={`reveal ${styles.statCell} ${styles.revealDelay2}`}>
            <span className={styles.statNum}>4.8×</span>
            <span className={styles.statLabel}>Average ROAS</span>
          </div>

          <div className={`reveal ${styles.statCell} ${styles.revealDelay3}`}>
            <span className={styles.statNum}>98%</span>
            <span className={styles.statLabel}>Client Retention</span>
          </div>

        </div>
      </div>
    </div>
  );
}
