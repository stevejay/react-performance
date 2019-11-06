import React from "react";
import { Portal } from "react-portal";
import { Transition, TransitionGroup } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import styled from "styled-components/macro";
import { forceReflow } from "src/shared/dom-utils";

type StyledProps = {
  readonly duration: number;
};

const StyledModalBackdrop = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${props => props.theme.colors.black};
  z-index: ${props => props.theme.zIndices.sidebar};
  transition: opacity ${props => props.duration}ms ease-in;
  will-change: opacity;
`;

const TRANSITION_STYLES: Partial<
  Record<TransitionStatus, React.CSSProperties>
> = {
  entering: { opacity: 0.5 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

type Props = {
  readonly isOpen: boolean;
  readonly duration: number;
};

const TransitionModalBackdrop: React.FC<Props> = ({ isOpen, duration }) => (
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
            <StyledModalBackdrop
              style={TRANSITION_STYLES[animationState]}
              duration={duration}
              role="presentation"
            />
          </Portal>
        )}
      </Transition>
    )}
  </TransitionGroup>
);

export { TransitionModalBackdrop };
