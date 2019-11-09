import { configure, addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from "../src/theme";

configure(require.context("../src", true, /\.stories\.tsx?$/), module);

const themes = [theme];
addDecorator(withThemesProvider(themes));
