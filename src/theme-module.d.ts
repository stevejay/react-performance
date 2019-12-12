import { theme } from "./theme";

declare module "app-theme" {
  type DefaultThemeType = typeof theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends DefaultThemeType {}
}
