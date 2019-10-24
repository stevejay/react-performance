// Documentation for styled-system theme format:
// https://styled-system.com/theme-specification

const space = [0, "0.5rem", "1rem", "1.5rem", "2.5rem", "4rem", "6.5rem"];

space.none = space[0];
space.xs = space[1];
space.sm = space[2];
space.md = space[3];
space.lg = space[4];
space.xl = space[5];
space.xxl = space[6];

const fonts = {
  body: "'Open Sans', sans-serif",
  display: "'Montserrat', sans-serif"
};

const fontSizes = [
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2rem",
  "3rem"
];

fontSizes.body = fontSizes[2];

const redViolet = "#C52184";
const persianPink = "#E574BC";
const lightHotPink = "#F9B4ED";
const onyx = "#334139";
const charlestonGreen = "#1E2D24";

const colors = {
  primary100: redViolet,
  primary500: persianPink,
  primary900: lightHotPink,
  black: "#000",
  white: "#FFF",
  gray100: charlestonGreen,
  gray300: onyx
};

// These are <600px, 600px, 900px, 1200px and 1800px, at 1rem === 16px:
const breakpoints = ["37.5rem", "56.25rem", "75rem", "112.5rem"];

const mediaQueries = {
  tabletPortrait: `@media screen and (min-width: ${breakpoints[0]})`,
  tabletLandscape: `@media screen and (min-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${breakpoints[2]})`,
  wideDesktop: `@media screen and (min-width: ${breakpoints[3]})`
};

const fontWeights = {
  light: 300,
  normal: 400,
  bold: 600
};

const lineHeights = [1, 1.4, 1.5];

const zIndices = {
  modal: 1000
};

const theme = {
  space,
  fonts,
  fontSizes,
  colors,
  breakpoints,
  mediaQueries,
  fontWeights,
  lineHeights,
  zIndices
};

export { theme };
