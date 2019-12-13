import React from "react";
import { SkipLinksContext } from "./skip-links-context";

// TODO fix ref dep

const useSkipLinkTarget = (
  targetId: string,
  targetRef: React.RefObject<HTMLElement>
) => {
  const skipLinks = React.useContext(SkipLinksContext);

  React.useEffect(() => {
    if (!targetId || !targetRef) {
      return;
    }

    skipLinks.addRef(targetId, targetRef);
    return () => skipLinks.removeRef(targetId, targetRef);
  }, [targetId, targetRef, skipLinks]);
};

export { useSkipLinkTarget };
