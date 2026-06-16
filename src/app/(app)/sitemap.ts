import type { MetadataRoute } from "next";

// Sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leviq.de",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://leviq.de/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
