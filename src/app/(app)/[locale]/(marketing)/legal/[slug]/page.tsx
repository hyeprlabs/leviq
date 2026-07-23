import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { LegalContent } from "@/components/legal/legal-content";
import { FullWidthDivider } from "@/components/full-width-divider";

type Props = { params: Promise<{ slug: string }> };

const findLegalPage = async (slug: string) => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "legal-pages",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await findLegalPage(slug);
  return page
    ? { title: page.title, description: page.summary }
    : { title: "Not Found" };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "legal-pages", limit: 100 });
  return docs.map((page) => ({ slug: page.slug }));
}

export default async function Page({ params }: Props) {
  const page = await findLegalPage((await params).slug);
  if (!page) notFound();

  const updatedAt = new Date(page.updatedAt).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
      <div className="space-y-2 px-4 py-8 md:py-12">
        <h1 className="font-heading font-semibold text-2xl tracking-wide md:text-4xl">
          {page.title}
        </h1>
        {page.summary && (
          <p className="text-muted-foreground text-sm">{page.summary}</p>
        )}
        <p className="font-mono text-xs uppercase text-muted-foreground">
          Stand: {updatedAt}
        </p>
      </div>

      <FullWidthDivider />
      <div className="px-4 py-8 md:py-12">
        <LegalContent content={page.content} />
      </div>
      <FullWidthDivider />
    </article>
  );
}
