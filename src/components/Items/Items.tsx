import React, { useEffect, useState, useRef } from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";
import ItemsControl from "./Control";
import { useCollectionState } from "context/collection-context";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const { itemHeight } = useCollectionState();
  const [activeItems, setActiveItems] = useState<number[]>([0, 1, 2, 3, 4]);
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const itemsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!items) return;

    activeItems.includes(0) ? setHasPrev(false) : setHasPrev(true);
    activeItems.includes(items.length - 1)
      ? setHasNext(false)
      : setHasNext(true);
  }, [activeItems]);

  const handleActiveItems = (increment: number) => {
    setActiveItems(activeItems.map((index) => index + increment));
  };

  return (
    <ItemsStyled ref={itemsRef}>
      {itemHeight && (
        <>
          <ItemsControl
            increment={-1}
            label="previous"
            handleControl={handleActiveItems}
            height={itemHeight}
            disabled={!hasPrev}
          />
          <ItemsControl
            increment={1}
            label="next"
            handleControl={handleActiveItems}
            height={itemHeight}
            disabled={!hasNext}
          />
        </>
      )}
      {items
        .filter((item, index) => {
          if (activeItems.includes(index)) return item;
        })
        .map((item, index) => (
          <Item
            index={index}
            item={item as Collection | Manifest}
            key={item.id}
          />
        ))}
    </ItemsStyled>
  );
};

export default Items;
