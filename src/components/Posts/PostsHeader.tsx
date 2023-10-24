import Heading from "../Heading";
import Link from "../Link";

export default function PostsHeader() {
  return (
    <div className="flex justify-between items-start md:items-center">
      <Heading className="text-5xl">Featured Posts</Heading>
      <Link text="SEE ALL" />
    </div>
  );
}
