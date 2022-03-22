import React from "react";
import { useGetLabel } from "hooks/useGetLabel";
import { InternationalString } from "@iiif/presentation-3";

interface HeaderProps {
  label: InternationalString | null;
  summary: InternationalString | null;
}

const Header: React.FC<HeaderProps> = ({ label, summary }) => {
  return (
    <header>
      <strong>{useGetLabel(label)}</strong>
      <span>{useGetLabel(summary)}</span>
    </header>
  );
};

export default Header;
