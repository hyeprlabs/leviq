import type { Metadata } from "next";
import {
  MessageSquareIcon,
  UserCheckIcon,
  GaugeIcon,
  CompassIcon,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Title } from "@/components/title";
import { SectionIntro } from "@/components/section-intro";
import { FeatureGrid, type FeatureGridItem } from "@/components/feature-grid";
import { CallToAction } from "@/components/cta";
import { FullWidthDivider } from "@/components/full-width-divider";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, SITE, type Locale } from "@/lib/seo";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/structured-data";

const VALUE_ICONS = [
  MessageSquareIcon,
  UserCheckIcon,
  GaugeIcon,
  CompassIcon,
] as const;

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: alternatesFor("/about", locale),
    openGraph: {
      type: "website",
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: { title: `${title} | ${SITE.name}`, description },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, common, values] = await Promise.all([
    getTranslations({ locale, namespace: "AboutPage" }),
    getTranslations({ locale, namespace: "Common" }),
    getTranslations({ locale, namespace: "Values" }),
  ]);

  const storyParagraphs = t.raw("storyParagraphs") as string[];
  const valueItems = values.raw("items") as {
    title: string;
    description: string;
  }[];

  const gridItems: FeatureGridItem[] = valueItems.map((item, index) => {
    const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
    return {
      mark: <Icon className="size-5 text-muted-foreground" />,
      title: item.title,
      description: item.description,
    };
  });

  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema(t("heading"), t("metaDescription"), locale),
          breadcrumbSchema([
            { name: common("breadcrumbHome"), url: SITE.url },
            { name: t("heading"), url: `${SITE.url}/about` },
          ]),
        ]}
      />
      <Title heading={t("heading")} description={t("subheading")} />

      <section className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-8 md:py-12">
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
            {t("storyHeading")}
          </h2>
          {storyParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <FullWidthDivider />
      </section>

      <section className="mb-12 lg:mb-24" aria-labelledby="values-heading">
        <SectionIntro
          id="values-heading"
          heading={t("valuesHeading")}
          subheading={t("valuesSubheading")}
        />
        <FeatureGrid items={gridItems} />
      </section>

      <CallToAction />
    </>
  );
}
