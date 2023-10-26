import Heading from "../Heading";
import Link from "../Link";

export default function WorksHeader() {
  return (
    <div className="flex justify-between items-center md:items-center">
      <Heading className="text-5xl">Featured Works</Heading>
      <Link className="text-2xl md:text-base" text="SEE ALL" />
    </div>
  );
}
