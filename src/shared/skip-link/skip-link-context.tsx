import React from "react";
import { useRefsMap } from "./use-refs-map";

const SkipLinkContext = React.createContext<ReturnType<typeof useRefsMap>>({
  addRef: () => {},
  removeRef: () => {},
  getRef: () => null
});

const SkipLinkProvider: React.FC = ({ children }) => {
  const refsMap = useRefsMap();

  return (
    <SkipLinkContext.Provider value={refsMap}>
      {children}
    </SkipLinkContext.Provider>
  );
};

export { SkipLinkContext, SkipLinkProvider };
