import PostCards from "./PostCards";
import type { CollectionEntry } from "astro:content";

interface Props {
  posts: CollectionEntry<"blog">[];
}

export default function AllPosts({ posts }: Props) {
  return (
    <section className="flex flex-col gap-5 px-2">
      {posts?.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
    </section>
  );
}
