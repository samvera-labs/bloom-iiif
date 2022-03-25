import React from "react";
import { ControlStyled, Gradient, Icon } from "./Control.styled";

const PreviousIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Arrow Back</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="70"
        d="M244 400L100 256l144-144M120 256h292"
      />
    </svg>
  );
};

const NextIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Arrow Forward</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="70"
        d="M268 112l144 144-144 144M392 256H100"
      />
    </svg>
  );
};

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
        {label === "next" && <NextIcon />}
        {label === "previous" && <PreviousIcon />}
      </Icon>
    </ControlStyled>
  );
};

export default ItemsControl;
