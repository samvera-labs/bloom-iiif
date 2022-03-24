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
  objectFit: "contain",
  zIndex: "1",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Background = styled("span", {
  position: "absolute",
  display: "block",
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  width: "120%",
  height: "120%",
  left: "-10%",
  top: "-10%",
  zIndex: "0",
  filter: "blur(50px) brightness(0.5)",
  opacity: "1",
});

const ImageWrapper = styled("span", {
  display: "flex",
  transition: "all 200ms ease-in-out",
  width: "100%",
  height: "100%",
  textAlign: "center",
  justifyContent: "center",
  opacity: 0,

  [`&.loaded`]: {
    opacity: 1,
  },
});

const Placeholder = styled("span", {
  display: "flex",
  position: "relative",
  backgroundColor: "#666",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  transition: "all 200ms ease-in-out",
  borderRadius: "3px",
  overflow: "hidden",
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

export {
  FigureStyled,
  Image,
  ImageWrapper,
  Background,
  Placeholder,
  Title,
  Description,
};
