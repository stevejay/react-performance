import { theme } from "./theme";

export type ThemeType = typeof theme;

// Note the comment from the `styled-component` typings:
// "This interface can be augmented by users to add types
// to `styled-components`' default theme without needing
// to re-export `ThemedStyledComponentsModule`.

declare module "styled-components" {
  /* tslint:disable */
  export interface DefaultTheme extends ThemeType {}
}
