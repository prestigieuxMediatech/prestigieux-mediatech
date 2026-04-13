"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/BlogPage.module.css";

export default function Blogpage() {

  const [active, setActive] = useState("all");

  const projects = [
    {
      slug: "best-digital-marketing-agency-2026",
      category: "marketing",
      title: "How to Choose the Best Digital Marketing Agency in 2026",
      description: "Step-by-step breakdown of how ad delivery system optimizes conversions and what separates agencies that deliver from ones that don't.",
      tag: "Marketing",
      image: "/blog-hero.png",
      readTime: "5 min read",
    },
    {
      slug: "fast-website-importance",
      category: "web",
      title: "Why Every Business Needs a Fast Website",
      description: "Speed impacts SEO, conversions and user trust more than you think. Here's the data behind the claim.",
      tag: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=260&fit=crop",
      readTime: "4 min read",
    },
    {
      slug: "indian-digital-marketing-trust",
      category: "marketing",
      title: "Indian People Don't Trust Digital Marketing — Here's Why",
      description: "An honest look at why Indian consumers have grown sceptical of online ads and what brands can do to earn trust back.",
      tag: "Consumer Insights",
      image: "/blog2-hero.png",
      readTime: "6 min read",
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Marketing", value: "marketing" },
    { label: "Development", value: "web" },
    { label: "Consumer Insights", value: "consumer insights" },
  ];

  const filtered = active === "all"
    ? projects
    : projects.filter(
        (p) => p.category === active || p.tag.toLowerCase() === active
      );

  return (
    <div id="page-blog" className={styles["page-view"]}>

      {/* ── HERO — unchanged ── */}
      <div className={styles["page-hero"]}>
        <div className={styles["page-hero-inner"]}>
          <div className={styles.tag}>Insights & Updates</div>
          <h1>
            Our Blogs:<br />
            Insights, Strategy & Trends
          </h1>
          <p className={styles["ph-sub"]}>
            Latest insights on marketing, development, AI and branding strategies.
          </p>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className={styles["blog-filter-bar"]}>
        <div className={styles["blog-filter-inner"]}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`${styles["filter-btn"]} ${active === f.value ? styles["filter-btn-active"] : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── BLOG LIST ── */}
      <section className={styles["blog-section"]}>
        <div className={styles["blog-list"]}>
          {filtered.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles["blog-link"]}>
              <article className={styles["blog-row"]}>

                <span className={styles["blog-index"]}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles["blog-thumb"]}>
                  <img src={post.image} alt={post.title} />
                </div>

                <div className={styles["blog-body"]}>
                  <span className={styles["blog-tag"]}>{post.tag}</span>
                  <h3 className={styles["blog-title"]}>{post.title}</h3>
                  <p className={styles["blog-desc"]}>{post.description}</p>
                  <span className={styles["blog-meta"]}>{post.readTime}</span>
                </div>
                   <button className={styles["btn"]}>Read More..</button>
                 
                <div className={styles["blog-arrow"]}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
              </article>
           
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className={styles["no-posts"]}>No posts in this category yet.</p>
          )}
        </div>
      </section>

    </div>
  );
}