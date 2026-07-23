import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Button } from "@/components/ui/button";
import { CalEmbed } from "@/components/cal-embed";

export type PricingTier = {
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingTiers({
  tiers,
  ctaLabel,
  popularLabel,
}: {
  tiers: PricingTier[];
  ctaLabel: string;
  popularLabel: string;
}) {
  return (
    <div className="relative *:border-0">
      <DecorIcon className="size-4" position="top-left" />
      <DecorIcon className="size-4" position="top-right" />
      <DecorIcon className="size-4" position="bottom-left" />
      <DecorIcon className="size-4" position="bottom-right" />

      <FullWidthDivider className="-top-px" />
      <div className="grid grid-cols-1 divide-y divide-border border-x md:grid-cols-3 md:divide-x md:divide-y-0">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "flex flex-col gap-5 p-6 md:p-8",
              tier.highlighted && "bg-secondary/80 dark:bg-secondary/30",
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <span className="rounded-full border bg-background px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                    {popularLabel}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{tier.tagline}</p>
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <CalEmbed>
              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full"
              >
                {ctaLabel}
              </Button>
            </CalEmbed>
          </div>
        ))}
      </div>
      <FullWidthDivider className="-bottom-px" />
    </div>
  );
}
