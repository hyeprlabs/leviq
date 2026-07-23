import { getTranslations } from "next-intl/server";
import { TrustBar } from "@/components/trust-bar";

export async function TrustSection() {
  const t = await getTranslations("Trust");

  return (
    <section className="mb-12 lg:mb-24">
      <h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        {t("heading")}
      </h2>
      <TrustBar />
    </section>
  );
}
