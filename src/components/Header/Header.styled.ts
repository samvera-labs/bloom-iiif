import { styled } from "stitches";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "1rem",
  margin: "0 0 0.382rem",
});

const Title = styled("span", {
  marginTop: "0.618rem",
  fontSize: "1.618rem",
  fontWeight: "700",
});

const Description = styled("span", {
  fontSize: "1rem",
  marginTop: "0.618rem",
});

export { HeaderStyled, Title, Description };
