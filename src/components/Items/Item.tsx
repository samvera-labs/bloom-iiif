import React, { useEffect, useState, useRef } from "react";
import Figure from "components/Figure/Figure";
import {
  CanvasNormalized,
  Collection,
  ContentResource,
  Manifest,
} from "@iiif/presentation-3";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";
import Preview from "components/Preview/Preview";
import { getCanvasResource } from "lib/iiif";
import { Homepage } from "@samvera/nectar-iiif";

interface ItemProps {
  index: number;
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ index, item }) => {
  const store = useCollectionState();
  const { vault } = store;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeCanvas, setActiveCanvas] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<ContentResource>(item.thumbnail);
  const [manifest, setManifest] = useState<Manifest>();
  const [id, setId] = useState<string>(item.id);

  useEffect(() => {
    isFocused
      ? setTimeout(() => {
          if (!manifest)
            vault
              .loadManifest(item.id)
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

    setId(canvas.id);
    setThumbnail(thumbnail);
    setActiveCanvas(targetCanvas);
  };

  useEffect(() => {
    if (manifest) handleActiveCanvas(0);
  }, [manifest]);

  let href;

  if (item.homepage?.length > 0) href = item.homepage[0].id;

  return (
    <ItemStyled>
      <Anchor
        href={href}
        tabIndex={0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
      >
        <Figure
          index={index}
          isFocused={isFocused}
          key={id}
          label={item.label}
          summary={item.summary}
          thumbnail={thumbnail}
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
