import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import App from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { collections } from "./dev/collections";
import { createRoot } from "react-dom/client";
import { Collection, Manifest } from "@iiif/presentation-3";

const Wrapper = () => {
  const defaultUrl: string = collections[0].url;
  const [url, setUrl] = React.useState(defaultUrl);

  const handleItemInteraction = (item: Manifest | Collection) => {
    console.log(`item`, item);
  };

  return (
    <>
      <App
        collectionId={url}
        key={url}
        onItemInteraction={handleItemInteraction}
      />
      <DynamicUrl url={url} setUrl={setUrl} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Wrapper />);
