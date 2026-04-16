import { FaBolt, FaBullseye, FaSearch, FaUsers, FaPalette, FaRocket, FaHeadset, FaChartLine } from "react-icons/fa";
import { MdDesignServices, MdAppShortcut, MdContentCopy, MdCampaign, MdBrandingWatermark } from "react-icons/md";
import Team from "./Team";
import styles from "../styles/HeroAbout.module.css";

const values = [
  {
    icon: <FaBullseye />,
    title: "Results First",
    description:
      "Every recommendation is shaped around measurable growth, stronger positioning, and practical business outcomes.",
  },
  {
    icon: <FaSearch />,
    title: "Clear Reporting",
    description:
      "You stay close to the work through transparent reporting, clear priorities, and decisions that are easy to understand.",
  },
  {
    icon: <FaBolt />,
    title: "Fast, Not Rushed",
    description:
      "We keep execution sharp and responsive without compromising craft, detail, or consistency across channels.",
  },
  {
    icon: <FaUsers />,
    title: "True Partnership",
    description:
      "Our team works like an extension of yours, aligning strategy, creative, and delivery around the same business goal.",
  },
];

const highlights = [
  { value: "50+", label: "Brands supported" },
  { value: "3+", label: "Markets served" },
  { value: "98%", label: "Client retention" },
  { value: "7", label: "Days of support" },
];

const whyChooseFeatures = [
  {
    icon: <FaChartLine />,
    title: "Strategy-Driven Digital Planning",
    description: "Data-backed strategies tailored to your business goals"
  },
  {
    icon: <FaRocket />,
    title: "Creative-Led Digital Marketing",
    description: "Campaigns that stand out and drive engagement"
  },
  {
    icon: <FaPalette />,
    title: "High-Quality Design & Development",
    description: "Premium aesthetics with robust functionality"
  },
  {
    icon: <FaHeadset />,
    title: "Reliable & Responsive Support",
    description: "Always available when you need us most"
  }
];

const services = [
  {
    icon: <MdDesignServices />,
    title: "Web Design & Development",
    description: "We design and develop UI/UX focused creative websites so your users have a great experience while using your website"
  },
  {
    icon: <FaUsers />,
    title: "Social Media Marketing",
    description: "Social media marketing is the use of social media platforms and websites to promote a product or service"
  },
  {
    icon: <MdContentCopy />,
    title: "Content Marketing & Social Media",
    description: "Strategic content that tells your story and builds lasting connections with your audience"
  },
  {
    icon: <MdCampaign />,
    title: "PPC Campaign",
    description: "Targeted pay-per-click campaigns that maximize ROI and drive qualified traffic"
  },
  {
    icon: <FaSearch />,
    title: "SEO Service",
    description: "Organic search optimization that improves visibility and drives sustainable growth"
  },
  {
    icon: <FaBullseye />,
    title: "Paid Advertising",
    description: "Strategic paid media campaigns across platforms to reach your ideal customers"
  },
  {
    icon: <MdBrandingWatermark />,
    title: "Brand Identity & Promotion",
    description: "Comprehensive branding solutions that establish your unique market presence"
  },
  {
    icon: <MdAppShortcut />,
    title: "Mobile App Development",
    description: "Native and cross-platform apps that deliver seamless mobile experiences"
  }
];

export default function HeroAbout() {
  return (
    <main id="page-about" className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.tag}>Our Story</div>
            <h1 className={styles.heroTitle}>From registration to recognition</h1>
            <p className={styles.heroSub}>
              Prestigieux Mediatech helps brands build a more credible, visible,
              and conversion-ready digital presence with strategy, design, and
              execution under one roof.
            </p>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelLabel}>What clients trust us for</p>
            <ul className={styles.panelList}>
              <li>Performance-led digital marketing</li>
              <li>Elegant websites and product experiences</li>
              <li>Brand systems that feel premium and clear</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.storyGrid}>
            <div>
              <div className={styles.tag}>Who We Are</div>
              <h2 className={styles.sectionTitle}>
                A focused growth partner for ambitious businesses
              </h2>
              <p className={styles.bodyText}>
                Based in Navi Mumbai, we bring together marketing, branding,
                product thinking, and development so businesses can scale with
                one aligned team instead of scattered vendors.
              </p>
              <p className={styles.bodyText}>
                Our approach stays subtle, strategic, and outcome-driven: strong
                messaging, polished execution, and systems that help brands look
                premium while performing better.
              </p>
            </div>

            <div className={styles.statsCard}>
              {highlights.map((item) => (
                <div className={styles.statCell} key={item.label}>
                  <span className={styles.statValue}>{item.value}</span>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.sectionInner} ${styles.dualGrid}`}>
          <article className={styles.statementCard}>
            <div className={styles.tag}>Mission</div>
            <h3 className={styles.statementTitle}>
              Make high-quality digital growth accessible to more businesses
            </h3>
            <p className={styles.bodyText}>
              We combine strategy, content, media, and product execution so
              brands can compete with confidence without carrying agency
              complexity.
            </p>
          </article>

          <article className={styles.statementCard}>
            <div className={styles.tag}>Vision</div>
            <h3 className={styles.statementTitle}>
              Become the most trusted modern growth partner in our market
            </h3>
            <p className={styles.bodyText}>
              The goal is simple: thoughtful work, consistent results, and a
              reputation built on calm execution rather than noise.
            </p>
          </article>
        </div>
      </section>

      <Team />

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.valuesHeader}>
            <div className={styles.tag}>Core Values</div>
            <h2 className={styles.sectionTitle}>How we like to work</h2>
            <p className={styles.bodyText}>
              The process is designed to feel clear, premium, and dependable for
              both your team and your audience.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article className={styles.valueCard} key={value.title}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseContent}>
              <div className={styles.tag}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                Strategy, design, and technology—unified
              </h2>
              <div className={styles.whyChooseText}>
                <p className={styles.bodyText}>
                  Prestigieux Mediatech is a MediaTech company built at the intersection of strategy, design, and technology. We help businesses create meaningful digital experiences by focusing on clarity, consistency, and purpose—not shortcuts or surface-level trends.
                </p>
                <p className={styles.bodyText}>
                  Our work begins with understanding. Every brand, audience, and challenge is different, which is why we design solutions around real business goals rather than templates. From digital strategy and branding to UI/UX design, web development, digital marketing, and media solutions, we support businesses through every stage of their digital journey.
                </p>
                <p className={styles.bodyText}>
                  What sets us apart is our approach. We combine creative thinking with structured execution, ensuring that every solution is scalable, measurable, and aligned with long-term growth. Our team of strategists, designers, and developers works collaboratively to turn ideas into digital experiences that engage users and deliver tangible results.
                </p>
                <p className={styles.bodyText}>
                  We don't believe in noise. We believe in relevance, thoughtful design, and technology that serves a clear purpose. As a best advertising agency in Mumbai and a digital marketing agency in Navi Mumbai, we work with businesses looking for strategic, design-led, and growth-focused digital solutions.
                </p>
              </div>
            </div>

            <div className={styles.whyChooseFeatures}>
              {whyChooseFeatures.map((feature, index) => (
                <div className={styles.featureCard} key={index}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.valuesHeader}>
            <div className={styles.tag}>Our Expertise</div>
            <h2 className={styles.sectionTitle}>Services we deliver</h2>
            <p className={styles.bodyText}>
              Comprehensive digital solutions designed to elevate your brand and drive measurable growth.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={index}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
