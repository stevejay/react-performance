import React from "react";
import { VisuallyHidden } from "../visually-hidden";
import { SkipLinkButton } from "./skip-link-button";

const SkipLink = ({ skipRef, children }) => {
  const handleClick = event => {
    if (skipRef.current && skipRef.current.focus) {
      event.target.blur();
      skipRef.current.scrollIntoView();
    }
  };

  return (
    <VisuallyHidden isFocusable as={SkipLinkButton} onClick={handleClick}>
      {children}
    </VisuallyHidden>
  );
};

export { SkipLink };
