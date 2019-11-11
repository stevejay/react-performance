/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */

declare module "@xstyled/styled-components" {
  //   import styled from "styled-components";
  import styled, * as StyledComponents from "styled-components";

  export * from "styled-components";

  interface Breakpoints {
    xs: any;
    sm: any;
    md: any;
    lg: any;
    xl: any;
  }

  type BreakpointObject<ArgType> = {
    [Key in keyof Breakpoints]?: ArgType;
  };

  /* Augments a type to be Type | BreakpointObject<Type>,
   * in other words, allow a property to be `number | string` or `{ xs: number | string, sm: number | string }`
   */
  type WithBreakpointArgs<Props> = {
    [Key in keyof Props]?: Props[Key] | BreakpointObject<Props[Key]>;
  };

  interface BoxPropsBase {
    /* See props documentation at:
     * https://www.smooth-code.com/open-source/smooth-ui/docs/box/#box-2
     */
    /* Display */
    background: number | string;
    backgroundColor: number | string;
    backgroundImage: number | string;
    backgroundSize: number | string;
    backgroundPosition: number | string;
    backgroundRepeat: number | string;
    opacity: number | string;
    overflow: number | string;
    transition: number | string;
    border: number | string;
    borderTop: number | string;
    borderTopColor: number | string;
    borderRight: number | string;
    borderRightColor: number | string;
    borderBottom: number | string;
    borderBottomColor: number | string;
    borderLeft: number | string;
    borderLeftColor: number | string;
    borderColor: number | string;
    borderWidth: number | string;
    borderStyle: number | string;
    borderRadius: number | string;
    display: number | string;
    alignItems: number | string;
    alignContent: number | string;
    justifyContent: number | string;
    justifyItems: number | string;
    flexWrap: number | string;
    flexBasis: number | string;
    flexDirection: number | string;
    flex: number | string;
    justifySelf: number | string;
    alignSelf: number | string;
    order: number | string;
    gridGap: number | string;
    gridColumnGap: number | string;
    gridRowGap: number | string;
    gridColumn: number | string;
    gridRow: number | string;
    gridAutoFlow: number | string;
    gridAutoColumns: number | string;
    gridAutoRows: number | string;
    gridTemplateColumns: number | string;
    gridTemplateRows: number | string;
    gridTemplateAreas: number | string;
    gridArea: number | string;
    width: number | string;
    height: number | string;
    maxWidth: number | string;
    maxHeight: number | string;
    minWidth: number | string;
    minHeight: number | string;
    size: number | string;
    verticalAlign: number | string;
    position: number | string;
    zIndex: number | string;
    top: number | string;
    right: number | string;
    bottom: number | string;
    left: number | string;
    boxShadow: number | string;
    textShadow: number | string;
    margin: number | string;
    m: number | string;
    marginTop: number | string;
    mt: number | string;
    marginRight: number | string;
    mr: number | string;
    marginBottom: number | string;
    mb: number | string;
    marginLeft: number | string;
    ml: number | string;
    mx: number | string;
    my: number | string;
    padding: number | string;
    p: number | string;
    paddingTop: number | string;
    pt: number | string;
    paddingRight: number | string;
    pr: number | string;
    paddingBottom: number | string;
    pb: number | string;
    paddingLeft: number | string;
    pl: number | string;
    px: number | string;
    py: number | string;
    fontFamily: number | string;
    fontSize: number | string;
    lineHeight: number | string;
    fontWeight: number | string;
    textAlign: number | string;
    letterSpacing: number | string;
    color: number | string;
    textTransform: number | string;
    row: number | string;
    col: number | string;
  }

  /* adds support for { xs: arg } and makes all props optional */
  export type BoxProps = WithBreakpointArgs<BoxPropsBase>;

  // type BoxPropsWithBreakpointArgs = WithBreakpointArgs<BoxProps>
  // export const Box: React.ComponentType<BoxProps>
  export const Box: StyledComponents.StyledComponent<
    "div",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;

  /** Support for xxBoxes, i.e. aBox, articleBox
   * List of dom elements from Styled Components:
   * https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/domElements.js */

