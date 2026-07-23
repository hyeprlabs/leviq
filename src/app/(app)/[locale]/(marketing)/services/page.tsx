import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Title } from "@/components/title";
import { SectionIntro } from "@/components/section-intro";
import {
  ServiceDetailGrid,
  type ServiceDetail,
} from "@/components/service-detail-grid";
import { IndustriesGrid } from "@/components/industries-grid";
import { ProcessSection } from "@/components/process-section";
import { FaqSection } from "@/components/faq-section";
import { CallToAction } from "@/components/cta";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, SITE, type Locale } from "@/lib/seo";
import { serviceCatalogSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: alternatesFor("/services", locale),
    openGraph: {
      type: "website",
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: { title: `${title} | ${SITE.name}`, description },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, common, services] = await Promise.all([
    getTranslations({ locale, namespace: "ServicesPage" }),
    getTranslations({ locale, namespace: "Common" }),
    getTranslations({ locale, namespace: "Services" }),
  ]);

  const serviceItems = services.raw("items") as ServiceDetail[];

  return (
    <>
      <JsonLd
        data={[
          serviceCatalogSchema(services("catalogName"), serviceItems),
          breadcrumbSchema([
            { name: common("breadcrumbHome"), url: SITE.url },
            { name: t("heading"), url: `${SITE.url}/services` },
          ]),
        ]}
      />
      <Title heading={t("heading")} description={t("subheading")} />

      <section className="mb-12 lg:mb-24">
        <ServiceDetailGrid
          items={serviceItems}
          featuresLabel={t("featuresLabel")}
        />
      </section>

      <section className="mb-12 lg:mb-24" aria-labelledby="industries-heading">
        <SectionIntro
          id="industries-heading"
          heading={t("industriesHeading")}
          subheading={t("industriesSubheading")}
        />
        <div className="relative *:border-0">
          <DecorIcon className="size-4" position="top-left" />
          <DecorIcon className="size-4" position="top-right" />
          <DecorIcon className="size-4" position="bottom-left" />
          <DecorIcon className="size-4" position="bottom-right" />

          <FullWidthDivider className="-top-px" />
          <IndustriesGrid />
          <FullWidthDivider className="-bottom-px" />
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <CallToAction />
    </>
  );
}
