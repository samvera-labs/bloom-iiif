import { styled } from "stitches";

const ControlStyled = styled("button", {
  position: "absolute",
  left: "50px",
  height: "100%",
  zIndex: "1",
  border: "none",
  opacity: "0",
  cursor: "pointer",
  width: "50px",
  backgroundColor: "red",

  "&:hover": {
    opacity: "1",
  },

  variants: {
    direction: {
      next: {
        left: "unset",
        right: "0",
      },
      previous: {
        left: "0",
        right: "unset",
      },
    },
  },
});

export { ControlStyled };
