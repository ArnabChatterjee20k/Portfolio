import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import SnippetContextProvider from "./context/SnippetContextProvider";
const SnippetList = lazy(() => import("./SnippetList"));
export default function Snippets() {
  return (
    <Suspense fallback={<Fallback />}>
      <SnippetContextProvider>
        <BrowserRouter>
          <section className="w-full">
            <Routes>
              <Route path="/snippet/" element={<SnippetList />} />
              {/* <Route path="/snippet/:id" Component={() => <Param />} /> */}
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
