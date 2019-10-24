import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useAriaHidden } from "./use-aria-hidden";
import { ModalWrap } from "./modal-wrap";

const ESCAPE_KEY_CODE = 27;

const TRANSITION_VALUES = {
  config: { duration: 300 },
  //   from: {},
  //   enter: {},
  //   leave: {}
  from: { opacity: 0, transform: "translateX(100px)" },
  enter: { opacity: 1, transform: "translateX(0)" },
  leave: { opacity: 0, transform: "translateX(100px)" }
};

// const TRANSITION_VALUES = {
//     config: { duration: 300 },
//     from: { opacity: 0, transform: "scale(1.1)" },
//     enter: { opacity: 1, transform: "scale(1)" },
//     leave: { opacity: 0, transform: "scale(1.1)" }
//   };

const Modal = ({ isOpen, dismissable = true, onClose, children }) => {
  useAriaHidden(isOpen);
  const transitions = useTransition(isOpen, null, TRANSITION_VALUES);

  const handleKeyDown = event => {
    if (dismissable && event.keyCode === ESCAPE_KEY_CODE && onClose) {
      onClose();
    }
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Portal key={key}>
          <FocusLock autoFocus returnFocus>
            <ModalWrap
              role="dialog"
              onKeyDown={handleKeyDown}
              onMouseDown={dismissable ? onClose : undefined}
              onTouchStart={dismissable ? onClose : undefined}
            >
              {children(props)}
            </ModalWrap>
          </FocusLock>
        </Portal>
      )
  );
};

export { Modal };
