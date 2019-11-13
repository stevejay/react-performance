// Documentation for styled-system theme format:
// https://www.smooth-code.com/open-source/xstyled/docs/theme-specification/

const colors = {
  primary900: "#C52184",
  primary500: "#E574BC",
  primary100: "#F9B4ED",
  contrastHot500: "#F8CA1F",
  contrastCool500: "#60B4B4",
  black: "#000",
  white: "#FFF",
  transparent: "rgba(0,0,0,0)",
  gray900: "#1E2D24",
  gray600: "#334139",
  gray500: "#565656",
  gray100: "#ECEFF1",
  link: "#0000EE",
  focus: "#228BEC"
} as const;

const theme = {
  name: "default",
  colors,
  space: {
    none: "0px",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "4rem",
    xxl: "6.5rem"
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    display: "'Montserrat', sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
    banner: "3rem"
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600
  },
  lineHeights: {
    xs: 1,
    sm: 1.4,
    md: 1.5
  },
  // px values are for 1rem === 16px:
  breakpoints: {
    xs: "0em",
    sm: "37.5rem", // tabletPortrait 600px
    md: "56.25rem", // tabletLandscape 900px
    lg: "75rem", // desktop 1200px
    xl: "112.5rem" // wideDesktop 1800px
  },
  borderWidths: {
    none: "0px",
    hair: "1px"
  },
  radii: {
    none: "0px",
    xs: "0.25em",
    sm: "0.5em",
    md: "1em",
    circle: "100%"
  },
  shadows: {
    none: "none",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  sizes: {
    copy: "66ch"
  },
  timings: {
    instant: 0,
    modalAnimation: 250,
    contentFade: 500,
    spinner: 750
  },
  zIndices: {
    header: 100,
    sidebar: 200,
    modalDialog: 300
  },
  buttons: {
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
  }
} as const;

export { theme };
