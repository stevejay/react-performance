import tabbable from "tabbable";

const makeFocusable = (element: HTMLElement) => {
  if (!tabbable.isFocusable(element)) {
    element.setAttribute("tabindex", "-1");

    element.onblur = () => {
      element.removeAttribute("tabindex");
    };
  }
};

export { makeFocusable };
