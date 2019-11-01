// This is a simple implementation of the more complex implementation in Reakit:
// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/tabbable.ts

const isFocusable = element => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  if (Boolean(element.disabled)) {
    return false;
  }

  const { localName } = element;

  if (localName === "a") {
    return element.hasAttribute("href");
  }

  const focusableTags = ["input", "select", "textarea", "button"];

  if (focusableTags.indexOf(localName) >= 0) {
    return true;
  }

  return element.hasAttribute("tabindex");
};

export { isFocusable };
