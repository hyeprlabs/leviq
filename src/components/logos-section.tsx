import { getTranslations } from "next-intl/server";
import { LogoCloud } from "@/components/logo-cloud"; // @efferd/logo-cloud-2
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

export async function LogosSection() {
  const t = await getTranslations("Logos");

  return (
    <section className="mb-12 lg:mb-24">
      <h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        {t("trustedByLead")}{" "}
        <span className="text-foreground">{t("trustedByHighlight")}</span>
      </h2>
      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />
        <LogoCloud />
        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
