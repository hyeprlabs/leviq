import { ReactNode } from "react";
import { FullWidthDivider } from "@/components/full-width-divider";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  toc?: Array<{ id: string; label: string }>;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
  toc,
}: LegalPageLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-4xl">
      <div className="border-t" />
      <div className="space-y-1 px-4 py-8 md:py-12">
        <h1 className="font-semibold text-3xl md:text-4xl tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground text-xs uppercase tracking-wide">
          {lastUpdated}
        </p>
      </div>

      {toc && toc.length > 0 && (
        <>
          <FullWidthDivider />
          <nav className="px-4 py-6 md:py-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Inhaltsverzeichnis
            </h2>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm hover:underline text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      <FullWidthDivider />
      <div className="px-4 py-8 md:py-12 max-w-none">{children}</div>
      <FullWidthDivider />

      <div className="px-4 py-6 text-xs text-muted-foreground">
        <p>
          Diese Seite unterliegt deutschem Recht. Stand:{" "}
          <time>{lastUpdated}</time>
        </p>
      </div>
    </article>
  );
}
