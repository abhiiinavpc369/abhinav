import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import AvailabilityBadge from "@/components/layout/AvailabilityBadge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title} | Portfolio`,
  description: `Professional portfolio of ${personalInfo.name}, a ${personalInfo.title} from ${personalInfo.location}. Building quality solutions through dedicated web development.`,
  keywords: [
    "full stack developer",
    "web developer",
    "portfolio",
    "software engineer",
    "professional developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MERN stack",
    "Abhinav",
    "Tyson",
    "India",
    "student developer",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourusername.github.io/portfolio/",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Professional portfolio showcasing quality work, trust, and long-term collaboration.",
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Professional portfolio showcasing quality work, trust, and long-term collaboration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark no-effects">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased relative`}
      >
        {/* Background layers */}
        <div className="app-bg" aria-hidden>
          <div className="layer-radials"></div>
          <div className="layer-grid"></div>
          <div className="layer-vignette"></div>
        </div>

        {children}
        <AvailabilityBadge />

        {/* Remove first-paint no-effects once mounted to improve LCP without losing visuals */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(){
            var onReady = function(){
              document.documentElement.classList.remove('no-effects');
            };
            if (document.readyState === 'complete' || document.readyState === 'interactive') { onReady(); }
            else { document.addEventListener('DOMContentLoaded', onReady); }
          })();
        ` }} />
      </body>
    </html>
  );
}
