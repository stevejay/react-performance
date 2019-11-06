import { theme } from "./theme";

// From the `styled-component` typings:
// "This interface [DefaultTheme] can be augmented by users to
// add types to the `styled-components`' default theme without needing
// to re-export `ThemedStyledComponentsModule`."

declare module "styled-components" {
  type AppTheme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
