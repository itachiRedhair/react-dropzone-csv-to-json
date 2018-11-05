import React from "react";
import { render } from "react-dom";
import { DropZone } from "./src/lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <DropZone label="Email Address" placeholder="name@example.com" />
  </div>
);

render(<App />, document.getElementById("root"));
