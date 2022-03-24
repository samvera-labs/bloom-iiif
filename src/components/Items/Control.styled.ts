import { styled } from "stitches";

const ControlStyled = styled("button", {
  position: "absolute",
  left: "50px",
  zIndex: "1",

  variants: {
    direction: {
      next: {
        left: "unset",
        right: 0,
      },
      previous: {
        left: 0,
        right: "unset",
      },
    },
  },
});

export { ControlStyled };
