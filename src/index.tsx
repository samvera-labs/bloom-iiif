import React, { useEffect } from "react";
import { Vault } from "@iiif/vault";
interface Props {
  collectionId: string;
}

const App: React.FC<Props> = ({ collectionId }) => {
  useEffect(() => {
    /**
     * Loaded manifest and site using @hyperion-framework/vault.
     */
    const vault = new Vault();

    vault
      .loadCollection(collectionId)
      .then((data: any) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.error(`Manifest failed to load: ${error}`);
      });
  }, []);

  return <>{collectionId}</>;
};

export default App;
