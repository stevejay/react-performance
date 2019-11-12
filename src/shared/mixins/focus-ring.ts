const focusRing = ({
  theme
}: {
  theme: import("styled-components").DefaultTheme;
}) => `
  box-shadow: 0 0 0 4px ${theme.colors.focus};
`;

export { focusRing };
