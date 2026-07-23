import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Title } from "@/components/title";
import { PricingTiers, type PricingTier } from "@/components/pricing-tiers";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { CallToAction } from "@/components/cta";
import { FullWidthDivider } from "@/components/full-width-divider";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, SITE, type Locale } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PricingPage" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: alternatesFor("/pricing", locale),
    openGraph: {
      type: "website",
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: { title: `${title} | ${SITE.name}`, description },
  };
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, common, tiers, faq] = await Promise.all([
    getTranslations({ locale, namespace: "PricingPage" }),
    getTranslations({ locale, namespace: "Common" }),
    getTranslations({ locale, namespace: "PricingTiers" }),
    getTranslations({ locale, namespace: "PricingFaq" }),
  ]);

  const tierItems = tiers.raw("items") as PricingTier[];
  const faqItems = faq.raw("items") as FaqItem[];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: common("breadcrumbHome"), url: SITE.url },
            { name: t("heading"), url: `${SITE.url}/pricing` },
          ]),
        ]}
      />
      <Title heading={t("heading")} description={t("subheading")} />

      <section className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
        <div className="mx-auto max-w-2xl space-y-3 px-4 py-8 text-center md:py-12">
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
            {t("howItWorksHeading")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("howItWorksBody")}
          </p>
        </div>
        <FullWidthDivider />
      </section>

      <section className="mb-12 lg:mb-24">
        <PricingTiers
          tiers={tierItems}
          ctaLabel={t("ctaLabel")}
          popularLabel={t("popularLabel")}
        />
        <p className="mx-auto mt-4 max-w-2xl px-4 text-center text-xs text-muted-foreground">
          {t("tiersDisclaimer")}
        </p>
      </section>

      <FaqSection
        heading={t("faqHeading")}
        subheading={t("faqSubheading")}
        items={faqItems}
      />
      <CallToAction />
    </>
  );
}
