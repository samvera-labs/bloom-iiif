import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 $2",
  flexGrow: "0",
  flexShrink: "0",
  transition: "all 150ms ease-in-out",

  figcaption: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
    transition: "all 150ms ease-in-out",
  },

  variants: {
    isFocused: {
      true: {
        margin: "-$2 -$2 0",

        figcaption: {
          padding: "0 $2",
        },
      },
    },
  },
});

const Image = styled("img", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  objectFit: "cover",
  zIndex: "1",
  width: "100%",
  transition: "all 150ms ease-in-out",
  opacity: 0,
  borderRadius: "3px",

  [`&.loaded`]: {
    opacity: 1,
  },
});

const Placeholder = styled("span", {
  transition: "all 150ms ease-in-out",
  display: "flex",
  position: "relative",
  backgroundColor: "#e0e0e0",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  boxShadow: "none",
});

const Title = styled("span", {
  marginTop: "$2",
  fontSize: "$3",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "$1",
  marginTop: "$1",
});

export { FigureStyled, Image, Placeholder, Title, Description };
