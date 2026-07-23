import { useLocale, useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Widerrufsbelehrung | LevIQ",
  description: "Informationen zu Widerrufs- und Kündigungsrechten",
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

export default function WithdrawalPage() {
  const locale = useLocale();
  const isGerman = locale === "de";
  const t = useTranslations("Legal.withdrawal");

  const toc = [
    { id: "noConsumer", label: t("toc.0.label") },
    { id: "termination", label: t("toc.1.label") },
    { id: "payments", label: t("toc.2.label") },
    { id: "stripe", label: t("toc.3.label") },
    { id: "contact", label: t("toc.4.label") },
  ];

  return (
    <LegalPageLayout
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      toc={toc}
    >
      <div className="space-y-8">
        {/* Notice Banner */}
        <div className="border-l-2 border-border pl-4 py-3 bg-card/50">
          <p className="font-semibold text-sm mb-2">{t("notice")}</p>
          <p className="text-sm text-muted-foreground">{t("noticeDetail")}</p>
        </div>

        <Section id="noConsumer" title={t("noConsumerTitle")}>
          <p>{t("noConsumerText")}</p>
        </Section>

        <Section id="termination" title={t("terminationTitle")}>
          <p className="mb-3">{t("terminationText")}</p>
          <ul className="space-y-1 list-disc pl-5">
            {[0, 1, 2].map((i) => (
              <li key={i}>{t(`terminationItems.${i}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="payments" title={t("paymentsTitle")}>
          <p>{t("paymentsText")}</p>
        </Section>

        <Section id="stripe" title={t("stripeTitle")}>
          <p>{t("stripeText")}</p>
        </Section>

        <Section id="contact" title={t("contactTitle")}>
          <p>{t("contactText")}</p>
        </Section>
      </div>
    </LegalPageLayout>
  );
}
