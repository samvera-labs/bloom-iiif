import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Description,
  FigureStyled,
  Image,
  Placeholder,
  Title,
} from "./Figure.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ContentResource } from "@iiif/presentation-3";
import Video from "./Video";

interface FigureProps {
  caption: string;
  description: string;
  image: string | null;
  video: ContentResource | null;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  caption,
  description,
  image,
  isFocused,
  video,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setLoaded(true);
  }, [loaded]);

  useEffect(() => {
    setLoaded(false);
  }, [image]);

  return (
    <FigureStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <Placeholder>
          {video && <Video key={video.id} isFocused={isFocused} />}
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
