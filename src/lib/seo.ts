import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Central SEO configuration — single source of truth for everything the
 * site advertises to search engines, social platforms and AI answer engines
 * (AEO/GEO). Keep brand facts here so metadata, structured data, the sitemap,
 * the manifest, OG images and llms.txt never drift apart.
 */

export type Locale = (typeof routing.locales)[number];

export const SITE = {
  name: "LevIQ",
  /** Canonical production origin, no trailing slash. */
  url: "https://leviq.de",
  /** Twitter/X handle if/when one exists. Left empty until claimed. */
  twitter: "",
  themeColor: {
    light: "#ffffff",
    dark: "#0a0a0a",
  },
} as const;

/** The human and legal entity behind LevIQ (from the Imprint). */
export const ORGANIZATION = {
  legalName: "Oskar Seeberger",
  founder: "Oskar Seeberger",
  email: "o.seeberger@outlook.com",
  phone: "+49 159 050 90 161",
  address: {
    street: "Adalbert-Stifter-Straße 5",
    postalCode: "82031",
    city: "Grünwald",
    region: "Bayern",
    country: "DE",
  },
  /** Grünwald, near Munich. */
  geo: { latitude: 48.0706, longitude: 11.5222 },
  /** Public profiles. Populate as they go live — feeds schema.org `sameAs`. */
  sameAs: [] as string[],
} as const;

/** Maps an app locale to a BCP-47 / Open Graph locale tag. */
export const OG_LOCALE: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
};

/** Absolute origin used by structured data, sitemap and OG image URLs. */
export const metadataBase = new URL(SITE.url);

/** Join a path onto the canonical origin, collapsing duplicate slashes. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return (
    `${SITE.url}/${path}`.replace(/(?<!:)\/{2,}/g, "/").replace(/\/$/, "") ||
    SITE.url
  );
}

/**
 * Resolve an internal (default-locale) pathname to its public, localized URL
 * path for a given locale — honouring both localized pathnames (e.g.
 * `/services` → `/leistungen`) and the `as-needed` locale prefix strategy.
 *
 * Deterministic and dependency-free so it can run inside `sitemap.ts`,
 * `generateMetadata` and route handlers alike.
 */
export function localizedPath(internalPath: string, locale: Locale): string {
  const pathnames = routing.pathnames as Record<
    string,
    string | Record<string, string>
  >;

  let path = internalPath;
  const entry = pathnames[internalPath];
  if (entry) {
    path = typeof entry === "string" ? entry : (entry[locale] ?? internalPath);
  }

  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const suffix = path === "/" ? "" : path;
  return `${prefix}${suffix}` || "/";
}

/** Fully-qualified public URL for an internal pathname in a given locale. */
export function localizedUrl(internalPath: string, locale: Locale): string {
  return absoluteUrl(localizedPath(internalPath, locale));
}

/**
 * Build the `alternates` block (canonical + hreflang) for a page.
 * Emits one entry per locale plus an `x-default` pointing at the default
 * locale, exactly as Google recommends for international targeting.
 */
export function alternatesFor(
  internalPath: string,
  currentLocale: Locale,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedUrl(internalPath, locale);
  }
  languages["x-default"] = localizedUrl(internalPath, routing.defaultLocale);

  return {
    canonical: localizedUrl(internalPath, currentLocale),
    languages,
  };
}
