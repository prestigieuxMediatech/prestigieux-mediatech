"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.navLogo} onClick={closeMenu}>
            {!imgError ? (
              <Image
                key={theme}
                src={
                  theme === "light"
                    ? "/assets/logo_prestigieux_light.jpg"
                    : "/assets/logo_prestigieux_dark.png"
                }
                alt="Prestigieux Mediatech"
                width={148}
                height={46}
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <span className={styles.logoText}>
                Presti<span className={styles.accent}>gieux</span>
              </span>
            )}
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.navCenter}>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                  >
                    <span className={styles.linkText}>{item.label}</span>
                    {isActive(item.href) && <span className={styles.activeIndicator} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className={styles.navRight}>
            {/* Phone — hidden on small screens */}
            <div className={styles.contactBadge}>
              <span className={styles.contactLabel}>Call Us</span>
              <a href="tel:+919987952982" className={styles.phoneLink}>
                +91 99879 52982
              </a>
            </div>

            {/* CTA — hidden on mobile */}
            <button
              className={styles.ctaButton}
              onClick={() => window.openFunnel?.()}
            >
              Free Strategy
            </button>

            {/* Theme Toggle */}
            <button
              className={styles.iconButton}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className={`${styles.hamburgerLines} ${menuOpen ? styles.open : ""}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileLinks}>
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ""}`}
              onClick={closeMenu}
              style={{ animationDelay: menuOpen ? `${index * 0.06}s` : "0s" }}
            >
              <span className={styles.mobileLinkNumber}>0{index + 1}</span>
              <span className={styles.mobileLinkText}>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.mobileFooter}>
          <div className={styles.mobileContact}>
            <span className={styles.mobileContactLabel}>Get in touch</span>
            <a href="tel:+919987952982" className={styles.mobilePhone}>
              +91 99879 52982
            </a>
          </div>
          <button
            className={styles.mobileCta}
            onClick={() => {
              window.openFunnel?.();
              closeMenu();
            }}
          >
            Free Strategy Call
          </button>
        </div>
      </div>
    </>
  );
}
