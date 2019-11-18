import { typography, variant, TypographyProps } from "@xstyled/system";
import { styled, theme } from "src/shared/styled";

type StyledButtonProps = {
  readonly variant?: keyof typeof theme["buttons"];
  readonly size?: keyof typeof theme["buttonSizes"];
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
  ({ theme }) => ({
    appearance: "none",
    background: "none repeat scroll 0 0 transparent",
    borderSpacing: 0,
    padding: 0,
    margin: 0,
    cursor: "pointer",
    position: "relative",
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.md,
    borderRadius: theme.radii.xs,
    borderWidth: theme.borderWidths.hair,
    borderStyle: "solid"
  }),
  variants,
  sizes,
  typography,
  {
    "&:disabled": {
      opacity: 0.65
    },
    '&:disabled, &[data-loading="true"]': {
      cursor: "not-allowed"
    },
    '&:hover:not(:disabled):not([data-loading="true"]), &:active:not(:disabled):not([data-loading="true"])': {
      filter: "contrast(1.4)"
    }
  }
);

export { StyledButton };
