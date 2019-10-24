import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components/macro";
import { animated, useTransition } from "react-spring";

const TRANSITION_VALUES = {
  config: { duration: 300 },
  from: { opacity: 0 },
  enter: { opacity: 0.5 },
  leave: { opacity: 0 }
};

const StyledModalBackdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${props => props.theme.colors.black};
  will-change: opacity;
  pointer-events: none;
`;

const ModalBackdrop = ({ isVisible }) => {
  const transitions = useTransition(isVisible, null, TRANSITION_VALUES);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Portal key={key}>
          <StyledModalBackdrop tabIndex={-1} style={props} />
        </Portal>
      )
  );
};

export { ModalBackdrop };
