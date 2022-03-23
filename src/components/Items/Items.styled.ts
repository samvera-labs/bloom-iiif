import { styled } from "stitches";
import { FigureStyled } from "../Figure/Figure.styled";

const ItemsStyled = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",

  [`> a`]: {
    display: "flex",
    marginRight: "$4",
    textDecoration: "none",
    color: "black",

    "&:last-child": {
      marginRight: "0",
    },
  },
});

export { ItemsStyled };
