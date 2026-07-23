import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";

// SEO
import {
  SITE,
  ORGANIZATION,
  metadataBase,
  alternatesFor,
  OG_LOCALE,
  type Locale,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

// Providers
import { ClerkProvider as Clerk } from "@clerk/nextjs";

// Internationalization
import { NextIntlClientProvider as Internationalization } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ) as Locale;
  const t = await getTranslations({ locale: l, namespace: "Meta" });

  const description = t("siteDescription");
  const titleWithBrand = `${SITE.name} — ${t("homeTitle")}`;

  return {
    metadataBase,
    applicationName: SITE.name,
    title: {
      template: `%s | ${SITE.name}`,
      default: titleWithBrand,
    },
    description,
    keywords: t.raw("keywords") as string[],
    authors: [{ name: ORGANIZATION.founder }],
    creator: ORGANIZATION.founder,
    publisher: SITE.name,
    category: "technology",
    alternates: alternatesFor("/", l),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: titleWithBrand,
      description,
      url: SITE.url,
      locale: OG_LOCALE[l],
      alternateLocale: routing.locales
        .filter((other) => other !== l)
        .map((other) => OG_LOCALE[other as Locale]),
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithBrand,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function generateViewport(): Viewport {
  return {
    colorScheme: "light dark",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: SITE.themeColor.light },
      { media: "(prefers-color-scheme: dark)", color: SITE.themeColor.dark },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Meta" });
  const description = t("siteDescription");

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={[
            organizationSchema(description),
            websiteSchema(description, locale as Locale),
          ]}
        />
        <Internationalization messages={messages}>
          <Clerk>{children}</Clerk>
        </Internationalization>
      </body>
    </html>
  );
}
