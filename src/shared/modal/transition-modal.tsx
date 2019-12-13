import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { Transition, TransitionGroup } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { useAriaHidden } from "src/shared/use-aria-hidden";
import { useDocumentEventListener } from "src/shared/use-document-event-listener";
import { forceReflow } from "src/shared/dom-utils";

type Props = {
  readonly isOpen: boolean;
  readonly duration: number;
  readonly onClose: () => void;
  children: (animationState: TransitionStatus) => React.ReactNode;
};

// TODO fix ref dep

const TransitionModal: React.FC<Props> = ({
  isOpen,
  duration,
  onClose,
  children
}) => {
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

  return (
    <TransitionGroup component={null} appear>
      {isOpen && (
        <Transition
          timeout={duration}
          onEnter={forceReflow}
          mountOnEnter
          unmountOnExit
        >
          {(animationState: TransitionStatus) => (
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
