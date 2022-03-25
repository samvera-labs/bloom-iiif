import React from "react";
import { ControlStyled } from "./Control.styled";

interface ItemsControlProps {
  increment: number;
  label: string;
  handleControl: (e: React.MouseEvent) => void;
  height: number;
}

const ItemsControl: React.FC<ItemsControlProps> = ({
  label,
  increment,
  handleControl,
  height,
}) => {
  const width: number = height * 0.382;

  return (
    <ControlStyled
      aria-label={label}
      data-increment={increment}
      direction={label}
      onClick={handleControl}
      value={label}
      style={{ height: `${height}px`, width: `${width}px` }}
    ></ControlStyled>
  );
};

export default ItemsControl;
