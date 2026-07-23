import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

// Route segment config
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "LevIQ — AI chatbots, SEO and digital automation agency";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const COPY: Record<string, { headline: string; sub: string; tags: string[] }> =
  {
    de: {
      headline: "KI-Chatbots, SEO & digitale Automatisierung",
      sub: "für Handwerk, Immobilien & Praxen – aus Grünwald bei München",
      tags: ["KI-Chatbots", "SEO", "GEO / AEO", "Automatisierung"],
    },
    en: {
      headline: "AI Chatbots, SEO & Digital Automation",
      sub: "for tradespeople, real estate & clinics — near Munich, Germany",
      tags: ["AI Chatbots", "SEO", "GEO / AEO", "Automation"],
    },
  };

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY[routing.defaultLocale];

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        color: "#ffffff",
        padding: "72px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          LevIQ
        </div>
        <div style={{ fontSize: 26, color: "#a1a1a1" }}>leviq.de</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          {copy.headline}
        </div>
        <div style={{ fontSize: 32, color: "#c7c7c7", maxWidth: 900 }}>
          {copy.sub}
        </div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {copy.tags.map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              fontSize: 24,
              color: "#e5e5e5",
              border: "1px solid #2a2a2a",
              borderRadius: 10,
              padding: "10px 20px",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
