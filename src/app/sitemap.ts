import { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { assistraProduct } from "@/content/products/assistra";
import { nivoraHQProduct } from "@/content/products/nivorahq";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights/from-powerful-llms-to-intelligent-workflows`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  if (assistraProduct.published) {
    routes.push({
      url: `${SITE_URL}/products/assistra`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  if (nivoraHQProduct.published) {
    routes.push({
      url: `${SITE_URL}/products/nivorahq`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  const publishedCaseStudies = caseStudies.filter((cs) => cs.published);

  if (publishedCaseStudies.length > 0) {
    routes.push({
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    publishedCaseStudies.forEach((cs) => {
      routes.push({
        url: `${SITE_URL}/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  }

  routes.push(
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    }
  );

  return routes;
}
