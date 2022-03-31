import React, { useEffect, useRef } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { VideoStyled } from "./Video.styled";
import { ContentResource } from "@iiif/presentation-3";

interface VideoProps {
  resource: ContentResource;
  isFocused: boolean;
}

const Video: React.FC<VideoProps> = ({ resource, isFocused }) => {
  const videoRef = useRef();

  useEffect(() => handleLoop(), [isFocused, resource]);

  const handleLoop = () => {
    const videoEl = videoRef.current;
    videoEl.currentTime = 262;
    videoEl.play();
    setTimeout(() => {
      videoEl.pause();
    }, 10000);
  };

  return (
    <VideoStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        <video loop muted ref={videoRef} onPause={handleLoop}>
          <source
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/New_York_1911.webm"
            type="video/mp4"
          />
        </video>
      </AspectRatio.Root>
    </VideoStyled>
  );
};

export default Video;
