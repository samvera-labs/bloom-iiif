import { styled } from "stitches";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "$4",
  margin: "0",
  color: "$primary",
});

const Title = styled("span", {
  fontSize: "$5",
  fontWeight: "800",

  a: {
    color: "$accent",
    textDecoration: "none",
  },
});

const Description = styled("span", {
  fontSize: "$3",
  marginTop: "$2",
});

export { HeaderStyled, Title, Description };
