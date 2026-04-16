"use client";

import style from "../styles/HeroServices.module.css";
import { useRouter } from "next/navigation";
import {
  FaGlobe, FaMobileAlt, FaBullseye, FaChartBar, FaPenNib,
  FaBullhorn, FaPalette, FaLayerGroup, FaUsers, FaArrowRight, FaWhatsapp
} from "react-icons/fa";

export default function HeroServices() {
  const router = useRouter();

  const navigateTo = (slug) => {
    router.push(`/services/${slug}`);
  };

  const goToContact = () => {
    router.push('/contact');
  };

  return (
    <div id="page-services" className={style["page-view"]}>
      
      {/* HERO */}
      <div className={style["page-hero"]}>
        <div className={style["page-hero-inner"]}>
          <div className={style.tag}>What We Do</div>
          <h1>Complete Digital<br />Growth Services</h1>
          <p className={style["ph-sub"]}>
            From a simple website to a full-stack growth engine — click any service to explore detailed information, pricing and our process.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className={style.section}>
        <div className={style["section-inner"]}>
          <div className={style["services-grid"]}>

            {/* 1 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-web")}>
              <div className={style["svc-badge"]}>Most Popular</div>
              <div className={style["svc-icon"]}><FaGlobe /></div>
              <div className={style["svc-name"]}>Website Development</div>
              <p className={style["svc-desc"]}>Fast, SEO-optimised websites that convert visitors into paying customers — built in days, not weeks.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 2 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-app")}>
              <div className={style["svc-badge"]}>Fast Delivery</div>
              <div className={style["svc-icon"]}><FaMobileAlt /></div>
              <div className={style["svc-name"]}>Mobile App Development</div>
              <p className={style["svc-desc"]}>Custom Android & iOS apps that keep users engaged and put your brand ahead of competitors.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 3 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-perf")}>
              <div className={style["svc-badge"]}>#1 In Demand</div>
              <div className={style["svc-icon"]}><FaBullseye /></div>
              <div className={style["svc-name"]}>Performance Marketing</div>
              <p className={style["svc-desc"]}>Full-funnel paid advertising across Meta, LinkedIn & YouTube. Every rupee tracked, every conversion optimised.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 4 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-leadgen")}>
              <div className={style["svc-badge"]}>Revenue Driver</div>
              <div className={style["svc-icon"]}><FaChartBar /></div>
              <div className={style["svc-name"]}>Lead Generation</div>
              <p className={style["svc-desc"]}>Multi-channel funnels delivering qualified, intent-rich prospects to your CRM daily.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 5 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-content")}>
              <div className={style["svc-badge"]}>Viral Potential</div>
              <div className={style["svc-icon"]}><FaPenNib /></div>
              <div className={style["svc-name"]}>Content Creation</div>
              <p className={style["svc-desc"]}>High-impact reels, carousels, blogs and ad creatives that stop the scroll and drive engagement.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 6 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-seo")}>
              <div className={style["svc-badge"]}>Long-Term ROI</div>
              <div className={style["svc-icon"]}><FaBullhorn /></div>
              <div className={style["svc-name"]}>SEO & Digital Marketing</div>
              <p className={style["svc-desc"]}>Strategic SEO, content marketing and social campaigns that bring real, measurable organic traffic.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 7 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-brand")}>
              <div className={style["svc-badge"]}>Premium Design</div>
              <div className={style["svc-icon"]}><FaPalette /></div>
              <div className={style["svc-name"]}>Brand Identity</div>
              <p className={style["svc-desc"]}>Powerful logo, colour system and brand story that builds instant trust and commands premium positioning.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 8 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-uiux")}>
              <div className={style["svc-badge"]}>Award Quality</div>
              <div className={style["svc-icon"]}><FaLayerGroup /></div>
              <div className={style["svc-name"]}>UI/UX Design</div>
              <p className={style["svc-desc"]}>User-researched Figma prototypes and interfaces that reduce bounce, increase conversions and delight users.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

            {/* 9 */}
            <div className={style["svc-card"]} onClick={() => navigateTo("svc-va")}>
              <div className={style["svc-badge"]}>Cost-Effective</div>
              <div className={style["svc-icon"]}><FaUsers /></div>
              <div className={style["svc-name"]}>Virtual Assistant</div>
              <p className={style["svc-desc"]}>Trained VAs for admin tasks, customer support, data entry, research and social media management.</p>
              <div className={style["svc-cta"]}>Learn More <FaArrowRight /></div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className={`${style.section} ${style["section-alt"]}`}>
        <div className={style["section-inner"]}>
          <div className={style["cta-block"]}>
            <h2>Not sure which service you need?</h2>
            <p>Get a free strategy call and we'll recommend the right solution for your business.</p>
            
            <div className={style["cta-actions"]}>
              <button 
                type="button"
                className={style["btn-primary"]} 
                onClick={goToContact}
              >
                Get Free Recommendation
              </button>

              <a
                href="https://wa.me/919987952982?text=Hi Prestigieux Mediatech, I'm interested in your services"
                target="_blank"
                rel="noopener noreferrer"
                className={style["btn-ghost"]}
              >
                <FaWhatsapp />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
