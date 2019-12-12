import React from "react";
import { Portal } from "react-portal";
import { th } from "@xstyled/system";
import { animated, useTransition } from "react-spring";
import { styled } from "src/shared/styled";

const StyledModalBackdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${th.color("black")};
  z-index: ${th.zIndex("sidebar")};
  will-change: opacity;
`;

type Props = {
  readonly isOpen: boolean;
  readonly duration: number;
};

const SpringModalBackdrop: React.FC<Props> = ({ isOpen, duration }) => {
  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {transitions.map(
        ({ item: visible, key, props }) =>
          visible && (
            <Portal key={key}>
              <StyledModalBackdrop style={props} role="presentation" />
            </Portal>
          )
      )}
    </>
  );
};

export { SpringModalBackdrop };
