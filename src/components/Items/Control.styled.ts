import { styled } from "stitches";

const Gradient = styled("div", {
  position: "absolute",
  transition: "all 150ms ease-in-out",
  background: "black",
  opacity: "0",
});

const Icon = styled("div", {
  position: "absolute",
  transition: "all 150ms ease-in-out",
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

  span: {
    display: "flex",
    width: "$3",
    height: "$3",
    borderRadius: "100%",
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
      boxShadow: "0px 0px 19px #0003",
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
          right: "calc(-$4 / 2)",
          marginTop: "calc(-$4 / 2)",
        },

        [`&:hover > ${Icon}`]: {
          marginRight: "25px",
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
          left: "calc(-$4 / 2)",
          marginTop: "calc(-$4 / 2)",
        },

        [`&:hover > ${Icon}`]: {
          marginLeft: "25px",
        },
      },
    },
  },
});

export { ControlStyled, Gradient, Icon };
