import { getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { SITE, ORGANIZATION, localizedUrl } from "@/lib/seo";
import { routing } from "@/i18n/routing";

/**
 * /llms.txt — a curated, machine-readable brief of LevIQ for AI agents and
 * answer engines (the emerging llms.txt convention, https://llmstxt.org).
 *
 * Written in English (the lingua franca of LLM reasoning) but pointing at the
 * site's canonical, localized URLs so answer engines can cite the right pages.
 */

export const revalidate = 3600;

type ServiceItem = { name: string; description: string };

export async function GET(): Promise<Response> {
  const meta = await getTranslations({ locale: "en", namespace: "Meta" });
  const services = await getTranslations({
    locale: "en",
    namespace: "Services",
  });
  const serviceItems = services.raw("items") as ServiceItem[];

  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${meta("siteDescription")}`);
  lines.push("");
  lines.push("## About");
  lines.push(`- Operator: ${ORGANIZATION.founder}`);
  lines.push(`- Location: ${ORGANIZATION.address.city} (near Munich), Germany`);
  lines.push(`- Email: ${ORGANIZATION.email}`);
  lines.push(`- Phone: ${ORGANIZATION.phone}`);
  lines.push(
    `- Languages: German (default, ${SITE.url}) and English (${localizedUrl("/", "en")})`,
  );
  lines.push("");

  lines.push("## Services");
  for (const service of serviceItems) {
    lines.push(`- ${service.name}: ${service.description}`);
  }
  lines.push("");

  lines.push("## Key pages");
  lines.push(`- [Home](${SITE.url}): ${meta("homeDescription")}`);
  lines.push(
    `- [Services](${localizedUrl("/services", routing.defaultLocale)}): Full breakdown of AI chatbot, SEO/GEO, strategy and automation services, by industry.`,
  );
  lines.push(
    `- [Pricing](${localizedUrl("/pricing", routing.defaultLocale)}): How the monthly-retainer pricing model works, illustrative packages, billing FAQ.`,
  );
  lines.push(
    `- [About](${localizedUrl("/about", routing.defaultLocale)}): Founder, mission and values behind LevIQ.`,
  );
  lines.push(
    `- [Blog](${localizedUrl("/blog", routing.defaultLocale)}): Articles on AI, SEO, GEO and digital automation.`,
  );
  lines.push(
    `- [Imprint](${localizedUrl("/legal/imprint", routing.defaultLocale)})`,
  );
  lines.push(
    `- [Privacy Policy](${localizedUrl("/legal/privacy-policy", routing.defaultLocale)})`,
  );
  lines.push(
    `- [Terms of Service](${localizedUrl("/legal/terms-of-service", routing.defaultLocale)})`,
  );
  lines.push("");

  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      sort: "-createdAt",
      limit: 100,
      depth: 0,
    });

    if (docs.length) {
      lines.push("## Blog posts");
      for (const post of docs) {
        if (!post.slug) continue;
        const url = localizedUrl(`/blog/${post.slug}`, routing.defaultLocale);
        const summary = post.excerpt ? `: ${post.excerpt}` : "";
        lines.push(`- [${post.title}](${url})${summary}`);
      }
      lines.push("");
    }
  } catch {
    // Database unavailable — omit the blog section.
  }

  lines.push("## Contact");
  lines.push(
    `Book a free strategy call or reach out at ${ORGANIZATION.email}.`,
  );
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
