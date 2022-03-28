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

interface FigureProps {
  caption: string;
  description: string;
  image: string;
  isFocused: boolean;
}

const Figure: React.FC<FigureProps> = ({
  caption,
  description,
  image,
  isFocused,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setLoaded(true);
  }, []);

  return (
    <FigureStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <Placeholder>
          <Image
            src={image}
            ref={imgRef}
            onLoad={() => setLoaded(true)}
            className={clsx("source", loaded && "loaded")}
          />
        </Placeholder>
      </AspectRatio.Root>
      <figcaption>
        <Title>{caption}</Title>
        <Description>{description}</Description>
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
