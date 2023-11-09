import { useSnippetContext } from "./context/SnippetContextProvider";
import { useParams } from "react-router-dom";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

export default function SnippetCode() {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const { snippets } = useSnippetContext();
  const snippetData = snippets.filter((snippet) => {
    if (snippet["id"] === parsedId) return snippet;
  });
  if (!snippetData.length) return <h2>Not Found</h2>;

  const { title, description, language, code } = snippetData[0];
  return (
    <div className="flex-col gap-5">
      <div className="space-y-3">
        <Heading className="first-letter:uppercase">{title}</Heading>
        <p className="text-3xl md:text-xl">{description}</p>
      </div>
      <SyntaxHighlighter
        wrapLongLines={true}
        language={language}
        className="text-2xl md:text-xl whitespace-normal"
        customStyle={{ padding: "2em" }}
        style={atomDark}
      >
        {`${code}`}
      </SyntaxHighlighter>
    </div>
  );
}
