import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Hello World using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
