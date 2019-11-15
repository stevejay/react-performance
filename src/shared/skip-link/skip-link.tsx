import React from "react";
import tabbable from "tabbable";
import { VisuallyHidden } from "src/shared/visually-hidden";
import { SkipLinkButton } from "./skip-link-button";
import { SkipLinksContext } from "./skip-links-context";

type Props = {
  readonly targetId: string;
};

const SkipLink: React.FC<Props> = ({ targetId, children }) => {
  const skipLinks = React.useContext(SkipLinksContext);

  const handleClick = React.useCallback(() => {
    const targetRef = skipLinks.getRef(targetId);
    if (!targetRef || !targetRef.current) {
      return;
    }

    const element = targetRef.current;

    if (!tabbable.isFocusable(element)) {
      element.setAttribute("tabindex", "-1");

      element.onblur = () => {
        element.removeAttribute("tabindex");
      };
    }

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
