import React, { useEffect, useState } from "react";
import {
  CollectionProvider,
  useCollectionState,
} from "context/collection-context";
import Items from "components/Items/Items";
import Header from "components/Header/Header";
import {
  CollectionItems,
  CollectionNormalized,
  ContentResource,
} from "@iiif/presentation-3";
import { styled } from "stitches";

interface Props {
  collectionId: string;
}

const App: React.FC<Props> = (props) => (
  <CollectionProvider>
    <Bloom {...props} />
  </CollectionProvider>
);

const Bloom: React.FC<Props> = ({ collectionId }) => {
  const store = useCollectionState();
  const { vault } = store;
  const [collection, setCollection] = useState<CollectionNormalized>();
  /**
   * todo: add wrapping context and store vault
   */

  useEffect(() => {
    /**
     * load collection using @iiif/vault
     */

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

  return (
    <StyledBloom>
      <Header
        label={collection.label}
        summary={collection.summary}
        homepage={collection.homepage}
      />
      <Items items={collection.items as CollectionItems[]} />
    </StyledBloom>
  );
};

const StyledBloom = styled("div", {
  paddingBottom: "$5",
});

export default App;
