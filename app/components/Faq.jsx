import { useState } from "react";
import styles from "../styles/Faq.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is your minimum project budget?",
      a: "Website projects start from ₹15,000, performance marketing from ₹20,000/month, content creation from ₹15,000/month."
    },
    {
      q: "How long does a website take to build?",
      a: "A standard 5-page website takes 7–14 days. E-commerce sites take 3–6 weeks."
    },
    {
      q: "Do you work with businesses outside India?",
      a: "Yes, we work globally including USA, UAE, Australia and more."
    },
    {
      q: "How soon will I see results from ads?",
      a: "Most clients see leads within 48–72 hours. ROAS improves in 2–4 weeks."
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes, we offer support periods and monthly retainer plans for growth."
    }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.sectionInner}>

        <div className={styles.tag}>FAQ</div>

        <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h2>

        <div className={styles.faqList}>

          {faqs.map((item, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${
                openIndex === i ? styles.faqItemOpen : ""
              }`}
            >
              <button
                className={styles.faqBtn}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className={styles.faqIcon}>+</span>
              </button>

              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
