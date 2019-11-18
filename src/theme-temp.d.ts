import { theme } from "./theme";

declare module "app-theme" {
  type AppThemeType = typeof theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AppTheme extends AppThemeType {}
}
