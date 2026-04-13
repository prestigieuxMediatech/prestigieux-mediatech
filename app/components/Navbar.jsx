"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Navbar.module.css";

// icons
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    "home",
    "about",
    "services",
    "portfolio",
    "team",
    "blog",
    "career",
    "contact",
    
  ];

  return (
    <>
      <nav id="nav" className={styles.nav}>
        {/* LOGO */}
        <Link href="/" className={`${styles.navLogo} nav-logo`}>
          {!imgError && (
            <Image
              key={theme}
              src={
                theme === "light"
                  ? "/assets/logo_prestigieux_light.jpg"
                  : "/assets/logo_prestigieux_dark.png"
              }
              alt="Prestigieux Mediatech"
              width={120}
              height={40}
              priority
              onError={() => setImgError(true)}
            />
          )}

          {imgError && (
            <span className={styles.logoText}>
              Presti<em>gieux</em>
            </span>
          )}
        </Link>

        {/* NAV LINKS (DESKTOP) */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "home" ? "/" : `/${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className={styles.navRight}>
          {/* PHONE */}
          <div className={styles.navPhones}>
            <a href="tel:+919987952982" className={styles.navPhoneLink}>
              +91 99879 52982
            </a>
            <a href="tel:+919136892346" className={styles.navPhoneLink}>
              +91 91368 92346
            </a>
          </div>

          {/* CTA */}
          <button
            className={styles.btnNav}
            onClick={() => window.openFunnel?.()}
          >
            Free Strategy
          </button>

          {/* THEME TOGGLE */}
          <button className={styles.themeBtn} onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu Toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "home" ? "/" : `/${item}`}
            onClick={handleCloseMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
