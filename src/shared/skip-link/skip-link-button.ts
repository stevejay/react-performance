import styled from "styled-components/macro";
import { css } from "styled-components";

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
    padding: ${theme.space.xs};
  `
);

export { SkipLinkButton };
