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

  return (
    <a href={item.homepage[0].id}>
      <Figure
        caption={useGetLabel(item.label)}
        description={useGetLabel(item.summary)}
        image={useGetResourceImage(thumbnailResource, "200,")}
      />
    </a>
  );
};

export default Item;
