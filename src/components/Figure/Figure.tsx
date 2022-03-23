import React from "react";
import { Description, FigureStyled, Image, Title } from "./Figure.styled";

interface FigureProps {
  caption: string;
}

const Figure: React.FC<FigureProps> = ({ caption }) => {
  return (
    <FigureStyled>
      <Image />
      <figcaption>
        <Title>{caption}</Title>
        <Description>Image</Description>
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
