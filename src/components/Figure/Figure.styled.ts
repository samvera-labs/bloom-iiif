import { styled } from "stitches";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "$3",
  margin: "0",
});

const Image = styled("div", {
  backgroundColor: "black",
  width: "$8",
  height: "$7",
});

const Title = styled("span", {
  marginTop: "$2",
  fontSize: "$3",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "$2",
  marginTop: "$1",
});

export { FigureStyled, Image, Title, Description };
