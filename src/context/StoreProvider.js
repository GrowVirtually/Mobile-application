import React, {useContext, createContext, useReducer} from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({children, initialState, reducer}) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{globalState, globalDispatch}}>{children}</StoreContext.Provider>
  );
};
