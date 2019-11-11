import React from "react";
import {
  StyledExampleGetters,
  StyledExampleThemeLambdas,
  StyledExampleJavaScriptObject,
  StyledExampleTH,
  StyledExampleCSS,
  StyledExampleThemeGet
} from "src/shared/example/styled-example";
import { StackExample, CustomExample } from "src/shared/example/stack-example";

const ThemeLambdas = () => (
  <StyledExampleThemeLambdas>ThemeLambdas</StyledExampleThemeLambdas>
);

const JavaScriptObject = () => (
  <StyledExampleJavaScriptObject>
    JavaScript Object
  </StyledExampleJavaScriptObject>
);

const Getters = () => <StyledExampleGetters>Getters</StyledExampleGetters>;

const TH = () => <StyledExampleTH>TH</StyledExampleTH>;

const InCSS = () => <StyledExampleCSS>In CSS</StyledExampleCSS>;

const ThemeGet = () => <StyledExampleThemeGet>ThemeGet</StyledExampleThemeGet>;

const Stack = () => (
  //
  <StackExample verticalSpacing={{ xs: 2, lg: 4 }}>
    <div>One</div>
    <div>Two</div>
  </StackExample>
);

const Custom = () => <CustomExample spacing={3}>Hello you</CustomExample>;

// eslint-disable-next-line import/no-default-export
export default {
  title: "StyledExample"
};

export {
  Getters,
  ThemeLambdas,
  JavaScriptObject,
  TH,
  InCSS,
  ThemeGet,
  Stack,
  Custom
};
