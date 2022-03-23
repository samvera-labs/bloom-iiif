import React, { useState } from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [activeItems, setActiveItems] = useState<number[]>([0, 1, 2, 3]);

  const handlePaging = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveItems(
      activeItems.map((index) => index + parseInt(e.target.dataset?.increment))
    );
  };

  return (
    <>
      <ItemsStyled>
        <button
          aria-label="previous"
          data-increment={-1}
          onClick={handlePaging}
          value="previous"
        >
          Previous
        </button>

        {items
          .filter((item, index) => {
            if (activeItems.includes(index)) return item;
          })
          .map((item) => (
            <Item item={item as Collection | Manifest} key={item.id} />
          ))}

        <button
          aria-label="next"
          data-increment={1}
          onClick={handlePaging}
          value="next"
        >
          Next
        </button>
      </ItemsStyled>
    </>
  );
};

export default Items;
