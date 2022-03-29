import { styled } from "stitches";
import { FigureStyled, Placeholder } from "../Figure/Figure.styled";

const Anchor = styled("a", {
  color: "black",
  textDecoration: "none",
});

const ItemStyled = styled("div", {
  width: "calc(100% / 4)",
  zIndex: "0",
  borderRadius: "3px",

  "&:hover": {
    [`${FigureStyled}`]: {
      boxShadow: "3px 3px 11px #0003",
    },
    [`${Placeholder}`]: {
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});

export { Anchor, ItemStyled };
