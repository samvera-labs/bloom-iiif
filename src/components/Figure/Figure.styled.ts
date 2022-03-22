import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "1rem",
  margin: "0",
});

const Image = styled("div", {
  backgroundColor: "black",
});

const Title = styled("span", {
  marginTop: "0.618rem",
  fontSize: "1rem",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "0.618rem",
  marginTop: "0.382rem",
});

export { FigureStyled, Image, Title, Description };
