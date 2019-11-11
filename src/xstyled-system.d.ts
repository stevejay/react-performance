/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Note: This is an early draft; there may be issues and some typings use any.

// Acknowledgements:
// - The `styled-system` typings on DefinitelyTyped:
//   https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/styled-system
// - The typings by RetailMeNot:
//   https://github.com/RetailMeNot/anchor/blob/master/src/typings.d.ts

declare module "@xstyled/system" {
  import * as React from "react";
  import * as CSS from "csstype";
  import * as StyledComponents from "styled-components";

  export interface StyleFn {
    (...args: any[]): any;
    propTypes?: string[];
  }

  declare type ThemeGetterFunc = (
    props: Partial<{ theme: StyledComponents.DefaultTheme }>
  ) => React.ReactText;

  export type TLengthStyledSystem = string | 0 | number;

  export type ResponsiveValue<T> = T | { [key: string]: T };

  // ----- GETTERS -----

  declare function getColor(value: string | number): ThemeGetterFunc;
  declare function getPx(value: string | number): ThemeGetterFunc;
  declare function getPercent(value: string | number): ThemeGetterFunc;
  declare function getRadius(value: string | number): ThemeGetterFunc;
  declare function getTransition(value: string | number): ThemeGetterFunc;
  declare function getSpace(value: string | number): ThemeGetterFunc;
  declare function getSize(value: string | number): ThemeGetterFunc;
  declare function getFont(value: string | number): ThemeGetterFunc;
  declare function getLineHeight(value: string | number): ThemeGetterFunc;
  declare function getFontWeight(value: string | number): ThemeGetterFunc;
  declare function getLetterSpacing(value: string | number): ThemeGetterFunc;
  declare function getFontSize(value: string | number): ThemeGetterFunc;
  declare function getZIndex(value: string | number): ThemeGetterFunc;
  declare function getBorder(value: string | number): ThemeGetterFunc;
  declare function getBorderWidth(value: string | number): ThemeGetterFunc;
  declare function getBorderStyle(value: string | number): ThemeGetterFunc;
  declare function getShadow(value: string | number): ThemeGetterFunc;

  // ----- BASICS -----

  export const color: StyleFn;

  export interface ColorProps {
    color?: ResponsiveValue<CSS.ColorProperty>;
  }

  export const opacity: StyleFn;
  export const overflow: StyleFn;
  export const transition: StyleFn;
  export const basics: StyleFn;

  export interface OpacityProps {
    opacity?: ResponsiveValue<CSS.GlobalsNumber>;
  }

  export interface OverflowProps {
    overflow?: ResponsiveValue<CSS.OverflowProperty>;
  }

  export interface TransitionProps {
    transition?: ResponsiveValue<string>;
  }

  export interface BasicsProps
    extends OpacityProps,
      OverflowProps,
      TransitionProps {}

  // ----- SPACE -----

  export const margin: StyleFn;
  export const marginTop: StyleFn;
  export const marginRight: StyleFn;
  export const marginBottom: StyleFn;
  export const marginLeft: StyleFn;
  export const mx: StyleFn;
  export const my: StyleFn;
  export const padding: StyleFn;
  export const paddingTop: StyleFn;
  export const paddingRight: StyleFn;
  export const paddingBottom: StyleFn;
  export const paddingLeft: StyleFn;
  export const px: StyleFn;
  export const py: StyleFn;
  export const space: StyleFn;

