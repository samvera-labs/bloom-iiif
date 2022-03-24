import React from "react";
import Figure from "components/Figure/Figure";
import { Collection, Manifest } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";

interface ItemProps {
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const store = useCollectionState();
  const { vault } = store;

  /**
   * todo: be more defensive about collections without `thumbnail`
   */
  let image = null;
  if (item.thumbnail)
    image = useGetResourceImage(vault.get(item.thumbnail[0].id), "200,");

  /**
   * todo: be more defensive about collections without `homepage`
   */
  let url = null;
  if (item.homepage) url = item.homepage[0].id;

  return (
    <ItemStyled>
      <Anchor href={url}>
        <Figure
          caption={useGetLabel(item.label)}
          description={useGetLabel(item.summary)}
          image={image}
        />
      </Anchor>
    </ItemStyled>
  );
};

export default Item;
