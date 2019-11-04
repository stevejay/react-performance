import React from "react";
import { useRefsMap } from "./use-refs-map";

const SkipLinkContext = React.createContext();

const SkipLinkProvider = ({ children }) => {
  const refsMap = useRefsMap();

  return (
    <SkipLinkContext.Provider value={refsMap}>
      {children}
    </SkipLinkContext.Provider>
  );
};

export { SkipLinkContext, SkipLinkProvider };
