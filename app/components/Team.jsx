"use client";

import styles from "../styles/team.module.css";

export default function Team() {
  return (
    <div id="page-team" className={styles['page-view']}>
      {/* HERO */}
      <div className={styles['page-hero']}>
        <div className={styles['page-hero-inner']}>
          <div className={styles.tag}>The People</div>
          <h1>
            The Minds Behind<br />
            Your Growth
          </h1>
          <p className={styles['ph-sub']}>
            A passionate team of strategists, creatives and technologists united by one goal — your success.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className={styles.section}>
        <div className={styles['section-inner']}>
          <div className={styles['team-grid']}>
            {/* CARD 1 */}
            <div className={styles['team-card']}>
              <div className={styles['team-photo']}>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/heena-MqE1AhhJsNTNLRP0.jpg"
                  alt="Heena Ubaid"
                />
              </div>
              <div className={styles['team-info']}>
                <div className={styles['team-name']}>Heena Ubaid</div>
                <div className={styles['team-role']}>Director</div>
                <p className={styles['team-bio']}>
                  Brand strategy, client relations and creative direction. 8+ years in digital marketing.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className={styles['team-card']}>
              <div className={styles['team-photo']}>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/20230422_094243_02-QImJbocrVqoZ0bCd.jpg"
                  alt="Huda Mulla"
                />
              </div>
              <div className={styles['team-info']}>
                <div className={styles['team-name']}>Huda Mulla</div>
                <div className={styles['team-role']}>Director</div>
                <p className={styles['team-bio']}>
                  Performance marketing specialist. Managed ₹2Cr+ in ad spend with consistent 4×+ ROAS.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className={styles['team-card']}>
              <div className={styles['team-photo']}>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/aadil-ZwJ81VRKt1sH3X6q.jpeg"
                  alt="Aadil Mulla"
                />
              </div>
              <div className={styles['team-info']}>
                <div className={styles['team-name']}>Aadil Mulla</div>
                <div className={styles['team-role']}>Director</div>
                <p className={styles['team-bio']}>
                  Technology and product lead. Delivered 30+ web and mobile projects across India and abroad.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className={styles['team-card']}>
              <div className={styles['team-photo']}>
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=536,fit=crop/m6LbxwxOk7S16Gyq/ubaid-Xb36P5ui4PKFucRm.jpg"
                  alt="Ubaid Rao"
                />
              </div>
              <div className={styles['team-info']}>
                <div className={styles['team-name']}>Ubaid Rao</div>
                <div className={styles['team-role']}>Director</div>
                <p className={styles['team-bio']}>
                  Operations, finance and growth strategy. Ensures every project is delivered on time and on budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

