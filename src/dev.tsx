import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let collectionNezPerce: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;
let collectionMasks: string = `http://127.0.0.1:8080/fixtures/iiif/collection/masks-of-antonio-fava.json`;
let collectionFootball: string = `http://127.0.0.1:8080/fixtures/iiif/collection/athletic-department-footbal-films.json`;
let collectionBodleian: string = `https://iiif.bodleian.ox.ac.uk/iiif/collection/canonici`;
let collectionScotland: string = `https://view.nls.uk/collections/7446/74462370.json`;
let collectionHeilman: string = `https://digital.lib.utk.edu/assemble/collection/collections/heilman`;

ReactDOM.render(
  <section>
    <div>
      <App collectionId={collectionNezPerce} />
      <App collectionId={collectionMasks} />
      <App collectionId={collectionFootball} />
      <App collectionId={collectionBodleian} />
      <App collectionId={collectionScotland} />
      <App collectionId={collectionHeilman} />
    </div>
  </section>,
  document.getElementById("root")
);
