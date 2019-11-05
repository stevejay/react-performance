import React from "react";
import { SkipLinkContext } from "./skip-link-context";

const useSkipLinkTarget = (
  targetId: string,
  targetRef: React.RefObject<HTMLElement>
) => {
  const contextValue = React.useContext(SkipLinkContext);

  React.useEffect(() => {
    if (!targetId || !targetRef) {
      return;
    }

    contextValue.addRef(targetId, targetRef);
    return () => contextValue.removeRef(targetId, targetRef);
  }, [targetId, targetRef, contextValue]);
};

export { useSkipLinkTarget };
