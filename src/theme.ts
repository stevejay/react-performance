// Documentation for styled-system theme format:
// https://www.smooth-code.com/open-source/xstyled/docs/theme-specification/

// ----- types -----

type ReadonlyArrayWithAliases<T, K extends string> = ReadonlyArray<T> &
  {
    [P in K]?: T;
  };

type ReadonlyRecord<T, K extends string> = {
  [P in K]: T;
};

// ----- space -----

const space: ReadonlyArrayWithAliases<
  string,
  "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
> = ["0px", "0.5rem", "1rem", "1.5rem", "2.5rem", "4rem", "6.5rem"];

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

// ----- fontWeights -----

const fontWeights = {
  lighter: 300,
  normal: 400,
  bold: 600
} as const;

// ----- lineHeights -----

const lineHeights: ReadonlyArray<number> = [1, 1.4, 1.5];

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
  transparent: "rgba(0,0,0,0)",
  gray900: charlestonGreen,
  gray600: onyx,
  gray500: "#565656",
  gray100: "#ECEFF1",
  link,
  focus: "#228BEC"
} as const;

// ----- breakpoints -----

// px values are for 1rem === 16px:
const breakpoints: ReadonlyRecord<
  string | number,
  "xs" | "sm" | "md" | "lg" | "xl"
> = {
  xs: 0,
  sm: "37.5rem", // tabletPortrait 600px
  md: "56.25rem", // tabletLandscape 900px
  lg: "75rem", // desktop 1200px
  xl: "112.5rem" // wideDesktop 1800px
};

// ----- mediaQueries -----

const mediaQueries = {
  tabletPortrait: `@media screen and (min-width: ${breakpoints.sm})`,
  tabletLandscape: `@media screen and (min-width: ${breakpoints.md})`,
  desktop: `@media screen and (min-width: ${breakpoints.lg})`,
  wideDesktop: `@media screen and (min-width: ${breakpoints.xl})`
} as const;

// ----- radii -----

const radii: ReadonlyArrayWithAliases<string, "circle"> = [
  "0px",
  "0.25em",
  "0.5em",
  "1em",
  "100%"
];

radii.circle = radii[4];

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

const borderWidths: ReadonlyArrayWithAliases<string, "hair"> = ["0px", "1px"];

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

// ----- sizes -----

const sizes: ReadonlyArrayWithAliases<string, "copy"> = ["66ch"];

sizes.copy = sizes[0];

// ----- theme -----

const theme = Object.freeze({
  name: "default",
  space,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  breakpoints,
  borderWidths,
  mediaQueries,
  lineHeights,
  radii,
  shadows,
  sizes,
  timings,
  zIndices,
  buttons
});

export { theme };

/*
style-system's theme:

export interface Theme {
    breakpoints?: string[] | number[] | object;
    mediaQueries?: { [size: string]: string };
    space?: ObjectOrArray<number | string>;
    fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>;
    colors?: ObjectOrArray<CSS.ColorProperty>;
    fonts?: ObjectOrArray<CSS.FontFamilyProperty>;
    fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
    lineHeights?: ObjectOrArray<CSS.LineHeightProperty<{}>>;
    letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<{}>>;
    sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
    borders?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderWidths?: ObjectOrArray<CSS.BorderWidthProperty<{}>>;
    radii?: ObjectOrArray<CSS.BorderRadiusProperty<{}>>;
    shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
    zIndices?: ObjectOrArray<CSS.ZIndexProperty>;
    buttons?: ObjectOrArray<CSS.StandardProperties>;
    colorStyles?: ObjectOrArray<CSS.StandardProperties>;
    textStyles?: ObjectOrArray<CSS.StandardProperties>;
}

example:

const theme: Theme = {
  breakpoints: ['1200px'],
  fontSizes: [10, 12, 14, 16, 24, 32],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  fontWeights: { normal: 400, bold: 500, bolder: 700 },
  fonts: {
    primary: 'Roboto, system-ui, sans-serif',
  },
  radii: {
    none: 0,
    small: 2,
    medium: 4,
    large: 40,
    circle: 99999,
  },
  colors: {
    transparent: 'rgba(0,0,0,0)',

    white: '#ffffff',
  },
  lineHeights: ['14px', '16px', '18px', '20px', '28px', '36px'],
  letterSpacings: ['normal'],
  shadows: {
    none: 'none',
    dark50: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    dark100: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    dark150: '0px 1px 6px rgba(0, 0, 0, 0.15)',
    dark200: '0px 2px 16px rgba(0, 0, 0, 0.20)',
    dark250: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  },
};
*/
