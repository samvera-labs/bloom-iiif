import { styled } from "stitches";

const Gradient = styled("div", {
  position: "absolute",
  background: "black",
  borderRadius: "3px",
  opacity: "0",
  transition: "$all",
});

const Icon = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "$4",
  height: "$4",
  borderRadius: "100%",
  backgroundColor: "white",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  boxShadow: "none",
  transform: "none",
  transition: "$all",

  svg: {
    display: "flex",
    width: "$3",
    height: "$3",
    fill: "$primary",
    stroke: "$primary",
    color: "$primary",
    transition: "$all",
  },
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

    [`> ${Icon}`]: {
      boxShadow: "3px 3px 11px #0003",

      svg: {
        fill: "$accent",
        stroke: "$accent",
        color: "$accent",
      },
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
            "linear-gradient(270deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 98%)",
        },

        [`> ${Icon}`]: {
          right: "calc(-$4 / 2)",
          marginTop: "calc(-$4 / 2)",
        },

        [`&:hover > ${Icon}`]: {
          marginRight: "$1",
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
            "linear-gradient(90deg, rgba(0,0,0,0.618) 38.2%, rgba(0,0,0,0) 98%)",
        },

        [`> ${Icon}`]: {
          left: "calc(-$4 / 2)",
          marginTop: "calc(-$4 / 2)",
        },

        [`&:hover > ${Icon}`]: {
          marginLeft: "$1",
        },
      },
    },
  },
});

export { ControlStyled, Gradient, Icon };
