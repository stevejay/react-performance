import React from "react";
import styled from "styled-components/macro";

/*
spacing



*/

type Props = {
  readonly limit?: number;
  readonly spacing: string;
  readonly threshold: string;
};

const StyledOuterWrap = styled.div`
  display: block;
`;

const StyledInnerWrap = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: calc((${props => props.spacing} / 2) * -1);

  & > * {
    flex-basis: calc(
      (${props => props.threshold} - (100% - ${props => props.spacing})) * 999
    );
    margin: calc(${props => props.spacing} / 2);
    flex-grow: 1;
  }

  & > :nth-last-child(n + ${props => props.limit} + 1),
  & > :nth-last-child(n + ${props => props.limit} + 1) ~ * {
    flex-basis: 100%;
  }
`;

const Switcher: React.FC<Props> = ({ limit, spacing, threshold, children }) => (
  <StyledOuterWrap>
    <StyledInnerWrap
      limit={limit || React.Children.count(children)}
      spacing={spacing}
      threshold={threshold}
    >
      {children}
    </StyledInnerWrap>
  </StyledOuterWrap>
);

export { Switcher };
