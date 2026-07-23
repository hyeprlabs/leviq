import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/**
 * Web App Manifest — lets browsers install LevIQ as a PWA and provides the
 * name, theme colours and icons used across mobile and desktop surfaces.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — KI-Chatbots, SEO & digitale Automatisierung`,
    short_name: SITE.name,
    description:
      "LevIQ entwickelt KI-Chatbots, SEO/GEO-Optimierung und digitale Automatisierung für den Mittelstand.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: SITE.themeColor.dark,
    theme_color: SITE.themeColor.dark,
    lang: "de",
    dir: "ltr",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
