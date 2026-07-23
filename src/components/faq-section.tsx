"use client";

import { useTranslations } from "next-intl";
import { PlusIcon } from "lucide-react";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { SectionIntro } from "@/components/section-intro";

export type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  /** Overrides the default `Faq` namespace items — used for page-specific subsets. */
  items?: FaqItem[];
  heading?: string;
  subheading?: string;
};

/**
 * Visible FAQ, rendered with native `<details>` so every answer ships in the
 * initial HTML — crawlable, accessible, and a perfect match for the FAQPage
 * structured data emitted alongside it (strong AEO/GEO signal).
 */
export function FaqSection({ items, heading, subheading }: FaqSectionProps) {
  const t = useTranslations("Faq");
  const resolvedItems = items ?? (t.raw("items") as FaqItem[]);

  return (
    <section id="faq" className="mb-12 lg:mb-24" aria-labelledby="faq-heading">
      <SectionIntro
        id="faq-heading"
        heading={heading ?? t("heading")}
        subheading={subheading ?? t("subheading")}
      />

      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />
        <div className="divide-y divide-border">
          {resolvedItems.map((item) => (
            <details key={item.question} className="group px-4 md:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-medium text-base text-foreground md:text-lg">
                  {item.question}
                </h3>
                <PlusIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-5 text-muted-foreground text-sm leading-relaxed md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
