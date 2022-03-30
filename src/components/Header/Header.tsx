import React from "react";
import { useGetLabel } from "hooks/useGetLabel";
import { ContentResource, InternationalString } from "@iiif/presentation-3";
import { Description, HeaderStyled, Title } from "./Header.styled";

interface HeaderProps {
  label: InternationalString | null;
  summary: InternationalString | null;
  homepage: ContentResource[] | null;
}

const Header: React.FC<HeaderProps> = ({ label, summary, homepage = null }) => {
  /**
   * todo: be more defensive about collections without `homepage`
   */
  let url = null;
  if (homepage.length > 0) url = homepage[0].id;

  const description = useGetLabel(summary as InternationalString);

  return (
    <HeaderStyled>
      <Title>
        <a href={url}>{useGetLabel(label)}</a>
      </Title>
      {description && <Description>{description}</Description>}
    </HeaderStyled>
  );
};

export default Header;
