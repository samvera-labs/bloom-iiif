import { Collection, Manifest } from "@iiif/presentation-3";
import React, { useEffect, useState } from "react";
import { Controls, Label, Overlay, PreviewStyled } from "./Preview.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";

interface PreviewProps {
  activeResource: number;
  handleActiveResource: (increment: number) => void;
  isFocused: boolean;
  resource: Manifest | Collection;
}

const Preview: React.FC<PreviewProps> = ({
  activeResource,
  handleActiveResource,
  isFocused,
  resource,
}) => {
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const current: number = activeResource + 1;
  let count: number = 0;

  if (resource) count = resource.items.length;

  useEffect(() => {
    current <= 1 ? setHasPrev(false) : setHasPrev(true);
    current >= count ? setHasNext(false) : setHasNext(true);
  }, [activeResource, resource]);

  return (
    <PreviewStyled isFocused={isFocused}>
      <AspectRatio.Root ratio={1 / 1}>
        {resource && (
          <Overlay>
            <Controls onClick={(e) => e.preventDefault()}>
              <button
                onClick={() => handleActiveResource(-1)}
                disabled={!hasPrev}
              >
                <PreviousIcon />
              </button>
              <button
                onClick={() => handleActiveResource(1)}
                disabled={!hasNext}
              >
                <NextIcon />
              </button>
            </Controls>
            <Label onClick={(e) => e.preventDefault()}>
              {current} of {count}
            </Label>
          </Overlay>
        )}
      </AspectRatio.Root>
    </PreviewStyled>
  );
};

export default Preview;
