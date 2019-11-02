import React from "react";
import { Portal } from "react-portal";
import FocusLock from "react-focus-lock";
import { Transition, TransitionGroup } from "react-transition-group";
import { useTheme } from "../use-theme";
import { useAriaHidden } from "../use-aria-hidden";
import { useBodyKeyDownListener } from "../use-body-key-down-listener";
import { forceReflow } from "../dom-utils";
import { ModalBackdrop } from "./modal-backdrop";

const TRANSITION_STYLES = {
  entering: { opacity: 0.5 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const CSSTransitionModal = ({ isOpen, onClose, children }) => {
  const duration = useTheme().timings.modalAnimation;
  useAriaHidden(isOpen);

  const handleKeyDown = React.useCallback(
    event => {
      if (event.key === "Esc" || event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useBodyKeyDownListener(isOpen, handleKeyDown);

  return (
    <TransitionGroup component={null} appear={true}>
      {isOpen && (
        <Transition
          timeout={duration}
          onEnter={forceReflow}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {animationState => (
            <Portal>
              <ModalBackdrop
                duration={duration}
                style={TRANSITION_STYLES[animationState]}
                onClick={onClose}
              />
              <FocusLock autoFocus returnFocus>
                {children(animationState, duration)}
              </FocusLock>
            </Portal>
          )}
        </Transition>
      )}
    </TransitionGroup>
  );
};

export { CSSTransitionModal };
