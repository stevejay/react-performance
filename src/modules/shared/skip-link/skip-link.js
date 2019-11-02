import React from "react";
import tabbable from "tabbable";
import { VisuallyHidden } from "../visually-hidden";
import { SkipLinkButton } from "./skip-link-button";
import { SkipLinkContext } from "./skip-link-context";

const SkipLink = ({ targetId, children }) => {
  const contextValue = React.useContext(SkipLinkContext);

  const handleClick = React.useCallback(() => {
    const targetRef = contextValue.getRef(targetId);
    if (!targetRef || !targetRef.current) {
      return;
    }

    const element = targetRef.current;

    if (!tabbable.isFocusable(element)) {
      element.setAttribute("tabindex", "-1");

      element.onblur = element.onfocusout = () => {
        element.removeAttribute("tabindex");
      };
    }

    element.scrollIntoView();
    element.focus();
  }, [targetId, contextValue]);

  return (
    <VisuallyHidden isFocusable as={SkipLinkButton} onClick={handleClick}>
      {children}
    </VisuallyHidden>
  );
};

export { SkipLink };
