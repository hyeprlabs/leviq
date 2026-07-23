import type React from "react";
import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

export type FeatureGridItem = {
  /** An icon element or numeral used as the visual mark for this cell. */
  mark: React.ReactNode;
  title: string;
  description: string;
};

/**
 * The bordered, corner-decorated grid used across the site for feature lists,
 * differentiators, process steps and credential strips — 2 columns on
 * mobile, 4 on desktop, dividers between every cell.
 */
export function FeatureGrid({
  items,
  compact = false,
}: {
  items: FeatureGridItem[];
  /** Tighter padding + centered layout, used by compact credential strips. */
  compact?: boolean;
}) {
  return (
    <div className="relative *:border-0">
      <DecorIcon className="size-4" position="top-left" />
      <DecorIcon className="size-4" position="top-right" />
      <DecorIcon className="size-4" position="bottom-left" />
      <DecorIcon className="size-4" position="bottom-right" />

      <FullWidthDivider className="-top-px" />
      <div className="grid grid-cols-2 divide-x divide-y divide-border border-x md:grid-cols-4 md:divide-y-0">
        {items.map((item) => (
          <div
            key={item.title}
            className={cn(
              "flex flex-col gap-3 p-6 md:p-8",
              compact && "items-center gap-2 py-8 text-center",
            )}
          >
            <div className={cn(compact && "text-muted-foreground")}>
              {item.mark}
            </div>
            <h3
              className={cn(
                "font-medium text-base text-foreground",
                compact && "text-sm",
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed text-muted-foreground",
                compact && "max-w-40 text-xs",
              )}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <FullWidthDivider className="-bottom-px" />
    </div>
  );
}
