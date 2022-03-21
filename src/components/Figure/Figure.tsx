import { CollectionNormalized, ManifestNormalized } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import React from "react";

interface Props {
  data: CollectionNormalized | ManifestNormalized;
}

const Figure: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <figure>
      <img src="" />
      <figcaption>{useGetLabel(data.label)}</figcaption>
    </figure>
  );
};

export default Figure;
