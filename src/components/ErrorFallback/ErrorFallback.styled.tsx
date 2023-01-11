import { styled } from "stitches";

const ErrorFallbackStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Headline = styled("p", {
  fontWeight: "bold",
});

const ErrorBody = styled("span", {});

export { ErrorFallbackStyled, ErrorBody, Headline };
