import React from 'react';
import { Cards, CardsDescription, CardsTitle } from "../Cards";
import Link from "../Link";
import { type CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"blog">;
}

export default function PostCards ({ post }:Props){
  const { slug, data } = post;

  return (
    <Cards className="md:w-full">
      <CardsTitle className="text-ellipsis">{data.title}</CardsTitle>
      <CardsDescription>Published On: {data.date.toDateString()}</CardsDescription>
      <div className="flex ml-auto">
        <Link
          href={`/blog/${slug}`}
          className="flex justify-between text-xl md:text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-700 gap-1"
          svgClassName="fill-blue-600 w-5 h-4 md:w-3 md:h-2"
          text="Read More"
        />
      </div>
    </Cards>
  );
};
