import React, { useEffect, useState } from "react";
import Figure from "components/Figure/Figure";
import {
  CanvasNormalized,
  Collection,
  IIIFExternalWebResource,
  Manifest,
} from "@iiif/presentation-3";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";
import Preview from "components/Preview/Preview";
import { getCanvasResource } from "lib/iiif";
import Placeholder from "./Placeholder";
import { FetchCredentials } from "../../../types/types";

interface ItemProps {
  credentials: FetchCredentials;
  index: number;
  item: Collection | Manifest;
}

const Item: React.FC<ItemProps> = ({ credentials, index, item }) => {
  const store = useCollectionState();
  const { vault } = store;

  const [activeCanvas, setActiveCanvas] = useState<number>(0);
  const [href, setHref] = useState<string>();
  const [id, setId] = useState<string>(item.id);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [manifest, setManifest] = useState<Collection | Manifest>();
  const [placeholder, setPlaceholder] = useState<string>();
  const [status, setStatus] = useState<number>(200);
  const [thumbnail, setThumbnail] = useState<IIIFExternalWebResource[]>([]);

  useEffect(() => {
    isFocused && !manifest
      ? vault
          .load(item.id)
          .then((data: any) => setManifest(data))
          .catch((error: any) => {
            console.error(`Manifest failed to load: ${error}`);
          })
      : null;
    return;
  }, [isFocused]);

  useEffect(() => {
    if (item && item?.thumbnail && item.thumbnail?.length > 0) {
      const iiifThumbnail = vault.get(
        item.thumbnail
      ) as IIIFExternalWebResource[];

      setThumbnail(iiifThumbnail);
      setPlaceholder(iiifThumbnail[0].id);
    }
    if (item?.homepage && item.homepage?.length > 0)
      setHref(item.homepage[0].id);
  }, []);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const handleActiveCanvas = (increment: number) => {
    if (!manifest) return;

    const targetCanvas: number = activeCanvas + increment;

    if (Array.isArray(manifest.items) && manifest.items[targetCanvas]) {
      const canvas: CanvasNormalized = vault.get(manifest.items[targetCanvas]);
      const resource = getCanvasResource(canvas, vault);
      const canvasThumbnail = vault.get(resource) as IIIFExternalWebResource[];

      if (canvasThumbnail.length > 0 && canvasThumbnail[0].id) {
        setThumbnail(canvasThumbnail);
        fetch(canvasThumbnail[0].id, {
          method: "GET",
          headers: {
            accept: "image/*",
          },
          credentials: credentials,
        })
          .then((response) => setStatus(response.status))
          .catch((error) => setStatus(error.status));
      }

      setId(canvas.id);
      setActiveCanvas(targetCanvas);
    }
  };

  useEffect(() => {
    if (manifest) handleActiveCanvas(0);
  }, [manifest]);

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
        {placeholder && <Placeholder backgroundImage={placeholder} />}
        <Figure
          index={index}
          isFocused={isFocused}
          key={id}
          label={item.label}
          summary={item.summary}
          status={status}
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
