import styled from "styled-components/macro";
import { css } from "styled-components";
import {
  space,
  typography,
  SpaceProps,
  TypographyProps
} from "@xstyled/system";
import { darken, lighten } from "polished";

type ButtonVariants = import("styled-components").DefaultTheme["buttons"];

type StyledButtonProps = {
  readonly variant: keyof ButtonVariants;
} & SpaceProps &
  TypographyProps;

const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, variant }) => css`
    appearance: none;
    background: none repeat scroll 0 0 transparent;
    border-spacing: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: relative;
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.lineHeights.md};
    border-radius: ${theme.radii.xs};
    background-color: ${theme.buttons[variant].backgroundColor};
    color: ${theme.buttons[variant].color};
    border: ${theme.borderWidths.hair} solid
      ${theme.buttons[variant].borderColor};
    ${typography}
    ${space}

    &:disabled {
      background-color: ${lighten(
        0.35,
        theme.buttons[variant].backgroundColor
      )};
      border-color: ${lighten(0.35, theme.buttons[variant].borderColor)};
    }

    &:disabled,
    &[data-loading="true"] {
      cursor: not-allowed;
    }

    &:hover:not(:disabled):not([data-loading="true"]),
    &:active:not(:disabled):not([data-loading="true"]) {
      background-color: ${darken(0.1, theme.buttons[variant].backgroundColor)};
      border-color: ${darken(0.1, theme.buttons[variant].borderColor)};
    }
  `
);

export { StyledButton };
