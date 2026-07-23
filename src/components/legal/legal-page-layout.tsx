import { ReactNode } from "react";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl">
      <div className="border-t" />
      <div className="space-y-2 px-4 py-8 md:py-12">
        <h1 className="font-semibold text-2xl tracking-wide md:text-4xl">
          {title}
        </h1>
        <p className="font-mono text-muted-foreground text-xs uppercase tracking-wide">
          {lastUpdated}
        </p>
      </div>

      <div className="relative">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />
        <div className="divide-y divide-border">{children}</div>
        <FullWidthDivider className="-bottom-px" />
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3 px-4 py-8 md:px-8 md:py-10">
      <h2 className="font-medium text-base md:text-lg tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}
