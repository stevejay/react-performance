import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useTheme } from "../use-theme";
import { useAriaHidden } from "../use-aria-hidden";
import { useBodyKeyDownListener } from "../use-body-key-down-listener";
import { ModalBackdrop } from "./modal-backdrop";

const Modal = ({ isOpen, onClose, children }) => {
  const duration = useTheme().timings.modalAnimation;

  const focusLockRef = React.useRef();
  useAriaHidden(focusLockRef, isOpen);

  const handleKeyDown = React.useCallback(
    event => {
      if (event.key === "Esc" || event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useBodyKeyDownListener(isOpen, handleKeyDown);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item, key }) =>
      item && (
        <Portal key={key}>
          <ModalBackdrop
            isVisible={isOpen}
            duration={duration}
            onClick={onClose}
          />
          <FocusLock autoFocus returnFocus ref={focusLockRef}>
            {children}
          </FocusLock>
        </Portal>
      )
  );
};

export { Modal };
