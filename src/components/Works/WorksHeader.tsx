import Heading from "../Heading";
import Link from "../Link";

export default function WorksHeader() {
  return (
    <div className="flex justify-between items-start md:items-center">
      <Heading className="text-5xl">Featured Works</Heading>
      <Link text="SEE ALL" />
    </div>
  );
}
