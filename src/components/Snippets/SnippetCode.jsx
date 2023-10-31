import { lazy } from "react";
import { useSnippetContext } from "./context/SnippetContextProvider";
import { useParams } from "react-router-dom";
// const SyntaxHighlighter = lazy(() => import("react-syntax-highlighter"));
// import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs/";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SnippetCode() {
  const { id } = useParams();
  const { snippet } = useSnippetContext();
  if (!snippet[id]) return <h2>Not Found</h2>;
  const { code, language } = snippet[id];
  return (
    <div>
      <SyntaxHighlighter
        wrapLongLines={true}
        language="javascript"
        className="text-2xl md:text-xl whitespace-normal"
        customStyle={{ padding: "2em" }}
        style={atomDark}
      >
        {`import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
useState(()=>{return dat})

      `}
      </SyntaxHighlighter>
    </div>
  );
}
