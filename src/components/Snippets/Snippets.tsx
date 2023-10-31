import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
export default function Snippets() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/snippet/" Component={() => <Link to={"/snippet/hello"}>Hello2</Link>} />
        <Route path="/snippet/hello" Component={() => <Link to={"/snippet/"}>Hello1</Link>} />
      </Routes>
    </BrowserRouter>
  );
}
