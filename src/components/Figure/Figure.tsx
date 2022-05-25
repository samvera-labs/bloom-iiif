import React, { useEffect, useRef, useState } from "react";
import {
  Description,
  FigureStyled,
  Placeholder,
  Title,
  Width,
} from "./Figure.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useCollectionDispatch } from "context/collection-context";
import { Label, Summary, Thumbnail } from "@samvera/nectar-iiif";
import { InternationalString } from "@iiif/presentation-3";

interface FigureProps {
  label: InternationalString;
  summary?: InternationalString;
  thumbnail: any;
  index: number;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  index,
  isFocused,
  label,
  summary,
  thumbnail,
}) => {
  const dispatch: any = useCollectionDispatch();
  const [loaded, setLoaded] = useState(false);
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

  if (thumbnail[0].type === "ContentResource") return <></>;

  return (
    <FigureStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <Width ref={widthRef} />
        <Placeholder>
          <Thumbnail
            altAsLabel={label}
            css={{ objectFit: "cover", width: "100%", height: "100%" }}
            onLoad={() => setLoaded(true)}
            thumbnail={thumbnail}
          />
        </Placeholder>
      </AspectRatio.Root>
      <figcaption>
        <Title label={label} />
        {summary && <Description summary={summary} />}
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
