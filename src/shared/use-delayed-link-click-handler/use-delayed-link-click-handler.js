import React from "react";
import { useHistory } from "react-router-dom";
import global from "global";

const isModifiedEvent = event =>
  Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

// Creates a click handler to be used with a react-router Link component
// that delays navigating to the new URL.
const useDelayedLinkClickHandler = (to, delayMs, onClick = null) => {
  const history = useHistory();

  const handler = React.useCallback(
    event => {
      if (onClick) {
        onClick(event);
      }

      if (delayMs === 0) {
        return;
      }

      if (event.defaultPrevented) {
        return;
      }

      // Stop the Link component from running the default handling:
      event.preventDefault();

      if (event.button !== 0 || isModifiedEvent(event)) {
        return;
      }

      global.setTimeout(() => {
        history.push(to);
      }, delayMs);
    },
    [to, delayMs, onClick, history]
  );

  return handler;
};

export { useDelayedLinkClickHandler };
