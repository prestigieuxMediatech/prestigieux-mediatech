"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import ServicesGrid from "./components/ServicesGrid";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Homeabout from "./components/Homeabout";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    //  Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H;
    let animationFrameId;
    let pts = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1 + 0.4,
        a: Math.random() * 0.3 + 0.1,
      });
    }

    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(200,169,110,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <>
       
        <Head>
        <title>Digital Marketing Agency Mumbai</title>
        <meta
          name="description"
          content="Best SEO & Digital Marketing services in Navi Mumbai"
        />
        <meta name="keywords" content="seo, digital marketing, mumbai" />
      </Head>
      {/* Canvas element */}
      <canvas
        ref={canvasRef}
        id="bg-canvas"
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Homeabout />
      <ServicesGrid />

      <Reviews />
      <Faq/>
      <Footer />
      {/* Funnel Modal */}
      <div className="funnel-overlay" id="funnelOverlay">
        {/* your funnel content */}
      </div>
    </>
  );
}



