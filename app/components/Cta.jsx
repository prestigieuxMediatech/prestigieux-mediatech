export default function Cta() {
  const openFunnel = () => {
    window.openFunnel?.();
  };

  return (
    <>
      {/* CTA */}
      <div className="section">
        <div className="section-inner">
          <div className="cta-block reveal">
            <h2>Ready to Grow Your Brand?</h2>
            <p>
              Get a free personalised growth strategy. No commitment. Takes 60 seconds.
            </p>

            <div className="cta-actions">
              <button className="btn-primary" onClick={openFunnel}>
                <svg width="15" height="15">
                  <use href="#ic-target" />
                </svg>
                Get Free Strategy Now
              </button>

              <a
                href="https://wa.me/919987952982"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="15" height="15">
                  <use href="#ic-chat" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .section {
          padding: 5rem clamp(1.2rem, 5vw, 4rem);
        }

        .section-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .section-alt {
          background: var(--ink2);
        }

        :global([data-theme="light"]) .section-alt {
          background: var(--ink3);
        }

        .cta-block {
          border: 1px solid var(--line);
          border-radius: var(--r);
          padding: 4.5rem 3rem;
          text-align: center;
          background: var(--surface);
          position: relative;
          overflow: hidden;
          margin: 3rem 0;
        }

        .cta-block::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 150%,
            rgba(200, 169, 110, 0.1),
            transparent 70%
          );
        }

        .cta-block h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          position: relative;
          z-index: 1;
          margin-bottom: 0.8rem;
        }

        .cta-block p {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  );
}