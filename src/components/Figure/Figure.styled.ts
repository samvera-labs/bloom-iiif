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
  position: "relative",
  display: "flex",
  flexDirection: "column",
  objectFit: "cover",
  zIndex: "1",
  width: "100%",
  transition: "all 200ms ease-in-out",
  opacity: 0,
  borderRadius: "3px",

  [`&.loaded`]: {
    opacity: 1,
  },
});

const Placeholder = styled("span", {
  display: "flex",
  position: "relative",
  backgroundColor: "#e0e0e0",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  transition: "all 200ms ease-in-out",
  borderRadius: "3px",
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
