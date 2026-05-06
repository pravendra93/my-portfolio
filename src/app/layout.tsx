import type { Metadata } from "next";
import Script from "next/script";

import { Inter, Manrope } from "next/font/google"; // Using Manrope as it's closer to the "Studio" aesthetic often used
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
    title: "RakriLabs.ai — Tech Partner for Startups",
    description: "RakriLabs.ai specializes in building clean MVPs and scaling high-performance products for early-stage founders.",
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.png",
    },
};
console.log("GTM ID in Browser:", '${process.env.NEXT_PUBLIC_GTM_ID}');
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, manrope.variable, "font-sans antialiased min-h-screen relative")}>
                <div className="vignette-glow" />
                {children}
                <Script
                    src="https://assistra-widget-stage.sgp1.cdn.digitaloceanspaces.com/widget/loader.js"
                    data-api-key="sk_live_OOdumK0XBDXLmb3AgZa-UZgQDjEkH-dI"
                    strategy="afterInteractive"
                />
                {(
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                console.log("process.env.NEXT_PUBLIC_GTM_ID =>>>", process.env.NEXT_PUBLIC_GTM_ID)
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
                            `}
                        </Script>
                    </>
                )}

            </body>
        </html>
    );
}
