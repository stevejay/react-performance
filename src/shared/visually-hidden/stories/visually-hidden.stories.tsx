import React from "react";
import { VisuallyHidden } from "src/shared/visually-hidden";

const AlwaysHidden = () => (
  <VisuallyHidden>You should not see this content</VisuallyHidden>
);

const VisibleOnFocus = () => (
  <VisuallyHidden isFocusable tabIndex={0}>
    You should see this content on focus
  </VisuallyHidden>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: VisuallyHidden,
  title: "VisuallyHidden"
};

export { AlwaysHidden, VisibleOnFocus };
