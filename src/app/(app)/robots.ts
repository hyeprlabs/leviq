import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/seo";

/**
 * robots.txt
 *
 * Search crawlers get full access to public content and are steered to the
 * sitemap. Named AI crawlers (the engines behind AEO/GEO) are allowed
 * explicitly so LevIQ can be read, cited and recommended by AI answer engines
 * — while admin/API surfaces stay closed to everyone.
 */

const AI_CRAWLERS = [
  "GPTBot", // OpenAI (training + browsing)
  "OAI-SearchBot", // OpenAI SearchGPT
  "ChatGPT-User", // ChatGPT browsing on behalf of users
  "ClaudeBot", // Anthropic
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bytespider",
  "CCBot", // Common Crawl (feeds many LLMs)
  "cohere-ai",
  "DuckAssistBot",
  "meta-externalagent",
  "YouBot",
];

const DISALLOWED = ["/admin", "/admin/", "/api/", "/_next/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED,
      },
      // Explicitly welcome AI answer engines to public content (AEO/GEO).
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: DISALLOWED,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
