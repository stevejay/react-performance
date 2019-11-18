import React from "react";
import { getColor, getShadow, getZIndex } from "@xstyled/system";
import { animated, useTransition } from "react-spring";
import { useBodyScrollLock, styled } from "src/shared";

const StyledNav = styled(animated.nav)`
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
  will-change: opacity, transform;
  -webkit-overflow-scrolling: touch;
`;

type Props = {
  readonly id: string;
  readonly animationState: boolean;
  readonly duration: number;
  children: React.ReactNode;
};

const SpringSidebar: React.FC<Props> = ({
  id,
  animationState: isOpen,
  duration,
  children
}) => {
  const ref = React.useRef<HTMLElement>(null);
  useBodyScrollLock(ref);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0, transform: "translateX(100px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100px)" }
  });

  return (
    <>
      {transitions.map(
        ({ item: visible, key, props }) =>
          visible && (
            <StyledNav key={key} ref={ref} id={id} style={props}>
              {children}
            </StyledNav>
          )
      )}
    </>
  );
};

export { SpringSidebar };
