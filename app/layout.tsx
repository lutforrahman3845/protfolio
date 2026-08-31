import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CtaSection } from "@/components/cta-section";
import { SITE } from "@/lib/site";
import { jsonLdScript, siteJsonLd } from "@/lib/structured-data";
import { Fraunces, Poppins, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lutfor Rahman — Full-Stack Software Engineer",
    template: "%s — Lutfor Rahman",
  },
  description:
    "Full-stack software engineer building fast, scalable web apps with Next.js, React and Node.js. Available for freelance and full-time work, remote worldwide.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: SITE.locale,
    title: "Lutfor Rahman — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building fast, scalable web apps with Next.js, React and Node.js. Available for freelance and full-time work.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lutf0rRahman",
    title: "Lutfor Rahman — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building fast, scalable web apps with Next.js, React and Node.js. Available for freelance and full-time work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#EEEDE8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-fraunces custom-scrollbar">
        {children}
        <CtaSection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(siteJsonLd()) }}
        />
      </body>
    </html>
  );
}
