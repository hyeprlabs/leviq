import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "as-needed",
  pathnames: {
    "/services": {
      en: "/services",
      de: "/leistungen",
    },
    "/blog": "/blog",
    "/legal/impressum": "/legal/impressum",
    "/legal/datenschutz": "/legal/datenschutz",
    "/legal/agb": "/legal/agb",
    "/pricing": {
      en: "/pricing",
      de: "/preisgestaltung",
    },
    "/about": {
      en: "/about",
      de: "/über-uns",
    },
  },
});
