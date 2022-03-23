import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let collectionNezPerce: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;

ReactDOM.render(
  <>
    <h2
      style={{
        fontWeight: 400,
        fontSize: "1rem",
      }}
    >
      Explore Further
    </h2>
    <div>
      <App collectionId={collectionNezPerce} />
      <App collectionId={collectionNezPerce} />
      <App collectionId={collectionNezPerce} />
    </div>
  </>,
  document.getElementById("root")
);
