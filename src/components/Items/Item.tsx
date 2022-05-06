import React, { useEffect, useState, useRef } from "react";
import Figure from "components/Figure/Figure";
import {
  CanvasNormalized,
  Collection,
  ContentResource,
  Manifest,
} from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";
import Preview from "components/Preview/Preview";
import { getCanvasResource } from "lib/iiif";

interface ItemProps {
  index: number;
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ index, item }) => {
  const store = useCollectionState();
  const { vault } = store;

  const itemRef = useRef(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeCanvas, setActiveCanvas] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<ContentResource>(item.thumbnail);
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

  useEffect(() => {
    const thumbnail = vault.get(item.thumbnail);
    setThumbnail(thumbnail);
  }, []);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const handleActiveCanvas = (increment: number) => {
    if (!manifest) return;

    const targetCanvas: number = activeCanvas + increment;

    const canvas: CanvasNormalized = vault.get(manifest.items[targetCanvas]);

    const resource = getCanvasResource(canvas, vault);
    const thumbnail = vault.get(resource);

    setThumbnail(thumbnail);
    setActiveCanvas(targetCanvas);
  };

  return (
    <ItemStyled>
      <Anchor
        tabIndex={0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
        ref={itemRef}
      >
        <Figure
          label={item.label}
          thumbnail={thumbnail}
          index={index}
          isFocused={isFocused}
        />
        <Preview
          manifest={manifest as Manifest}
          activeCanvas={activeCanvas}
          handleActiveCanvas={handleActiveCanvas}
          isFocused={isFocused}
        />
      </Anchor>
    </ItemStyled>
  );
};

export default Item;
