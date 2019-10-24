import React from "react";

const ATTR_NAME = "aria-hidden";

const useAriaHidden = (isHidden, id = "root") => {
  React.useEffect(() => {
    if (!isHidden) {
      return;
    }

    const appRoot = window.document.getElementById(id);
    if (appRoot && appRoot.getAttribute(ATTR_NAME) === "true") {
      return;
    }

    appRoot && appRoot.setAttribute(ATTR_NAME, "true");

    return () => {
      appRoot && appRoot.setAttribute(ATTR_NAME, "false");
    };
  }, [isHidden, id]);
};

export { useAriaHidden };
