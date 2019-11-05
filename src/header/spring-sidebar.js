import React from "react";
import styled from "styled-components/macro";
import { animated, useTransition } from "react-spring";
import { useBodyScrollLock, useTheme } from "src/shared";

const StyledNav = styled(animated.nav)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary900};
  overflow-y: scroll;
  box-shadow: ${props => props.theme.shadows.xxl};
  z-index: ${props => props.theme.zIndices.sidebar};
  will-change: opacity, transform;
  -webkit-overflow-scrolling: touch;
`;

const SpringSidebar = ({ id, animationState: isOpen, children }) => {
  const ref = React.useRef();
  useBodyScrollLock(ref);

  const duration = useTheme().timings.modalAnimation;

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0, transform: "translateX(100px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100px)" }
  });

  return transitions.map(
    ({ item: visible, key, props }) =>
      visible && (
        <StyledNav key={key} ref={ref} id={id} style={props}>
          {children}
        </StyledNav>
      )
  );
};

export { SpringSidebar };
