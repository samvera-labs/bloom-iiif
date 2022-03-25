import { styled } from "stitches";
import { Placeholder } from "../Figure/Figure.styled";

const Anchor = styled("a", {
  color: "black",
  textDecoration: "none",
});

const ItemStyled = styled("div", {
  transition: "all 150ms ease-in-out",
  width: "calc(100% / 4)",
  zIndex: "0",
  boxShadow: "none",
  borderRadius: "3px",

  "&:hover": {
    [`${Placeholder}`]: {
      boxShadow: "3px 3px 8px #0003",
    },
  },
});

export { Anchor, ItemStyled };
