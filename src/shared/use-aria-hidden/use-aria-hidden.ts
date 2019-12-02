import React from "react";
import { hideOthers } from "aria-hidden";

// 'aria-hidden' package requires polyfill for WeakMap for IE <= 10.

const useAriaHidden = (
  targetRef: React.RefObject<HTMLElement>,
  shouldHide: boolean
) => {
  React.useEffect(() => {
    if (!shouldHide || !targetRef.current) {
      return;
    }

    const undo = hideOthers(targetRef.current);
    return () => undo();
  }, [targetRef, shouldHide]);
};

export { useAriaHidden };
