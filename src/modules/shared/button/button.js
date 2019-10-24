import React from "react";
import styled from "styled-components/macro";
import { typography } from "styled-system";

const StyledButton = styled.button`
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights[2]};
  margin: 0;
  padding: 0;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* & > span > * + * {
    margin-left: 20px;
  } */

  border: 1px solid white;
  border-radius: 0.25em;
  padding: 0 0.25em;
  ${typography} /* & svg {
    margin-right: 0.25em;
  } */
`;

const StyledWrap = styled.span`
  display: flex;
  align-items: center;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    <StyledWrap>{children}</StyledWrap>
  </StyledButton>
);

export { Button };
