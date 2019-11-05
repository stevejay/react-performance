import React from "react";
import styled from "styled-components/macro";
import { useBodyScrollLock } from "src/shared";

const StyledNav = styled.nav`
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
  -webkit-overflow-scrolling: touch;
  transition: opacity ${props => props.theme.timings.modalAnimation}ms ease-in,
    transform ${props => props.theme.timings.modalAnimation}ms ease-in;
  will-change: opacity, transform;
`;

const TRANSITION_STYLES = {
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
};

const TransitionSidebar = ({ animationState, id, children }) => {
  const ref = React.useRef();
  useBodyScrollLock(ref);

  return (
    <StyledNav ref={ref} id={id} style={TRANSITION_STYLES[animationState]}>
      {children}
    </StyledNav>
  );
};

export { TransitionSidebar };
