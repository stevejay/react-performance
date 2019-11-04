import React from "react";
import { Portal } from "react-portal";
import { Transition, TransitionGroup } from "react-transition-group";
import styled from "styled-components/macro";
import { useTheme } from "../use-theme";
import { forceReflow } from "../dom-utils";

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${props => props.theme.colors.black};
  z-index: ${props => props.theme.zIndices.sidebar};
  transition: opacity ${props => props.theme.timings.modalAnimation}ms ease-in;
  will-change: opacity;
`;

const TRANSITION_STYLES = {
  entering: { opacity: 0.5 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const TransitionModalBackdrop = ({ isOpen }) => {
  const duration = useTheme().timings.modalAnimation;

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
              <StyledModalBackdrop
                style={TRANSITION_STYLES[animationState]}
                role="presentation"
              />
            </Portal>
          )}
        </Transition>
      )}
    </TransitionGroup>
  );
};

export { TransitionModalBackdrop };
