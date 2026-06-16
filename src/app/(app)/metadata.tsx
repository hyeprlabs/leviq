import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://leviq.de"),
  applicationName: "LevIQ",
  title: {
    template: "%s | LevIQ",
    default: "LevIQ",
  },
  description: "LevIQ",
  alternates: {
    canonical: "https://leviq.de",
    languages: {
      de: "https://leviq.de",
      en: "https://leviq.de/en",
    },
  },
  keywords: ["LevIQ", "leviq", "leviq.de", "leviq.com"],
  creator: "LevIQ Team",
  publisher: "LevIQ",
  openGraph: {
    type: "website",
    url: "https://leviq.de",
    title: "LevIQ",
    description: "LevIQ",
    siteName: "LevIQ",
  },
};
