import React from "react";
import Figure from "components/Figure/Figure";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Figure item={item as Collection | Manifest} />
      ))}
    </div>
  );
};

export default Items;
