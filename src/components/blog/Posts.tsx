import { Grid } from "@once-ui-system/core";

import { getPosts } from "@/utils/utils";

import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  query?: string;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  query,
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // filter by search query (case-insensitive, matches title or summary)
  if (query && query.trim().length > 0) {
    const q = query.trim().toLowerCase();
    allBlogs = allBlogs.filter((post) => {
      const title = (post.metadata.title || "").toLowerCase();
      const summary = ((post.metadata.summary as string) || "").toLowerCase();
      const slug = (post.slug || "").toLowerCase();
      const content = (post.content || "").toLowerCase();
      return (
        title.includes(q) ||
        summary.includes(q) ||
        slug.includes(q) ||
        content.includes(q)
      );
    });
  }

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          s={{ columns: 1 }}
          fillWidth
          marginBottom="40"
          gap="16"
        >
          {displayedBlogs.map((post) => (
            <Post
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
