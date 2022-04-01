import { Manifest } from "@iiif/presentation-3";
import Figure from "components/Figure/Figure";
import { useGetLabel } from "hooks/useGetLabel";
import React, { useEffect, useRef, useState } from "react";
import { Controls, Label, Overlay, PreviewStyled } from "./Preview.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";

interface PreviewProps {
  activeCanvas: number;
  handleActiveCanvas: (e: React.MouseEvent) => void;
  isFocused: boolean;
  manifest: Manifest;
}

const Preview: React.FC<PreviewProps> = ({
  activeCanvas,
  handleActiveCanvas,
  isFocused,
  manifest,
}) => {
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const canvasCurrent: number = activeCanvas + 1;
  let canvasCount: number = 0;

  if (manifest) canvasCount = manifest.items.length;

  useEffect(() => {
    canvasCurrent <= 1 ? setHasPrev(false) : setHasPrev(true);
    canvasCurrent >= canvasCount ? setHasNext(false) : setHasNext(true);
  }, [activeCanvas, manifest]);

  return (
    <PreviewStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        {manifest && (
          <Overlay>
            <Controls onClick={(e) => e.preventDefault()}>
              {hasPrev && (
                <button onClick={() => handleActiveCanvas(-1)}>
                  <PreviousIcon />
                </button>
              )}
              {hasNext && (
                <button onClick={() => handleActiveCanvas(1)}>
                  <NextIcon />
                </button>
              )}
            </Controls>
            <Label onClick={(e) => e.preventDefault()}>
              {canvasCurrent} of {canvasCount}
            </Label>
          </Overlay>
        )}
      </AspectRatio.Root>
    </PreviewStyled>
  );
};

export default Preview;
