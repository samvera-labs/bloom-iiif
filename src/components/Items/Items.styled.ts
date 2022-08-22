import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { styled } from "stitches";
import { ItemStyled } from "./Item.styled";

const ItemsStyled = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  marginRight: "-$4",

  [`& ${ItemStyled}`]: {
    marginRight: "$4",
  },
});

export { ItemsStyled };
