import { styled } from "stitches";
import { ItemStyled } from "./Item.styled";

const ItemsStyled = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",

  [`> ${ItemStyled}`]: {
    marginRight: "$4",

    "&:last-child": {
      marginRight: "0",
    },
  },
});

export { ItemsStyled };
