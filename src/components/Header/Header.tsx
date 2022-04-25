import React from "react";
import { ContentResource, InternationalString } from "@iiif/presentation-3";
import { HeaderStyled } from "./Header.styled";
import { Homepage, Label, Summary } from "@samvera/nectar-iiif";

interface HeaderProps {
  label: InternationalString;
  summary: InternationalString | null;
  homepage: ContentResource[] | null;
}

const Header: React.FC<HeaderProps> = ({ label, summary, homepage = null }) => {
  return (
    <HeaderStyled>
      <Homepage homepage={homepage} className="bloom-header-homepage">
        <Label label={label} as="span" className="bloom-header-label" />
      </Homepage>
      {summary && (
        <Summary summary={summary} as="span" className="bloom-header-summary" />
      )}
    </HeaderStyled>
  );
};

export default Header;