  export const aBox: StyledComponents.StyledComponent<
    "a",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const abbrBox: StyledComponents.StyledComponent<
    "abbr",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const addressBox: StyledComponents.StyledComponent<
    "address",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const areaBox: StyledComponents.StyledComponent<
    "area",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const articleBox: StyledComponents.StyledComponent<
    "article",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const asideBox: StyledComponents.StyledComponent<
    "aside",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const audioBox: StyledComponents.StyledComponent<
    "audio",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const bBox: StyledComponents.StyledComponent<
    "b",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const baseBox: StyledComponents.StyledComponent<
    "base",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const bdiBox: StyledComponents.StyledComponent<
    "bdi",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const bdoBox: StyledComponents.StyledComponent<
    "bdo",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const bigBox: StyledComponents.StyledComponent<
    "big",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const blockquoteBox: StyledComponents.StyledComponent<
    "blockquote",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const bodyBox: StyledComponents.StyledComponent<
    "body",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const brBox: StyledComponents.StyledComponent<
    "br",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const buttonBox: StyledComponents.StyledComponent<
    "button",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const canvasBox: StyledComponents.StyledComponent<
    "canvas",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const captionBox: StyledComponents.StyledComponent<
    "caption",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const citeBox: StyledComponents.StyledComponent<
    "cite",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const codeBox: StyledComponents.StyledComponent<
    "code",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const colBox: StyledComponents.StyledComponent<
    "col",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const colgroupBox: StyledComponents.StyledComponent<
    "colgroup",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const dataBox: StyledComponents.StyledComponent<
    "data",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const datalistBox: StyledComponents.StyledComponent<
    "datalist",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const ddBox: StyledComponents.StyledComponent<
    "dd",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const delBox: StyledComponents.StyledComponent<
    "del",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const detailsBox: StyledComponents.StyledComponent<
    "details",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const dfnBox: StyledComponents.StyledComponent<
    "dfn",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const dialogBox: StyledComponents.StyledComponent<
    "dialog",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const divBox: StyledComponents.StyledComponent<
    "div",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const dlBox: StyledComponents.StyledComponent<
    "dl",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const dtBox: StyledComponents.StyledComponent<
    "dt",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const emBox: StyledComponents.StyledComponent<
    "em",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const embedBox: StyledComponents.StyledComponent<
    "embed",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const fieldsetBox: StyledComponents.StyledComponent<
    "fieldset",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const figcaptionBox: StyledComponents.StyledComponent<
    "figcaption",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const figureBox: StyledComponents.StyledComponent<
    "figure",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const footerBox: StyledComponents.StyledComponent<
    "footer",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const formBox: StyledComponents.StyledComponent<
    "form",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h1Box: StyledComponents.StyledComponent<
    "h1",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h2Box: StyledComponents.StyledComponent<
    "h2",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h3Box: StyledComponents.StyledComponent<
    "h3",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h4Box: StyledComponents.StyledComponent<
    "h4",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h5Box: StyledComponents.StyledComponent<
    "h5",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const h6Box: StyledComponents.StyledComponent<
    "h6",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const headBox: StyledComponents.StyledComponent<
    "head",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const headerBox: StyledComponents.StyledComponent<
    "header",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const hgroupBox: StyledComponents.StyledComponent<
    "hgroup",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const hrBox: StyledComponents.StyledComponent<
    "hr",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const htmlBox: StyledComponents.StyledComponent<
    "html",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const iBox: StyledComponents.StyledComponent<
    "i",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const iframeBox: StyledComponents.StyledComponent<
    "iframe",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const imgBox: StyledComponents.StyledComponent<
    "img",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const inputBox: StyledComponents.StyledComponent<
    "input",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const insBox: StyledComponents.StyledComponent<
    "ins",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const kbdBox: StyledComponents.StyledComponent<
    "kbd",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const keygenBox: StyledComponents.StyledComponent<
    "keygen",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const labelBox: StyledComponents.StyledComponent<
    "label",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const legendBox: StyledComponents.StyledComponent<
    "legend",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const liBox: StyledComponents.StyledComponent<
    "li",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const linkBox: StyledComponents.StyledComponent<
    "link",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const mainBox: StyledComponents.StyledComponent<
    "main",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const mapBox: StyledComponents.StyledComponent<
    "map",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const markBox: StyledComponents.StyledComponent<
    "mark",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;

  /* This one breaks, it looks like marquee is not supported in JSX.IntrinsicElements */
  // export const marqueeBox: StyledComponents.StyledComponent<'marquee', StyledComponents.DefaultTheme, WithBreakpointArgs<BoxProps>>

