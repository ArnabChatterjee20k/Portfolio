import { useState, useEffect } from "react";
import config from "../config";
import type CodeSnippetInterface from "../types/CodeSnippetInterface";
import type FETCH_STATUS from "../types/FetchStatus";

async function fetchSnippets() {
  const url = config.SNIPPET_API_URL;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default function useSnippets(): [FETCH_STATUS, CodeSnippetInterface[]] {
  const [status, setStatus] = useState<FETCH_STATUS>("idle");
  const [snippets, setSnippets] = useState<CodeSnippetInterface[]>(() => {
    const data = sessionStorage.getItem("portfolio_data");
    if (data) return JSON.parse(data);
    return [];
  });
  useEffect(() => {
    if (snippets.length === 0 || status === "error") {
      setStatus("loading");
      fetchSnippets()
        .then((data) => {
          setStatus("success");
          sessionStorage.setItem("portfolio_data", JSON.stringify(data));
          setSnippets(data);
          data["data"] = data;
        })
        .catch((err) => setStatus("error"));
    }
  }, []);

  return [status, snippets];
}
