import { createContext, useContext } from "react";
import BrandStore from "../stores/index";

const globalStore = {
  brandStore: BrandStore,
};

const GlobalContext = createContext(globalStore);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export const GlobalContextProvider = ({ children }: any) => {
  return (
    <GlobalContext.Provider value={globalStore}>
      {children}
    </GlobalContext.Provider>
  );
};
