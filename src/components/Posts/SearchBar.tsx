import Fuse,{type IFuseOptions} from "fuse.js";
import { useState, type SyntheticEvent } from "react";
import type { CollectionEntry } from "astro:content";
interface Props {
  searchList: CollectionEntry<"blog">[];
  currentPostHandler:(data:CollectionEntry<"blog">[])=>void
}

const options:IFuseOptions<CollectionEntry<"blog">> = {
  keys: ["data.title", "data.slug"],
  includeMatches: true,
  minMatchCharLength: 0,
  threshold: 0.5,
  isCaseSensitive:false,
  shouldSort:true,
};

export default function SearchBar({ searchList,currentPostHandler }: Props) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);
  const posts = fuse
    .search(query)
    .map((result) => result.item)

  function handleOnSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value);
    if(value.trim().length===1) return
    value.trim().length===0?currentPostHandler(searchList):currentPostHandler(posts)
  }
  return (
    <>
      <form className="w-full px-2 relative">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div>
          <input
            onChange={handleOnSearch}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-xl md:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for titles(atleast 2 characters long)..."
            required
          />
        </div>
      </form>
    </>
  );
}
