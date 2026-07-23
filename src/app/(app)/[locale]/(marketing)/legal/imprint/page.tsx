import { useTranslations } from "next-intl";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben gemäß § 5 TMG",
};

export default function ImprintPage() {
  const t = useTranslations("Legal.impressum");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <LegalSection title={t("section1Title")}>
        <p className="text-foreground">
          {t("operator")}
          <br />
          {t("addressLine1")}
          <br />
          {t("addressLine2")}
          <br />
          {t("addressLine3")}
        </p>
      </LegalSection>

      <LegalSection title={t("contactTitle")}>
        <p>
          {t("phoneLabel")}:{" "}
          <a href={`tel:${t("phone")}`} className="text-foreground hover:underline">
            {t("phone")}
          </a>
          <br />
          {t("emailLabel")}:{" "}
          <a
            href={`mailto:${t("email")}`}
            className="text-foreground hover:underline"
          >
            {t("email")}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("vatTitle")}>
        <p>{t("vatText")}</p>
      </LegalSection>

      <LegalSection title={t("editorialTitle")}>
        <p>{t("editorialText")}</p>
      </LegalSection>

      <LegalSection title={t("disputeTitle")}>
        <p>{t("disputeText")}</p>
      </LegalSection>

      <LegalSection title={t("liabilityContentTitle")}>
        <p>{t("liabilityContentText")}</p>
      </LegalSection>

      <LegalSection title={t("liabilityLinksTitle")}>
        <p>{t("liabilityLinksText")}</p>
      </LegalSection>

      <LegalSection title={t("copyrightTitle")}>
        <p>{t("copyrightText")}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
