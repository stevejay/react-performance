import { typography, variant, TypographyProps, th } from "@xstyled/system";
import { styled } from "src/shared/styled";
import { DefaultTheme } from "app-theme";

type StyledButtonProps = {
  readonly variant?: keyof DefaultTheme["buttons"];
  readonly size?: keyof DefaultTheme["buttonSizes"];
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

const StyledButton = styled.button<StyledButtonProps>`
    appearance: none;
    background: none repeat scroll 0 0 transparent;
    border-spacing: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: relative;
    font-weight: ${th.fontWeight("normal")};
    line-height: ${th.lineHeight("md")};
    border-radius: ${th.radius("xs")};
    border-width: ${th.borderWidth("hair")};
    border-style: solid;
    ${variants}
    ${sizes}
    ${typography}

    &:disabled {
        opacity: 0.65;
    }

    &:disabled, &[data-loading="true"] {
        cursor: not-allowed;
    }

    &:hover:not(:disabled):not([data-loading="true"]),
    &:active:not(:disabled):not([data-loading="true"]) {
        filter: contrast(1.4);
    }
`;

export { StyledButton };
