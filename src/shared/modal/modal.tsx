import React, { ComponentProps, CSSProperties, FC } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { forceReflow } from "src/shared/dom-utils";
import { ModalBackdrop } from "./modal-backdrop";
import { ModalContent } from "./modal-content";

const ANIMATION_MS = 300;
const OPACITY_TRANSITION = `opacity ${ANIMATION_MS}ms ease-in`;
const TRANSFORM_TRANSITION = `transform ${ANIMATION_MS}ms ease-in`;

const backdropTransitionStyles: Partial<Record<
  TransitionStatus,
  CSSProperties
>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const contentTransitionStyles: Partial<Record<
  TransitionStatus,
  CSSProperties
>> = {
  entering: { opacity: 1, transform: "scale3d(1, 1, 1)" },
  entered: { opacity: 1, transform: "scale3d(1, 1, 1)" },
  exiting: { opacity: 0, transform: "scale3d(1.05, 1.05, 1)" },
  exited: { opacity: 0, transform: "scale3d(1.05, 1.05, 1)" }
};

type Props = Readonly<{
  isOpen: boolean;
  onRequestClose?: () => void;
  onExited?: () => void;
  allowFocusOnContentBox?: boolean;
  focusLockProps?: ComponentProps<typeof ModalBackdrop>["focusLockProps"];
  ariaLabel?: string;
  ariaLabelledby?: string;
}>;

const Modal: FC<Props> = ({
  allowFocusOnContentBox,
  focusLockProps,
  ariaLabel,
  ariaLabelledby,
  isOpen,
  onRequestClose,
  onExited,
  children
}) => (
  <TransitionGroup component={null} appear>
    {isOpen && (
      <Transition
        timeout={ANIMATION_MS}
        onEnter={forceReflow}
        mountOnEnter
        unmountOnExit
        onExited={onExited}
      >
        {(animationState: TransitionStatus) => (
          <ModalBackdrop
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            focusLockProps={focusLockProps}
            style={{
              ...backdropTransitionStyles[animationState],
              willChange: "opacity",
              transition: OPACITY_TRANSITION
            }}
          >
            <ModalContent
              ariaLabel={ariaLabel}
              ariaLabelledby={ariaLabelledby}
              allowFocusOnContentBox={allowFocusOnContentBox}
              style={{
                ...contentTransitionStyles[animationState],
                willChange: "opacity, transform",
                transition: `${OPACITY_TRANSITION}, ${TRANSFORM_TRANSITION}`
              }}
            >
              {children}
            </ModalContent>
          </ModalBackdrop>
        )}
      </Transition>
    )}
  </TransitionGroup>
);

export { Modal };
