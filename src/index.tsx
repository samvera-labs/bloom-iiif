import React, { useEffect, useState } from "react";
import {
  Collection,
  CollectionItems,
  CollectionNormalized,
  ContentResource,
  InternationalString,
  Manifest,
} from "@iiif/presentation-3";
import {
  CollectionProvider,
  defaultState,
  useCollectionState,
} from "context/collection-context";
import { ConfigOptions } from "./types/types";
import Header from "components/Header/Header";
import Items from "components/Items/Items";
import hash from "lib/hash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import { upgrade } from "@iiif/parser/upgrader";

interface BloomProps {
  collectionId: string;
  onItemInteraction?: (item: Manifest | Collection) => void;
  options?: ConfigOptions;
}

const App: React.FC<BloomProps> = (props) => (
  <CollectionProvider
    initialState={{
      ...defaultState,
      options: { ...props.options },
    }}
  >
    <Bloom {...props} />
  </CollectionProvider>
);

const Bloom: React.FC<BloomProps> = ({ collectionId, onItemInteraction }) => {
  const store = useCollectionState();
  const { options } = store;
  const [collection, setCollection] = useState<CollectionNormalized>();

  useEffect(() => {
    if (!collectionId) return;
    fetch(collectionId)
      .then((response) => response.json())
      .then(upgrade)
      .then((data: any) => setCollection(data))
      .catch((error: any) => {
        console.error(
          `The IIIF Collection ${collectionId} failed to load: ${error}`
        );
      });
  }, [collectionId]);

  if (collection?.items.length === 0) {
    console.log(`The IIIF Collection ${collectionId} does not contain items.`);
    return <></>;
  }

  const instance = hash(collectionId);

  if (!collection) return <></>;

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header
          label={collection.label as InternationalString}
          summary={
            collection && collection.summary
              ? collection.summary
              : { none: [""] }
          }
          homepage={collection.homepage as any as ContentResource[]}
          instance={instance}
        />
        <Items
          items={collection.items as CollectionItems[]}
          handleItemInteraction={onItemInteraction}
          instance={instance}
          breakpoints={options.breakpoints}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
