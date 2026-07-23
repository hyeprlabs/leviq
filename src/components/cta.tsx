import { getTranslations } from "next-intl/server";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Button } from "@/components/ui/button";
import { CalEmbed } from "@/components/cal-embed";
import { ArrowRight } from "lucide-react";
import { ORGANIZATION } from "@/lib/seo";

export async function CallToAction() {
  const t = await getTranslations("Cta");

  return (
    <section className="mb-12 lg:mb-24 relative mx-auto flex w-full max-w-4xl flex-col justify-between dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
      <FullWidthDivider className="-top-px" />
      <div className="border-b px-2 py-8">
        <h2 className="font-heading text-center text-lg md:text-2xl">
          {t("heading")}
        </h2>
        <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
          {t("description")}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
        <Button asChild variant="outline">
          <a href={`mailto:${ORGANIZATION.email}`}>{t("secondary")}</a>
        </Button>
        <CalEmbed>
          <Button>
            {t("primary")}
            <ArrowRight />
          </Button>
        </CalEmbed>
      </div>
      <FullWidthDivider className="-bottom-px" />
    </section>
  );
}
