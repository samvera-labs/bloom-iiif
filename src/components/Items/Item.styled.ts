import { styled } from "stitches";
import { Placeholder } from "../Figure/Figure.styled";

const Anchor = styled("a", {
  color: "black",
  textDecoration: "none",
});

const ItemStyled = styled("div", {
  width: "calc(100% / 4)",
  zIndex: "0",
  borderRadius: "3px",

  "&:hover": {
    [`${Placeholder}`]: {
      boxShadow: "3px 3px 11px #0003",
    },
  },
});

export { Anchor, ItemStyled };
