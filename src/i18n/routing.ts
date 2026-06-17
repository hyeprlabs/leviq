import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "as-needed",
  pathnames: {
    "/leistungen": {
      de: "/services",
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
  },
});
