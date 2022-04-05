import React, { useEffect, useState, useRef } from "react";
import Figure from "components/Figure/Figure";
import {
  CanvasNormalized,
  Collection,
  ContentResource,
  InternationalString,
  Manifest,
} from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import { useGetResourceImage } from "hooks/useGetResourceImage";
import { useCollectionState } from "context/collection-context";
import { Anchor, ItemStyled } from "./Item.styled";
import Preview from "components/Preview/Preview";

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
  const [image, setImage] = useState<string | null>();
  const [video, setVideo] = useState<ContentResource | null>();
  const [manifest, setManifest] = useState<Manifest>();

  useEffect(() => {
    if (item.thumbnail)
      setImage(useGetResourceImage(vault.get(item.thumbnail[0].id), "300,"));
  }, []);

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
    if (!manifest) return;

    const canvas: CanvasNormalized = vault.get(manifest.items[activeCanvas]);
    setImage(getCanvasResource(canvas));
  }, [manifest]);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  /**
   * todo: be more defensive about collections without `homepage`
   */
  let url = "";
  if (item.homepage) url = item.homepage[0].id;

  const handleActiveCanvas = (increment: number) => {
    if (!manifest) return;

    const targetCanvas: number = activeCanvas + increment;
    const canvas: CanvasNormalized = vault.get(manifest.items[targetCanvas]);

    setImage(getCanvasResource(canvas));
    setActiveCanvas(targetCanvas);
  };

  /**
   * todo: move this to a hook?
   * @param canvas
   * @returns
   */
  const getCanvasResource = (canvas: CanvasNormalized) => {
    /**
     * resolve type bugs with multicanvas bodleian manifests
     */
    const annotationPage = vault.get(canvas.items[0]);
    const annotation = vault.get(annotationPage.items[0]);
    const contentResource = vault.get(annotation.body[0]);

    if (contentResource.type === "Video") setVideo(contentResource);

    if (canvas.thumbnail.length > 0)
      return useGetResourceImage(vault.get(canvas.thumbnail[0].id), "300,");

    if (contentResource.type === "Image") {
      return useGetResourceImage(contentResource, "300,");
    }
  };

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
        <Figure
          caption={
            useGetLabel(item.label as InternationalString) as unknown as string
          }
          description={
            useGetLabel(
              item.summary as InternationalString
            ) as unknown as string
          }
          image={image as string | null}
          index={index}
          video={video as ContentResource | null}
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
