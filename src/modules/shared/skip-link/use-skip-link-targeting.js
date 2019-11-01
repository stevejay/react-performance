import React from "react";
import { SkipLinkContext } from "./skip-link-context";

const useSkipLinkTargeting = (targetId, targetRef) => {
  const contextValue = React.useContext(SkipLinkContext);

  React.useEffect(() => {
    if (!targetRef) {
      console.log("Bailing out because targetRef is nil");
      return;
    }

    contextValue.addRef(targetId, targetRef);
    return () => contextValue.removeRef(targetId, targetRef);
  }, [targetId, targetRef, contextValue]);
};

export { useSkipLinkTargeting };
