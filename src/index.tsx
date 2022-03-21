import React from "react";
interface Props {
  collectionId: string;
}

const App: React.FC<Props> = ({ collectionId }) => {
  return <>{collectionId}</>;
};

export default App;
