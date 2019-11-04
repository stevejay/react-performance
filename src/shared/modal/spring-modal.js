import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useTheme } from "../use-theme";
import { useAriaHidden } from "../use-aria-hidden";
import { useDocumentEventListener } from "../use-document-event-listener";

const SpringModal = ({ isOpen, onClose, children }) => {
  const duration = useTheme().timings.modalAnimation;

  const focusLockRef = React.useRef();
  useAriaHidden(focusLockRef, isOpen);

  const handleCloseOnKeyDown = React.useCallback(
    event => {
      if (event.key === "Esc" || event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleCloseOnTouch = React.useCallback(
    event => {
      // Prevent a click on the modal closing it.
      if (focusLockRef.current.contains(event.target)) {
        return;
      }

      onClose();
    },
    [focusLockRef, onClose]
  );

  useDocumentEventListener("keydown", isOpen, handleCloseOnKeyDown);
  useDocumentEventListener("mousedown", isOpen, handleCloseOnTouch);
  useDocumentEventListener("touchstart", isOpen, handleCloseOnTouch);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item: visible, key }) =>
      visible && (
        <Portal key={key}>
          <FocusLock ref={focusLockRef} autoFocus returnFocus>
            {children(isOpen)}
          </FocusLock>
        </Portal>
      )
  );
};

export { SpringModal };
