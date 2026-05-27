import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "PerplexityBot", "Applebot-Extended"],
                allow: "/",
            },
        ],
        sitemap: "https://rakrilabs.ai/sitemap.xml",
    };
}
