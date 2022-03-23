import React from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <ItemsStyled>
      {items.map((item) => (
        <Item item={item as Collection | Manifest} />
      ))}
    </ItemsStyled>
  );
};

export default Items;
