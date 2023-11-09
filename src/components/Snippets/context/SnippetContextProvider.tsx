import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import useSnippets from "../hooks/useSnippets";
import type CodeSnippetInterface from "../types/CodeSnippetInterface";
import type FETCH_STATUS from "../types/FetchStatus";

interface CONTEXT_TYPE {
  status:FETCH_STATUS,
  snippets:CodeSnippetInterface[] | []
}

// Define the context with the correct type
const SnippetContext = createContext<CONTEXT_TYPE>({status:"idle",snippets:[]});

// Create a custom hook for using the context
export const useSnippetContext = (): CONTEXT_TYPE =>
  useContext(SnippetContext);

interface SnippetContextProviderProps {
  children: ReactNode;
}

export function SnippetContextProvider({
  children,
}: SnippetContextProviderProps) {
  // You can manage the state and logic here
  const [status,snippets] = useSnippets()

  return (
    <SnippetContext.Provider value={{ status,snippets}}>
      {children}
    </SnippetContext.Provider>
  );
}

export default SnippetContextProvider;
