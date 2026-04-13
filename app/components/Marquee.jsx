"use client";

import styles from "../styles/Marquee.module.css";

export default function Marquee() {
  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        <span>Website Development</span>
        <span className={styles.sep}>◆</span>
        <span>Meta Ads</span>
        <span className={styles.sep}>◆</span>
        <span>Lead Generation</span>
        <span className={styles.sep}>◆</span>
        <span>LinkedIn Ads</span>
        <span className={styles.sep}>◆</span>
        <span>Content Creation</span>
        <span className={styles.sep}>◆</span>
        <span>YouTube Ads</span>
        <span className={styles.sep}>◆</span>
        <span>Mobile Apps</span>
        <span className={styles.sep}>◆</span>
        <span>SEO</span>
        <span className={styles.sep}>◆</span>
        <span>Brand Identity</span>
        <span className={styles.sep}>◆</span>
        <span>UI/UX Design</span>
        <span className={styles.sep}>◆</span>
        <span>Virtual Assistant</span>
      </div>
    </div>
  );
}
