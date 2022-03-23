import { styled } from "stitches";
import { FigureStyled } from "../Figure/Figure.styled";

const ItemsStyled = styled("div", {
  display: "flex",
  flexDirection: "row",

  [`& ${FigureStyled}`]: {
    marginRight: "$4",
  },
});

export { ItemsStyled };
