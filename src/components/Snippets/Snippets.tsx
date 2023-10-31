import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
export default function Snippets() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/snippet/:id" Component={() => <Param />} />
        <Route path="/snippet/" Component={() => <Dynamic />} />
      </Routes>
    </BrowserRouter>
  );
}

function Param() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <Dynamic/>
    </div>
  );
}

function Dynamic() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Link to={"/snippet/" + text}>Go to {text}</Link>
    </div>
  );
}
