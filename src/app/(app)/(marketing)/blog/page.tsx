import type { Metadata } from "next";
import { Title } from "@/components/title";
import { BlogsSection } from "@/components/blog/blogs-section";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover the latest trends and insights in the world of AI and technology.",
};

type Post = {
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  createdAt: string;
};

export default async function Page() {
  const payload = await getPayload({ config });
  const { docs } = (await payload.find({
    collection: "posts",
    sort: "-createdAt",
    limit: 50,
    select: {
      title: true,
      slug: true,
      excerpt: true,
      publishedAt: true,
      createdAt: true,
    },
  } as never)) as unknown as { docs: Post[] };

  return (
    <>
      <Title
        heading="Blog"
        description="Discover the latest trends and insights in the world of AI and technology."
      />
      <BlogsSection
        posts={docs.map((post) => ({
          title: post.title,
          date: new Date(post.publishedAt || post.createdAt).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            },
          ),
          description: post.excerpt || "Read the full article.",
          href: `/blog/${post.slug}`,
        }))}
      />
    </>
  );
}
