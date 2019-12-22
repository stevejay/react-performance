import tabbable from "tabbable";

const makeFocusable = (element: HTMLElement) => {
  if (!tabbable.isFocusable(element)) {
    element.setAttribute("tabindex", "-1");

    const eventListener = () => {
      element.removeEventListener("blur", eventListener);
      element.removeAttribute("tabindex");
    };

    element.addEventListener("blur", eventListener);
  }
};

export { makeFocusable };
