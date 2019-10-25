import React from "react";
import styled from "styled-components/macro";
import { typography } from "styled-system";

const StyledButton = styled.button`
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights[2]};
  border: 1px solid white;
  border-spacing: 0;
  border-radius: 0.25em;
  padding: 0 0.25em;
  margin: 0;
  ${typography}
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
