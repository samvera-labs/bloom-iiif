import { styled } from "../../../stitches";

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
  fontSize: "15px",
  fontWeight: "700",
  color: "black",
});

const Subtext = styled("span", {
  fontSize: "12px",
  color: "black",
  marginTop: "6px",
});

export { FigureStyled, Image, Title, Subtext };
