import React from "react";
import Figure from "components/Figure/Figure";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";

interface ItemProps {
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <>
      <Figure item={item} />
    </>
  );
};

export default Item;
