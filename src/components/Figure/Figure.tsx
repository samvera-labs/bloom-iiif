import React from "react";
import { Description, FigureStyled, Image, Title } from "./Figure.styled";

interface FigureProps {
  caption: string;
  description: string;
}

const Figure: React.FC<FigureProps> = ({ caption, description }) => {
  return (
    <FigureStyled>
      <Image />
      <figcaption>
        <Title>{caption}</Title>
        <Description>{description}</Description>
      </figcaption>
    </FigureStyled>
  );
};

export default Figure;
