"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getCalApi({ namespace: "30min" }).then((cal) =>
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#000000" },
          dark: { "cal-brand": "#ffffff" },
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
