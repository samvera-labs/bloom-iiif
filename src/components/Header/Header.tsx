import React from "react";
import { useGetLabel } from "hooks/useGetLabel";
import { InternationalString } from "@iiif/presentation-3";
import { Description, HeaderStyled, Title } from "./Header.styled";

interface HeaderProps {
  label: InternationalString | null;
  summary: InternationalString | null;
}

const Header: React.FC<HeaderProps> = ({ label, summary }) => {
  return (
    <HeaderStyled>
      <Title>{useGetLabel(label)}</Title>
      <Description>{useGetLabel(summary)}</Description>
    </HeaderStyled>
  );
};

export default Header;
