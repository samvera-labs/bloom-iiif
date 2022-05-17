import React from "react";
import { NextIcon } from "components/Icons/NextIcon";
import { PreviousIcon } from "components/Icons/PrevIcon";
import { ControlStyled, Gradient, Icon } from "./Control.styled";

interface ItemsControlProps {
  disabled: boolean;
  handleControl: (e: React.MouseEvent) => void;
  height: number;
  increment: number;
  label: string;
}

const ItemsControl: React.FC<ItemsControlProps> = ({
  disabled,
  handleControl,
  height,
  increment,
  label,
}) => {
  const width: number = height * 0.382;

  return (
    <>
      <ControlStyled
        aria-label={label}
        direction={label}
        onClick={() => handleControl(increment)}
        style={{ height: `${height}px`, width: `${width}px` }}
        disabled={disabled}
        value={label}
      >
        <Gradient style={{ height: `${height}px`, width: `${width}px` }} />
        <Icon>
          {label === "next" && <NextIcon />}
          {label === "previous" && <PreviousIcon />}
        </Icon>
      </ControlStyled>
    </>
  );
};

export default ItemsControl;
