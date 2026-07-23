import { ReactNode } from "react";
import { FullWidthDivider } from "@/components/full-width-divider";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <article className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
      <div className="space-y-2 px-4 py-8 md:py-12">
        <h1 className="font-semibold text-2xl tracking-wide md:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm">
          Zuletzt aktualisiert: {new Date().toLocaleDateString("de-DE")}
        </p>
      </div>

      <FullWidthDivider />
      <div className="px-4 py-8 md:py-12 prose prose-sm dark:prose-invert max-w-none">
        {children}
      </div>
      <FullWidthDivider />
    </article>
  );
}
