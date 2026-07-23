import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { Title } from "@/components/title";
import { BlogsSection } from "@/components/blog/blogs-section";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, SITE, type Locale } from "@/lib/seo";
import { blogSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: alternatesFor("/blog", locale),
    openGraph: {
      type: "website",
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: { title: `${title} | ${SITE.name}`, description },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Blog" });
  const dateLocale = locale === "de" ? "de-DE" : "en-US";

  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    sort: "-createdAt",
    limit: 50,
    depth: 0,
  });

  return (
    <>
      <JsonLd
        data={[
          blogSchema(t("metaTitle"), t("metaDescription"), locale),
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: SITE.url },
            { name: t("heading"), url: `${SITE.url}/blog` },
          ]),
        ]}
      />
      <Title heading={t("heading")} description={t("subheading")} />
      <BlogsSection
        heading={t("latestPosts")}
        description={t("subheading")}
        posts={docs.map((post) => ({
          title: post.title,
          date: new Date(post.publishedAt || post.createdAt).toLocaleDateString(
            dateLocale,
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            },
          ),
          description: post.excerpt || t("readMore"),
          href: `/blog/${post.slug}`,
        }))}
      />
    </>
  );
}
