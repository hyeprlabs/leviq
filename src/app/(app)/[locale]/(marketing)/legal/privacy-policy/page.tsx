import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { alternatesFor, type Locale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.privacy" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: alternatesFor("/legal/privacy-policy", locale as Locale),
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

export default function PrivacyPage() {
  const t = useTranslations("Legal.privacy");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <div className="space-y-3 px-4 py-8 md:px-8 md:py-10 text-muted-foreground text-sm leading-relaxed">
        <p>{t("intro")}</p>
      </div>

      <LegalSection title={t("controllerTitle")}>
        <p>{t("controllerText")}</p>
      </LegalSection>

      <LegalSection title={t("scopeTitle")}>
        <p>{t("scopeIntro")}</p>
        <List items={t.raw("scopeItems")} />
      </LegalSection>

      <LegalSection title={t("legalTitle")}>
        <p>{t("legalIntro")}</p>
        <List items={t.raw("legalItems")} />
      </LegalSection>

      <LegalSection title={t("processorsTitle")}>
        <p>{t("processorsIntro")}</p>
        <List items={t.raw("processorsItems")} />
      </LegalSection>

      <LegalSection title={t("cookiesTitle")}>
        <p>{t("cookiesIntro")}</p>
        <List items={t.raw("cookieTypes")} />
        <p>{t("cookiesOutro")}</p>
      </LegalSection>

      <LegalSection title={t("retentionTitle")}>
        <p>{t("retentionIntro")}</p>
        <List items={t.raw("retentionItems")} />
      </LegalSection>

      <LegalSection title={t("rightsTitle")}>
        <p>{t("rightsIntro")}</p>
        <List items={t.raw("rightsItems")} />
        <p>{t("rightsOutro")}</p>
      </LegalSection>

      <LegalSection title={t("transfersTitle")}>
        <p>{t("transfersText")}</p>
      </LegalSection>

      <LegalSection title={t("securityTitle")}>
        <p>{t("securityText")}</p>
      </LegalSection>

      <LegalSection title={t("changesTitle")}>
        <p>{t("changesText")}</p>
      </LegalSection>

      <LegalSection title={t("contactTitle")}>
        <p>{t("contactText")}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
