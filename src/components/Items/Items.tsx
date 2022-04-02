import React, { useEffect, useState, useRef } from "react";
import Item from "components/Items/Item";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import { ItemsStyled } from "./Items.styled";
import ItemsControl from "./Control";
import { rem } from "stitches";

const useRefDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, []);
  return dimensions;
};

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [activeItems, setActiveItems] = useState<number[]>([0, 1, 2, 3, 4]);
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const itemsRef = useRef<HTMLElement>(null);
  const dimensions = useRefDimensions(itemsRef);

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

  /**
   * move this elsewhere as hook or service....
   */
  let gaps = rem * 1.618 * 4;
  let instance = dimensions.width - gaps;
  let controlHeight = instance / 5;

  return (
    <ItemsStyled ref={itemsRef}>
      <ItemsControl
        increment={-1}
        label="previous"
        handleControl={handleActiveItems}
        height={controlHeight}
        disabled={!hasPrev}
      />
      <ItemsControl
        increment={1}
        label="next"
        handleControl={handleActiveItems}
        height={controlHeight}
        disabled={!hasNext}
      />
      {items
        .filter((item, index) => {
          if (activeItems.includes(index)) return item;
        })
        .map((item) => (
          <Item item={item as Collection | Manifest} key={item.id} />
        ))}
    </ItemsStyled>
  );
};

export default Items;
