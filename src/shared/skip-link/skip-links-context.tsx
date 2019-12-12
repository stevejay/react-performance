import React from "react";
import { useRefsMap } from "./use-refs-map";

const SkipLinksContext = React.createContext<ReturnType<typeof useRefsMap>>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addRef: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeRef: () => {},
  getRef: () => null
});

const SkipLinksProvider: React.FC = ({ children }) => {
  const refsMap = useRefsMap();

  return (
    <SkipLinksContext.Provider value={refsMap}>
      {children}
    </SkipLinksContext.Provider>
  );
};

export { SkipLinksContext, SkipLinksProvider };
