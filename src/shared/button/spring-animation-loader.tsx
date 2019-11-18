/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useSpring, animated } from "react-spring";
import { Icons } from "src/shared/icons";
import { useTheme } from "src/shared/styled";

type Props = {
  readonly isLoading: boolean;
};

const loaderWrapCSS = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  lineHeight: 0
} as const;

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
    <span css={loaderWrapCSS}>
      <animated.span style={animationProps}>
        <Icons.Spinner size={5} />
      </animated.span>
    </span>
  );
};

export { SpringAnimationLoader };
