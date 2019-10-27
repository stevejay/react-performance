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
const link = "#0000EE";

const colors = {
  primary100: redViolet,
  primary500: persianPink,
  primary900: lightHotPink,
  secondary500: "#F8CA1F",
  black: "#000",
  white: "#FFF",
  gray100: charlestonGreen,
  gray300: onyx,
  link
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

const radii = [0, "0.25em", "0.5em", "1em"];

const timings = [0, 250]; // In milliseconds
timings.modalAnimation = timings[1];

const shadows = [
  "none",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
];
shadows.sm = shadows[1];
shadows.md = shadows[2];
shadows.lg = shadows[3];
shadows.xl = shadows[4];
shadows.xxl = shadows[5];

const borderWidths = [0, "1px"];
borderWidths.hair = "1px";

const theme = {
  space,
  fonts,
  fontSizes,
  colors,
  breakpoints,
  borderWidths,
  mediaQueries,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  timings
};

export { theme };
