import { Link } from "react-router-dom";
import { Cards, CardsTitle, CardsDescription } from "../Cards";
import { useSnippetContext } from "./context/SnippetContextProvider";

export default function SnippetList() {
  const { snippets, status } = useSnippetContext();
  console.log({snippets});
  
  return (
    <div className="flex flex-col gap-3">
      {status === "loading" ? <LoadingState /> : null}
      {status === "error" ? <ErrorState /> : null}
      {snippets?.map(({ title, id, description }) => (
        <Cards className="md:w-full">
          <Link to={`/snippets/${id}`}>
            <CardsTitle className="text-ellipsis">{title}</CardsTitle>
          </Link>
          {description && <CardsDescription>{description}</CardsDescription>}
          <div className="flex ml-auto">
            <Link
              to={`/snippets/${id}`}
              className="flex justify-between text-xl md:text-sm text-blue-600 hover:text-blue-700  dark:text-blue-400 dark:hover:text-blue-700 gap-1"
            >
              Read More
            </Link>
          </div>
        </Cards>
      ))}
    </div>
  );
}

const LoadingState = () => <p className="dark:text-white">Loading Snippets...</p>;
const ErrorState = () => <p className="dark:text-white">Some Error Occured...</p>;
