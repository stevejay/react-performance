import { theme } from "src/shared";

const focusRing = ({ theme: themeObj }: { theme: typeof theme }) => `
  box-shadow: 0 0 0 4px ${themeObj.colors.focus};
`;

export { focusRing };
