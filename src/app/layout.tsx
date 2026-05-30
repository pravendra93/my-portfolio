import type { Metadata } from "next";
import Script from "next/script";

import { Inter, Manrope } from "next/font/google"; // Using Manrope as it's closer to the "Studio" aesthetic often used
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
    title: "RakriLabs.ai — AI Execution Infrastructure for B2B SaaS",
    description: "RakriLabs.ai designs and deploys custom autonomous AI systems, MVPs, and intelligent agent workflows to compress B2B SaaS execution cycles.",
    keywords: [
        "AI MVP development",
        "Autonomous AI Agents",
        "B2B SaaS development",
        "AI Workflow Automation",
        "Next.js AI template",
        "RakriLabs",
        "RakriLabs.ai",
        "AI engineering studio"
    ],
    authors: [{ name: "RakriLabs Team", url: "https://rakrilabs.ai" }],
    alternates: {
        canonical: "https://rakrilabs.ai",
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
        url: "https://rakrilabs.ai",
        title: "RakriLabs.ai — AI Execution Infrastructure for B2B SaaS",
        description: "Scale your B2B SaaS with production-ready autonomous AI agents and accelerated MVP development. No fluff, just engineering leverage.",
        siteName: "RakriLabs.ai",
        images: [
            {
                url: "https://rakrilabs.ai/logo.png",
                width: 1200,
                height: 630,
                alt: "RakriLabs.ai — AI Execution Systems",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RakriLabs.ai — AI Execution Infrastructure for B2B SaaS",
        description: "Scale your B2B SaaS with production-ready autonomous AI agents and accelerated MVP development.",
        images: ["https://rakrilabs.ai/logo.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.png",
    },
    alternates: {
        canonical: "https://rakrilabs.com",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://rakrilabs.ai/#organization",
            "name": "RakriLabs.ai",
            "url": "https://rakrilabs.ai",
            "logo": "https://rakrilabs.ai/logo.png",
            "sameAs": [
                "https://twitter.com/rakrilabs",
                "https://github.com/rakrilabs"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://rakrilabs.ai/#website",
            "url": "https://rakrilabs.ai",
            "name": "RakriLabs.ai",
            "description": "AI Execution Infrastructure for Modern B2B SaaS",
            "publisher": {
                "@id": "https://rakrilabs.ai/#organization"
            }
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://rakrilabs.ai/#service",
            "name": "RakriLabs.ai",
            "url": "https://rakrilabs.ai",
            "telephone": "",
            "priceRange": "$$$$",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
            },
            "image": "https://rakrilabs.ai/logo.png",
            "description": "Custom autonomous AI agent system design, scalable SaaS MVP development, and workflow automation orchestration."
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            </head>
            <body className={cn(inter.variable, manrope.variable, "font-sans antialiased min-h-screen relative")}>
                <div className="vignette-glow" />
                {children}
                <Script
                    src="https://assistra-widget-stage.sgp1.cdn.digitaloceanspaces.com/widget/loader.js"
                    data-api-key="sk_live_OOdumK0XBDXLmb3AgZa-UZgQDjEkH-dI"
                    strategy="lazyOnload"
                />
                {true && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=G-QQ0370P8WG`}
                            strategy="lazyOnload"
                        />
                        <Script id="google-analytics" strategy="lazyOnload">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-QQ0370P8WG');
                            `}
                        </Script>
                    </>
                )}

            </body>
        </html>
    );
}
