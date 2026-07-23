import { getTranslations } from "next-intl/server";
import {
  LayersIcon,
  BrainCircuitIcon,
  TargetIcon,
  BarChart3Icon,
} from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { FeatureGrid, type FeatureGridItem } from "@/components/feature-grid";

const ICONS = [
  LayersIcon,
  BrainCircuitIcon,
  TargetIcon,
  BarChart3Icon,
] as const;

type Item = { title: string; description: string };

export async function DifferentiatorsSection() {
  const t = await getTranslations("Differentiators");
  const items = t.raw("items") as Item[];

  const gridItems: FeatureGridItem[] = items.map((item, index) => {
    const Icon = ICONS[index % ICONS.length];
    return {
      mark: <Icon className="size-5 text-muted-foreground" />,
      title: item.title,
      description: item.description,
    };
  });

  return (
    <section
      className="mb-12 lg:mb-24"
      aria-labelledby="differentiators-heading"
    >
      <SectionIntro
        id="differentiators-heading"
        heading={t("heading")}
        subheading={t("subheading")}
      />
      <FeatureGrid items={gridItems} />
    </section>
  );
}
