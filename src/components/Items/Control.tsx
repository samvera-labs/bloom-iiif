import React from "react";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";
import { ControlStyled, Gradient, Icon } from "./Control.styled";

interface ItemsControlProps {
  disabled: boolean;
  increment: number;
  label: string;
  handleControl: (e: React.MouseEvent) => void;
  height: number;
}

const ItemsControl: React.FC<ItemsControlProps> = ({
  disabled,
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
      disabled={disabled}
    >
      <Gradient style={{ height: `${height}px`, width: `${width}px` }} />
      <Icon>
        {label === "next" && <NextIcon />}
        {label === "previous" && <PreviousIcon />}
      </Icon>
    </ControlStyled>
  );
};

export default ItemsControl;
