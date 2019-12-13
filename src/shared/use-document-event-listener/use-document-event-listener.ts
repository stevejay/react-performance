import React from "react";
import document from "global/document";

const useDocumentEventListener = (
  eventName: string,
  listener: EventListenerOrEventListenerObject
) => {
  React.useEffect(() => {
    document.addEventListener(eventName, listener, true);
    return () => document.removeEventListener(eventName, listener, true);
  }, [eventName, listener]);
};

export { useDocumentEventListener };
