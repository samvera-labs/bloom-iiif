import React from "react";
import Figure from "components/Figure/Figure";
import { Collection, Manifest } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";

interface ItemProps {
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  /**
   * todo: use vault to get content resource by id.
   */

  return (
    <Figure
      caption={useGetLabel(item.label)}
      description={useGetLabel(item.summary)}
      image={useGetResourceImage(item.thumbnail, "100,161.8")}
    />
  );
};

export default Item;
