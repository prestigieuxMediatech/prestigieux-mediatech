"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-kicker">
          <span className="hero-kicker-dot" />
          India&apos;s Next-Gen MediaTech Agency
        </div>

        <h1 className="hero-title">
          We Grow Brands
          <br />
          <em>That Matter</em>
        </h1>

        <p className="hero-sub">
          Performance marketing, lead generation, content, branding, and digital
          product execution shaped into one refined growth partner.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => typeof window !== "undefined" && window.openFunnel?.()}
          >
            <svg width={15} height={15} style={{ display: "inline" }}>
              <use href="#ic-target" />
            </svg>
            Get Free Strategy Session
          </button>

          <Link className="btn-ghost" href="/services">
            Explore Services
            <svg width={15} height={15} style={{ display: "inline" }}>
              <use href="#ic-arrow-r" />
            </svg>
          </Link>
        </div>

        <div className="hero-contact-strip">
          <a href="tel:+919987952982" className="hero-contact-item">
            <svg style={{ width: "13px", height: "13px" }}>
              <use href="#ic-phone" />
            </svg>
            +91 99879 52982
          </a>
          <span className="hero-sep">|</span>
          <a href="tel:+919136892346" className="hero-contact-item">
            <svg style={{ width: "13px", height: "13px" }}>
              <use href="#ic-phone" />
            </svg>
            +91 91368 92346
          </a>
          <span className="hero-sep">|</span>
          <a href="mailto:info@prestigieux.in" className="hero-contact-item">
            <svg style={{ width: "13px", height: "13px" }}>
              <use href="#ic-mail" />
            </svg>
            info@prestigieux.in
          </a>
        </div>
      </div>
    </section>
  );
}
