"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  
  const isLight = theme === "light";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            {!imgError ? (
              <Image
                src={
                  isLight
                    ? "/assets/logo_prestigieux_light.jpg"
                    : "/assets/logo_prestigieux_dark.png"
                }
                alt="Prestigieux Mediatech"
                fill
                className={styles.footerLogo}
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <span className={styles.logoText}>
                Presti<span className={styles.accent}>gieux</span>
              </span>
            )}
          </div>

          <p className={styles.footerBrandBio}>
            India&apos;s next-gen MediaTech agency. From registration to
            recognition, we help brands look sharper and grow with clarity.
          </p>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6679667270573!2d73.09127537425181!3d19.078330751901227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7eb0fc4742851%3A0x5c2372ad8aa2d96f!2sPrestigieux%20Mediatech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1776067561023!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.footerSocials}>
            <a href="https://wa.me/919987952982" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/prestigieux_mediatech" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@PrestigieuxMediaTech-p8i" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Services</div>
          <Link href="/services/svc-web">Website Development</Link>
          <Link href="/services/svc-app">Mobile Apps</Link>
          <Link href="/services/svc-perf">Performance Marketing</Link>
          <Link href="/services/svc-leadgen">Lead Generation</Link>
          <Link href="/services/svc-content">Content Creation</Link>
          <Link href="/services/svc-seo">SEO & Digital Marketing</Link>
          <Link href="/blog">Our Blogs</Link>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Company</div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Contact</div>
          <a href="https://wa.me/919987952982" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+919987952982">+91 99879 52982</a>
          <a href="tel:+919136892346">+91 91368 92346</a>
          <a href="mailto:info@prestigieux.in">Email us: info@prestigieux.in</a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Prestigieux Mediatech Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
