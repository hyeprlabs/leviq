import { useLocale, useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import Link from "next/link";

export const metadata = {
  title: "Impressum | LevIQ",
  description: "Impressum und rechtliche Informationen",
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

export default function ImprintPage() {
  const locale = useLocale();
  const isGerman = locale === "de";
  const t = useTranslations("Legal.impressum");

  const toc = [
    { id: "tmg", label: t("toc.0.label") },
    { id: "contact", label: t("toc.1.label") },
    { id: "businessForm", label: t("toc.2.label") },
    { id: "vat", label: t("toc.3.label") },
    { id: "liability", label: t("toc.4.label") },
    { id: "links", label: t("toc.5.label") },
  ];

  return (
    <LegalPageLayout
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      toc={toc}
    >
      <div className="space-y-8">
        <Section id="tmg" title={t("tmgTitle") || t("toc.0.label")}>
          <div className="space-y-2">
            <p>
              <strong>{t("operator")}</strong>
              <br />
              {t("address")}
            </p>
          </div>
        </Section>

        <Section id="contact" title={t("toc.1.label")}>
          <div className="space-y-1 text-sm">
            <p>
              <strong>E-Mail:</strong>{" "}
              <a
                href={`mailto:${t("email")}`}
                className="hover:underline text-foreground"
              >
                {t("email")}
              </a>
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a
                href={`tel:${t("phone")}`}
                className="hover:underline text-foreground"
              >
                {t("phone")}
              </a>
            </p>
          </div>
        </Section>

        <Section id="businessForm" title={t("businessFormTitle")}>
          <p>{t("businessFormText")}</p>
        </Section>

        <Section id="vat" title={t("vatTitle")}>
          <p>{t("vatText")}</p>
        </Section>

        <Section id="liability" title={t("liabilityTitle")}>
          <p>{t("liabilityText")}</p>
        </Section>

        <Section id="links" title={t("linksTitle")}>
          <p>{t("linksText")}</p>
        </Section>

        <Section title={t("copyrightTitle")}>
          <p>{t("copyrightText")}</p>
        </Section>

        <Section title={t("disclaimerTitle")}>
          <p>{t("disclaimerText")}</p>
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
