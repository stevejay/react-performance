import styled from "styled-components/macro";
// import * as xstyled from "@xstyled/styled-components";
import { css } from "styled-components";
import { th, getColor, getSpace, getFont, getFontSize } from "@xstyled/system";
import { themeGet } from "@styled-system/theme-get";

const StyledExampleThemeLambdas = styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary900};
  padding: ${props => props.theme.space[3]};
  margin: ${props => props.theme.space[4]};
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[4]};
`;

const StyledExampleJavaScriptObject = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary900};
    padding: ${theme.space[3]};
    margin: ${theme.space[4]};
    font-family: ${theme.fonts.display};
    font-size: ${theme.fontSizes[4]};
  `
);

const StyledExampleGetters = styled.div`
  color: ${getColor("white")};
  background-color: ${getColor("primary900")};
  padding: ${getSpace(3)};
  margin: ${getSpace(4)};
  font-family: ${getFont("display")};
  font-size: ${getFontSize(4)};
`;

const StyledExampleTH = styled.div`
  color: ${th.color("white")};
  background-color: ${th.color("primary900")};
  padding: ${th.space(3)};
  margin: ${th.space(4)};
  font-family: ${th.font("display")};
  font-size: ${th.fontSize(4)};
`;

// XSTYLED!!!!
const StyledExampleCSS = styled.div`
  color: white;
  background-color: primary900;
  padding: 3;
  margin: 4;
  font-family: display;
  font-size: 4;
`;

const StyledExampleThemeGet = styled.div`
  color: ${themeGet("colors.white")};
  background-color: ${themeGet("colors.primary900")};
  padding: ${themeGet("space.3")};
  margin: ${themeGet("space.4")};
  font-family: ${themeGet("fonts.display")};
  font-size: ${themeGet("fontSizes.4")};
`;

// boo - no strong typing of theme values.

export {
  StyledExampleThemeLambdas,
  StyledExampleGetters,
  StyledExampleJavaScriptObject,
  StyledExampleTH,
  StyledExampleCSS,
  StyledExampleThemeGet
};
