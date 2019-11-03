import React from "react";
import document from "global/document";

const useBodyKeyDownListener = (isListening, listener) => {
  React.useEffect(() => {
    if (!isListening) {
      return;
    }

    document.body.addEventListener("keydown", listener);
    return () => document.body.removeEventListener("keydown", listener);
  }, [isListening, listener]);
};

export { useBodyKeyDownListener };
