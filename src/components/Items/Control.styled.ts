import { styled } from "stitches";

const ControlStyled = styled("button", {
  position: "absolute",
  height: "100%",
  zIndex: "1",
  border: "none",
  opacity: "0",
  cursor: "pointer",
  transition: "all 200ms ease-in-out",
  background: "black",
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 100%)",

  "&[value=next]": {
    background: "black",
    background:
      "linear-gradient(270deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 100%)",
  },

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
