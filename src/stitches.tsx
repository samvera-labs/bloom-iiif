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
    primary: "#342F2E",
    primaryMuted: "#716C6B",
    primaryAlt: "#000000",

    /*
     * Key brand color(s).
     * Must contrast to 4.5 or greater with `secondary`.
     */
    accent: "#4E2A84",
    accentMuted: "#B6ACD1",
    accentAlt: "#401F68",

    /*
     * White and light grays in a light theme.
     * Must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "#FFFFFF",
    secondaryMuted: "#F0F0F0",
    secondaryAlt: "#CCCCCC",
  },
  fonts: {
    sans: "'Akkurat Pro Regular', Arial, sans-serif",
    sansBold: "Akkurat Pro Bold, Arial, sans-serif",
    display: "Campton, 'Akkurat Pro Regular', Arial, sans-serif",
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
    all: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
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
