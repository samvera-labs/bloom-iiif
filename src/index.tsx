import React, { useEffect, useState } from "react";
import {
  CollectionItems,
  CollectionNormalized,
  ContentResource,
  InternationalString,
} from "@iiif/presentation-3";
import {
  CollectionProvider,
  useCollectionState,
} from "context/collection-context";
import { ConfigOptions } from "../types/types";
import Header from "components/Header/Header";
import Items from "components/Items/Items";
import hash from "lib/hash";
import { convertPresentation2 } from "@iiif/parser/presentation-2";
import { normalize } from "@iiif/parser/presentation-3";
import { styled } from "stitches";

interface BloomProps {
  collectionId: string;
  options?: ConfigOptions;
}

const App: React.FC<BloomProps> = (props) => (
  <CollectionProvider>
    <Bloom {...props} />
  </CollectionProvider>
);

const Bloom: React.FC<BloomProps> = ({ collectionId, options = {} }) => {
  const store = useCollectionState();
  const { vault } = store;
  const [collection, setCollection] = useState<CollectionNormalized>();
  const [error, setError] = useState("");

  /**
   * todo: add wrapping context and store vault
   */
  useEffect(() => {
    if (!collectionId) return;

    async function doRequest() {
      try {
        const response = await fetch(collectionId);
        const data = await response.json();
        const p3Manifest = convertPresentation2(data);
        const collectionEntity: {
          [key: string]: CollectionNormalized;
        } = normalize(p3Manifest).entities.Collection;
        const normalizedCollection = collectionEntity[collectionId];
        if (
          normalizedCollection &&
          Object.keys(normalizedCollection).length > 0
        ) {
          setCollection(normalizedCollection);
        }
      } catch (error) {
        console.error("Error fetching collection", error);
        setError(
          error instanceof Error ? error.message : `Collection failed to load`
        );
      }
    }
    doRequest();

    /**
     * load collection using @iiif/vault
     */

    // vault
    //   .loadCollection(collectionId)
    //   .then((data: any) => {
    //     setCollection(data);
    //     console.log("vault data", data);
    //   })
    //   .catch((error: any) => {
    //     console.error(`Collection failed to load: ${error}`);
    //     setError(
    //       error instanceof Error ? error.message : `Collection failed to load`
    //     );
    //   })
    //   .finally(() => {});
  }, [collectionId]);

  if (collection?.items.length === 0) {
    console.log(`The IIIF collection ${collectionId} does not contain items.`);
    return <></>;
  }

  const instance = hash(collectionId);

  if (error)
    return <p style={{ padding: "1rem" }}>Error loading Collection: {error}</p>;
  if (!collection) return <></>;

  return (
    <StyledBloom>
      <Header
        label={collection.label as InternationalString}
        summary={
          collection && collection.summary ? collection.summary : { none: [""] }
        }
        homepage={collection.homepage as any as ContentResource[]}
        instance={instance}
      />
      <Items
        items={collection.items as CollectionItems[]}
        instance={instance}
        breakpoints={
          Boolean(options.breakpoints) ? options.breakpoints : undefined
        }
      />
    </StyledBloom>
  );
};

const StyledBloom = styled("div", { padding: "$4 0" });

export default App;
