export interface SiteConfig {
  name: string;
  legalEntity: string;
  domain: string;
  url: string;
  email: string;
  contactEmail: string;
  location: string;
  registeredOffice: string;
  timezone: string;
  workingHoursNote: string;
  bookingUrl: string;
  demo: {
    url: string;
    isPublic: boolean;
    label: string;
  };
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rakrilabs.com";

export const siteConfig: SiteConfig = {
  name: "RakriLabs",
  legalEntity: "RakriLabs Technologies",
  domain: "rakrilabs.com",
  url: SITE_URL,
  email: "founder@rakrilabs.com",
  contactEmail: "founder@rakrilabs.com",
  location: "Remote / Noida, India (Serving Global B2B SaaS)",
  registeredOffice: "Noida, Uttar Pradesh, India",
  timezone: "Asia/Kolkata (IST)",
  workingHoursNote: "Guaranteed 4-5 hours daily working overlap with North America (EST/PST morning), full overlap with Europe/UK (GMT/CET) and Middle East/Gulf (GST), and same-day async coverage for Australia/NZ (AEST).",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "https://rakrilabs.zohobookings.in/#/421636000000040050",
  demo: {
    url: "",
    isPublic: false,
    label: "Assistra · Coming Soon",
  },
  socials: {
    github: "https://github.com/rakrilabs",
    linkedin: "https://www.linkedin.com/company/rakrilabs",
    twitter: "https://twitter.com/rakrilabs",
  },
};
