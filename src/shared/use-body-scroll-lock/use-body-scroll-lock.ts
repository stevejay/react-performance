import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useBodyScrollLock = (targetRef: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    const targetElement = targetRef.current;

    if (!targetElement) {
      return undefined;
    }

    disableBodyScroll(targetElement, {
      reserveScrollBarGap: true
    });

    return () => {
      enableBodyScroll(targetElement);
    };
  }, [targetRef]);
};

export { useBodyScrollLock };
