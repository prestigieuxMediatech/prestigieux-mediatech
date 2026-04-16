import Link from "next/link";
import styles from "../styles/Abouthome.module.css";

export default function Homeabout() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`reveal ${styles.left}`}>
          <div className={styles.tag}>About Us</div>
          <h2 className={styles.title}>Elegant growth systems for modern brands</h2>
          <p className={styles.text}>
            In Navi Mumbai and around India, Prestigieux Mediatech is a top digital marketing firm that provides complete solutions including branding, social media marketing, UI/UX design, SEO, and web and application development. We use creative solutions and goal-oriented tactics to help companies build a strong online presence and encourage growth from the bottom up.
          </p>
          <Link href="/about" className={styles.btn}>
            Learn More
          </Link>
        </div>

        <div className={`reveal ${styles.right}`}>
          <img src="/abouthome.png" alt="Prestigieux Mediatech team workspace" />
        </div>
      </div>
    </section>
  );
}
