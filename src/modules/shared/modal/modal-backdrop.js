import React from "react";
import styled from "styled-components/macro";
import { animated, useTransition } from "react-spring";

const StyledModalBackdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${props => props.theme.colors.black};
  z-index: ${props => props.theme.zIndices.sidebar};
  will-change: opacity;
`;

const ModalBackdrop = ({ isVisible, duration }) => {
  const transitions = useTransition(isVisible, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && <StyledModalBackdrop key={key} tabIndex={-1} style={props} />
  );
};

export { ModalBackdrop };
