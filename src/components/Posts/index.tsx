import { useState } from "react";
import AllPosts from "./AllPosts";
import SearchBar from "./SearchBar";
import type { CollectionEntry } from "astro:content";

// using prop drilling here as the number of props are very less

interface Props {
  posts: CollectionEntry<"blog">[];
}

export default function index({ posts }: Props) {
  const [currentPosts, setCurrentPosts] = useState(posts);
  function currentPostHandler(data: CollectionEntry<"blog">[]) {
    setCurrentPosts(data);
  }
  return (
    <>
      <SearchBar searchList={posts} currentPostHandler={currentPostHandler} />
      <AllPosts posts={currentPosts} />
    </>
  );
}
