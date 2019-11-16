import styled from "styled-components/macro";
import { css } from "styled-components";
import { typography, variant, TypographyProps } from "@xstyled/system";

type StyledButtonProps = {
  readonly variant?: keyof import("styled-components").DefaultTheme["buttons"];
  readonly size?: keyof import("styled-components").DefaultTheme["buttonSizes"];
} & TypographyProps;

const variants = variant({
  key: "buttons",
  prop: "variant",
  default: "primary"
});

const sizes = variant({
  key: "buttonSizes",
  prop: "size",
  default: "medium"
});

const StyledButton = styled.button<StyledButtonProps>(
  ({ theme }) => css`
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
    border-width: ${theme.borderWidths.hair};
    border-style: solid;
    ${variants}
    ${sizes}
    ${typography}

    &:disabled {
      opacity: 0.65;
    }

    &:disabled,
    &[data-loading="true"] {
      cursor: not-allowed;
    }

    &:hover:not(:disabled):not([data-loading="true"]),
    &:active:not(:disabled):not([data-loading="true"]) {
      filter: contrast(1.4);
    }
  `
);

export { StyledButton };
