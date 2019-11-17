import css from "@emotion/css/macro";
import { styled } from "src/shared/styled";

// TODO why does this work with embedded lambda???
const SkipLinkButton = styled.button(
  ({ theme }) => css`
    position: absolute;
    left: 1em;
    top: 1em;
    appearance: none;
    background: ${theme.colors.white};
    border-spacing: 0;
    border-radius: ${theme.radii.xs};
    color: ${theme.colors.link};
    font-weight: ${theme.fontWeights.normal};
    text-decoration: underline;
    padding: ${theme.space[1]};
  `
);

export { SkipLinkButton };
