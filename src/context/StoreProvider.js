import React, {useContext, createContext, useReducer} from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({children, initialState, reducer}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{globalState, dispatch}}>{children}</StoreContext.Provider>;
};
