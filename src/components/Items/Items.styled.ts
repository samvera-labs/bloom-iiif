import { styled } from "stitches";
import { ItemStyled } from "./Item.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = styled(Swiper, {});

const HeroSliderItem = styled(SwiperSlide, {});

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
