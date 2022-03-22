import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import Items from "components/Items/Items";
import Header from "components/Header/Header";
import { CollectionItems, CollectionNormalized } from "@iiif/presentation-3";
import { styled } from "stitches";

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
    <Bloom>
      <Header label={collection.label} summary={collection.summary} />
      <Items items={collection.items as CollectionItems[]} />
    </Bloom>
  );
};

const Bloom = styled("div", {
  marginBottom: "2.618rem",

  "&:last-child": {
    marginBottom: "0",
  },
});

export default App;
