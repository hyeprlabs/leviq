import {
  BotIcon,
  SearchIcon,
  LightbulbIcon,
  WorkflowIcon,
  CheckIcon,
} from "lucide-react";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

const ICONS = [BotIcon, SearchIcon, LightbulbIcon, WorkflowIcon] as const;

export type ServiceDetail = {
  name: string;
  description: string;
  features: string[];
};

/**
 * Richer 2-up service cards (icon, description, "what's included" checklist)
 * for the services page — same bordered/decorated shell as `FeatureGrid`,
 * but with room for the detail a compact 4-column grid can't hold.
 */
export function ServiceDetailGrid({
  items,
  featuresLabel,
}: {
  items: ServiceDetail[];
  featuresLabel: string;
}) {
  return (
    <div className="relative *:border-0">
      <DecorIcon className="size-4" position="top-left" />
      <DecorIcon className="size-4" position="top-right" />
      <DecorIcon className="size-4" position="bottom-left" />
      <DecorIcon className="size-4" position="bottom-right" />

      <FullWidthDivider className="-top-px" />
      <div className="grid grid-cols-1 divide-x divide-y divide-border border-x md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div key={item.name} className="flex flex-col gap-4 p-6 md:p-8">
              <Icon className="size-6 text-muted-foreground" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {featuresLabel}
                </span>
                <ul className="flex flex-col gap-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <FullWidthDivider className="-bottom-px" />
    </div>
  );
}
