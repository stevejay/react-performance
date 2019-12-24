import React from "react";
import { keyframes } from "@emotion/core";
import { Icons } from "src/shared/icons";
import { styled } from "src/shared/styled";

const spinKeyframes = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;

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

  & svg {
    animation: ${props => props.theme.timings.spinner}ms ${spinKeyframes} linear
      infinite;
  }
`;

type Props = {
  isLoading: boolean;
  size: "small" | "medium" | "icon" | undefined;
};

const CSSAnimationLoader: React.FC<Props> = ({ size, isLoading }) =>
  isLoading ? (
    <LoaderWrap>
      <Icons.Spinner size={size === "small" ? 4 : 5} />
    </LoaderWrap>
  ) : null;

export { CSSAnimationLoader };
