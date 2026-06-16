import type { MetadataRoute } from "next";

// Robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://leviq.de/sitemap.xml",
  };
}
