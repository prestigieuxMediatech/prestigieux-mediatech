'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/funnel.css";

const TITLES = [
  "What can we help you with?",
  "What is your budget?",
  "What is your primary goal?",
  "Get your free strategy",
];

const SUBTITLES = [
  "Select all that apply - we'll build a custom plan",
  "We'll tailor the best plan for you",
  "We'll build your strategy around this",
  "Personalized plan sent instantly",
];

const SERVICES = [
  "Performance Marketing",
  "Lead Generation",
  "Content Creation",
  "Website Development",
  "Mobile App",
  "SEO & Digital Marketing",
  "Brand Identity",
  "UI/UX Design",
  "Virtual Assistant",
];

const SERVICE_SUBTITLES = [
  "Meta - LinkedIn - YouTube Ads",
  "B2B & B2C qualified leads daily",
  "Reels, blogs, ad creatives",
  "Fast, SEO-ready, converts visitors",
  "Android & iOS, from Rs 40K",
  "Rank #1, grow organic traffic",
  "Logo, colors, brand system",
  "Figma prototypes, design systems",
  "Admin, ops, customer support",
];

const BUDGETS = ["Under Rs 15K", "Rs 15K-30K", "Rs 30K-60K", "Rs 60K-1.5L", "Rs 1.5L-5L", "Rs 5L+"];
const BUDGET_LABELS = ["Micro Budget", "Starter", "Growth", "Scale", "Enterprise", "Unlimited"];

const GOALS = [
  { value: "Generate More Leads", label: "More Leads & Sales" },
  { value: "Build Brand Awareness", label: "Brand Awareness" },
  { value: "Launch New Business", label: "New Launch" },
  { value: "Grow Social Media", label: "Social Growth" },
  { value: "Better Website or App", label: "Better Website/App" },
  { value: "Scale Revenue", label: "Scale Revenue" },
];

const DEFAULT_FORM = { name: "", phone: "", email: "", brand: "", msg: "" };

