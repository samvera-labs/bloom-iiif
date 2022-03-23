import React from "react";
import { Description, FigureStyled, Image, Title } from "./Figure.styled";

interface FigureProps {
  caption: string;
}

const Figure: React.FC<FigureProps> = ({ caption }) => {
  return (
    <FigureStyled>
      <Image />
      <Title>{caption}</Title>
      <Description>Image</Description>
    </FigureStyled>
  );
};

export default Figure;
