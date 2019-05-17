import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Toggle render={renderToggleButton} />
      <hr />
      <Toggle render={renderToggleCheckbox} />
    </div>
  );
}

function Toggle(props) {
  const [on, setOn] = useState(false);

  return <>{props.render(() => setOn(!on), on)}</>;
}

function renderToggleButton(toggle, on) {
  return <button onClick={() => toggle()}>{on ? "ON" : "OFF"}</button>;
}

function renderToggleCheckbox(toggle, on) {
  return (
    <>
      <input type="checkbox" checked={on} onChange={() => toggle()} />
      {on ? "ON" : "OFF"}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
