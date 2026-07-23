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
    "/pricing": {
      en: "/pricing",
      de: "/preisgestaltung",
    },
    "/about": {
      en: "/about",
      de: "/über-uns",
    },
    "/legal/imprint": {
      en: "/legal/imprint",
      de: "/impressum",
    },
    "/legal/privacy": {
      en: "/legal/privacy",
      de: "/datenschutz",
    },
    "/legal/terms": {
      en: "/legal/terms",
      de: "/agb",
    },
  },
});
