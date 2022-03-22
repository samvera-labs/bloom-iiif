import React from "react";
import { useGetLabel } from "hooks/useGetLabel";
import { Collection, Manifest } from "@iiif/presentation-3";
import { FigureStyled, Image, Subtext, Title } from "./Figure.styled";

interface FigureProps {
  item: Collection | Manifest;
}

const Figure: React.FC<FigureProps> = ({ item }) => {
  const { label } = item;
  return (
    <FigureStyled>
      <Image style={{ width: "100%", height: `120px` }} />
      <Title>{useGetLabel(label)}</Title>
      <Subtext>Image</Subtext>
    </FigureStyled>
  );
};

export default Figure;
