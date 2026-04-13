'use client'
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Chat.module.css";

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 I'm Priya from Prestigieux. How can I help you grow your brand today?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const bodyRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!chatOpen) setShowNotif(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [chatOpen]);

  const toggleChat = () => {
    setChatOpen(prev => !prev);
    setShowNotif(false);
  };

  const sendChat = async () => {
    const text = input.trim();
    if (!text) return;

    setInput("");

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;

    const newHistory = [...chatHistory, { role: "user", content: text }];
    setChatHistory(newHistory);

    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: newHistory.slice(-8)
        })
      });

      const data = await res.json();

      const reply =
        data.reply ||
        "Thanks! WhatsApp us at +91 9987952982 for instant help.";

      setMessages(prev => [...prev, { role: "bot", text: reply }]);
      setChatHistory(prev => [...prev, { role: "assistant", content: reply }]);
      setTimeout(() => {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }, 100);

    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: "Thanks for your message! Please WhatsApp us at +91 9987952982 for immediate help."
        }
      ]);
    }

    setTyping(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChat();
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <>
      <div className={styles.chatWidget}>

        {/* TOGGLE BUTTON */}
        <button className={styles.chatToggle} onClick={toggleChat}>
          <svg><use href="#ic-chat" /></svg>

          {showNotif && (
            <span className={`${styles.chatNotif} ${styles.show}`}>
              1
            </span>
          )}
        </button>

        {/* PANEL */}
        <div className={`${styles.chatPanel} ${chatOpen ? styles.open : ""}`}>

          {/* HEADER */}
          <div className={styles.chatHead}>
            <div className={styles.chatAvatar}>P</div>
            <div>
              <div className={styles.chatHeadName}>Priya — Prestigieux</div>
              <div className={styles.chatHeadStatus}>● Online · replies instantly</div>
            </div>
            <button className={styles.chatClose} onClick={toggleChat}>✕</button>
          </div>

          {/* BODY */}
          <div className={styles.chatBody} ref={bodyRef}>

            {/* Initial bot message at top */}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.chatMsg} ${
                  m.role === "user"
                    ? styles.user
                    : styles.chatMsgBot
                }`}
              >
                {m.text}
              </div>
            ))}


            {/* FAQ */}
            <div className={styles.chatFaqSection}>
              <span className={styles.chatFaqLabel}>Quick answers</span>

              <div className={`${styles.chatFaqItem} ${faqOpen['1'] ? styles.open : ''}`} onClick={() => setFaqOpen(prev => ({...prev, '1': !prev['1']}))}>
                <div className={styles.chatFaqBtn}>
                  What is your minimum project budget?
                  <svg className={styles.chatFaqIcon}><use href="#ic-plus" /></svg>
                </div>
                <div className={styles.chatFaqAnswer}>
                  <p>
                    Website projects start from ₹15,000, performance marketing
                    from ₹20,000/month, content creation from ₹15,000/month.
                  </p>
                </div>
              </div>

              <div className={`${styles.chatFaqItem} ${faqOpen['2'] ? styles.open : ''}`} onClick={() => setFaqOpen(prev => ({...prev, '2': !prev['2']}))}>
                <div className={styles.chatFaqBtn}>
                  How long does a website take to build?
                  <svg className={styles.chatFaqIcon}><use href="#ic-plus" /></svg>
                </div>
                <div className={styles.chatFaqAnswer}>
                  <p>
                    A standard 5-page website takes 7–14 days. E-commerce or
                    complex sites take 3–6 weeks.
                  </p>
                </div>
              </div>

              <div className={`${styles.chatFaqItem} ${faqOpen['3'] ? styles.open : ''}`} onClick={() => setFaqOpen(prev => ({...prev, '3': !prev['3']}))}>
                <div className={styles.chatFaqBtn}>
                  Do you work outside India?
                  <svg className={styles.chatFaqIcon}><use href="#ic-plus" /></svg>
                </div>
                <div className={styles.chatFaqAnswer}>
                  <p>
                    Yes! We have clients in India, USA, Australia and UAE. We
                    work across all time zones via WhatsApp, Zoom and email.
                  </p>
                </div>
              </div>

              <div className={`${styles.chatFaqItem} ${faqOpen['4'] ? styles.open : ''}`} onClick={() => setFaqOpen(prev => ({...prev, '4': !prev['4']}))}>
                <div className={styles.chatFaqBtn}>
                  How soon will I see results from ads?
                  <svg className={styles.chatFaqIcon}><use href="#ic-plus" /></svg>
                </div>
                <div className={styles.chatFaqAnswer}>
                  <p>
                    Most clients see first leads within 48–72 hours. ROAS
                    improvements typically show within 2–4 weeks.
                  </p>
                </div>
              </div>

              <div className={`${styles.chatFaqItem} ${faqOpen['5'] ? styles.open : ''}`} onClick={() => setFaqOpen(prev => ({...prev, '5': !prev['5']}))}>
                <div className={styles.chatFaqBtn}>
                  Do you offer ongoing support?
                  <svg className={styles.chatFaqIcon}><use href="#ic-plus" /></svg>
                </div>
                <div className={styles.chatFaqAnswer}>
                  <p>
                    Yes. All projects include support periods. We also offer
                    affordable monthly retainer plans for continuous management.
                  </p>
                </div>
              </div>

              <div className={styles.chatFaqDivider}></div>
            </div>

         
            {/* Dynamic messages after initial */}
            {messages.slice(1).map((m, i) => (
              <div
                key={`dynamic-${i}`}
                className={`${styles.chatMsg} ${
                  m.role === "user"
                    ? styles.user
                    : styles.chatMsgBot
                }`}
              >
                {m.text}
              </div>
            ))}
            
            {typing && (
              <div className={styles.chatTyping}>
                <span></span><span></span><span></span>
              </div>
            )}

          </div>

          {/* FOOTER */}
          <div className={styles.chatFooter}>
            <textarea
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your message..."
              rows="1"
            />

            <button className={styles.chatSend} onClick={sendChat}>
              <svg><use href="#ic-send" /></svg>
            </button>
          </div>

        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919987952982?text=Hi%20Prestigieux!%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waBtn}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.09-1.35C8.5 21.52 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.6-1.28 1.15-1.77 1.22-.45.06-.97.08-1.57-.1-.36-.11-.83-.26-1.43-.51-2.52-1.09-4.16-3.6-4.29-3.77-.12-.17-.99-1.32-.99-2.51 0-1.2.62-1.79.85-2.04.22-.25.48-.31.64-.31.16 0 .32 0 .46.01.15.01.35-.06.55.42.22.5.74 1.82.81 1.95.07.14.11.3.02.47-.09.17-.13.27-.26.42l-.38.43c-.13.13-.26.27-.11.52.15.25.65 1.07 1.39 1.73.95.85 1.76 1.11 2.01 1.24.25.12.4.1.54-.06.15-.17.62-.72.79-.97.17-.25.34-.21.57-.12.23.09 1.47.69 1.72.82.25.12.42.18.48.29.07.1.07.62-.15 1.22z"/>
        </svg>
      </a>
    </>
  );
}
