import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { PostContent } from "@/components/blog/post-content";
import { FullWidthDivider } from "@/components/full-width-divider";

type Props = { params: Promise<{ slug: string }> };

const findPost = async (slug: string) => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPost(slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "Post Not Found" };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "posts", limit: 1000 });
  return docs.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const post = await findPost((await params).slug);
  if (!post) notFound();

  const author = typeof post.author === "object" ? post.author?.email : null;
  const date = new Date(post.publishedAt || post.createdAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "2-digit", year: "numeric" },
  );

  return (
    <article className="mb-12 lg:mb-24 mx-auto w-full max-w-4xl border-t">
      <div className="space-y-2 px-4 py-8 md:py-12">
        <h1 className="font-semibold text-2xl tracking-wide md:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time className="font-mono text-xs uppercase">{date}</time>
          {author && (
            <>
              <span>·</span>
              <span>
                By <span className="font-medium text-foreground">{author}</span>
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
  );
}
