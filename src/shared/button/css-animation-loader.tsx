import React from "react";
import { keyframes } from "@emotion/core";
import { Icons } from "src/shared/icons";
import { styled } from "src/shared/styled";

const spinKeyframes = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;

const LoaderWrap = styled.span(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "& svg": {
    animation: `${theme.timings.spinner}ms ${spinKeyframes} linear infinite`
  }
}));

type Props = {
  readonly isLoading: boolean;
};

const CSSAnimationLoader: React.FC<Props> = ({ isLoading }) =>
  isLoading ? (
    <LoaderWrap>
      <Icons.Spinner size={5} />
    </LoaderWrap>
  ) : null;

export { CSSAnimationLoader };
