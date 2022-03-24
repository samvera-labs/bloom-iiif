import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  padding: "0",
  margin: "0",
  flexGrow: "0",
  flexShrink: "0",

  figcaption: {
    display: "flex",
    flexDirection: "column",
  },
});

const Image = styled("img", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#e0e0e0",
  objectFit: "contain",
  transition: "all 200ms ease-in-out",
  opacity: 0,
  width: "100%",
  height: "100%",

  [`&.loaded`]: {
    opacity: 1,
  },
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

export { FigureStyled, Image, Title, Description };
