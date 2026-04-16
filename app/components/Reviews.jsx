import styles from "../styles/Reviews.module.css";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      text: '"Prestigieux delivered our e-commerce website in just 3 weeks. Traffic went from 200 to 8,000 visits per month in 4 months. Incredible team."',
      name: 'Rahul Mehta',
      role: 'CEO, StyleMart India'
    },
    {
      text: '"Our Meta Ads ROAS went from 1.2× to 5.8× within 60 days of working with Prestigieux. They know performance marketing inside out."',
      name: 'Priya Sharma',
      role: 'Founder, FitNow Nutrition'
    },
    {
      text: '"Generated 450 qualified B2B leads in the first month of our LinkedIn campaign. The ROI is phenomenal. Highly recommended."',
      name: 'Ankit Joshi',
      role: 'Director, TechSolve Pvt Ltd'
    }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.tag}>Client Love</div>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>

        <div className={styles.reviewsGrid}>
          {reviews.map(({ text, name, role }, i) => (
            <div
              key={i}
              className={`reveal ${styles.reviewCard}`}
              style={{ ["--delay"]: `${i * 0.1}s` }}
            >
              {/* ⭐ Stars */}
              <div className={styles.reviewStars}>
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className={styles.star} />
                ))}
              </div>

              <p className={styles.reviewText}>{text}</p>

              <div className={styles.reviewer}>
                <div className={styles.reviewerAvatar}>
                  {name[0]}
                </div>

                <div>
                  <div className={styles.reviewerName}>{name}</div>
                  <div className={styles.reviewerRole}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
