import React from "react";
import ReactDOM from "react-dom";
import App from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { collections } from "./dev/collections";

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

ReactDOM.render(<Wrapper />, document.getElementById("root"));
