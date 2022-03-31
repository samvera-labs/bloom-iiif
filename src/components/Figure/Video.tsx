import React, { useRef } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { VideoStyled } from "./Video.styled";
import { ContentResource } from "@iiif/presentation-3";

interface VideoProps {
  video: ContentResource;
  isFocused: boolean;
}

const Video: React.FC<VideoProps> = ({ video, isFocused }) => {
  const videoRef = useRef();

  return (
    <VideoStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <video autoPlay loop muted ref={videoRef}>
          <source
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/New_York_1911.webm#t=262,292"
            type="video/mp4"
          />
        </video>
      </AspectRatio.Root>
    </VideoStyled>
  );
};

export default Video;
