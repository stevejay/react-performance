import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useAriaHidden } from "./use-aria-hidden";
import { ModalWrap } from "./modal-wrap";
import { ModalBackdrop } from "./modal-backdrop";

const ESCAPE_KEY_CODE = 27;

const Modal = ({ isOpen, dismissable = true, duration, onClose, children }) => {
  useAriaHidden(isOpen);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const handleKeyDown = event => {
    if (event.keyCode === ESCAPE_KEY_CODE && onClose) {
      onClose();
    }
  };

  return transitions.map(
    ({ item, key }) =>
      item && (
        <Portal key={key}>
          <ModalBackdrop isVisible={isOpen} duration={duration} />
          <FocusLock autoFocus returnFocus>
            <ModalWrap
              role="dialog"
              // tabIndex must be set for ModalWrap to receive keyboard events:
              tabIndex="-1"
              onKeyDown={dismissable ? handleKeyDown : undefined}
              onMouseDown={dismissable ? onClose : undefined}
              onTouchStart={dismissable ? onClose : undefined}
            >
              {children}
            </ModalWrap>
          </FocusLock>
        </Portal>
      )
  );
};

export { Modal };
