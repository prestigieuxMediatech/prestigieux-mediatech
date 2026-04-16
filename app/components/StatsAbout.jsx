"use client";

import styles from '../styles/StatsAbout.module.css';

export default function StatsAbout() {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCell}>
        <div className={styles.statNum}>50+</div>
        <div className={styles.statLabel}>Brands</div>
      </div>
      <div className={styles.statCell}>
        <div className={styles.statNum}>3+</div>
        <div className={styles.statLabel}>Countries</div>
      </div>
      <div className={styles.statCell}>
        <div className={styles.statNum}>98%</div>
        <div className={styles.statLabel}>Retention</div>
      </div>
      <div className={styles.statCell}>
        <div className={styles.statNum}>7</div>
        <div className={styles.statLabel}>Days/Week</div>
      </div>
    </div>
  );
}

