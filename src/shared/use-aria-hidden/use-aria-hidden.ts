import React from "react";
import { hideOthers } from "aria-hidden";

// 'aria-hidden' package requires polyfill for WeakMap for IE10 and earlier.

const useAriaHidden = (
  targetRef: React.RefObject<HTMLElement>,
  shouldHide: boolean
) => {
  React.useEffect(() => {
    if (!shouldHide) {
      return;
    }

    const undo = hideOthers(targetRef.current!);
    return () => undo();
  }, [targetRef, shouldHide]);
};

export { useAriaHidden };
