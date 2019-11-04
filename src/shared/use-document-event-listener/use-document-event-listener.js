import React from "react";
import document from "global/document";

const useDocumentEventListener = (eventName, isListening, listener) => {
  React.useEffect(() => {
    if (!isListening) {
      return;
    }

    document.addEventListener(eventName, listener);
    return () => document.removeEventListener(eventName, listener);
  }, [eventName, isListening, listener]);
};

export { useDocumentEventListener };
