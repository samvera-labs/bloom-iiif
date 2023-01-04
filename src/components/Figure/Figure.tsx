import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import {
  Description,
  FigureStyled,
  Placeholder,
  Title,
  Width,
} from "./Figure.styled";
import React, { useRef } from "react";
import { InternationalString } from "@iiif/presentation-3";
import { Thumbnail } from "@samvera/nectar-iiif";
import StatusIcon from "./StatusIcon";

interface FigureProps {
  label: InternationalString;
  status: number;
  summary?: InternationalString;
  thumbnail: any;
  index: number;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  isFocused,
  label,
  status,
  summary,
  thumbnail,
}) => {
  const widthRef = useRef<HTMLDivElement>(null);

  return (
    <FigureStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <Width ref={widthRef} />
        <Placeholder>
          {thumbnail && status === 200 ? (
            <Thumbnail altAsLabel={label} thumbnail={thumbnail} />
          ) : (
            <StatusIcon status={status} />
          )}
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
