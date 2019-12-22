import React from "react";
import { hideOthers } from "aria-hidden";

// Returns a ref that should be applied to the element which remains
// visible to screen readers while all other page content is made invisible.
const useAriaHidden = <T extends HTMLElement>(): ((
  instance: T | null
) => void) => {
  const [element, setElement] = React.useState<T | null>(null);

  React.useEffect(() => {
    if (!element) {
      return;
    }

    const undo = hideOthers(element);
    return () => undo();
  }, [element]);

  return setElement;
};

export { useAriaHidden };
