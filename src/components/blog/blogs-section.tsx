import { cn } from "@/lib/utils";
import { FullWidthDivider } from "@/components/full-width-divider";
import { PostsEmpty } from "@/components/blog/posts-empty";

type Post = {
  title: string;
  date: string;
  description: string;
  href: string;
};

export function BlogsSection({
  posts,
  heading,
  description,
}: {
  posts: Post[];
  heading: string;
  description: string;
}) {
  return (
    <div className="mb-12 lg:mb-24 mx-auto flex w-full max-w-4xl flex-col justify-start border-t">
      <div className="space-y-2 px-4 py-8 md:py-12">
        <h2 className="font-semibold text-2xl tracking-wide md:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="relative">
        <FullWidthDivider />
        {posts.length ? (
          <div className="divide-y">
            {posts.map((post) => (
              <PostCard {...post} key={post.href} />
            ))}
          </div>
        ) : (
          <PostsEmpty />
        )}
        <FullWidthDivider />
      </div>
    </div>
  );
}

function PostCard({
  title,
  date,
  description,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <a
      className={cn(
        "group flex h-32 w-full flex-col justify-center gap-y-1 p-4 hover:cursor-pointer hover:bg-accent/30 active:bg-accent dark:active:bg-accent/50",
        className,
      )}
      {...props}
    >
      <div className="relative flex items-end justify-center gap-2">
        <h3 className="truncate font-medium text-foreground text-lg md:text-xl">
          {title}
        </h3>
        <span className="mb-[6px] w-full border-b-2 border-dashed" />
        <span className="whitespace-nowrap font-mono text-muted-foreground text-xs uppercase group-hover:text-foreground md:text-sm">
          {date}
        </span>
      </div>
      <div className="line-clamp-2 text-muted-foreground text-sm group-hover:text-foreground md:text-base">
        {description}
      </div>
    </a>
  );
}
