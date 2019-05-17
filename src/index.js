import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <>
      <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
      {on ? "yes" : "no"}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
