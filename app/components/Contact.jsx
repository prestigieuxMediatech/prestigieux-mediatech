"use client";

import styles from "../styles/Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { useState, useEffect } from "react";

export default function Contact() {

  const [loading, setLoading] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // ✅ INIT ONLY ONCE
  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const submitContact = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    };

    // Basic validation
    if (!data.email || !data.phone) {
      alert("Please enter Email and Phone number");
      return;
    }

    try {
      if (!publicKey) {
        throw new Error("EmailJS public key missing from .env.local");
      

      }

      setLoading(true);

      await emailjs.send(
  "service_6skgt3x",
  "template_0xde739",
  {
    name: "Test",
    email: "test@gmail.com",
    phone: "1234567890",
    service: "Test",
    message: "Hello"
  },
  publicKey
);



      // ✅ OWNER EMAIL
      await emailjs.send(
        "service_6skgt3x",
        "template_0xde739",
        data,
        publicKey
      );

      // ✅ USER AUTO REPLY
      if (data.email) {
        await emailjs.send(
          "service_6skgt3x",
          "template_g7rfrxc", // ⚠️ CHECK THIS EXACT ID IN EMAILJS
          data,
          publicKey
        );
      }

      alert("Message sent successfully 🚀");
      form.reset();

    } catch (error) {
      console.error("FULL EmailJS ERROR:", {
        message: error?.message || error?.text,
        status: error?.status,
        details: error,
        publicKey: publicKey ? "present" : "MISSING",
        serviceId: "service_6skgt3x"
      });

      alert(`Send failed: ${error?.message || "Check EmailJS dashboard & console"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="page-contact" className={styles.pageView}>

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <div className={styles.tag}>Get In Touch</div>

          <h1>
            Let&apos;s Grow Your<br />
            Brand Together
          </h1>

          <p className={styles.phSub}>
            We reply within 2 hours during business hours — 8 AM to 10 PM, 7 days a week.
          </p>
        </div>
      </div>

      {/* SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionInner}>

          <div className={styles.contactGrid}>

            {/* FORM */}
            <form className={styles.form} onSubmit={submitContact}>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name *</label>
                <input name="name" placeholder="Enter Name" className={styles.formCtrl} type="text" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input name="email" placeholder="Enter Email" className={styles.formCtrl} type="email" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone / WhatsApp *</label>
                <input name="phone" placeholder="Enter Phone Number" className={styles.formCtrl} type="tel" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service Interested In</label>

                <select name="service" className={styles.formCtrl}>
                  <option value="">Select a service</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Performance Marketing</option>
                  <option>Lead Generation</option>
                  <option>Content Creation</option>
                  <option>SEO & Digital Marketing</option>
                  <option>Brand Identity</option>
                  <option>UI/UX Design</option>
                  <option>Virtual Assistant</option>
                  <option>Full Package</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  className={styles.formCtrl}
                  required
                />
              </div>

              <button
                className={styles.btnPrimary}
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>

            {/* INFO */}
            <div className={styles.contactInfo}>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <div className={styles.infoValue}>
                    <a href="tel:+919987952982">+91 9987952982</a><br />
                    <a href="tel:+919136892346">+91 9136892346</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>
                    <a href="mailto:info@prestigieux.in">
                      info@prestigieux.in
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaWhatsapp />
                </div>
                <div>
                  <div className={styles.infoLabel}>WhatsApp</div>
                  <div className={styles.infoValue}>
                    <a
                      href="https://wa.me/919987952982"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaClock />
                </div>
                <div>
                  <div className={styles.infoLabel}>Business Hours</div>
                  <div className={styles.infoValue}>
                    8:00 AM – 10:00 PM<br />
                    Monday to Sunday
                  </div>
                </div>
              </div>

              <div className={styles.actions}>
                <a className={styles.btnPrimary} href="https://wa.me/919987952982">
                  WhatsApp Us Now <FaWhatsapp />
                </a>

                <a className={styles.btnGhost} href="tel:+919987952982">
                  Call Now
                  <span>
                    <FaPhoneAlt /> +91 9987952982
                  </span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
