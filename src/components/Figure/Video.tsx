import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { VideoStyled } from "./Video.styled";

interface VideoProps {}

const Video: React.FC<VideoProps> = ({ isFocused }) => {
  return (
    <VideoStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <video autoPlay loop muted>
          <source
            src="http://techslides.com/demos/sample-videos/small.mp4"
            type="video/mp4"
          />
        </video>
      </AspectRatio.Root>
    </VideoStyled>
  );
};

export default Video;
