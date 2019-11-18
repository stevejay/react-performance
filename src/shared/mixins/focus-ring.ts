import { css } from "@emotion/core";
import { theme } from "src/shared";

const focusRing = (props: { theme: typeof theme }) => css`
  box-shadow: 0 0 0 4px ${props.theme.colors.focus};
`;

export { focusRing };
