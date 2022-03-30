import { styled } from "stitches";

const VideoStyled = styled("div", {
  position: "absolute",
  zIndex: "2",
  left: "0",
  top: "0",
  width: "100%",
  opacity: "0",
  transition: "$load",

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  variants: {
    isFocused: {
      true: {
        opacity: "1",
        left: "-$2",
        top: "-$2",
        width: "calc(100% + (0.618rem * 2))",
      },
    },
  },
});

export { VideoStyled };
