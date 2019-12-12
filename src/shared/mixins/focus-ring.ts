import { css } from "@emotion/core";
import { DefaultTheme } from "app-theme";

const focusRing = (props: { theme: DefaultTheme }) => css`
  box-shadow: 0 0 0 4px ${props.theme.colors.focus};
`;

export { focusRing };
