import { styled } from "stitches";
import { FigureStyled, Placeholder } from "../Figure/Figure.styled";

const Anchor = styled("a", {
  color: "black",
  textDecoration: "none",
});

const ItemStyled = styled("div", {
  position: "relative",
  zIndex: "0",
  borderRadius: "3px",
});

export { Anchor, ItemStyled };
