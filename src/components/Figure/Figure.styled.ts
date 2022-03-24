import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  padding: "0",
  margin: "0",

  figcaption: {
    display: "flex",
    flexDirection: "column",
  },
});

const Image = styled("img", {
  backgroundColor: "#e0e0e0",
  width: "$8",
  height: "$7",
  objectFit: "contain",
  transition: "all 200ms ease-in-out",
  opacity: 0,

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
