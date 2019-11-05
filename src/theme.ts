// Documentation for styled-system theme format:
// https://styled-system.com/theme-specification

// ----- types -----

type ReadonlyArrayWithAliases<T, K extends string> = ReadonlyArray<T> &
  {
    [P in K]?: T;
  };

// ----- space -----

const space: ReadonlyArrayWithAliases<
  string,
  "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
> = ["0", "0.5rem", "1rem", "1.5rem", "2.5rem", "4rem", "6.5rem"];

space.none = space[0];
space.xs = space[1];
space.sm = space[2];
space.md = space[3];
space.lg = space[4];
space.xl = space[5];
space.xxl = space[6];

// ----- fonts -----

const fonts = {
  body: "'Open Sans', sans-serif",
  display: "'Montserrat', sans-serif"
};

// ----- fontSizes -----

const fontSizes: ReadonlyArrayWithAliases<string, "body"> = [
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2rem",
  "3rem"
];

fontSizes.body = fontSizes[2];

// ----- colors -----

const redViolet = "#C52184";
const persianPink = "#E574BC";
const lightHotPink = "#F9B4ED";
const onyx = "#334139";
const charlestonGreen = "#1E2D24";
const link = "#0000EE";

const colors = {
  primary900: redViolet,
  primary500: persianPink,
  primary100: lightHotPink,
  contrastHot500: "#F8CA1F",
  contrastCool500: "#60B4B4",
  black: "#000",
  white: "#FFF",
  gray900: charlestonGreen,
  gray600: onyx,
  gray100: "#ECEFF1",
  link
} as const;

// ----- breakpoints -----

// These are <600px, 600px, 900px, 1200px and 1800px, at 1rem === 16px:
const breakpoints: ReadonlyArrayWithAliases<
  string,
  "tabletPortrait" | "tabletLandscape" | "desktop" | "wideDesktop"
> = ["37.5rem", "56.25rem", "75rem", "112.5rem"];

breakpoints.tabletPortrait = breakpoints[0];
breakpoints.tabletLandscape = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.wideDesktop = breakpoints[3];

// ----- mediaQueries -----

const mediaQueries = {
  tabletPortrait: `@media screen and (min-width: ${breakpoints[0]})`,
  tabletLandscape: `@media screen and (min-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${breakpoints[2]})`,
  wideDesktop: `@media screen and (min-width: ${breakpoints[3]})`
} as const;

// ----- fontWeights -----

const fontWeights = {
  lighter: 300,
  normal: 400,
  bold: 600
} as const;

// ----- lineHeights -----

const lineHeights: ReadonlyArray<number> = [1, 1.4, 1.5];

// ----- radii -----

const radii: ReadonlyArray<string> = ["0", "0.25em", "0.5em", "1em"];

// ----- timings -----

const timings: ReadonlyArrayWithAliases<
  number,
  "modalAnimation" | "contentFade" | "spinner"
> = [0, 250, 500, 750]; // in milliseconds

timings.modalAnimation = timings[1];
timings.contentFade = timings[2];
timings.spinner = timings[3];

// ----- shadows -----

const shadows: ReadonlyArrayWithAliases<
  string,
  "sm" | "md" | "lg" | "xl" | "xxl"
> = [
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

// ----- borderWidths -----

const borderWidths: ReadonlyArrayWithAliases<string, "hair"> = ["0", "1px"];

borderWidths.hair = "1px";

// ----- zIndices -----

const zIndices: ReadonlyArrayWithAliases<
  number,
  "header" | "sidebar" | "modalDialog"
> = [100, 200, 300];

zIndices.header = zIndices[0];
zIndices.sidebar = zIndices[1];
zIndices.modalDialog = zIndices[2];

// ----- buttons -----

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary900,
    borderColor: colors.primary900
  },
  outlineInverted: {
    color: colors.white,
    backgroundColor: "transparent",
    borderColor: colors.white
  }
} as const;

// ----- theme -----

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
  timings,
  zIndices,
  buttons
};

export { theme };
