import React, { useEffect, useState, useRef } from "react";
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
  const [focused, setFocused] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const store = useCollectionState();
  const { vault } = store;

  const itemRef = useRef(null);

  useEffect(() => {
    focused && setTimeout(() => setPreview(true), 1000);
  }, [focused]);

  useEffect(() => {}, [preview]);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setFocused(false);
    setPreview(false);
  };

  /**
   * todo: be more defensive about collections without `thumbnail`
   */
  let image = null;
  if (item.thumbnail)
    image = useGetResourceImage(vault.get(item.thumbnail[0].id), "300,");

  /**
   * todo: be more defensive about collections without `homepage`
   */
  let url = null;
  if (item.homepage) url = item.homepage[0].id;

  return (
    <ItemStyled>
      {preview && focused && <div></div>}
      <Anchor
        href={url}
        tabIndex={0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOver={onFocus}
        onMouseOut={onBlur}
        ref={itemRef}
      >
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
