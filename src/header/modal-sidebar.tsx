import React, { CSSProperties, FC } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { forceReflow, ModalBackdrop } from "src/shared";
import { ModalSidebarContent } from "./modal-sidebar-content";

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
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
};

type Props = Readonly<{
  id: string;
  isOpen: boolean;
  duration: number;
  onRequestClose?: () => void;
  allowFocusOnContentBox?: boolean;
}>;

const ModalSidebar: FC<Props> = ({
  id,
  allowFocusOnContentBox,
  isOpen,
  onRequestClose,
  duration,
  children
}) => {
  const OPACITY_TRANSITION = `opacity ${duration}ms ease-in`;
  const TRANSFORM_TRANSITION = `transform ${duration}ms ease-in`;

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
            <ModalBackdrop
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              style={{
                ...backdropTransitionStyles[animationState],
                willChange: "opacity",
                transition: OPACITY_TRANSITION
              }}
            >
              <ModalSidebarContent
                id={id}
                allowFocusOnContentBox={allowFocusOnContentBox}
                style={{
                  ...contentTransitionStyles[animationState],
                  willChange: "opacity, transform",
                  transition: `${OPACITY_TRANSITION}, ${TRANSFORM_TRANSITION}`
                }}
              >
                {children}
              </ModalSidebarContent>
            </ModalBackdrop>
          )}
        </Transition>
      )}
    </TransitionGroup>
  );
};

export { ModalSidebar };
