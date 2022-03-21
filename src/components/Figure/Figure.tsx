import React from "react";

interface Props {
  collectionId: string;
}

const Figure: React.FC<Props> = ({ data }) => {
  console.log(data);
  return <>item</>;
};

export default Figure;
