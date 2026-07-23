import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { DifferentiatorsSection } from "@/components/differentiators-section";
import { FaqSection } from "@/components/faq-section";
import { CallToAction } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, SITE, type Locale } from "@/lib/seo";
import {
  faqSchema,
  serviceCatalogSchema,
  type FaqItem,
  type ServiceItem,
} from "@/lib/structured-data";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("homeTitle");
  const description = t("homeDescription");

  return {
    title,
    description,
    alternates: alternatesFor("/", locale),
    openGraph: { title: `${SITE.name} — ${title}`, description },
    twitter: { title: `${SITE.name} — ${title}`, description },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [faq, services] = await Promise.all([
    getTranslations({ locale, namespace: "Faq" }),
    getTranslations({ locale, namespace: "Services" }),
  ]);

  const faqItems = faq.raw("items") as FaqItem[];
  const serviceItems = services.raw("items") as ServiceItem[];

  return (
    <>
      <JsonLd
        data={[
          serviceCatalogSchema(services("catalogName"), serviceItems),
          faqSchema(faqItems),
        ]}
      />
      <HeroSection />
      <TrustSection />
      <DifferentiatorsSection />
      <FaqSection />
      <CallToAction />
    </>
  );
}
