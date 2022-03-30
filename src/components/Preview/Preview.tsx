import { Manifest } from "@iiif/presentation-3";
import Figure from "components/Figure/Figure";
import { useGetLabel } from "hooks/useGetLabel";
import React, { useEffect, useRef, useState } from "react";
import { Controls, Label, Overlay, PreviewStyled } from "./Preview.styled";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface PreviewProps {
  manifest: Manifest;
}

const Preview: React.FC<PreviewProps> = ({ manifest }) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <PreviewStyled>
      <AspectRatio.Root ratio={1 / 1}>
        <Overlay>
          <Controls>
            <button>prev</button>
            <button>next</button>
          </Controls>
          <Label>
            {activeItem + 1} of {manifest.items.length}
          </Label>
        </Overlay>
      </AspectRatio.Root>
    </PreviewStyled>
  );
};

export default Preview;
