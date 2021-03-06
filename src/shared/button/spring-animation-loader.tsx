import React from "react";
import { useSpring, animated } from "react-spring";
import { Icons } from "src/shared/icons";
import { styled, useTheme } from "src/shared/styled";

const LoaderWrap = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  line-height: 0;
`;

type Props = {
  isLoading: boolean;
};

const SpringAnimationLoader: React.FC<Props> = ({ isLoading }) => {
  const duration = useTheme().timings.spinner;

  const animationProps = useSpring({
    from: { transform: "rotate(0deg)" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: async (next: any) => {
      while (isLoading) {
        await next({ transform: "rotate(360deg)" });
        await next({ reset: true });
      }
    },
    config: { duration }
  });

  if (!isLoading) {
    return null;
  }

  return (
    <LoaderWrap>
      <animated.span style={animationProps}>
        <Icons.Spinner size={5} />
      </animated.span>
    </LoaderWrap>
  );
};

export { SpringAnimationLoader };
