import { SwiperProps } from "swiper/react";

export interface ConfigOptions {
  breakpoints?: SwiperBreakpoints;
}

export type SwiperBreakpoints = SwiperProps["breakpoints"];
