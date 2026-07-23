import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { PostContent } from "@/components/blog/post-content";
import { FullWidthDivider } from "@/components/full-width-divider";
import { JsonLd } from "@/components/json-ld";
import { alternatesFor, localizedUrl, SITE, type Locale } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

/** Memoized so `generateMetadata` and the page share a single DB round-trip. */
const findPost = cache(async (slug: string) => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0];
});

/** Best-effort plain-text extraction from Lexical content for meta descriptions. */
function plainText(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const n = node as { text?: unknown; type?: string; children?: unknown[] };
  if (typeof n.text === "string") return n.text;
  if (Array.isArray(n.children)) {
    const joiner = n.type === "paragraph" || n.type === "root" ? " " : "";
    return n.children.map(plainText).join(joiner);
  }
  return "";
}

function excerptFrom(content: SerializedEditorState, max = 160): string {
  const text = plainText((content as { root?: unknown })?.root)
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await findPost(slug);
  if (!post) {
    return { title: "Post Not Found", robots: { index: false, follow: true } };
  }

  const description = post.excerpt || excerptFrom(post.content);
  const authorName =
    typeof post.author === "object" ? (post.author?.email ?? null) : null;
  const published = post.publishedAt || post.createdAt;

  return {
    title: post.title,
    description,
    alternates: alternatesFor(`/blog/${slug}`, locale),
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: localizedUrl(`/blog/${slug}`, locale),
      publishedTime: published ? new Date(published).toISOString() : undefined,
      modifiedTime: post.updatedAt
        ? new Date(post.updatedAt).toISOString()
        : undefined,
      authors: authorName ? [authorName] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    limit: 1000,
    depth: 0,
  });
  return docs.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await findPost(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "Blog" });
  const dateLocale = locale === "de" ? "de-DE" : "en-US";

  const authorName =
    typeof post.author === "object" ? (post.author?.email ?? null) : null;
  const published = post.publishedAt || post.createdAt;
  const description = post.excerpt || excerptFrom(post.content);
  const date = new Date(published).toLocaleDateString(dateLocale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description,
            slug,
            locale,
            datePublished: published ? new Date(published).toISOString() : null,
            dateModified: post.updatedAt
              ? new Date(post.updatedAt).toISOString()
              : null,
            authorName,
          }),
          breadcrumbSchema([
            { name: t("breadcrumbHome"), url: SITE.url },
            { name: t("heading"), url: `${SITE.url}/blog` },
            { name: post.title, url: localizedUrl(`/blog/${slug}`, locale) },
          ]),
        ]}
      />
      <article className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
        <div className="space-y-2 px-4 py-8 md:py-12">
          <h1 className="font-semibold text-2xl tracking-wide md:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-muted-foreground text-sm">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time
              dateTime={
                published ? new Date(published).toISOString() : undefined
              }
              className="font-mono text-xs uppercase"
            >
              {date}
            </time>
            {authorName && (
              <>
                <span>·</span>
                <span>
                  By{" "}
                  <span className="font-medium text-foreground">
                    {authorName}
                  </span>
                </span>
              </>
            )}
          </div>
        </div>

        <FullWidthDivider />
        <div className="px-4 py-8 md:py-12">
          <PostContent content={post.content} />
        </div>
        <FullWidthDivider />
      </article>
    </>
  );
}
