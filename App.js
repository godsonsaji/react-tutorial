import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 className="heading" tabIndex="5">
    Hello World using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1 className="heading">Heading From React Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
