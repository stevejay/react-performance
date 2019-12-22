import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// Returns a ref that should be applied to the element which remains
// scrollable while scrolling is locked everywhere else in the page.
const useBodyScrollLock = <T extends HTMLElement>(): ((
  instance: T | null
) => void) => {
  const [element, setElement] = React.useState<T | null>(null);

  React.useEffect(() => {
    if (!element) {
      return;
    }

    disableBodyScroll(element, { reserveScrollBarGap: true });

    return () => {
      enableBodyScroll(element);
    };
  }, [element]);

  return setElement;
};

export { useBodyScrollLock };
