import React from "react";
import ReactDOM from "react-dom";
import App from "./index";

let collectionNezPerce: string = `http://127.0.0.1:8080/fixtures/iiif/collection/nez-perce.json`;
let collectionMasks: string = `http://127.0.0.1:8080/fixtures/iiif/collection/masks-of-antonio-fava.json`;
let collectionFootball: string = `http://127.0.0.1:8080/fixtures/iiif/collection/athletic-department-footbal-films.json`;
let collectionBodleianGraeca: string = `https://iiif.bodleian.ox.ac.uk/iiif/collection/flora-and-fauna-graeca`;
let collectionBodleianMaps: string = `https://iiif.bodleian.ox.ac.uk/iiif/collection/maps`;
let collectionScotland: string = `https://view.nls.uk/collections/7446/74462370.json`;
let collectionHeilman: string = `https://digital.lib.utk.edu/assemble/collection/collections/heilman`;

ReactDOM.render(
  <section>
    <div>
      <h2>Northwestern</h2>
      <App collectionId={collectionNezPerce} />
      <App collectionId={collectionMasks} />
      <App collectionId={collectionFootball} />
    </div>

    <div>
      <h2>Bodleian</h2>
      <App collectionId={collectionBodleianGraeca} />
      <App collectionId={collectionBodleianMaps} />
    </div>

    <div>
      <h2>National Library of Scotland</h2>
      <App collectionId={collectionScotland} />
    </div>

    <div>
      <h2>University of Tennessee</h2>
      <App collectionId={collectionHeilman} />
    </div>
  </section>,
  document.getElementById("root")
);
