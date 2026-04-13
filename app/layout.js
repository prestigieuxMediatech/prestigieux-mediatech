import "./globals-full.css";
import Script from "next/script";
import { ThemeProvider } from "./contexts/ThemeContext";
import ChatWidget from "./components/Chatwidget";
import Funnel from "./components/Funnel";

export const metadata = {
  title: "ROI-Driven Digital Marketing Agency in Kharghar & Navi Mumbai",
  description:
    "Best Digital Marketing Agency in Kharghar & Navi Mumbai offering SEO, PPC, Social Media Marketing, Branding, UI/UX Design & Web Development services.",
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
