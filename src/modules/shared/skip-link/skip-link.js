import React from "react";
import { VisuallyHidden } from "../visually-hidden";
import { SkipLinkButton } from "./skip-link-button";

const SkipLink = ({ skipRef, children }) => {
  const buttonRef = React.createRef(null);

  const handleClick = () => {
    if (skipRef.current && skipRef.current.scrollIntoView) {
      buttonRef.current.blur();
      skipRef.current.scrollIntoView();
    }
  };

  return (
    <VisuallyHidden
      ref={buttonRef}
      isFocusable
      as={SkipLinkButton}
      onClick={handleClick}
    >
      {children}
    </VisuallyHidden>
  );
};

export { SkipLink };
