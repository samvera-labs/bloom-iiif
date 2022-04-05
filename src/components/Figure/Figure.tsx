import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Description,
  FigureStyled,
  Image,
  Placeholder,
  Title,
  Width,
} from "./Figure.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ContentResource } from "@iiif/presentation-3";
import Video from "./Video";
import { useCollectionDispatch } from "context/collection-context";

interface FigureProps {
  caption: string;
  description: string;
  image: string | null;
  index: number;
  video: ContentResource | null;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  caption,
  description,
  image,
  index,
  isFocused,
  video,
}) => {
  const dispatch: any = useCollectionDispatch();
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setLoaded(true);
  }, [loaded]);

  useEffect(() => {
    setLoaded(false);
  }, [image]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize: ResizeObserverSize = Array.isArray(
              entry.contentBoxSize
            )
              ? entry.contentBoxSize[0]
              : entry.contentBoxSize;
            dispatch({
              type: "updateItemHeight",
              itemHeight: contentBoxSize.inlineSize,
            });
          }
        }
      }
    );

    if (index === 0 && widthRef.current)
      resizeObserver.observe(widthRef.current);
  }, [index, loaded]);

  return (
    <FigureStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <Width ref={widthRef} />
        <Placeholder>
          {video && <Video resource={video} isFocused={isFocused} />}
          {image && (
            <Image
              src={image as string}
              ref={imgRef}
              onLoad={() => setLoaded(true)}
              className={clsx("source", loaded && "loaded")}
            />
          )}
        </Placeholder>
      </AspectRatio.Root>
      <figcaption>
        <Title>{caption}</Title>
        {description && <Description>{description}</Description>}
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
