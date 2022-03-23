import { styled } from "stitches";
import { FigureStyled } from "../Figure/Figure.styled";

const ItemsStyled = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",

  [`& ${FigureStyled}`]: {
    marginRight: "$4",

    "&:last-child": {
      marginRight: "0",
    },
  },
});

export { ItemsStyled };
