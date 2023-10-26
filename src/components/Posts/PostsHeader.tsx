import Heading from "../Heading";
import Link from "../Link";

export default function PostsHeader() {
  return (
    <div className="flex justify-between items-center md:items-center">
      <Heading className="text-5xl">Featured Posts</Heading>
      <Link className="text-2xl md:text-base" text="SEE ALL" />
    </div>
  );
}
