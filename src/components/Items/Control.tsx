import React from "react";
import { ControlStyled } from "./Control.styled";

interface ItemsControlProps {
  increment: number;
  label: string;
  handleControl: (e: React.MouseEvent) => void;
}

const ItemsControl: React.FC<ItemsControlProps> = ({
  label,
  increment,
  handleControl,
}) => {
  return (
    <ControlStyled
      aria-label={label}
      data-increment={increment}
      direction={label}
      onClick={handleControl}
      value={label}
    >
      {label}
    </ControlStyled>
  );
};

export default ItemsControl;
