import {
  SITE,
  ORGANIZATION,
  absoluteUrl,
  localizedUrl,
  type Locale,
} from "@/lib/seo";

/**
 * Schema.org (JSON-LD) builders.
 *
 * Structured data is the single highest-leverage lever for AEO/GEO: it is how
 * Google's AI Overviews, ChatGPT, Perplexity, Claude and other answer engines
 * reliably extract *who* LevIQ is, *what* it offers and *how* to reach it.
 * Every builder returns a plain object ready to be serialized by `<JsonLd />`.
 */

type Json = Record<string, unknown>;

/** Stable @id anchors so entities can reference one another across the graph. */
const ID = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
} as const;

/**
 * The core entity: a professional services provider (LocalBusiness subtype).
 * Doubles as `Organization` so it satisfies both local-search and
 * brand-knowledge-panel expectations.
 */
export function organizationSchema(description: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ID.organization,
    name: SITE.name,
    legalName: ORGANIZATION.legalName,
    url: SITE.url,
    description,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    image: absoluteUrl("/opengraph-image"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
    founder: {
      "@type": "Person",
      name: ORGANIZATION.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANIZATION.address.street,
      postalCode: ORGANIZATION.address.postalCode,
      addressLocality: ORGANIZATION.address.city,
      addressRegion: ORGANIZATION.address.region,
      addressCountry: ORGANIZATION.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORGANIZATION.geo.latitude,
      longitude: ORGANIZATION.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      { "@type": "Country", name: "Österreich" },
      { "@type": "Country", name: "Schweiz" },
    ],
    knowsLanguage: ["de", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.phone,
      availableLanguage: ["German", "English"],
    },
    ...(ORGANIZATION.sameAs.length ? { sameAs: ORGANIZATION.sameAs } : {}),
  };
}

/** The site itself, linked back to the publishing organization. */
export function websiteSchema(description: string, locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ID.website,
    name: SITE.name,
    url: SITE.url,
    description,
    inLanguage: locale,
    publisher: { "@id": ID.organization },
  };
}

export type ServiceItem = { name: string; description: string };

/**
 * The catalogue of offerings, expressed as an `OfferCatalog` hung off the
 * organization. Gives answer engines a crisp, machine-readable list of what
 * LevIQ actually sells.
 */
export function serviceCatalogSchema(
  catalogName: string,
  services: ServiceItem[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: catalogName,
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ID.organization },
      },
    })),
  };
}

export type FaqItem = { question: string; answer: string };

/** FAQ rich-result + a prime AEO/GEO surface for conversational answers. */
export function faqSchema(items: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export type BlogPostingInput = {
  title: string;
  description?: string | null;
  slug: string;
  locale: Locale;
  datePublished?: string | null;
  dateModified?: string | null;
  authorName?: string | null;
  image?: string | null;
};

export function blogPostingSchema(post: BlogPostingInput): Json {
  const url = localizedUrl(`/blog/${post.slug}`, post.locale);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    ...(post.description ? { description: post.description } : {}),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: post.locale,
    image: post.image ?? absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    ...(post.datePublished ? { datePublished: post.datePublished } : {}),
    dateModified: post.dateModified ?? post.datePublished ?? undefined,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@id": ID.organization },
    publisher: { "@id": ID.organization },
    isPartOf: { "@id": ID.website },
  };
}

/** Collection page for the blog index. */
export function blogSchema(
  name: string,
  description: string,
  locale: Locale,
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${localizedUrl("/blog", locale)}#blog`,
    name,
    description,
    url: localizedUrl("/blog", locale),
    inLanguage: locale,
    publisher: { "@id": ID.organization },
  };
}
