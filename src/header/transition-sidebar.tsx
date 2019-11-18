import React from "react";
import css from "@emotion/css/macro";
import { getColor, getShadow, getZIndex } from "@xstyled/system";
import { TransitionStatus } from "react-transition-group/Transition";
import { useBodyScrollLock, styled } from "src/shared";

type Props = {
  readonly animationState: TransitionStatus;
  readonly id: string;
  readonly duration: number;
};

const StyledNav = styled.nav<Props>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  color: ${getColor("white")};
  background-color: ${getColor("primary900")};
  overflow-y: scroll;
  box-shadow: ${getShadow("xxl")};
  z-index: ${getZIndex("sidebar")};
  -webkit-overflow-scrolling: touch;
  will-change: opacity, transform;
  transition: opacity ${props => props.duration / 2}ms ease-in,
    transform ${props => props.duration}ms ease-in;

  ${({ animationState, duration }) =>
    (animationState === "exiting" || animationState === "exited") &&
    css`
      transition: opacity ${duration / 2}ms ease-in ${duration / 2}ms,
        transform ${duration}ms ease-in;
    `}
`;

const TRANSITION_STYLES: Partial<Record<
  TransitionStatus,
  React.CSSProperties
>> = {
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
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
