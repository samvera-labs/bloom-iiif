import React from "react";
import { useGetLabel } from "hooks/useGetLabel";

interface Props {}

const Header: React.FC<Props> = ({ label, summary }) => {
  return (
    <header>
      <strong>{useGetLabel(label)}</strong>
      <span>{useGetLabel(summary)}</span>
    </header>
  );
};

export default Header;
