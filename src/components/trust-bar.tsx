import { getTranslations } from "next-intl/server";
import {
  ShieldCheckIcon,
  MapPinIcon,
  SparklesIcon,
  HandshakeIcon,
} from "lucide-react";
import { FeatureGrid, type FeatureGridItem } from "@/components/feature-grid";

const ICONS = [
  ShieldCheckIcon,
  MapPinIcon,
  SparklesIcon,
  HandshakeIcon,
] as const;

type TrustItem = { title: string; description: string };

/**
 * Honest credential strip in place of a "trusted by" logo wall — LevIQ is a
 * founder-led consultancy, not a company with recognizable enterprise
 * customers to name-drop, so this leans on verifiable facts instead.
 */
export async function TrustBar() {
  const t = await getTranslations("Trust");
  const items = t.raw("items") as TrustItem[];

  const gridItems: FeatureGridItem[] = items.map((item, index) => {
    const Icon = ICONS[index % ICONS.length];
    return {
      mark: <Icon className="size-5" />,
      title: item.title,
      description: item.description,
    };
  });

  return <FeatureGrid items={gridItems} compact />;
}