  export const menuBox: StyledComponents.StyledComponent<
    "menu",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const menuitemBox: StyledComponents.StyledComponent<
    "menuitem",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const metaBox: StyledComponents.StyledComponent<
    "meta",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const meterBox: StyledComponents.StyledComponent<
    "meter",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const navBox: StyledComponents.StyledComponent<
    "nav",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const noscriptBox: StyledComponents.StyledComponent<
    "noscript",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const objectBox: StyledComponents.StyledComponent<
    "object",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const olBox: StyledComponents.StyledComponent<
    "ol",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const optgroupBox: StyledComponents.StyledComponent<
    "optgroup",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const optionBox: StyledComponents.StyledComponent<
    "option",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const outputBox: StyledComponents.StyledComponent<
    "output",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const pBox: StyledComponents.StyledComponent<
    "p",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const paramBox: StyledComponents.StyledComponent<
    "param",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const pictureBox: StyledComponents.StyledComponent<
    "picture",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const preBox: StyledComponents.StyledComponent<
    "pre",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const progressBox: StyledComponents.StyledComponent<
    "progress",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const qBox: StyledComponents.StyledComponent<
    "q",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const rpBox: StyledComponents.StyledComponent<
    "rp",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const rtBox: StyledComponents.StyledComponent<
    "rt",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const rubyBox: StyledComponents.StyledComponent<
    "ruby",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const sBox: StyledComponents.StyledComponent<
    "s",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const sampBox: StyledComponents.StyledComponent<
    "samp",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const scriptBox: StyledComponents.StyledComponent<
    "script",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const sectionBox: StyledComponents.StyledComponent<
    "section",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const selectBox: StyledComponents.StyledComponent<
    "select",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const smallBox: StyledComponents.StyledComponent<
    "small",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const sourceBox: StyledComponents.StyledComponent<
    "source",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const spanBox: StyledComponents.StyledComponent<
    "span",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const strongBox: StyledComponents.StyledComponent<
    "strong",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const styleBox: StyledComponents.StyledComponent<
    "style",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const subBox: StyledComponents.StyledComponent<
    "sub",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const summaryBox: StyledComponents.StyledComponent<
    "summary",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const supBox: StyledComponents.StyledComponent<
    "sup",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const tableBox: StyledComponents.StyledComponent<
    "table",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const tbodyBox: StyledComponents.StyledComponent<
    "tbody",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const tdBox: StyledComponents.StyledComponent<
    "td",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const textareaBox: StyledComponents.StyledComponent<
    "textarea",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const tfootBox: StyledComponents.StyledComponent<
    "tfoot",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const thBox: StyledComponents.StyledComponent<
    "th",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const theadBox: StyledComponents.StyledComponent<
    "thead",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const timeBox: StyledComponents.StyledComponent<
    "time",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const titleBox: StyledComponents.StyledComponent<
    "title",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const trBox: StyledComponents.StyledComponent<
    "tr",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const trackBox: StyledComponents.StyledComponent<
    "track",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const uBox: StyledComponents.StyledComponent<
    "u",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const ulBox: StyledComponents.StyledComponent<
    "ul",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const varBox: StyledComponents.StyledComponent<
    "var",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const videoBox: StyledComponents.StyledComponent<
    "video",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const wbrBox: StyledComponents.StyledComponent<
    "wbr",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;

  // SVG
  export const circleBox: StyledComponents.StyledComponent<
    "circle",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const clipPathBox: StyledComponents.StyledComponent<
    "clipPath",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const defsBox: StyledComponents.StyledComponent<
    "defs",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const ellipseBox: StyledComponents.StyledComponent<
    "ellipse",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const foreignObjectBox: StyledComponents.StyledComponent<
    "foreignObject",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const gBox: StyledComponents.StyledComponent<
    "g",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const imageBox: StyledComponents.StyledComponent<
    "image",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const lineBox: StyledComponents.StyledComponent<
    "line",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const linearGradientBox: StyledComponents.StyledComponent<
    "linearGradient",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const markerBox: StyledComponents.StyledComponent<
    "marker",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const maskBox: StyledComponents.StyledComponent<
    "mask",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const pathBox: StyledComponents.StyledComponent<
    "path",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const patternBox: StyledComponents.StyledComponent<
    "pattern",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const polygonBox: StyledComponents.StyledComponent<
    "polygon",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const polylineBox: StyledComponents.StyledComponent<
    "polyline",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const radialGradientBox: StyledComponents.StyledComponent<
    "radialGradient",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const rectBox: StyledComponents.StyledComponent<
    "rect",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const stopBox: StyledComponents.StyledComponent<
    "stop",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const svgBox: StyledComponents.StyledComponent<
    "svg",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const textBox: StyledComponents.StyledComponent<
    "text",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;
  export const tspanBox: StyledComponents.StyledComponent<
    "tspan",
    StyledComponents.DefaultTheme,
    WithBreakpointArgs<BoxProps>
  >;

  export default styled;
}
