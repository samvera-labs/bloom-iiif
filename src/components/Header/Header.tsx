import React, { useEffect, useState } from "react";
import { ContentResource, InternationalString } from "@iiif/presentation-3";
import { HeaderStyled } from "./Header.styled";
// import { Homepage, Label, Summary } from "@samvera/nectar-iiif";

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
      ..
      {/* {hasHomepage ? (
        <Homepage homepage={homepage} className="bloom-header-homepage">
          <Label label={label} as="span" className="bloom-header-label" />
        </Homepage>
      ) : (
        <Label label={label} as="span" className="bloom-header-label" />
      )}

      {summary && (
        <Summary summary={summary} as="span" className="bloom-header-summary" />
      )} */}
    </HeaderStyled>
  );
};

export default Header;
