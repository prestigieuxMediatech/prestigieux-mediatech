import Link from "next/link";
import styles from "../styles/Abouthome.module.css";

export default function Homeabout() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.tag}>About Us</div>

          <h2 className={styles.title}>
            Prestigieux Mediatech
          </h2>

          <p className={styles.text}>
            A Navi Mumbai based digital marketing agency offering branding,
            social media marketing, UI/UX design, SEO, and web & app development.
            We help businesses build strong online presence and grow across India
            with result-driven strategies.
          </p>

         <Link href="/about"> <button className={styles.btn}>Learn More</button> </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <img
            src="./abouthome.png"
            alt="About Prestigieux Mediatech"
          />
        </div>

      </div>
    </section>
  );
}
