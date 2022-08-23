import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { styled } from "stitches";
import { ItemStyled } from "./Item.styled";

const ItemsStyled = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",
});

export { ItemsStyled };
