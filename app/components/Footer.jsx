import styles from "../styles/Footer.module.css";
import { FaHeart, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        
        {/* Brand */}
        <div>
          <img
            src="/assets/logo_prestigieux_dark.png"
            className={styles.footerLogo}
            alt="Prestigieux Mediatech"
          />

          <p className={styles.footerBrandBio}>
            India's next-gen MediaTech agency. From Registration to Recognition — we grow brands that matter.
          </p>

          <div className={styles.footerContacts}>
            <a href="tel:+919987952982" className={styles.footerContactLink}>
              +91 9987952982
            </a>
            <a href="tel:+919136892346" className={styles.footerContactLink}>
              +91 9136892346
            </a>
            <a href="mailto:info@prestigieux.in" className={styles.footerContactLink}>
              info@prestigieux.in
            </a>
            <span className={styles.footerContactLink}>
              🕐 8 AM–10 PM, 7 days
            </span>
          </div>

          {/* ✅ SOCIAL ICONS (NOW BELOW TIMING) */}
          <div className={styles.footerSocials}>
            <a href="https://wa.me/919987952982" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>

        </div>

        {/* Services */}
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Services</div>
          <a href="/services/svc-web">Website Development</a>
          <a href="/services/svc-app">Mobile Apps</a>
          <a href="/services/svc-perf">Performance Marketing</a>
          <a href="/services/svc-leadgen">Lead Generation</a>
          <a href="/services/svc-content">Content Creation</a>
          <a href="/services/svc-seo">SEO & Digital Marketing</a>
          <a href="/blog">Our Blogs</a>
        </div>

        {/* Company */}
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Company</div>
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/team">Our Team</a>
          <a href="/contact">Contact</a>
          <a href="/careers">Careers</a>
        </div>

        {/* Connect */}
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Connect</div>
          <a href="https://wa.me/919987952982" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+919987952982">+91 9987952982</a>
          <a href="tel:+919136892346">+91 9136892346</a>
          <a href="mailto:info@prestigieux.in">
            Email Us : info@prestigieux.in
          </a>
          <a href="#">Free Strategy</a>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Prestigieux Mediatech Pvt Ltd. All rights reserved.</p>
        <p>
          Made with <FaHeart className={styles.heart} /> in India
        </p>
      </div>
    </footer>
  );
}
