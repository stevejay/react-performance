import React from "react";
import { VisuallyHidden } from "src/shared/visually-hidden";
import { makeFocusable } from "src/shared/dom-utils";
import { SkipLinkButton } from "./skip-link-button";
import { SkipLinksContext } from "./skip-links-context";

type Props = {
  targetId: string;
};

const SkipLink: React.FC<Props> = ({ targetId, children }) => {
  const skipLinks = React.useContext(SkipLinksContext);

  const handleClick = React.useCallback(() => {
    const targetRef = skipLinks.getRef(targetId);
    if (!targetRef || !targetRef.current) {
      return;
    }

    const element = targetRef.current;
    makeFocusable(element);
    element.scrollIntoView();
    element.focus();
  }, [targetId, skipLinks]);

  return (
    <VisuallyHidden isFocusable as={SkipLinkButton} onClick={handleClick}>
      {children}
    </VisuallyHidden>
  );
};

export { SkipLink };
