import { styled } from "stitches";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "1rem",
  margin: "0 0 0.382rem",
});

const Title = styled("span", {
  fontSize: "1.382rem",
  fontWeight: "800",
});

const Description = styled("span", {
  fontSize: "1rem",
  marginTop: "0.382rem",
});

export { HeaderStyled, Title, Description };
