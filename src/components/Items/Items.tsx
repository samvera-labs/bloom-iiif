import React, { useState } from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";
import ItemsControl from "./Control";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [activeItems, setActiveItems] = useState<number[]>([0, 1, 2, 3]);

  const handleActiveItems = (e: React.MouseEvent) => {
    const increment = (e.target as HTMLButtonElement).dataset?.increment;
    setActiveItems(
      activeItems.map((index) => index + parseInt(increment as string))
    );
  };

  return (
    <>
      <ItemsStyled>
        <ItemsControl
          increment={-1}
          label="previous"
          handleControl={handleActiveItems}
        />
        <ItemsControl
          increment={1}
          label="next"
          handleControl={handleActiveItems}
        />
        {items
          .filter((item, index) => {
            if (activeItems.includes(index)) return item;
          })
          .map((item) => (
            <Item item={item as Collection | Manifest} key={item.id} />
          ))}
      </ItemsStyled>
    </>
  );
};

export default Items;
