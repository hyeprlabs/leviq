import { useLocale, useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import Link from "next/link";

export const metadata = {
  title: "AGB | LevIQ",
  description: "Allgemeine Geschäftsbedingungen und Servicebedingungen",
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  const locale = useLocale();
  const isGerman = locale === "de";
  const t = useTranslations("Legal.terms");

  const toc = [
    { id: "scope", label: t("toc.0.label") },
    { id: "services", label: t("toc.1.label") },
    { id: "pricing", label: t("toc.2.label") },
    { id: "term", label: t("toc.3.label") },
    { id: "performance", label: t("toc.4.label") },
    { id: "ip", label: t("toc.5.label") },
    { id: "liability", label: t("toc.6.label") },
    { id: "law", label: t("toc.7.label") },
  ];

  return (
    <LegalPageLayout
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      toc={toc}
    >
      <div className="space-y-8">
        <Section id="scope" title={t("scopeTitle")}>
          <p>{t("scopeText")}</p>
        </Section>

        <Section id="services" title={t("servicesTitle")}>
          <p className="mb-3">{t("servicesText")}</p>
          <ul className="space-y-1 list-disc pl-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i}>{t(`servicesItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="pricing" title={t("pricingTitle")}>
          <p className="mb-3">{t("pricingIntro")}</p>
          <ul className="space-y-2 list-disc pl-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i}>{t(`pricingItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="term" title={t("termTitle")}>
          <ul className="space-y-2 list-disc pl-5">
            {[0, 1, 2, 3].map((i) => (
              <li key={i}>{t(`termItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="performance" title={t("performanceTitle")}>
          <p>{t("performanceText")}</p>
        </Section>

        <Section id="ip" title={t("ipTitle")}>
          <ul className="space-y-1 list-disc pl-5">
            {[0, 1, 2].map((i) => (
              <li key={i}>{t(`ipItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="liability" title={t("liabilityTitle")}>
          <ul className="space-y-1 list-disc pl-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i}>{t(`liabilityItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="law" title={t("lawTitle")}>
          <p>{t("lawText")}</p>
        </Section>

        <div className="border-t pt-8 mt-8">
          <p className="text-sm text-muted-foreground">
            {isGerman ? "Siehe auch: " : "See also: "}
            <Link
              href="/legal/privacy"
              className="underline hover:no-underline"
            >
              {isGerman ? "Datenschutzerklärung" : "Privacy Policy"}
            </Link>
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
