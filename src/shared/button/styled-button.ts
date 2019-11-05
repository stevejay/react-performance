import styled from "styled-components/macro";
// eslint-disable-next-line import/named
import { DefaultTheme } from "styled-components";
import { space, typography, SpaceProps, TypographyProps } from "styled-system";
import { darken, lighten } from "polished";

type StyledButtonProps = {
  readonly variant: keyof DefaultTheme["buttons"];
} & SpaceProps &
  TypographyProps;

const StyledButton = styled.button<StyledButtonProps>`
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

export { StyledButton };
