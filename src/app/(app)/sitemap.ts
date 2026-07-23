import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { routing } from "@/i18n/routing";
import { localizedUrl, type Locale } from "@/lib/seo";

/**
 * Localized sitemap.
 *
 * Every public route is emitted once (keyed on the default-locale URL) with
 * `hreflang` alternates for each locale, so search engines discover the German
 * and English variants together. Blog posts are pulled from Payload; if the
 * database is unreachable at build time the static routes are still emitted.
 */

// Refresh at most hourly so newly published posts appear without a redeploy.
export const revalidate = 3600;

type Frequency = MetadataRoute.Sitemap[number]["changeFrequency"];

function entry(
  internalPath: string,
  {
    lastModified = new Date(),
    changeFrequency,
    priority,
  }: {
    lastModified?: Date;
    changeFrequency?: Frequency;
    priority?: number;
  },
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedUrl(internalPath, locale as Locale);
  }

  return {
    url: localizedUrl(internalPath, routing.defaultLocale),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/services", { changeFrequency: "monthly", priority: 0.9 }),
    entry("/pricing", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/about", { changeFrequency: "monthly", priority: 0.7 }),
    entry("/blog", { changeFrequency: "daily", priority: 0.8 }),
    entry("/legal/imprint", { changeFrequency: "yearly", priority: 0.3 }),
    entry("/legal/privacy-policy", {
      changeFrequency: "yearly",
      priority: 0.3,
    }),
    entry("/legal/terms-of-service", {
      changeFrequency: "yearly",
      priority: 0.3,
    }),
  ];

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      limit: 1000,
      depth: 0,
      sort: "-updatedAt",
    });

    postRoutes = docs
      .filter((post) => post.slug)
      .map((post) =>
        entry(`/blog/${post.slug}`, {
          lastModified: new Date(post.updatedAt || post.createdAt),
          changeFrequency: "monthly",
          priority: 0.6,
        }),
      );
  } catch {
    // Database unavailable (e.g. offline build) — ship static routes only.
    postRoutes = [];
  }

  return [...staticRoutes, ...postRoutes];
}
