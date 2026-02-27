import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gs-medtech.com"),
  title: {
    default: "GS MedTech | Leading MedTech Recruitment Platform",
    template: "%s | GS MedTech",
  },
  description:
    "GS MedTech connects top medical technology professionals with leading MedTech companies across Europe. Explore specialized roles in R&D, Regulatory, Quality, and Sales.",
  keywords: [
    "MedTech recruitment",
    "medical device jobs",
    "regulatory affairs",
    "quality assurance",
    "biomedical engineering",
    "EU MDR",
    "healthcare careers",
  ],
  authors: [{ name: "GS MedTech" }],
  creator: "GS MedTech",
  publisher: "GS MedTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gs-medtech.com",
    siteName: "GS MedTech",
    title: "GS MedTech | Leading MedTech Recruitment Platform",
    description:
      "Connect with top MedTech talent and opportunities across Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GS MedTech | Leading MedTech Recruitment Platform",
    description:
      "Connect with top MedTech talent and opportunities across Europe.",
  },
  alternates: {
    canonical: "https://gs-medtech.com",
    languages: {
      "en-US": "https://gs-medtech.com",
      "de-DE": "https://gs-medtech.com/de",
    },
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GS MedTech",
    url: "https://gs-medtech.com",
    logo: "https://gs-medtech.com/logo.svg",
    description:
      "Leading MedTech recruitment platform connecting top medical technology professionals with industry-leading companies across Europe.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-892-010-021",
      contactType: "customer service",
      email: "office@gs-medtech.com",
      availableLanguage: ["English", "German"],
    },
    sameAs: [
      "https://linkedin.com/company/gs-medtech",
      "https://twitter.com/gsmedtech",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
