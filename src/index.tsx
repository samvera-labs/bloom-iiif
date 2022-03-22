import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import Figure from "components/Figure/Figure";
import Header from "components/Header/Header";
import {
  CollectionNormalized,
  Collection,
  Manifest,
} from "@iiif/presentation-3";

interface Props {
  collectionId: string;
}

const App: React.FC<Props> = ({ collectionId }) => {
  const [collection, setCollection] = useState<CollectionNormalized>();
  useEffect(() => {
    /**
     * load collection using @iiif/vault
     */
    const vault = new Vault();

    vault
      .loadCollection(collectionId)
      .then((data: any) => setCollection(data))
      .catch((error: any) => {
        console.error(`Collection failed to load: ${error}`);
      })
      .finally(() => {});
  }, []);

  if (!collection || !collection.items) {
    console.log(`The IIIF Collection ${collectionId} failed to load.`);
    return <></>;
  }

  if (collection.items.length === 0) {
    console.log(`The IIIF collection ${collectionId} does not contain items.`);
    return <></>;
  }

  console.log(collection.items);

  return (
    <>
      <Header label={collection.label} summary={collection.summary} />
      <div>
        {collection.items.map((item) => (
          <Figure item={item as Collection | Manifest} />
        ))}
      </div>
    </>
  );
};

export default App;
