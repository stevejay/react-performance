import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from "../src/theme";
import { GlobalStyle } from "../src/global-style";

configure(require.context("../src", true, /\.stories\.tsx?$/), module);

const GlobalStyleDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(GlobalStyleDecorator);

const themes = [theme];
addDecorator(withThemesProvider(themes));
