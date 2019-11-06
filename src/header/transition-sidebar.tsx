import React from "react";
import styled from "styled-components/macro";
import { TransitionStatus } from "react-transition-group/Transition";
import { useBodyScrollLock } from "src/shared";

type StyledProps = {
  readonly duration: number;
};

const StyledNav = styled.nav<StyledProps>`
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
  transition: opacity ${props => props.duration}ms ease-in,
    transform ${props => props.duration}ms ease-in;
  will-change: opacity, transform;
`;

const TRANSITION_STYLES: Partial<
  Record<TransitionStatus, React.CSSProperties>
> = {
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
};

type Props = {
  readonly animationState: TransitionStatus;
  readonly id: string;
  readonly duration: number;
};

const TransitionSidebar: React.FC<Props> = ({
  animationState,
  id,
  duration,
  children
}) => {
  const ref = React.useRef<HTMLElement>(null);
  useBodyScrollLock(ref);

  return (
    <StyledNav
      ref={ref}
      id={id}
      style={TRANSITION_STYLES[animationState]}
      duration={duration}
    >
      {children}
    </StyledNav>
  );
};

export { TransitionSidebar };
