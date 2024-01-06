import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnippetContextProvider from "./context/SnippetContextProvider";
const SnippetCode = lazy(() => import("./SnippetCode"));
const SnippetList = lazy(() => import("./SnippetList"));
export default function Snippets() {
  return (
    <Suspense fallback={<Fallback />}>
      <SnippetContextProvider>
        <BrowserRouter>
          <section className="w-full">
            <Routes>
              <Route path="/snippets/" element={<SnippetList />} />
              <Route path="/snippets/:id" element={<SnippetCode />} />
            </Routes>
          </section>
        </BrowserRouter>
      </SnippetContextProvider>
    </Suspense>
  );
}

function Fallback() {
  return <h1>Loading Snippets....</h1>;
}
