import React, { useEffect, useState } from "react";
import { ContentResource, InternationalString } from "@iiif/presentation-3";
import { HeaderContent, HeaderControls, HeaderStyled } from "./Header.styled";
import { Homepage, Label, Summary } from "@samvera/nectar-iiif";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";
import { ControlStyled, Icon } from "./Control.styled";

interface HeaderProps {
  label: InternationalString;
  summary: InternationalString;
  homepage: ContentResource[];
}

const Header: React.FC<HeaderProps> = ({ label, summary, homepage }) => {
  const [hasHomepage, setHasHomepage] = useState<boolean>(false);

  useEffect(() => {
    if (homepage.length > 0) setHasHomepage(true);
  }, [homepage]);

  return (
    <HeaderStyled>
      <HeaderContent>
        {hasHomepage ? (
          <Homepage homepage={homepage} className="bloom-header-homepage">
            <Label label={label} as="span" className="bloom-header-label" />
          </Homepage>
        ) : (
          <Label label={label} as="span" className="bloom-header-label" />
        )}

        {summary && (
          <Summary
            summary={summary}
            as="span"
            className="bloom-header-summary"
          />
        )}
      </HeaderContent>
      <HeaderControls>
        <ControlStyled className="bloom-previous" aria-label="previous">
          <Icon>
            <PreviousIcon />
          </Icon>
        </ControlStyled>
        <ControlStyled className="bloom-next" aria-label="next">
          <Icon>
            <NextIcon />
          </Icon>
        </ControlStyled>
      </HeaderControls>
    </HeaderStyled>
  );
};

export default Header;