export default function Funnel() {
  const [fStep, setFStep] = useState(1);
  const [fSvcs, setFSvcs] = useState([]);
  const [fBudget, setFBudget] = useState("");
  const [fGoal, setFGoal] = useState("");
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  const toggleSvc = useCallback((svc) => {
    setFSvcs((prev) => (prev.includes(svc) ? prev.filter((item) => item !== svc) : [...prev, svc]));
  }, []);

  const goStep = useCallback((step) => {
    setFStep(step);
  }, []);

  const closeFunnel = useCallback(() => {
    setIsOpen(false);

    window.setTimeout(() => {
      setFStep(1);
      setFSvcs([]);
      setFBudget("");
      setFGoal("");
      setFormData(DEFAULT_FORM);
      setSubmitting(false);
      setSuccess(false);
    }, 450);
  }, []);

  const updateForm = useCallback((event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const submitLead = useCallback(async () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      window.alert("Name and phone are required.");
      return;
    }

    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1000);
  }, [formData]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeFunnel();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeFunnel]);

  useEffect(() => {
    const openFunnel = () => setIsOpen(true);
    const handleOpenEvent = () => openFunnel();
    const handleCloseEvent = () => closeFunnel();

    window.openFunnel = openFunnel;
    window.closeFunnel = closeFunnel;
    window.addEventListener("prestigieux:funnel-open", handleOpenEvent);
    window.addEventListener("prestigieux:funnel-close", handleCloseEvent);

    return () => {
      window.removeEventListener("prestigieux:funnel-open", handleOpenEvent);
      window.removeEventListener("prestigieux:funnel-close", handleCloseEvent);

      if (window.openFunnel === openFunnel) {
        delete window.openFunnel;
      }

      if (window.closeFunnel === closeFunnel) {
        delete window.closeFunnel;
      }
    };
  }, [closeFunnel]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const isStep1Valid = fSvcs.length > 0;
  const isStep2Valid = Boolean(fBudget);
  const isStep3Valid = Boolean(fGoal);

  const getWhatsAppLink = () => {
    const msg = `NEW LEAD\nName: ${formData.name}\nPhone: ${formData.phone}\nServices: ${fSvcs.join(", ")}\nBudget: ${fBudget}\nGoal: ${fGoal}`;
    return `https://wa.me/919987952982?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <div
        className={`funnel-overlay no-custom-cursor ${isOpen ? "open" : ""}`}
        ref={overlayRef}
        onClick={(event) => event.target === overlayRef.current && closeFunnel()}
      >
        <div className="funnel-box">
          <div className="funnel-topbar" />
          <button className="funnel-close-btn" onClick={closeFunnel} aria-label="Close funnel">
            ✕
          </button>
          <div className="funnel-prog">
            <div className="funnel-prog-fill" style={{ width: `${(fStep / 4) * 100}%` }} />
          </div>
          <div className="funnel-head">
            <h3>{TITLES[fStep - 1]}</h3>
            <p>{SUBTITLES[fStep - 1]}</p>
          </div>

          <div className={`funnel-step ${fStep === 1 ? "active" : ""}`} id="fStep1">
            <div className="funnel-step-label">
              Choose Services{" "}
              <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: ".78rem" }}>(select all)</span>
            </div>
            <div className="funnel-options">
              {SERVICES.map((svc, index) => (
                <div
                  key={svc}
                  className={`funnel-opt ${fSvcs.includes(svc) ? "selected" : ""}`}
                  onClick={() => toggleSvc(svc)}
                >
                  <div className="funnel-opt-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="funnel-opt-text">
                    <div className="funnel-opt-name">{svc}</div>
                    <div className="funnel-opt-sub">{SERVICE_SUBTITLES[index]}</div>
                  </div>
                  <span className="funnel-check">✓</span>
                </div>
              ))}
            </div>
            <button className="funnel-btn" onClick={() => goStep(2)} disabled={!isStep1Valid}>
              Next →
            </button>
          </div>

          <div className={`funnel-step ${fStep === 2 ? "active" : ""}`} id="fStep2">
            <div className="funnel-step-label">Monthly Budget?</div>
            <div className="budget-grid">
              {BUDGETS.map((budget, index) => (
                <div
                  key={budget}
                  className={`budget-opt ${fBudget === budget ? "selected" : ""}`}
                  onClick={() => setFBudget(budget)}
                >
                  <span className="budget-amt">{budget}</span>
                  <span className="budget-label">{BUDGET_LABELS[index]}</span>
                </div>
              ))}
            </div>
            <div className="funnel-nav">
              <button className="funnel-back-btn" onClick={() => goStep(1)}>
                ← Back
              </button>
              <button className="funnel-btn" onClick={() => goStep(3)} disabled={!isStep2Valid}>
                Next →
              </button>
            </div>
          </div>

          <div className={`funnel-step ${fStep === 3 ? "active" : ""}`} id="fStep3">
            <div className="funnel-step-label">Primary Business Goal?</div>
            <div className="goal-grid">
              {GOALS.map((goal) => (
                <div
                  key={goal.value}
                  className={`goal-opt ${fGoal === goal.value ? "selected" : ""}`}
                  onClick={() => setFGoal(goal.value)}
                >
                  {goal.label}
                </div>
              ))}
            </div>
            <div className="funnel-nav">
              <button className="funnel-back-btn" onClick={() => goStep(2)}>
                ← Back
              </button>
              <button className="funnel-btn" onClick={() => goStep(4)} disabled={!isStep3Valid}>
                Next →
              </button>
            </div>
          </div>

          <div className={`funnel-step ${fStep === 4 ? "active" : ""}`} id="fStep4">
            <div className="funnel-step-label">Get Your Free Strategy</div>

            {!success && !submitting && (
              <div className="funnel-form-fields">
                <input className="funnel-input" id="name" type="text" placeholder="Your Name *" value={formData.name} onChange={updateForm} required />
                <input className="funnel-input" id="phone" type="tel" placeholder="WhatsApp / Phone *" value={formData.phone} onChange={updateForm} required />
                <input className="funnel-input" id="email" type="email" placeholder="Email Address" value={formData.email} onChange={updateForm} />
                <input className="funnel-input" id="brand" type="text" placeholder="Brand / Business Name" value={formData.brand} onChange={updateForm} />
                <textarea className="funnel-input" id="msg" placeholder="Any specific requirements?" value={formData.msg} onChange={updateForm} style={{ minHeight: "65px", resize: "vertical" }} />
              </div>
            )}

            {submitting && (
              <div className="funnel-spinner show">
                <div className="spinner"></div>
                <p style={{ color: "var(--muted)" }}>Building your custom growth strategy...</p>
              </div>
            )}

            {success && (
              <div className="funnel-success show">
                <div className="funnel-success-icon">✓</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: ".4rem" }}>
                  Strategy sent, <span>{formData.name}!</span>
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", marginBottom: "1rem" }}>
                  Check your WhatsApp. Our team will call you within 2 hours.
                </p>
                <div className="funnel-cta-row">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: ".8rem" }}>
                    <svg width="13" height="13">
                      <use href="#ic-chat" />
                    </svg>
                    WhatsApp Now
                  </a>
                  <button onClick={closeFunnel} className="btn-ghost" style={{ fontSize: ".8rem" }}>
                    Close
                  </button>
                </div>
              </div>
            )}

            {!submitting && !success && fStep === 4 && (
              <div className="funnel-nav">
                <button className="funnel-back-btn" onClick={() => goStep(3)}>
                  ← Back
                </button>
                <button className="funnel-btn" onClick={submitLead}>
                  Get My Free Strategy
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="strategy-badge" onClick={() => setIsOpen(true)} aria-label="Open free strategy funnel">
        Free Strategy
      </button>
    </>
  );
}