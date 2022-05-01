import { styled } from "stitches";
import { Label, Summary } from "@samvera/nectar-iiif";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "$4",
  margin: "0",
  color: "$primary",
  lineHeight: "1.4em",

  ".bloom-header-homepage": {
    color: "$accent",
    textDecoration: "none",
  },

  ".bloom-header-label": {
    fontSize: "$6",
    fontWeight: "400",
    fontFamily: "$display",
  },

  ".bloom-header-summary": {
    fontSize: "$4",
    marginTop: "$2",
  },
});

export { HeaderStyled };
