import { styled } from "stitches";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "1rem",
  margin: "0 0 $1",
});

const Title = styled("span", {
  fontSize: "1.382rem",
  fontWeight: "800",
});

const Description = styled("span", {
  fontSize: "1rem",
  marginTop: "$1",
});

export { HeaderStyled, Title, Description };
