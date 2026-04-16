"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/ServiceGrid.module.css";
import { ArrowRight } from "lucide-react";


// Lucide icons
import {
  Globe,
  Smartphone,
  Target,
  BarChart3,
  PenTool,
  Megaphone,
  BadgeCheck,
  Layout,
  Users
} from "lucide-react";

export default function ServicesGrid({ className = '' }) {
  // effectiveClass not used - will add reveal to svcCard directly for staggered effect
  const router = useRouter();

  const services = [
    { id: "svc-web", name: "Website Development", desc: "Fast, SEO-optimised websites that convert visitors into paying customers — built in days, not weeks.", icon: Globe },
    { id: "svc-app", name: "Mobile App Development", desc: "Custom Android & iOS apps that keep users engaged, drive repeat business and outperform competitors.", icon: Smartphone },
    { id: "svc-perf", name: "Performance Marketing", desc: "Full-funnel paid advertising across Meta, LinkedIn & YouTube. Every rupee tracked, every conversion optimised.", icon: Target },
    { id: "svc-leadgen", name: "Lead Generation", desc: "Multi-channel funnels delivering qualified, intent-rich prospects to your CRM daily.  B2B, B2C, real estate, edtech.", icon: BarChart3 },
    { id: "svc-content", name: "Content Creation", desc: "Scroll-stopping reels, carousels, blogs and ad creatives that build authority and drive engagement.", icon: PenTool },
    { id: "svc-seo", name: "SEO & Digital Marketing", desc: "Strategic SEO, content marketing and social campaigns that bring organic traffic.", icon: Megaphone },
    { id: "svc-brand", name: "Brand Identity", desc: "Logo, typography and brand story that commands premium positioning instantly.", icon: BadgeCheck },
    { id: "svc-uiux", name: "UI/UX Design", desc: "Figma prototypes and interfaces that increase conversions and delight users.", icon: Layout },
    { id: "svc-va", name: "Virtual Assistant", desc: "Trained VAs for admin tasks, customer support, data entry, research and social media management.", icon: Users }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.sectionInner}>

        <div className={styles.tag}>What We Do</div>

        <h2 className={styles.sectionTitle}>
          Full-Stack Digital Growth
        </h2>

        <p className={styles.sectionSub}>
          Click any service to explore in detail — pricing, process, results and everything you need to make a decision.
        </p>

        <div className={styles.servicesGrid}>

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`reveal ${styles.svcCard}`}
                onClick={() => router.push(`/services/${service.id}`)}
              >
                <div className={styles.svcIcon}>
                  <Icon size={18} />
                </div>

                <div className={styles.svcName}>{service.name}</div>

                <p className={styles.svcDesc}>{service.desc}</p>

                <div className={styles.svcCta}>
                  Learn More
                    <ArrowRight size={14} />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
