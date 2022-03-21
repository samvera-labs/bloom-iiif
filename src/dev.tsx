import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let sampleCollection: string = `http://127.0.0.1:8080/fixtures/iiif/collections/sample.json`;

ReactDOM.render(
  <App collectionId={sampleCollection} />,
  document.getElementById("root")
);