  export interface MarginProps<TLength = TLengthStyledSystem> {
    m?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    margin?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginTopProps<TLength = TLengthStyledSystem> {
    mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginRightProps<TLength = TLengthStyledSystem> {
    mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
  }

  export interface MarginBottomProps<TLength = TLengthStyledSystem> {
    mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
  }

  export interface MarginLeftProps<TLength = TLengthStyledSystem> {
    ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginXProps<TLength = TLengthStyledSystem> {
    mx?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginYProps<TLength = TLengthStyledSystem> {
    my?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface PaddingProps<TLength = TLengthStyledSystem> {
    p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
  }

  export interface PaddingTopProps<TLength = TLengthStyledSystem> {
    pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
  }

  export interface PaddingRightProps<TLength = TLengthStyledSystem> {
    pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
  }

  export interface PaddingBottomProps<TLength = TLengthStyledSystem> {
    pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    paddingBottom?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
  }

  export interface PaddingLeftProps<TLength = TLengthStyledSystem> {
    pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingXProps<TLength = TLengthStyledSystem> {
    px?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingYProps<TLength = TLengthStyledSystem> {
    py?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
  }

  export interface SpaceProps
    extends MarginProps,
      MarginTopProps,
      MarginRightProps,
      MarginBottomProps,
      MarginLeftProps,
      MarginXProps,
      MarginYProps,
      PaddingProps,
      PaddingTopProps,
      PaddingRightProps,
      PaddingBottomProps,
      PaddingLeftProps,
      PaddingXProps,
      PaddingYProps {}

  // ----- LAYOUT -----

  export const display: StyleFn;
  export const width: StyleFn;
  export const height: StyleFn;
  export const maxWidth: StyleFn;
  export const maxHeight: StyleFn;
  export const minWidth: StyleFn;
  export const minHeight: StyleFn;
  export const size: StyleFn; // sets both width and height
  export const verticalAlign: StyleFn;
  export const layout: StyleFn;

  export interface DisplayProps {
    display?: ResponsiveValue<CSS.DisplayProperty>;
  }

  export interface WidthProps<TLength = TLengthStyledSystem> {
    width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
  }

  export interface HeightProps<TLength = TLengthStyledSystem> {
    height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface MaxWidthProps<TLength = TLengthStyledSystem> {
    maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
  }

  export interface MaxHeightProps<TLength = TLengthStyledSystem> {
    maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
  }

  export interface MinWidthProps<TLength = TLengthStyledSystem> {
    minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
  }

  export interface MinHeightProps<TLength = TLengthStyledSystem> {
    minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
  }

  export interface SizeProps<TLength = TLengthStyledSystem> {
    size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface VerticalAlignProps<TLength = TLengthStyledSystem> {
    verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>>;
  }

  export interface LayoutProps
    extends DisplayProps,
      WidthProps,
      HeightProps,
      MaxWidthProps,
      MaxHeightProps,
      MinWidthProps,
      MinHeightProps,
      SizeProps,
      VerticalAlignProps {}

  // ----- XGRID -----

  export const col: StyleFn;
  export const row: StyleFn;
  export const xgrids: StyleFn;

  export interface ColProps {
    col?: ResponsiveValue<string | number | boolean>;
  }

  export interface RowProps {
    row?: ResponsiveValue<string | number | boolean>;
  }

  export interface XGridProps extends ColProps, RowProps {}

  // ----- TYPOGRAPHY -----

  export const fontFamily: StyleFn;
  export const fontSize: StyleFn;
  export const lineHeight: StyleFn;
  export const fontWeight: StyleFn;
  export const textAlign: StyleFn;
  export const letterSpacing: StyleFn;
  export const textTransform: StyleFn;
  export const typography: StyleFn;

  export interface FontFamilyProps {
    fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>;
  }

  export interface FontSizeProps<TLength = TLengthStyledSystem> {
    fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
  }

  export interface LineHeightProps<TLength = TLengthStyledSystem> {
    lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
  }

  export interface FontWeightProps {
    fontWeight?: ResponsiveValue<CSS.FontWeightProperty>;
  }

  export interface TextAlignProps {
    textAlign?: ResponsiveValue<CSS.TextAlignProperty>;
  }

  export interface LetterSpacingProps<TLength = TLengthStyledSystem> {
    letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>>;
  }

  export interface TextTransformProps {
    textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
  }

  export interface TypographyProps
    extends FontFamilyProps,
      FontSizeProps,
      LineHeightProps,
      FontWeightProps,
      TextAlignProps,
      LetterSpacingProps,
      ColorProps,
      TextTransformProps {}

  // ----- FLEXBOXES -----

  export const alignItems: StyleFn;
  export const alignContent: StyleFn;
  export const justifyContent: StyleFn;
  export const justifyItems: StyleFn;
  export const flexWrap: StyleFn;
  export const flexBasis: StyleFn;
  export const flexDirection: StyleFn;
  export const flex: StyleFn;
  export const justifySelf: StyleFn;
  export const alignSelf: StyleFn;
  export const order: StyleFn;
  export const flexboxes: StyleFn;

  export interface AlignItemsProps {
    alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  }

  export interface AlignContentProps {
    alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
  }

  export interface JustifyContentProps {
    justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
  }

  export interface JustifyItemsProps {
    justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
  }

  export interface FlexWrapProps {
    flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>;
  }

  export interface FlexBasisProps<TLength = TLengthStyledSystem> {
    flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
  }

  export interface FlexDirectionProps {
    flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
  }

  export interface FlexProps<TLength = TLengthStyledSystem> {
    flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
  }

  export interface JustifySelfProps {
    justifySelf?: ResponsiveValue<CSS.JustifySelfProperty>;
  }

  export interface AlignSelfProps {
    alignSelf?: ResponsiveValue<CSS.AlignSelfProperty>;
  }

  export interface OrderProps {
    order?: ResponsiveValue<CSS.GlobalsNumber>;
  }

  export interface FlexboxesProps
    extends DisplayProps,
      AlignItemsProps,
      AlignContentProps,
      JustifyContentProps,
      JustifyItemsProps,
      FlexWrapProps,
      FlexBasisProps,
      FlexDirectionProps,
      FlexProps,
      JustifySelfProps,
      AlignSelfProps,
      OrderProps {}

  // ----- GRIDS -----

  export const gridGap: StyleFn;
  export const gridColumnGap: StyleFn;
  export const gridRowGap: StyleFn;
  export const gridColumn: StyleFn;
  export const gridRow: StyleFn;
  export const gridAutoFlow: StyleFn;
  export const gridAutoColumns: StyleFn;
  export const gridAutoRows: StyleFn;
  export const gridTemplateColumns: StyleFn;
  export const gridTemplateRows: StyleFn;
  export const gridTemplateAreas: StyleFn;
  export const gridArea: StyleFn;
  export const grids: StyleFn;

  export interface GridGapProps<TLength = TLengthStyledSystem> {
    gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>>;
  }

  export interface GridColumnGapProps<TLength = TLengthStyledSystem> {
    gridColumnGap?: ResponsiveValue<CSS.GridColumnGapProperty<TLength>>;
  }

  export interface GridRowGapProps<TLength = TLengthStyledSystem> {
    gridRowGap?: ResponsiveValue<CSS.GridRowGapProperty<TLength>>;
  }

  export interface GridColumnProps {
    gridColumn?: ResponsiveValue<CSS.GridColumnProperty>;
  }

  export interface GridRowProps {
    gridRow?: ResponsiveValue<CSS.GridRowProperty>;
  }

  export interface GridAutoFlowProps {
    gridAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty>;
  }

  export interface GridAutoColumnsProps<TLength = TLengthStyledSystem> {
    gridAutoColumns?: ResponsiveValue<CSS.GridAutoColumnsProperty<TLength>>;
  }

  export interface GridAutoRowsProps<TLength = TLengthStyledSystem> {
    gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>>;
  }

  export interface GridTemplateColumnsProps<TLength = TLengthStyledSystem> {
    gridTemplateColumns?: ResponsiveValue<
      CSS.GridTemplateColumnsProperty<TLength>
    >;
  }

  export interface GridTemplateRowsProps<TLength = TLengthStyledSystem> {
    gridTemplateRows?: ResponsiveValue<CSS.GridTemplateRowsProperty<TLength>>;
  }

  export interface GridTemplateAreasProps {
    gridTemplateAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty>;
  }

  export interface GridAreaProps {
    gridArea?: ResponsiveValue<CSS.GridAreaProperty>;
  }

  export interface GridsProps
    extends GridGapProps,
      GridColumnGapProps,
      GridRowGapProps,
      GridColumnProps,
      GridRowProps,
      GridAutoFlowProps,
      GridAutoColumnsProps,
      GridAutoRowsProps,
      GridTemplateColumnsProps,
      GridTemplateRowsProps,
      GridTemplateAreasProps,
      GridAreaProps {}

  // ----- BACKGROUNDS -----

  export const background: StyleFn;
  export const backgroundColor: StyleFn;
  export const backgroundImage: StyleFn;
  export const backgroundSize: StyleFn;
  export const backgroundPosition: StyleFn;
  export const backgroundRepeat: StyleFn;
  export const backgrounds: StyleFn;

  export interface BackgroundProps {
    background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
    backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundImageProps {
    backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty>;
  }

  export interface BackgroundSizeProps<TLength = TLengthStyledSystem> {
    backgroundSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>>;
  }

  export interface BackgroundPositionProps<TLength = TLengthStyledSystem> {
    backgroundPosition?: ResponsiveValue<
      CSS.BackgroundPositionProperty<TLength>
    >;
  }

  export interface BackgroundRepeatProps {
    backgroundRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty>;
  }

  export interface BackgroundsProps
    extends BackgroundProps,
      BackgroundColorProps,
      BackgroundImageProps,
      BackgroundSizeProps,
      BackgroundPositionProps,
      BackgroundRepeatProps {}

  // ----- POSITIONING -----

  export const position: StyleFn;
  export const zIndex: StyleFn;
  export const top: StyleFn;
  export const right: StyleFn;
  export const bottom: StyleFn;
  export const left: StyleFn;
  export const positioning: StyleFn;

  export interface PositionProps {
    position?: ResponsiveValue<CSS.PositionProperty>;
  }

  export interface ZIndexProps {
    zIndex?: ResponsiveValue<CSS.ZIndexProperty>;
  }

  export interface TopProps<TLength = TLengthStyledSystem> {
    top?: ResponsiveValue<CSS.TopProperty<TLength>>;
  }

  export interface RightProps<TLength = TLengthStyledSystem> {
    right?: ResponsiveValue<CSS.RightProperty<TLength>>;
  }

  export interface BottomProps<TLength = TLengthStyledSystem> {
    bottom?: ResponsiveValue<CSS.BottomProperty<TLength>>;
  }

  export interface LeftProps<TLength = TLengthStyledSystem> {
    left?: ResponsiveValue<CSS.LeftProperty<TLength>>;
  }

  export interface PositioningProps
    extends PositionProps,
      ZIndexProps,
      TopProps,
      RightProps,
      BottomProps,
      LeftProps {}

  // ----- BORDERS -----

  export const border: StyleFn;
  export const borderTop: StyleFn;
  export const borderTopColor: StyleFn;
  export const borderRight: StyleFn;
  export const borderRightColor: StyleFn;
  export const borderBottom: StyleFn;
  export const borderBottomColor: StyleFn;
  export const borderLeft: StyleFn;
  export const borderLeftColor: StyleFn;
  export const borderColor: StyleFn;
  export const borderWidth: StyleFn;
  export const borderStyle: StyleFn;
  export const borderRadius: StyleFn;
  export const borders: StyleFn;

  export interface BorderProps<TLength = TLengthStyledSystem> {
    border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
  }

  export interface BorderTopProps<TLength = TLengthStyledSystem> {
    borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>;
  }

  export interface BorderTopColorProps {
    borderTopColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderRightProps<TLength = TLengthStyledSystem> {
    borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>;
  }

  export interface BorderRightColorProps {
    borderRightColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderBottomProps<TLength = TLengthStyledSystem> {
    borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>;
  }

  export interface BorderBottomColorProps {
    borderBottomColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderLeftProps<TLength = TLengthStyledSystem> {
    borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>;
  }

  export interface BorderLeftColorProps {
    borderLeftColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderColorProps {
    borderColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderWidthProps<TLength = TLengthStyledSystem> {
    borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
  }

  export interface BorderStyleProps {
    borderStyle?: ResponsiveValue<CSS.BorderStyleProperty>;
  }

  export interface BorderRadiusProps<TLength = TLengthStyledSystem> {
    borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
  }

  export interface BordersProps
    extends BorderProps,
      BorderTopProps,
      BorderTopColorProps,
      BorderRightProps,
      BorderRightColorProps,
      BorderBottomProps,
      BorderBottomColorProps,
      BorderLeftProps,
      BorderLeftColorProps,
      BorderColorProps,
      BorderWidthProps,
      BorderStyleProps,
      BorderRadiusProps {}

  // ----- SHADOWS -----

  export const boxShadow: StyleFn;
  export const textShadow: StyleFn;
  export const shadows: StyleFn;

  export interface BoxShadowProps {
    boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
  }

  export interface TextShadowProps {
    textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
  }

  export interface ShadowsProps extends BoxShadowProps, TextShadowProps {}

  // ----- SYSTEM -----

  export const system: StyleFn;

  export interface SystemProps
    extends BackgroundsProps,
      BasicsProps,
      BordersProps,
      FlexboxesProps,
      GridsProps,
      LayoutProps,
      PositioningProps,
      ShadowsProps,
      SpaceProps,
      TypographyProps,
      XGridProps {}

  // ----- COMPOSE -----

  export function compose(...parsers: StyleFn[]): StyleFn;

  // ----- createSystemComponent -----

  //  <C extends AnyStyledComponent>(component: C)

  export function createSystemComponent(
    react: typeof React,
    defaultComponent: string | React.ReactNode,
    system: StyleFn
  ): React.ReactNode;

  // ----- TH -----

  declare function th(path: string): ThemeGetterFunc;

  declare namespace th {
    declare function color(value: string | number): ThemeGetterFunc;
    declare function px(value: string | number): ThemeGetterFunc;
    declare function percent(value: string | number): ThemeGetterFunc;
    declare function radius(value: string | number): ThemeGetterFunc;
    declare function transition(value: string | number): ThemeGetterFunc;
    declare function space(value: string | number): ThemeGetterFunc;
    declare function size(value: string | number): ThemeGetterFunc;
    declare function font(value: string | number): ThemeGetterFunc;
    declare function fontSize(value: string | number): ThemeGetterFunc;
    declare function lineHeight(value: string | number): ThemeGetterFunc;
    declare function fontWeight(value: string | number): ThemeGetterFunc;
    declare function letterSpacing(value: string | number): ThemeGetterFunc;
    declare function zIndex(value: string | number): ThemeGetterFunc;
    declare function border(value: string | number): ThemeGetterFunc;
    declare function borderWidth(value: string | number): ThemeGetterFunc;
    declare function borderStyle(value: string | number): ThemeGetterFunc;
    declare function shadow(value: string | number): ThemeGetterFunc;
  }

  // ----- STYLE -----

  declare function style(config: {
    prop: string | Array<string>;
    cssProperty: string | Array<string>;
    key?: any;
    transform?: any;
    themeGet?: any;
  }): StyleFn;

  // ----- VARIANT UTILITY -----

  // from https://github.com/RetailMeNot/anchor/blob/master/src/typings.d.ts
  export const variant: <T extends {}>({
    key,
    default: defaultValue,
    variants,
    prop
  }: {
    key?: string;
    default?: string | number;
    variants?: {
      [key: string]: T;
      [key: number]: T;
    };
    prop?: string;
  }) => (props: any) => any;

  // ----- RESPONSIVE UTILITIES -----

  declare interface BreakPointsRules {
    [key: string]: StyledComponents.BaseThemedCssFunction<any>;
  }

  export const breakpoints: (
    values: BreakPointsRules
  ) => (props: any) => SimpleInterpolation;

  export const up: (
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;

  export const down: (
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;

  export const between: (
    lower: string,
    upper: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;
}
