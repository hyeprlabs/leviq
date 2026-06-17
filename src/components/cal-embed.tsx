"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getCalApi({ namespace: "30min" }).then((cal) =>
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#171717", // --primary
            "cal-brand-emphasis": "#0a0a0a", // --foreground
            "cal-brand-text": "#fafafa", // --primary-foreground
            "cal-brand-subtle": "#a1a1a1", // --ring
            "cal-brand-accent": "#fafafa", // --primary-foreground

            "cal-text": "#0a0a0a", // --foreground
            "cal-text-emphasis": "#000000",
            "cal-text-subtle": "#737373", // --muted-foreground
            "cal-text-muted": "#a1a1a1", // --ring
            "cal-text-inverted": "#fafafa", // --primary-foreground

            "cal-bg": "#ffffff", // --background
            "cal-bg-emphasis": "#f5f5f5", // --secondary
            "cal-bg-subtle": "#f5f5f5", // --muted
            "cal-bg-muted": "#fafafa",
            "cal-bg-inverted": "#171717", // --primary

            "cal-border": "#e5e5e5", // --border
            "cal-border-emphasis": "#a1a1a1", // --ring
            "cal-border-subtle": "#e5e5e5", // --border
            "cal-border-muted": "#f0f0f0",

            "cal-border-booker": "#e5e5e5", // --border
            "cal-border-booker-width": "1px",

            radius: "0.625rem",
            "radius-sm": "0.375rem",
            "radius-md": "0.5rem",
            "radius-lg": "0.625rem",
            "radius-xl": "0.875rem",
            "radius-2xl": "1.125rem",
            "radius-3xl": "1.375rem",
            "radius-full": "9999px",
            "radius-none": "0px",
          },
          dark: {
            "cal-brand": "#e5e5e5", // --primary
            "cal-brand-emphasis": "#fafafa", // --foreground
            "cal-brand-text": "#171717", // --primary-foreground
            "cal-brand-subtle": "#a1a1a1", // --muted-foreground
            "cal-brand-accent": "#171717", // --primary-foreground

            "cal-text": "#fafafa", // --foreground
            "cal-text-emphasis": "#ffffff",
            "cal-text-subtle": "#a1a1a1", // --muted-foreground
            "cal-text-muted": "#737373", // --ring
            "cal-text-inverted": "#0a0a0a", // --background

            "cal-bg": "#0a0a0a", // --background
            "cal-bg-emphasis": "#262626", // --secondary (hover/active)
            "cal-bg-subtle": "#171717", // --card
            "cal-bg-muted": "#0d0d0d",
            "cal-bg-inverted": "#fafafa", // --primary-foreground

            "cal-border": "#232323", // --border (10% white over #0a0a0a)
            "cal-border-emphasis": "#737373", // --ring
            "cal-border-subtle": "#1a1a1a",
            "cal-border-muted": "#171717", // --card

            "cal-border-booker": "#262626", // --secondary
            "cal-border-booker-width": "1px",

            radius: "0.625rem",
            "radius-sm": "0.375rem",
            "radius-md": "0.5rem",
            "radius-lg": "0.625rem",
            "radius-xl": "0.875rem",
            "radius-2xl": "1.125rem",
            "radius-3xl": "1.375rem",
            "radius-full": "9999px",
            "radius-none": "0px",
          },
        },
        layout: "month_view",
      }),
    );
  }, []);

  return (
    <span
      className="contents"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
      data-cal-link="leviq/30min"
      data-cal-namespace="30min"
    >
      {children}
    </span>
  );
}
