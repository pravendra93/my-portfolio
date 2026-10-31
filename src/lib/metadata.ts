import type { Metadata } from "next";
import { siteConfig, SITE_URL } from "@/content/site";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/logo.png",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "AI Engineering Studio",
      "Autonomous AI Agents",
      "B2B SaaS AI MVPs",
      "RAG Systems",
      "Enterprise Automation",
      "30-day MVP Sprint",
      siteConfig.name,
      ...keywords,
    ],
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    alternates: {
      canonical: url,
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
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — AI Engineering Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalEntity,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
    },
    description: "AI engineering studio designing and deploying custom autonomous agent workflows, enterprise RAG systems, and 30-day SaaS MVPs for global B2B teams.",
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: siteConfig.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
    },
    areaServed: ["US", "CA", "GB", "DE", "FR", "AE", "SA", "AU", "NZ"],
    description: "Custom AI agent development, enterprise RAG architectures, and 30-day production MVP sprints for B2B SaaS and enterprise engineering teams.",
  };
}
