import React, { useEffect, useRef, useState } from "react";
import { FigureStyled, Placeholder, Width } from "./Figure.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Video from "./Video";
import { useCollectionDispatch } from "context/collection-context";
import { Label, Thumbnail } from "@samvera/nectar-iiif";

interface FigureProps {
  label: any;
  thumbnail: any;
  index: number;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  label,
  thumbnail,
  index,
  isFocused,
}) => {
  const dispatch: any = useCollectionDispatch();
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

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
          <Thumbnail thumbnail={thumbnail} />
        </Placeholder>
      </AspectRatio.Root>
      <figcaption>
        <Label label={label} />
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
