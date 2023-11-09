import { useState, useEffect } from "react";
import config from "../config";
import type CodeSnippetInterface from "../types/CodeSnippetInterface";
import type FETCH_STATUS from "../types/FetchStatus"

async function fetchSnippets() {
  const url = config.SNIPPET_API_URL;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default function useSnippets():[FETCH_STATUS,CodeSnippetInterface[]] {
  const [status, setStatus] = useState<FETCH_STATUS>("idle");
  const [snippets, setSnippets] = useState<CodeSnippetInterface[]>([]);
  useEffect(() => {
    if (status === "idle" || status === "error") {
      setStatus("loading");
      fetchSnippets()
        .then((data) => {
          setStatus("success");
          setSnippets(data);
          data["data"] = data;
        })
        .catch((err) => setStatus("error"));
    }
  }, []);

  return [status, snippets];
}
