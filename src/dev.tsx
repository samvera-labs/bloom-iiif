import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let collectionNezPerce: string = `http://127.0.0.1:8080//fixtures/iiif/collection/nez-perce.json`;
let collectionMasks: string = `https://raw.githubusercontent.com/samvera-labs/bloom-iiif/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json`;
let collectionFootball: string = `https://raw.githubusercontent.com/samvera-labs/bloom-iiif/main/public/fixtures/iiif/collection/athletic-department-footbal-films.json`;
let collectionBodleianGraeca: string = `https://iiif.bodleian.ox.ac.uk/iiif/collection/flora-and-fauna-graeca`;
let collectionBodleianMaps: string = `https://iiif.bodleian.ox.ac.uk/iiif/collection/maps`;
let collectionScotland: string = `https://view.nls.uk/collections/7446/74462370.json`;
let collectionHeilman: string = `https://digital.lib.utk.edu/assemble/collection/collections/heilman`;

ReactDOM.render(
  <section>
    <App collectionId={collectionMasks} />
  </section>,
  document.getElementById("root")
);
