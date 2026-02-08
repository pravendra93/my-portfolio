import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google"; // Using Manrope as it's closer to the "Studio" aesthetic often used
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
    title: "Pravendra Kumar — Senior Full Stack Engineer",
    description: "Portfolio of Pravendra Kumar, a Senior Full Stack Engineer specializing in Python, Node.js, and React.",
};

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
            </body>
        </html>
    );
}
