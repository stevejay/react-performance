import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useTheme } from "../use-theme";
import { useAriaHidden } from "./use-aria-hidden";
import { ModalWrap } from "./modal-wrap";
import { ModalBackdrop } from "./modal-backdrop";

const ESCAPE_KEY_CODE = 27;

const Modal = ({ isOpen, onClose, children }) => {
  const duration = useTheme().timings.modalAnimation;
  useAriaHidden(isOpen);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const handleKeyDown = event => {
    if (event.keyCode === ESCAPE_KEY_CODE) {
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
              // TODO does this make the modal wrap focus on click????
              tabIndex="-1"
              onKeyDown={onClose ? handleKeyDown : undefined}
              onMouseDown={onClose ? onClose : undefined}
              onTouchStart={onClose ? onClose : undefined}
            >
              {children}
            </ModalWrap>
          </FocusLock>
        </Portal>
      )
  );
};

export { Modal };
