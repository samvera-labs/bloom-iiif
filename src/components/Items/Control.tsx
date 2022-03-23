import React from "react";

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
    <button
      aria-label={label}
      data-increment={increment}
      value={label}
      onClick={handleControl}
    >
      {label}
    </button>
  );
};

export default ItemsControl;
