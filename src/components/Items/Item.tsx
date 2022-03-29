import React, { useEffect, useState, useRef } from "react";
import Figure from "components/Figure/Figure";
import { Collection, Manifest } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";
import Preview from "components/Preview/Preview";

interface ItemProps {
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const store = useCollectionState();
  const { vault } = store;

  const itemRef = useRef(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [manifest, setManifest] = useState<Manifest>();

  useEffect(() => {
    isFocused
      ? setTimeout(() => {
          if (!manifest)
            vault
              .loadCollection(item.id)
              .then((data: any) => setManifest(data))
              .catch((error: any) => {
                console.error(`Manifest failed to load: ${error}`);
              });
        }, 1000)
      : null;
    return;
  }, [isFocused]);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
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

  console.log(manifest);

  return (
    <ItemStyled>
      <Anchor
        href={url}
        tabIndex={0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
        ref={itemRef}
      >
        {isFocused && (
          <Preview>
            <div></div>
          </Preview>
        )}

        <Figure
          caption={useGetLabel(item.label)}
          description={useGetLabel(item.summary)}
          image={image}
          isFocused={isFocused}
        />
      </Anchor>
    </ItemStyled>
  );
};

export default Item;
