"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

const industries = [
  { key: "handymen", icon: "1.png" },
  { key: "realEstate", icon: "2.png" },
  { key: "doctors", icon: "3.png" },
] as const;

/**
 * The three-industry image grid — shared between the homepage hero and the
 * services page. `animate` enables the entrance transition used on first
 * paint of the hero; other call sites render it static.
 */
export function IndustriesGrid({ animate = false }: { animate?: boolean }) {
  const t = useTranslations("Hero");

  return (
    <div className="grid grid-cols-1 divide-y divide-border bg-secondary/80 dark:bg-secondary/40 md:grid-cols-3 md:divide-x md:divide-y-0">
      {industries.map(({ key, icon }, i) => (
        <div
          key={key}
          style={animate ? { animationDelay: `${i * 100 + 400}ms` } : undefined}
          className={cn(
            "flex flex-col items-center gap-6 px-10 py-14 text-center",
            animate &&
              "fade-in slide-in-from-bottom-6 animate-in fill-mode-backwards duration-500 ease-out",
          )}
        >
          <Image
            alt={t(`industries.${key}.title`)}
            src={`/${icon}`}
            width={352}
            height={235}
            sizes="176px"
            className="w-44 h-auto drop-shadow-md"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {t(`industries.${key}.title`)}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t(`industries.${key}.description`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
