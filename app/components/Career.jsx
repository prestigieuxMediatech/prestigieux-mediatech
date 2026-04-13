"use client";

import styles from "../styles/Career.module.css";
import {
  FaMoneyBillWave,
  FaRocket,
  FaHome,
  FaBook,
} from "react-icons/fa";

export default function Career() {
  return (
    <>
      <div className={styles.pageView} id="page-careers">

        {/* HERO */}
        <div className={styles.pageHero}>
          <div className={styles.pageHeroInner}>

            <div className={styles.tag}>Join Our Team</div>

            <h1>
              Build Your Career<br />
              at Prestigieux
            </h1>

            <p className={styles.phSub}>
              High-performance culture, great pay and real ownership of your work.
            </p>

          </div>
        </div>

        {/* SECTION */}
        <div className={styles.section} >
          <div className={styles.sectionInner}>

            <div className={styles.tag} >
              Why Join Us
            </div>

            <h2 className={styles.sectionTitle}>
              Perks & Culture
            </h2>

            <div className={styles.servicesGrid} style={{ marginTop: "2rem" }}>

              {/* CARD 1 */}
              <div className={styles.svcCard}>
                <div className={styles.svcIcon}>
                  <FaMoneyBillWave />
                </div>
                <div className={styles.svcName}>Competitive Pay</div>
                <p className={styles.svcDesc}>
                  Market-leading salaries with performance incentives. We reward results, not just effort.
                </p>
              </div>

              {/* CARD 2 */}
              <div className={styles.svcCard}>
                <div className={styles.svcIcon}>
                  <FaRocket />
                </div>
                <div className={styles.svcName}>Fast Growth</div>
                <p className={styles.svcDesc}>
                  Grow 2× faster than at a corporate. Real ownership, real impact from Day 1.
                </p>
              </div>

              {/* CARD 3 */}
              <div className={styles.svcCard}>
                <div className={styles.svcIcon}>
                  <FaHome />
                </div>
                <div className={styles.svcName}>Remote Friendly</div>
                <p className={styles.svcDesc}>
                  Most roles offer hybrid/remote flexibility. We care about output, not clocking in.
                </p>
              </div>

              {/* CARD 4 */}
              <div className={styles.svcCard}>
                <div className={styles.svcIcon}>
                  <FaBook />
                </div>
                <div className={styles.svcName}>Learning Budget</div>
                <p className={styles.svcDesc}>
                  Company-funded certifications, tool access and industry events every year.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}
