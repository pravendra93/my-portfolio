import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig, SITE_URL } from "@/content/site";
import { getOrganizationSchema, getServiceSchema } from "@/lib/metadata";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});
const manrope = localFont({
  src: "./fonts/manrope-latin-variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RakriLabs — Production AI Agents, RAG Systems & 30-Day MVP Sprints",
    template: "%s | RakriLabs",
  },
  description: "RakriLabs is an AI engineering studio architecting custom autonomous agent workflows, enterprise RAG systems, and production 30-day SaaS MVPs for global B2B teams.",
  keywords: [
    "AI engineering studio",
    "Autonomous AI Agents",
    "B2B SaaS development",
    "RAG systems",
    "AI workflow automation",
    "30-day MVP sprint",
    "RakriLabs",
  ],
  authors: [{ name: "RakriLabs", url: SITE_URL }],
  creator: "RakriLabs",
  publisher: "RakriLabs",
  alternates: {
    canonical: SITE_URL,
  },
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
    url: SITE_URL,
    title: "RakriLabs — Production AI Agents, RAG Systems & 30-Day MVP Sprints",
    description: "Architecting custom autonomous agent workflows, enterprise RAG systems, and production 30-day SaaS MVPs for global B2B teams with guaranteed code ownership.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "RakriLabs — AI Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RakriLabs — Production AI Agents, RAG Systems & 30-Day MVP Sprints",
    description: "Architecting custom autonomous agent workflows, enterprise RAG systems, and production 30-day SaaS MVPs for global B2B teams.",
    images: [`${SITE_URL}/logo.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getServiceSchema(),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      description: "AI Engineering Studio for Modern B2B SaaS & Enterprise Teams",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      </head>
      <body className={cn(inter.variable, manrope.variable, "font-sans antialiased min-h-screen bg-[#050505] text-foreground relative selection:bg-brand-purple/30")}>
        <div className="vignette-glow" />
        {children}

        {/* Staging Widget (only loaded if key configured or stage domain) */}
        {process.env.NODE_ENV !== "production" &&
          process.env.NEXT_PUBLIC_ENABLE_WIDGET === "true" && (
          <Script
            src="https://assistra-widget-stage.sgp1.cdn.digitaloceanspaces.com/widget/loader.js"
            data-api-key="sk_live_OOdumK0XBDXLmb3AgZa-UZgQDjEkH-dI"
            strategy="lazyOnload"
          />
        )}

        {/* Configurable Analytics */}
        {gtmId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtmId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
