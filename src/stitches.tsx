import { createStitches } from "@stitches/react";

/**
 * use Golden Ratio to stitch sizes/spaces
 */
export const gr = (multiplier: number) => {
  return 1.618 ** multiplier;
};

export const rem = 19;

export const sizes = {
  1: "0.382rem",
  2: "0.618rem",
  3: "1rem", // 19px
  4: `1.618rem`,
  5: `calc(1rem * ${gr(2)})`,
  6: `calc(1rem * ${gr(3)})`,
  7: `calc(1rem * ${gr(4)})`,
  8: `calc(1rem * ${gr(5)})`,
  9: `calc(1rem * ${gr(6)})`,
  10: `calc(1rem * ${gr(7)})`,
  11: `calc(1rem * ${gr(8)})`,
  12: `calc(1rem * ${gr(9)})`,
};

export const theme = {
  colors: {
    /*
     * Black and dark grays in a light theme.
     * Must contrast to 4.5 or greater with `secondary`.
     */
    primary: "#1a1d1e",
    primaryMuted: "#26292b",
    primaryAlt: "#151718",

    /*
     * Key brand color(s).
     * Must contrast to 4.5 or greater with `secondary`.
     */
    accent: "#006adc",
    accentMuted: "#5eb0ef",
    accentAlt: "#00254d",

    /*
     * White and light grays in a light theme.
     * Must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "#FFFFFF",
    secondaryMuted: "#e6e8eb",
    secondaryAlt: "#c1c8cd",
  },
  fonts: {
    sans: "'Inter', Arial, sans-serif",
    display: "'Inter', Arial, sans-serif",
  },
  fontSizes: {
    1: "0.611rem",
    2: "0.722rem",
    3: "0.833rem",
    4: "1rem", // 19px
    5: `1.177rem`,
    6: `1.318rem`,
    7: `calc(1rem * ${gr(1)})`,
    8: `calc(1rem * ${gr(2)})`,
    9: `calc(1rem * ${gr(3)})`,
  },
  sizes: { ...sizes },
  space: { ...sizes },
  transitions: {
    all: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
    load: "all 1.25s cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export const media = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  xl: "(max-width: 1199px)",
  lg: "(min-width: 1200px)",
};

export const { styled, css, keyframes, createTheme } = createStitches({
  theme,
  media,
});
