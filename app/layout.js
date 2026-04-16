import "./globals-full.css";
import Script from "next/script";
import { ThemeProvider } from "./contexts/ThemeContext";
import ChatWidget from "./components/Chatwidget";
import Funnel from "./components/Funnel";

export const metadata = {
  title: "ROI-Driven Digital Marketing Agency in Kharghar & Navi Mumbai",
  tag: "Best Digital Marketing Agency in Kharghar & Navi Mumbai",
  description:
    "Digital Marketing & development company in Kharghar & Navi Mumbai offers Branding Designs, Digital Marketking Web Development & Consulting Services.",
  keywords:
    "digital marketing agency mumbai, seo services navi mumbai, web development, branding agency, social media marketing",
  openGraph: {
    title: "Prestigieux Mediatech",
    description:
      "ROI-driven digital marketing & web development company in Navi Mumbai.",
    url: "https://yourdomain.com",
    siteName: "Prestigieux Mediatech",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `}
        </Script>
      </head>

      <body suppressHydrationWarning>

        {/* SVG SPRITE */}
        <svg style={{ display: "none" }}>
          <symbol
            id="ic-chat"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </symbol>

          <symbol
            id="ic-send"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22 11 13 2 9z" />
          </symbol>

          <symbol
            id="ic-target"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </symbol>

          <symbol
            id="ic-arrow-r"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </symbol>

          <symbol
            id="ic-phone"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.62a2 2 0 0 1-.45 2.11L8.04 9.73a16 16 0 0 0 6.23 6.23l1.28-1.28a2 2 0 0 1 2.11-.45c.84.32 1.72.54 2.62.66A2 2 0 0 1 22 16.92Z" />
          </symbol>

          <symbol
            id="ic-mail"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
            <path d="m22 6-10 7L2 6" />
          </symbol>
        </svg>

        <ThemeProvider>
          {children}
          <Funnel />
          <ChatWidget />
        </ThemeProvider>

      </body>
    </html>
  );
}
