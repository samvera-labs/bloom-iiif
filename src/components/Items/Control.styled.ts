import { styled } from "stitches";

const Gradient = styled("div", {
  position: "absolute",
  transition: "all 200ms ease-in-out",
  background: "black",
  opacity: "0",
});

const Icon = styled("div", {
  position: "absolute",
  width: "$5",
  height: "$5",
  borderRadius: "100%",
  backgroundColor: "white",
});

const ControlStyled = styled("button", {
  position: "absolute",
  height: "100%",
  zIndex: "1",
  border: "none",
  cursor: "pointer",
  background: "transparent",

  [`&:hover`]: {
    [`> ${Gradient}`]: {
      opacity: 1,
    },
  },

  variants: {
    direction: {
      next: {
        left: "unset",
        right: "0",

        [`> ${Gradient}`]: {
          left: "unset",
          right: "0",
          top: "0",
          background:
            "linear-gradient(270deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 100%)",
        },

        [`> ${Icon}`]: {
          right: "calc(-$5 / 2)",
          marginTop: "calc(-$5 / 2)",
        },
      },
      previous: {
        left: "0",
        right: "unset",

        [`> ${Gradient}`]: {
          left: "0",
          right: "unset",
          top: "0",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 100%)",
        },

        [`> ${Icon}`]: {
          left: "calc(-$5 / 2)",
          marginTop: "calc(-$5 / 2)",
        },
      },
    },
  },
});

export { ControlStyled, Gradient, Icon };
