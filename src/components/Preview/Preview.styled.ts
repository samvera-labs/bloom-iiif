import { styled } from "stitches";

const PreviewStyled = styled("div", {
  position: "absolute",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100%",
});

const Overlay = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  zIndex: "1",
});

const Controls = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const Label = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000c",
  color: "$secondary",
  fontSize: "$1",
  padding: "$1",
});

export { Controls, Label, Overlay, PreviewStyled };
