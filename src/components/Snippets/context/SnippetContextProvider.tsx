import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type CodeSnippetInterface from "../types/CodeSnippetInterface";

// Define the context with the correct type
const SnippetContext = createContext<CodeSnippetInterface | {}>({});

// Create a custom hook for using the context
const useSnippetContext = (): CodeSnippetInterface | {} =>
  useContext(SnippetContext);

interface SnippetContextProviderProps {
  children: ReactNode;
}

export function SnippetContextProvider({
  children,
}: SnippetContextProviderProps) {
  // You can manage the state and logic here
  const [snippet, setSnippet] = useState<CodeSnippetInterface | {}>({});

  return (
    <SnippetContext.Provider value={{ snippet, setSnippet }}>
      {children}
    </SnippetContext.Provider>
  );
}

export default SnippetContextProvider;
