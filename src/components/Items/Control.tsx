import React from "react";
import { ControlStyled, Gradient, Icon } from "./Control.styled";

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
      direction={label}
      onClick={() => handleControl(increment)}
      value={label}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <Gradient style={{ height: `${height}px`, width: `${width}px` }} />
      <Icon>
        <span></span>
      </Icon>
    </ControlStyled>
  );
};

export default ItemsControl;
