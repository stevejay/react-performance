import { theme } from "./theme";

declare type Theme = typeof theme;

// From the `styled-component` typings:
// "This interface [DefaultTheme] can be augmented by users to
// add types to the `styled-components`' default theme without needing
// to re-export `ThemedStyledComponentsModule`.

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
