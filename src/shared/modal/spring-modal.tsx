import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { useTransition } from "react-spring";
import { useTheme } from "src/shared/use-theme";
import { useAriaHidden } from "src/shared/use-aria-hidden";
import { useDocumentEventListener } from "src/shared/use-document-event-listener";

type Props = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  children: (isOpen: boolean) => React.ReactNode;
};

const SpringModal = ({ isOpen, onClose, children }: Props) => {
  const duration = useTheme().timings.modalAnimation || 0;

  const focusLockRef = React.useRef<HTMLElement>(null);
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
      if (focusLockRef.current && focusLockRef.current.contains(event.target)) {
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
