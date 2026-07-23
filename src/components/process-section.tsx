import { getTranslations } from "next-intl/server";
import { SectionIntro } from "@/components/section-intro";
import { FeatureGrid, type FeatureGridItem } from "@/components/feature-grid";

type Step = { number: string; title: string; description: string };

export async function ProcessSection() {
  const t = await getTranslations("Process");
  const steps = t.raw("steps") as Step[];

  const gridItems: FeatureGridItem[] = steps.map((step) => ({
    mark: (
      <span className="font-mono text-xs text-muted-foreground">
        {step.number}
      </span>
    ),
    title: step.title,
    description: step.description,
  }));

  return (
    <section className="mb-12 lg:mb-24" aria-labelledby="process-heading">
      <SectionIntro
        id="process-heading"
        heading={t("heading")}
        subheading={t("subheading")}
      />
      <FeatureGrid items={gridItems} />
    </section>
  );
}
