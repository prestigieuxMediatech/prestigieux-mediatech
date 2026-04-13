"use client";
import { FaAsterisk } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/ServiceDetail.module.css";
import {
  FaPenNib, FaBolt, FaMobileAlt, FaSearch, FaShieldAlt, FaChartBar,
  FaGlobe, FaBriefcase, FaFilm, FaRedo, FaChartLine, FaLightbulb,
  FaBullseye, FaRobot, FaEnvelope, FaWhatsapp, FaStar, FaFileAlt,
  FaLayerGroup, FaPalette, FaUsers, FaClock, FaPhoneAlt, FaArrowLeft
} from "react-icons/fa";

export default function ServiceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  if (!slug) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        <Footer />
      </>
    );
  }

  const goBack = () => router.push("/services");

  const openFunnel = () => {
    const overlay = document.getElementById("funnelOverlay");
    if (overlay) overlay.style.display = "block";
  };

  /* ══════════════════════════════════════════
     svc-web — Website Development
  ══════════════════════════════════════════ */
  if (slug === "svc-web") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          {/* Hero */}
          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Most Popular</div>
              <h1>Website Development</h1>
              <p>Fast, SEO-ready sites that convert visitors into clients. Built with purpose, not templates.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>What You Get</div>
              <h2 className={styles["section-title"]}>Everything Included</h2>
              <div className={styles["features-grid"]}>
                <div className={styles["feature-card"]}>
                  <h4><FaPenNib /> Custom Design</h4>
                  <p>Pixel-perfect UI built for your brand and audience. No templates — pure custom.</p>
                </div>
                <div className={styles["feature-card"]}>
                  <h4><FaBolt /> Speed Optimised</h4>
                  <p>Scores 90+ on Google PageSpeed. Fast loading = better SEO + conversions.</p>
                </div>
                <div className={styles["feature-card"]}>
                  <h4><FaMobileAlt /> Fully Responsive</h4>
                  <p>Perfect on every device — mobile, tablet, desktop, 4K displays.</p>
                </div>
                <div className={styles["feature-card"]}>
                  <h4><FaSearch /> SEO Ready</h4>
                  <p>Built with proper H-tags, meta, schema markup and clean code structure.</p>
                </div>
                <div className={styles["feature-card"]}>
                  <h4><FaShieldAlt /> Secure & Scalable</h4>
                  <p>SSL, HTTPS, security headers, DDoS protection. Scales with your growth.</p>
                </div>
                <div className={styles["feature-card"]}>
                  <h4><FaChartBar /> Analytics Integrated</h4>
                  <p>Google Analytics 4, Search Console, Facebook Pixel setup included.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Results</div>
              <h2 className={styles["section-title"]}>Numbers That Matter</h2>
              <div className={styles["results-grid"]}>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>50+</div><div className={styles["result-label"]}>Websites Built</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>98%</div><div className={styles["result-label"]}>Client Satisfaction</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>4.9/5</div><div className={styles["result-label"]}>Average Rating</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>&lt;2s</div><div className={styles["result-label"]}>Avg Load Time</div></div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Our Process</div>
              <h2 className={styles["section-title"]}>How We Work</h2>
              <div className={styles["process-list"]}>
                <div className={styles["process-step"]}>
                  <div className={styles["step-num"]} />
                  <div className={styles["step-content"]}><strong>Discovery & Strategy</strong><p>We study your business, competitors and target audience to map the right website strategy.</p></div>
                </div>
                <div className={styles["process-step"]}>
                  <div className={styles["step-num"]} />
                  <div className={styles["step-content"]}><strong>Design & Prototype</strong><p>Figma wireframes → hi-fi mockup → your approval before a single line of code is written.</p></div>
                </div>
                <div className={styles["process-step"]}>
                  <div className={styles["step-num"]} />
                  <div className={styles["step-content"]}><strong>Development</strong><p>Clean HTML/CSS/JS or WordPress/React. Mobile-first, SEO-optimised, lightning fast.</p></div>
                </div>
                <div className={styles["process-step"]}>
                  <div className={styles["step-num"]} />
                  <div className={styles["step-content"]}><strong>Testing & Launch</strong><p>Cross-browser, cross-device QA. We launch on your domain with zero downtime.</p></div>
                </div>
                <div className={styles["process-step"]}>
                  <div className={styles["step-num"]} />
                  <div className={styles["step-content"]}><strong>Post-Launch Support</strong><p>30-day free support. Ongoing maintenance plans available.</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <p className={styles["section-sub"]}>All prices in INR. No hidden fees. Customised quotes available.</p>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Starter</div>
                  <div className={styles["price-name"]}>Basic Website</div>
                  <div className={styles["price-note"]}>Ideal for new businesses</div>
                  <div className={styles["price-tag"]}>₹15,000 <FaAsterisk size={16} style={{ verticalAlign: "super" }}/></div>
                  <ul className={styles["price-list"]}>
                    <li>5 Pages</li><li>Mobile Responsive</li><li>Contact Form</li><li>Basic SEO</li><li>1 Month Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Business</div>
                  <div className={styles["price-name"]}>Growth Website</div>
                  <div className={styles["price-note"]}>Best for growing brands</div>
                  <div className={styles["price-tag"]}>₹35,000 <FaAsterisk size={16} style={{ verticalAlign: "super" }}/></div>
                  <ul className={styles["price-list"]}>
                    <li>10 Pages</li><li>Custom Design</li><li>CMS/Blog</li><li>Advanced SEO</li><li>Lead Capture</li><li>3 Months Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Enterprise</div>
                  <div className={styles["price-name"]}>Complex Site</div>
                  <div className={styles["price-note"]}>Feature-rich, e-commerce</div>
                  <div className={styles["price-tag"]}>₹75,000+ <FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>Unlimited Pages</li><li>E-commerce Ready</li><li>Custom Integrations</li><li>Performance Audit</li><li>6 Months Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Tech Stack</div>
              <h2 className={styles["section-title"]}>Tools & Technologies</h2>
              <div className={styles["tech-row"]}>
                {["HTML5","CSS3","JavaScript","React","WordPress","WooCommerce","PHP","MySQL"].map(t => (
                  <span key={t} className={styles["tech-pill"]}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to get started?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-app — Mobile App Development
  ══════════════════════════════════════════ */
  if (slug === "svc-app") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Fast Delivery</div>
              <h1>Mobile App Development</h1>
              <p>Native & cross-platform apps that users love. Built with Flutter and React Native for both iOS and Android.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>What You Get</div>
              <h2 className={styles["section-title"]}>Everything Included</h2>
              <div className={styles["features-grid"]}>
                <div className={styles["feature-card"]}><h4><FaMobileAlt /> Android & iOS</h4><p>One codebase, two platforms. React Native or Flutter. Native performance.</p></div>
                <div className={styles["feature-card"]}><h4><FaBullseye /> User-Centric UX</h4><p>Intuitive flows, smooth animations, zero friction. Users stay and return.</p></div>
                <div className={styles["feature-card"]}><h4><FaBolt /> Push Notifications</h4><p>Re-engage users with smart, segmented push campaigns.</p></div>
                <div className={styles["feature-card"]}><h4><FaChartBar /> Payment Integration</h4><p>Razorpay, PhonePe, Stripe — in-app purchases ready.</p></div>
                <div className={styles["feature-card"]}><h4><FaRedo /> API Integration</h4><p>Connect with any backend, third-party APIs, maps, social logins.</p></div>
                <div className={styles["feature-card"]}><h4><FaShieldAlt /> App Store Launch</h4><p>We handle submission, review and approval on Play Store & App Store.</p></div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Results</div>
              <h2 className={styles["section-title"]}>Numbers That Matter</h2>
              <div className={styles["results-grid"]}>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>30+</div><div className={styles["result-label"]}>Apps Launched</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>4.5★</div><div className={styles["result-label"]}>Avg App Rating</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>2×</div><div className={styles["result-label"]}>User Retention</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>₹40K</div><div className={styles["result-label"]}>Starting Cost</div></div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>MVP</div>
                  <div className={styles["price-name"]}>Validate Fast</div>
                  <div className={styles["price-tag"]}>₹40,000 <FaAsterisk size={16} style={{ verticalAlign: "super" }} /> </div>
                  <ul className={styles["price-list"]}>
                    <li>5 Core Screens</li><li>Basic Auth</li><li>REST API</li><li>Android or iOS</li><li>2 Months Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Growth</div>
                  <div className={styles["price-name"]}>Full-Featured App</div>
                  <div className={styles["price-tag"]}>₹90,000 <FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>15+ Screens</li><li>Both Platforms</li><li>Push Notifications</li><li>Payments</li><li>Admin Panel</li><li>4 Months Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Enterprise</div>
                  <div className={styles["price-name"]}>Complex Ecosystems</div>
                  <div className={styles["price-tag"]}>₹2,00,000+ <FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>Custom Features</li><li>Real-time Features</li><li>Analytics Dashboard</li><li>Scalable Backend</li><li>1 Year Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to build your app?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-perf — Performance Marketing
  ══════════════════════════════════════════ */
  if (slug === "svc-perf") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>#1 In Demand</div>
              <h1>Performance Marketing</h1>
              <p>Meta, LinkedIn & YouTube ads engineered for maximum ROAS. Every rupee tracked, every conversion optimised.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>What You Get</div>
              <h2 className={styles["section-title"]}>Everything Included</h2>
              <div className={styles["features-grid"]}>
                <div className={styles["feature-card"]}><h4><FaGlobe /> Meta Ads</h4><p>Facebook & Instagram campaigns with Advantage+, LAL audiences and shopping ads.</p></div>
                <div className={styles["feature-card"]}><h4><FaBriefcase /> LinkedIn Ads</h4><p>B2B lead-gen targeting by title, company, industry. Decision-maker reach.</p></div>
                <div className={styles["feature-card"]}><h4><FaFilm /> YouTube Ads</h4><p>In-stream, bumper & discovery ads with compelling video creatives.</p></div>
                <div className={styles["feature-card"]}><h4><FaRedo /> Retargeting</h4><p>Bring back warm audiences. 3–5× higher conversion than cold traffic.</p></div>
                <div className={styles["feature-card"]}><h4><FaChartLine /> ROAS Tracking</h4><p>Real-time dashboards. Every click, conversion and cost tracked live.</p></div>
                <div className={styles["feature-card"]}><h4><FaLightbulb /> Creative Strategy</h4><p>Ad copy, design and video scripts that stop the scroll and drive action.</p></div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Results</div>
              <h2 className={styles["section-title"]}>Numbers That Matter</h2>
              <div className={styles["results-grid"]}>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>4.8×</div><div className={styles["result-label"]}>Average ROAS</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>₹2Cr+</div><div className={styles["result-label"]}>Ad Spend Managed</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>60%</div><div className={styles["result-label"]}>Avg CPL Reduction</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>10K+</div><div className={styles["result-label"]}>Leads Generated</div></div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Starter</div>
                  <div className={styles["price-name"]}>1 Platform</div>
                  <div className={styles["price-tag"]}>₹20,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>Meta OR LinkedIn</li><li>3 Ad Sets</li><li>Monthly Report</li><li>Ad Spend: ₹20K+</li><li>Basic Creative</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Growth</div>
                  <div className={styles["price-name"]}>Multi-Platform</div>
                  <div className={styles["price-tag"]}>₹40,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>Meta + LinkedIn</li><li>10 Ad Sets</li><li>Weekly Reports</li><li>Ad Spend: ₹50K+</li><li>Full Creative Production</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Enterprise</div>
                  <div className={styles["price-name"]}>All Platforms</div>
                  <div className={styles["price-tag"]}>₹80,000+<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>Meta+LinkedIn+YouTube</li><li>Unlimited Campaigns</li><li>Dedicated Manager</li><li>Ad Spend: ₹2L+</li><li>Video Production</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to scale your ads?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-leadgen — Lead Generation
  ══════════════════════════════════════════ */
  if (slug === "svc-leadgen") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Revenue Driver</div>
              <h1>Lead Generation</h1>
              <p>Fill your sales pipeline with qualified, ready-to-buy leads daily. B2B, B2C, real estate, edtech and more.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>What You Get</div>
              <h2 className={styles["section-title"]}>Everything Included</h2>
              <div className={styles["features-grid"]}>
                <div className={styles["feature-card"]}><h4><FaBullseye /> Targeted Funnels</h4><p>Custom landing pages + ads that attract your ideal customer, not tire-kickers.</p></div>
                <div className={styles["feature-card"]}><h4><FaRobot /> CRM Automation</h4><p>Auto-assign, tag and nurture leads without lifting a finger.</p></div>
                <div className={styles["feature-card"]}><h4><FaEnvelope /> Email Sequences</h4><p>7-touch automated email sequences that convert cold leads to hot prospects.</p></div>
                <div className={styles["feature-card"]}><h4><FaWhatsapp /> WhatsApp Drip</h4><p>Automated WhatsApp messages that 95% of leads actually read and respond to.</p></div>
                <div className={styles["feature-card"]}><h4><FaStar /> Lead Scoring</h4><p>AI-based scoring so your sales team only calls the hottest leads.</p></div>
                <div className={styles["feature-card"]}><h4><FaFileAlt /> Daily Reporting</h4><p>Daily lead sheet delivered to your inbox with lead quality scores.</p></div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Results</div>
              <h2 className={styles["section-title"]}>Numbers That Matter</h2>
              <div className={styles["results-grid"]}>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>10K+</div><div className={styles["result-label"]}>Leads Generated</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>40%</div><div className={styles["result-label"]}>Lower CPL</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>3×</div><div className={styles["result-label"]}>Sales Conversion</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>24hr</div><div className={styles["result-label"]}>Lead Delivery</div></div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Starter</div>
                  <div className={styles["price-name"]}>50–100 Leads/mo</div>
                  <div className={styles["price-tag"]}>₹25,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span> <FaAsterisk size={16} style={{ verticalAlign: "super" }} /> </div>
                  <ul className={styles["price-list"]}>
                    <li>1 Funnel</li><li>Email Automation</li><li>Lead Sheet</li><li>Ad Spend: ₹15K+</li><li>Monthly Review</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Growth</div>
                  <div className={styles["price-name"]}>200–500 Leads/mo</div>
                  <div className={styles["price-tag"]}>₹50,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span> <FaAsterisk size={16} style={{ verticalAlign: "super" }} /> </div>
                  <ul className={styles["price-list"]}>
                    <li>3 Funnels</li><li>WhatsApp + Email</li><li>CRM Integration</li><li>Lead Scoring</li><li>Weekly Optimisation</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Scale</div>
                  <div className={styles["price-name"]}>500+ Leads/mo</div>
                  <div className={styles["price-tag"]}>₹1,00,000+<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span> <FaAsterisk size={16} style={{ verticalAlign: "super" }} /> </div>
                  <ul className={styles["price-list"]}>
                    <li>Unlimited Funnels</li><li>Full Automation</li><li>Dedicated Manager</li><li>Custom Integrations</li><li>Daily Reporting</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to fill your pipeline?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-content — Content Creation
  ══════════════════════════════════════════ */
  if (slug === "svc-content") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Viral Potential</div>
              <h1>Content Creation</h1>
              <p>Scroll-stopping content that builds authority and drives sales — reels, blogs, ad creatives and more.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>What You Get</div>
              <h2 className={styles["section-title"]}>Everything Included</h2>
              <div className={styles["features-grid"]}>
                <div className={styles["feature-card"]}><h4><FaFilm /> Reels & Shorts</h4><p>Scripted, edited short-form videos for Instagram Reels, YouTube Shorts & LinkedIn.</p></div>
                <div className={styles["feature-card"]}><h4><FaLayerGroup /> Carousels</h4><p>Educational and viral carousels that get saves, shares and followers fast.</p></div>
                <div className={styles["feature-card"]}><h4><FaFileAlt /> SEO Blogs</h4><p>Long-form articles that rank on Google and bring in consistent organic traffic.</p></div>
                <div className={styles["feature-card"]}><h4><FaBullseye /> Ad Creatives</h4><p>High-CTR ad images, copy and video scripts tested for maximum performance.</p></div>
                <div className={styles["feature-card"]}><h4><FaPenNib /> Scriptwriting</h4><p>Engaging video scripts for founders, educators and brand storytellers.</p></div>
                <div className={styles["feature-card"]}><h4><FaClock /> Content Calendar</h4><p>30-day planned, approved and scheduled in advance. Zero last-minute chaos.</p></div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Results</div>
              <h2 className={styles["section-title"]}>Numbers That Matter</h2>
              <div className={styles["results-grid"]}>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>500+</div><div className={styles["result-label"]}>Content Pieces</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>3×</div><div className={styles["result-label"]}>Avg Engagement Lift</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>10M+</div><div className={styles["result-label"]}>Organic Views</div></div>
                <div className={styles["result-cell"]}><div className={styles["result-num"]}>95%</div><div className={styles["result-label"]}>On-time Delivery</div></div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Basic</div>
                  <div className={styles["price-name"]}>12 Posts/Month</div>
                  <div className={styles["price-tag"]}>₹15,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>4 Reels</li><li>8 Graphics</li><li>Instagram Only</li><li>Content Calendar</li><li>1 Round Revisions</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Growth</div>
                  <div className={styles["price-name"]}>30 Posts/Month</div>
                  <div className={styles["price-tag"]}>₹30,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>8 Reels</li><li>12 Carousels</li><li>2 Platforms</li><li>SEO Blog ×2</li><li>2 Rounds Revisions</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Pro</div>
                  <div className={styles["price-name"]}>60 Posts/Month</div>
                  <div className={styles["price-tag"]}>₹60,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>16 Reels</li><li>24 Posts</li><li>All Platforms</li><li>8 SEO Blogs</li><li>Ad Creatives</li><li>Dedicated Manager</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to create great content?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-seo — SEO & Digital Marketing
  ══════════════════════════════════════════ */
  if (slug === "svc-seo") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Long-Term ROI</div>
              <h1>SEO & Digital Marketing</h1>
              <p>Rank #1 on Google and grow organic traffic month after month. Real results, not vanity metrics.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Starter</div>
                  <div className={styles["price-name"]}>Local SEO</div>
                  <div className={styles["price-tag"]}>₹18,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>10 Keywords</li><li>Technical SEO</li><li>4 Blogs/month</li><li>GMB Optimisation</li><li>Monthly Report</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Growth</div>
                  <div className={styles["price-name"]}>Regional / National</div>
                  <div className={styles["price-tag"]}>₹40,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>30 Keywords</li><li>Link Building</li><li>8 Blogs/month</li><li>Social Media</li><li>Backlink Report</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Authority</div>
                  <div className={styles["price-name"]}>Industry Domination</div>
                  <div className={styles["price-tag"]}>₹80,000+<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>100+ Keywords</li><li>PR Outreach</li><li>Daily Content</li><li>All Platforms</li><li>Dedicated SEO Lead</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to rank #1?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-brand — Brand Identity
  ══════════════════════════════════════════ */
  if (slug === "svc-brand") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Premium Design</div>
              <h1>Brand Identity</h1>
              <p>Be remembered, not forgotten. A brand that commands premium prices and builds instant trust.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Starter</div>
                  <div className={styles["price-name"]}>Essentials</div>
                  <div className={styles["price-tag"]}>₹12,000<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>1 Logo Concept</li><li>2 Colour Variants</li><li>PNG + SVG Files</li><li>Basic Style Guide</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Complete</div>
                  <div className={styles["price-name"]}>Full Identity</div>
                  <div className={styles["price-tag"]}>₹35,000<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>3 Logo Concepts</li><li>Full Visual System</li><li>Brand Guidelines</li><li>5 Collateral Items</li><li>All File Formats</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Enterprise</div>
                  <div className={styles["price-name"]}>Brand System</div>
                  <div className={styles["price-tag"]}>₹75,000+<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>Brand Strategy</li><li>Full Identity System</li><li>100-page Brand Book</li><li>All Collateral</li><li>Motion Identity</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to build your brand?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-uiux — UI/UX Design
  ══════════════════════════════════════════ */
  if (slug === "svc-uiux") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Award Quality</div>
              <h1>UI/UX Design</h1>
              <p>Designs that make users stay, convert and come back. User-researched Figma prototypes.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Landing Page</div>
                  <div className={styles["price-name"]}>Single Page</div>
                  <div className={styles["price-tag"]}>₹8,000<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>1 Page Design</li><li>Mobile + Desktop</li><li>Figma Source</li><li>2 Revisions</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Website</div>
                  <div className={styles["price-name"]}>Full Site UI/UX</div>
                  <div className={styles["price-tag"]}>₹25,000<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>Up to 10 Screens</li><li>User Research</li><li>Design System</li><li>Prototype</li><li>Dev Handoff</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>App Design</div>
                  <div className={styles["price-name"]}>Complete Product</div>
                  <div className={styles["price-tag"]}>₹50,000+<FaAsterisk size={16} style={{ verticalAlign: "super" }} />
</div>
                  <ul className={styles["price-list"]}>
                    <li>Unlimited Screens</li><li>Full UX Research</li><li>Component Library</li><li>Animations</li><li>3 Months Support</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready to design great experiences?</h2>
                <p>Free 30-min consultation. Custom proposal within 24 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     svc-va — Virtual Assistant
  ══════════════════════════════════════════ */
  if (slug === "svc-va") {
    return (
      <>
        <Navbar />
        <div className={styles["page-view"]}>

          <div className={styles["svc-detail-hero"]}>
            <div className={styles["section-inner"]}>
              <button className={styles["svc-back"]} onClick={goBack}><FaArrowLeft /> All Services</button>
              <div className={styles.tag}>Cost-Effective</div>
              <h1>Virtual Assistant</h1>
              <p>Dedicated remote support — admin, ops and customer service. Onboarded within 48 hours.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Consultation →</button>
                <a href="https://wa.me/919987952982" target="_blank" className={styles["btn-ghost"]}><FaWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles["section-inner"]}>
              <div className={styles.tag}>Pricing</div>
              <h2 className={styles["section-title"]}>Transparent Pricing</h2>
              <div className={styles["pricing-grid"]}>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Light</div>
                  <div className={styles["price-name"]}>20 Hours/Month</div>
                  <div className={styles["price-tag"]}>₹8,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>20 Hours</li><li>Email Management</li><li>Task Tracking</li><li>WhatsApp Updates</li><li>Weekly Report</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={`${styles["price-card"]} ${styles.featured}`}>
                  <div className={styles["price-tier"]}>Part-Time</div>
                  <div className={styles["price-name"]}>40 Hours/Month</div>
                  <div className={styles["price-tag"]}>₹15,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>40 Hours</li><li>Full Admin</li><li>Customer Support</li><li>CRM Management</li><li>Daily Check-in</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
                <div className={styles["price-card"]}>
                  <div className={styles["price-tier"]}>Full-Time</div>
                  <div className={styles["price-name"]}>Dedicated VA</div>
                  <div className={styles["price-tag"]}>₹25,000<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span><FaAsterisk size={16} style={{ verticalAlign: "super" }} /></div>
                  <ul className={styles["price-list"]}>
                    <li>160 Hours</li><li>All Tasks</li><li>Priority Support</li><li>Team Coordination</li><li>Monthly KPI Review</li>
                  </ul>
                  <button className={styles["btn-primary"]} style={{ width: "100%", marginTop: "1.5rem" }} onClick={openFunnel}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles["section-alt"]}`}>
            <div className={styles["section-inner"]}>
              <div className={styles["cta-block"]}>
                <h2>Ready for dedicated support?</h2>
                <p>Free 30-min consultation. VA onboarded within 48 hours.</p>
                <div className={styles["cta-actions"]}>
                  <button className={styles["btn-primary"]} onClick={openFunnel}>Get Free Strategy</button>
                  <a href="tel:+919987952982" className={styles["btn-ghost"]}><FaPhoneAlt /> Call Us Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }

  /* ══════════════════════════════════════════
     Fallback — Service Not Found
  ══════════════════════════════════════════ */
  return (
    <>
      <Navbar />
      <div className={styles["page-view"]}>
        <div className={styles.section}>
          <div className={styles["section-inner"]}>
            <h1>Service Not Found</h1>
            <p>
              Go back to{" "}
              <button onClick={goBack} style={{ color: "var(--gold)", background: "none", border: "none", fontSize: "inherit", cursor: "pointer" }}>
                Services
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}