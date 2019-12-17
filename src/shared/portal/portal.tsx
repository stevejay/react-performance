import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line import/exports-last
export type PortalImperativeFunctions = { isHidden: () => boolean };

const Portal = React.forwardRef<
  PortalImperativeFunctions,
  PropsWithChildren<{}>
>(({ children }: PropsWithChildren<{}>, ref) => {
  const nodeRef = React.useRef<HTMLElement>();

  if (!nodeRef.current) {
    nodeRef.current = document.createElement("div");
    nodeRef.current.setAttribute("data-testid", "portal");
    document.body.appendChild(nodeRef.current);
  }

  // Allow the portal DOM node to be queried for being hidden:
  React.useImperativeHandle(ref, () => ({
    isHidden: () =>
      !!nodeRef.current &&
      nodeRef.current.getAttribute("aria-hidden") === "true"
  }));

  // Remove the portal's DOM element on unmount:
  React.useEffect(() => {
    return () => {
      if (nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, nodeRef.current);
});

export { Portal };
