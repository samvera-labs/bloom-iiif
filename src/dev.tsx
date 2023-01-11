import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import App from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { collections } from "./dev/collections";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  const defaultUrl: string = collections[0].url;

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
