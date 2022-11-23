import React, { useEffect, useState } from "react";
import Figure from "components/Figure/Figure";
import {
  CanvasNormalized,
  Collection,
  CollectionNormalized,
  ContentResource,
  Manifest,
  ManifestNormalized,
} from "@iiif/presentation-3";
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

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeResource, setActiveResource] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<ContentResource>(item.thumbnail);
  const [resource, setResource] = useState<Collection | Manifest>();
  const [id, setId] = useState<string>(item.id);

  useEffect(() => {
    if (isFocused && !resource)
      vault.load(item.id).then((data: any) => setResource(data));
    return;
  }, [isFocused]);

  useEffect(() => {
    if (!item?.thumbnail) return;
    const thumbnail = vault.get(item.thumbnail);
    setThumbnail(thumbnail);
  }, []);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const handleActiveResource = (increment: number) => {
    if (!resource) return;

    const target: number = activeResource + increment;
    const targetResource:
      | CanvasNormalized
      | CollectionNormalized
      | ManifestNormalized = vault.get(resource.items[target]);
    const thumbnail = vault.get(targetResource.thumbnail);

    setActiveResource(target);
    setId(targetResource.id);
    setThumbnail(thumbnail);
  };

  useEffect(() => {
    if (resource) handleActiveResource(0);
  }, [resource]);

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
          resource={resource as Manifest | Collection}
          activeResource={activeResource}
          handleActiveResource={handleActiveResource}
          isFocused={isFocused}
        />
      </Anchor>
    </ItemStyled>
  );
};

export default Item;
