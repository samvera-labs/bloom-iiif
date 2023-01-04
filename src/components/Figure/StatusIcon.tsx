import React, { useEffect, useState } from "react";
import { styled } from "stitches";

interface StatusProps {
  status: number;
}

const IconLock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-lock"
    viewBox="0 0 512 512"
  >
    <title>Restricted Item</title>
    <path d="M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z" />
  </svg>
);

const StatusIcon: React.FC<StatusProps> = ({ status }) => {
  const [icon, setIcon] = useState<React.ReactNode>(<></>);

  useEffect(() => {
    switch (status) {
      case 403:
        setIcon(IconLock);
        break;
    }
  }, [status]);

  return <StyledStatusIcon>{icon}</StyledStatusIcon>;
};

const StyledStatusIcon = styled("div", {
  width: "2rem",
  height: "2rem",
  backgroundColor: "#fff",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: "50%",
  top: "50%",
  margin: "-1rem 0 0 -1rem",
  boxShadow: "5px 5px 13px #0003",

  svg: {
    height: "1rem",
    width: "1rem",
    color: "$accent",
    fill: "$accent",
  },
});

export default StatusIcon;
