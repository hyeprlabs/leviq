import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import {
  LegalPageLayout,
  LegalSection,
} from "@/components/legal/legal-page-layout";
import { alternatesFor, type Locale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.terms" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: alternatesFor("/legal/terms-of-service", locale as Locale),
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  const t = useTranslations("Legal.terms");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <LegalSection title={t("scopeTitle")}>
        <p>{t("scopeText")}</p>
      </LegalSection>

      <LegalSection title={t("servicesTitle")}>
        <p>{t("servicesIntro")}</p>
        <List items={t.raw("servicesItems")} />
        <p>{t("servicesOutro")}</p>
      </LegalSection>

      <LegalSection title={t("conclusionTitle")}>
        <p>{t("conclusionText")}</p>
      </LegalSection>

      <LegalSection title={t("pricingTitle")}>
        <p>{t("pricingIntro")}</p>
        <List items={t.raw("pricingItems")} />
      </LegalSection>

      <LegalSection title={t("termTitle")}>
        <List items={t.raw("termItems")} />
      </LegalSection>

      <LegalSection title={t("obligationsTitle")}>
        <p>{t("obligationsText")}</p>
      </LegalSection>

      <LegalSection title={t("ipTitle")}>
        <List items={t.raw("ipItems")} />
      </LegalSection>

      <LegalSection title={t("confidentialityTitle")}>
        <p>{t("confidentialityText")}</p>
      </LegalSection>

      <LegalSection title={t("dataProtectionTitle")}>
        <p>{t("dataProtectionText")}</p>
      </LegalSection>

      <LegalSection title={t("liabilityTitle")}>
        <p>{t("liabilityIntro")}</p>
        <List items={t.raw("liabilityItems")} />
      </LegalSection>

      <LegalSection title={t("warrantyTitle")}>
        <p>{t("warrantyText")}</p>
      </LegalSection>

      <LegalSection title={t("forceMajeureTitle")}>
        <p>{t("forceMajeureText")}</p>
      </LegalSection>

      <LegalSection title={t("finalTitle")}>
        <List items={t.raw("finalItems")} />
      </LegalSection>
    </LegalPageLayout>
  );
}
