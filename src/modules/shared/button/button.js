import React from "react";
import styled from "styled-components/macro";
import { typography } from "styled-system";

const StyledButton = styled.button`
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights[2]};
  border: ${props => props.theme.borderWidths.hair} solid
    ${props => props.theme.colors.white};
  border-spacing: 0;
  border-radius: ${props => props.theme.radii[1]};
  padding: 0 0.25em;
  margin: 0;
  cursor: pointer;
  ${typography}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
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
