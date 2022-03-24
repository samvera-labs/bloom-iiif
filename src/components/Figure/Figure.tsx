import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Description, FigureStyled, Image, Title } from "./Figure.styled";

interface FigureProps {
  caption: string;
  description: string;
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
      <Image
        src={image}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx("source", loaded && "loaded")}
      />
      <figcaption>
        <Title>{caption}</Title>
        <Description>{description}</Description>
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
