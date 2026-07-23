import { useTranslations } from "next-intl";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Hinweis zum Widerrufsrecht | LevIQ",
  description: "Informationen zum Widerrufs- und Kündigungsrecht für Geschäftskunden",
};

export default function WithdrawalPage() {
  const t = useTranslations("Legal.withdrawal");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <LegalSection title={t("noticeTitle")}>
        <p>{t("noticeText")}</p>
      </LegalSection>

      <LegalSection title={t("terminationTitle")}>
        <p>{t("terminationText")}</p>
      </LegalSection>

      <LegalSection title={t("extraordinaryTitle")}>
        <p>{t("extraordinaryText")}</p>
      </LegalSection>

      <LegalSection title={t("paymentTitle")}>
        <p>{t("paymentText")}</p>
      </LegalSection>

      <LegalSection title={t("contactTitle")}>
        <p>{t("contactText")}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
