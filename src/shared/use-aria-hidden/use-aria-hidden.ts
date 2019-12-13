import React from "react";
import { hideOthers } from "aria-hidden";

const useAriaHidden = (targetRef: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    if (!targetRef.current) {
      return undefined;
    }

    const undo = hideOthers(targetRef.current);
    return () => undo();
  }, [targetRef]);
};

export { useAriaHidden };
