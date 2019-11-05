import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components/macro";
import { animated, useTransition } from "react-spring";
import { useTheme } from "src/shared/use-theme";

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

type Props = {
  readonly isOpen: boolean;
};

const SpringModalBackdrop = ({ isOpen }: Props) => {
  const duration = useTheme().timings.modalAnimation;

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item: visible, key, props }) =>
      visible && (
        <Portal key={key}>
          <StyledModalBackdrop style={props} role="presentation" />
        </Portal>
      )
  );
};

export { SpringModalBackdrop };
