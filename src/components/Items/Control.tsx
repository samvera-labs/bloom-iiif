import React from "react";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";
import { ControlStyled, Gradient, Icon } from "./Control.styled";

interface ItemsControlProps {
  disabled: boolean;
  label: string;
  height: number;
}

const ItemsControl: React.FC<ItemsControlProps> = ({
  disabled,
  label,
  height,
}) => {
  const width: number = height * 0.382;

  return (
    <ControlStyled
      aria-label={label}
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
