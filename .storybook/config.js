import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../src/shared";
import { GlobalStyle } from "../src/global-style";

configure(require.context("../src", true, /\.stories\.tsx?$/), module);

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalStyleDecorator);
