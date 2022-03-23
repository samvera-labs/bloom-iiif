import { styled } from "stitches";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "$4",
  margin: "0",
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
