import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { space, typography } from "styled-system";
import { darken, lighten } from "polished";
import { Icons } from "../icons";

const StyledButton = styled.button`
  /* Reset appearance */
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  border: none;
  border-spacing: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  position: relative;
  background-color: ${props =>
    props.theme.buttons[props.variant].backgroundColor};
  color: ${props => props.theme.buttons[props.variant].color};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights[2]};
  border-width: ${props => props.theme.borderWidths.hair};
  border-style: solid;
  border-color: ${props => props.theme.buttons[props.variant].borderColor};
  border-radius: ${props => props.theme.radii[1]};
  ${typography}
  ${space}

  &:disabled {
    background-color: ${props =>
      lighten(0.5, props.theme.buttons[props.variant].backgroundColor)};
    border-color: ${props =>
      lighten(0.5, props.theme.buttons[props.variant].borderColor)};
  }

  &:disabled,
  &[data-loading="true"] {
    cursor: not-allowed;
  }

  &:hover:not(:disabled):not([data-loading="true"]),
  &:active:not(:disabled):not([data-loading="true"]) {
    background-color: ${props =>
      darken(0.1, props.theme.buttons[props.variant].backgroundColor)};
    border-color: ${props =>
      darken(0.1, props.theme.buttons[props.variant].borderColor)};
  }
`;

const StyledWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isLoading ? 0 : 1)};
`;

const spin = keyframes`
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
    animation: ${props => props.theme.timings.spinner}ms ${spin} linear infinite;
  }
`;

const Button = ({ children, disabled, isLoading, onClick, ...rest }) => (
  <StyledButton
    {...rest}
    disabled={disabled || !onClick}
    data-loading={isLoading}
    onClick={isLoading ? undefined : onClick}
    // aria-disabled={disabled || !onClick || isLoading}
  >
    <StyledWrap isLoading={isLoading}>{children}</StyledWrap>
    {isLoading && (
      <LoaderWrap>
        <Icons.Spinner size={5} />
      </LoaderWrap>
    )}
  </StyledButton>
);

export { Button };

// aria-label="Open site navigation menu"
