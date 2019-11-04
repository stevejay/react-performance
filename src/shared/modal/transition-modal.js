import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { Transition, TransitionGroup } from "react-transition-group";
import { useTheme } from "../use-theme";
import { useAriaHidden } from "../use-aria-hidden";
import { useDocumentEventListener } from "../use-document-event-listener";
import { forceReflow } from "../dom-utils";

const TransitionModal = ({ isOpen, onClose, children }) => {
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

  return (
    <TransitionGroup component={null} appear>
      {isOpen && (
        <Transition
          timeout={duration}
          onEnter={forceReflow}
          mountOnEnter
          unmountOnExit
        >
          {animationState => (
            <Portal>
              <FocusLock ref={focusLockRef} autoFocus returnFocus>
                {children(animationState)}
              </FocusLock>
            </Portal>
          )}
        </Transition>
      )}
    </TransitionGroup>
  );
};

export { TransitionModal };
