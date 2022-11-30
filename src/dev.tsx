import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import ReactDOM from "react-dom";
import App from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { collections } from "./dev/collections";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  const defaultUrl: string = collections[0].url;

  const oneItem =
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/search?query=subject.label:%22Sculpture,%20English--19th%20century%22&collectionLabel=Sculpture,%20English--19th%20century&collectionSummary=Subject&as=iiif";

  const twoItems =
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/search?query=collection.title.keyword:%22Transportation%20Library%20Menu%20Collection%22&collectionLabel=Transportation%20Library%20Menu%20Collection&collectionSummary=Collection&as=iiif";

  const [url, setUrl] = React.useState(defaultUrl);
  return (
    <>
      <App collectionId={url} key={url} />
      <DynamicUrl url={url} setUrl={setUrl} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Wrapper />);
