import React from "react";
import { Vault } from "@iiif/vault";
import { ConfigOptions } from "../types/types";

interface CollectionContextStore {
  isLoaded: boolean;
  options: ConfigOptions;
  vault: Vault;
}

interface CollectionAction {
  type: string;
  isLoaded: boolean;
}

export const defaultState: CollectionContextStore = {
  isLoaded: false,
  options: {
    enablePreview: false,
    credentials: "omit",
  },
  vault: new Vault(),
};

const CollectionStateContext =
  React.createContext<CollectionContextStore>(defaultState);
const CollectionDispatchContext =
  React.createContext<CollectionContextStore>(defaultState);

function collectionReducer(
  state: CollectionContextStore,
  action: CollectionAction
) {
  switch (action.type) {
    case "updateIsLoaded": {
      return {
        ...state,
        isLoaded: action.isLoaded,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface CollectionProviderProps {
  initialState?: CollectionContextStore;
  children: React.ReactNode;
}

const CollectionProvider: React.FC<CollectionProviderProps> = ({
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<CollectionContextStore, CollectionAction>
  >(collectionReducer, initialState);

  return (
    <CollectionStateContext.Provider value={state}>
      <CollectionDispatchContext.Provider
        value={dispatch as unknown as CollectionContextStore}
      >
        {children}
      </CollectionDispatchContext.Provider>
    </CollectionStateContext.Provider>
  );
};

function useCollectionState() {
  const context = React.useContext(CollectionStateContext);
  if (context === undefined) {
    throw new Error("useViewerState must be used within a ViewerProvider");
  }
  return context;
}

function useCollectionDispatch() {
  const context = React.useContext(CollectionDispatchContext);
  if (context === undefined) {
    throw new Error("useViewerDispatch must be used within a ViewerProvider");
  }
  return context;
}

export { CollectionProvider, useCollectionState, useCollectionDispatch };
