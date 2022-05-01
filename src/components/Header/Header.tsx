import React, { useEffect, useState } from "react";
import { ContentResource, InternationalString } from "@iiif/presentation-3";
import { HeaderStyled } from "./Header.styled";
import { Homepage, Label, Summary } from "@samvera/nectar-iiif";

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
      {hasHomepage ? (
        <Homepage homepage={homepage}>
          <Label label={label} as="span" />
        </Homepage>
      ) : (
        <Label label={label} as="span" />
      )}

      {summary && <Summary summary={summary} as="span" />}
    </HeaderStyled>
  );
};

export default Header;
