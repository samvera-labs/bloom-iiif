import React from "react";
import Figure from "components/Figure/Figure";
import { Collection, Manifest } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";
import { useCollectionState } from "context/collection-context";

interface ItemProps {
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const store = useCollectionState();
  const { vault } = store;

  const thumbnailResource = vault.get(item.thumbnail[0].id);

  console.log(thumbnailResource);

  return (
    <Figure
      caption={useGetLabel(item.label)}
      description={useGetLabel(item.summary)}
      image={useGetResourceImage(thumbnailResource, "200,")}
    />
  );
};

export default Item;
