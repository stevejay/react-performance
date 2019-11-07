import React from "react";
import styled from "styled-components/macro";
import { css } from "styled-components";
import { TransitionStatus } from "react-transition-group/Transition";
import { useBodyScrollLock } from "src/shared";

type StyledProps = {
  readonly duration: number;
  readonly animationState: TransitionStatus;
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
  will-change: opacity, transform;
  transition: opacity ${props => props.duration / 2}ms ease-in,
    transform ${props => props.duration}ms ease-in;

  ${props =>
    (props.animationState === "exiting" || props.animationState === "exited") &&
    css`
      transition: opacity ${props.duration / 2}ms ease-in
          ${props.duration / 2}ms,
        transform ${props.duration}ms ease-in;
    `}
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
      animationState={animationState}
      style={TRANSITION_STYLES[animationState]}
      duration={duration}
    >
      {children}
    </StyledNav>
  );
};

export { TransitionSidebar };
