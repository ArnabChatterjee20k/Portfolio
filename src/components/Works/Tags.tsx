import Chip from "../Chip";
interface tags {
  tags: string[];
}
export default function Tags({ tags }: tags) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  );
}
