import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useBodyScrollLock = (ref: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    const targetElement = ref.current;

    if (!targetElement) {
      return undefined;
    }

    disableBodyScroll(targetElement, {
      reserveScrollBarGap: true
    });

    return () => {
      enableBodyScroll(targetElement);
    };
  }, [ref]);
};

export { useBodyScrollLock };
