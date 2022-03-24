import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Background,
  Description,
  FigureStyled,
  Image,
  ImageWrapper,
  Placeholder,
  Title,
} from "./Figure.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface FigureProps {
  caption: string;
  description: string;
  image: string;
}

const Figure: React.FC<FigureProps> = ({ caption, description, image }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <FigureStyled>
      <AspectRatio.Root ratio={1 / 0.618}>
        <Placeholder>
          <ImageWrapper className={clsx("source", loaded && "loaded")}>
            <Image src={image} ref={imgRef} onLoad={() => setLoaded(true)} />
            <Background
              style={{
                backgroundImage: `url("${image}")`,
              }}
            />
          </ImageWrapper>
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
