import React from "react";
import ReactDOM from "react-dom";

const Portal: React.FC = ({ children }) => {
  const nodeRef = React.useRef<HTMLElement>();

  if (!nodeRef.current) {
    nodeRef.current = document.createElement("div");
    nodeRef.current.setAttribute("data-testid", "portal");
    document.body.appendChild(nodeRef.current);
  }

  // Remove the portal's DOM element on unmount.
  React.useEffect(() => {
    return () => {
      if (nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, nodeRef.current);
};

export { Portal };
