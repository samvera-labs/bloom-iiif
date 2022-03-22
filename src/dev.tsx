import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let sampleCollectionA: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;
let sampleCollectionB: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;
let sampleCollectionC: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;

ReactDOM.render(
  <>
    <App collectionId={sampleCollectionA} />
    <App collectionId={sampleCollectionB} />
    <App collectionId={sampleCollectionC} />
  </>,
  document.getElementById("root")
);
