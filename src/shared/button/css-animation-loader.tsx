import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { Icons } from "src/shared/icons";

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
  readonly isLoading: boolean;
};

const CSSAnimationLoader: React.FC<Props> = ({ isLoading }) =>
  isLoading ? (
    <LoaderWrap>
      <Icons.Spinner size={5} />
    </LoaderWrap>
  ) : null;

export { CSSAnimationLoader };
