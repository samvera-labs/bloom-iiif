import { styled } from "stitches";

const Width = styled("div", {
  position: "absolute",
  width: "100%",
  backgroundColor: "green",
});

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 $2",
  flexGrow: "0",
  flexShrink: "0",
  borderRadius: "3px",

  img: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    objectFit: "cover",
    zIndex: "0",
    width: "100%",
    height: "100%",
    color: "transparent",
  },

  video: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    objectFit: "cover",
    zIndex: "1",
    width: "100%",
    height: "100%",
    color: "transparent",
    opacity: "0",
    transition: "$all",
    borderRadius: "3px",
  },

  figcaption: {
    display: "flex",
    flexDirection: "column",
    padding: "$2 0",
    color: "$primary",
    transition: "$load",
  },

  variants: {
    isFocused: {
      true: {
        margin: "-$2 -$2 0",

        video: { opacity: "1" },

        figcaption: {
          padding: "$2",
          color: "$accent",
        },

        [`& ${Width}`]: {
          width: "calc(100% - ($2 * 2))",
        },
      },
    },
  },
});

const Placeholder = styled("span", {
  display: "flex",
  position: "relative",
  backgroundColor: "$secondaryAlt",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  boxShadow: "none",
  transition: "$all",
});

const Title = styled("span", {
  fontSize: "$3",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "$1",
  marginTop: "$1",
  color: "$primary",
});

export { FigureStyled, Image, Placeholder, Title, Description, Width };
