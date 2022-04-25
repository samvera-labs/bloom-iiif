import { styled } from "stitches";
import { Label, Summary } from "@samvera/nectar-iiif";

const HeaderStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingBottom: "$4",
  margin: "0",
  color: "$primary",

  ".bloom-header-homepage": {
    color: "$accent",
    textDecoration: "none",
  },

  ".bloom-header-label": {
    fontSize: "$5",
    fontWeight: "400",
    fontFamily: "$display",
  },

  ".bloom-header-summary": {
    fontSize: "$3",
    marginTop: "$2",
  },
});

export { HeaderStyled };
