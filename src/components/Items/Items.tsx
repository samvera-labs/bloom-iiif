import React, { useState } from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  return (
    <ItemsStyled>
      {items.map((item) => (
        <Item item={item as Collection | Manifest} />
      ))}
    </ItemsStyled>
  );
};

export default Items;
