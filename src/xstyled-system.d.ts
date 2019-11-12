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
    (...args: ReadonlyArray<any>): any;
    propTypes?: ReadonlyArray<string>;
  }

  declare type ThemeGetterFunc = (
    props: Partial<{ theme: StyledComponents.DefaultTheme }>
  ) => React.ReactText;

  export declare type TLengthStyledSystem = string | 0 | number;

  export declare type ResponsiveValue<T> = T | { [key: string]: T };

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

  export declare const color: StyleFn;

  export interface ColorProps {
    readonly color?: ResponsiveValue<CSS.ColorProperty>;
  }

  export declare const opacity: StyleFn;
  export declare const overflow: StyleFn;
  export declare const transition: StyleFn;
  export declare const basics: StyleFn;

  export interface OpacityProps {
    readonly opacity?: ResponsiveValue<CSS.GlobalsNumber>;
  }

  export interface OverflowProps {
    readonly overflow?: ResponsiveValue<CSS.OverflowProperty>;
  }

  export interface TransitionProps {
    readonly transition?: ResponsiveValue<string>;
  }

  export interface BasicsProps
    extends OpacityProps,
      OverflowProps,
      TransitionProps {}

  // ----- SPACE -----

  export declare const margin: StyleFn;
  export declare const marginTop: StyleFn;
  export declare const marginRight: StyleFn;
  export declare const marginBottom: StyleFn;
  export declare const marginLeft: StyleFn;
  export declare const mx: StyleFn;
  export declare const my: StyleFn;
  export declare const padding: StyleFn;
  export declare const paddingTop: StyleFn;
  export declare const paddingRight: StyleFn;
  export declare const paddingBottom: StyleFn;
  export declare const paddingLeft: StyleFn;
  export declare const px: StyleFn;
  export declare const py: StyleFn;
  export declare const space: StyleFn;

  export interface MarginProps<TLength = TLengthStyledSystem> {
    readonly m?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    readonly margin?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginTopProps<TLength = TLengthStyledSystem> {
    readonly mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    readonly marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginRightProps<TLength = TLengthStyledSystem> {
    readonly mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    readonly marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
  }

  export interface MarginBottomProps<TLength = TLengthStyledSystem> {
    readonly mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    readonly marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
  }

  export interface MarginLeftProps<TLength = TLengthStyledSystem> {
    readonly ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    readonly marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginXProps<TLength = TLengthStyledSystem> {
    readonly mx?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginYProps<TLength = TLengthStyledSystem> {
    readonly my?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface PaddingProps<TLength = TLengthStyledSystem> {
    readonly p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    readonly padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
  }

  export interface PaddingTopProps<TLength = TLengthStyledSystem> {
    readonly pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    readonly paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
  }

  export interface PaddingRightProps<TLength = TLengthStyledSystem> {
    readonly pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    readonly paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
  }

  export interface PaddingBottomProps<TLength = TLengthStyledSystem> {
    readonly pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    readonly paddingBottom?: ResponsiveValue<
      CSS.PaddingBottomProperty<TLength>
    >;
  }

  export interface PaddingLeftProps<TLength = TLengthStyledSystem> {
    readonly pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    readonly paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingXProps<TLength = TLengthStyledSystem> {
    readonly px?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingYProps<TLength = TLengthStyledSystem> {
    readonly py?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
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

  export declare const display: StyleFn;
  export declare const width: StyleFn;
  export declare const height: StyleFn;
  export declare const maxWidth: StyleFn;
  export declare const maxHeight: StyleFn;
  export declare const minWidth: StyleFn;
  export declare const minHeight: StyleFn;
  export declare const size: StyleFn; // sets both width and height
  export declare const verticalAlign: StyleFn;
  export declare const layout: StyleFn;

  export interface DisplayProps {
    readonly display?: ResponsiveValue<CSS.DisplayProperty>;
  }

  export interface WidthProps<TLength = TLengthStyledSystem> {
    readonly width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
  }

  export interface HeightProps<TLength = TLengthStyledSystem> {
    readonly height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface MaxWidthProps<TLength = TLengthStyledSystem> {
    readonly maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
  }

  export interface MaxHeightProps<TLength = TLengthStyledSystem> {
    readonly maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
  }

  export interface MinWidthProps<TLength = TLengthStyledSystem> {
    readonly minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
  }

  export interface MinHeightProps<TLength = TLengthStyledSystem> {
    readonly minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
  }

  export interface SizeProps<TLength = TLengthStyledSystem> {
    readonly size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface VerticalAlignProps<TLength = TLengthStyledSystem> {
    readonly verticalAlign?: ResponsiveValue<
      CSS.VerticalAlignProperty<TLength>
    >;
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

  export declare const col: StyleFn;
  export declare const row: StyleFn;
  export declare const xgrids: StyleFn;

  export interface ColProps {
    readonly col?: ResponsiveValue<string | number | boolean>;
  }

  export interface RowProps {
    readonly row?: ResponsiveValue<string | number | boolean>;
  }

  export interface XGridProps extends ColProps, RowProps {}

  // ----- TYPOGRAPHY -----

  export declare const fontFamily: StyleFn;
  export declare const fontSize: StyleFn;
  export declare const lineHeight: StyleFn;
  export declare const fontWeight: StyleFn;
  export declare const textAlign: StyleFn;
  export declare const letterSpacing: StyleFn;
  export declare const textTransform: StyleFn;
  export declare const typography: StyleFn;

  export interface FontFamilyProps {
    readonly fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>;
  }

  export interface FontSizeProps<TLength = TLengthStyledSystem> {
    readonly fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
  }

  export interface LineHeightProps<TLength = TLengthStyledSystem> {
    readonly lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
  }

  export interface FontWeightProps {
    readonly fontWeight?: ResponsiveValue<CSS.FontWeightProperty>;
  }

  export interface TextAlignProps {
    readonly textAlign?: ResponsiveValue<CSS.TextAlignProperty>;
  }

  export interface LetterSpacingProps<TLength = TLengthStyledSystem> {
    readonly letterSpacing?: ResponsiveValue<
      CSS.LetterSpacingProperty<TLength>
    >;
  }

  export interface TextTransformProps {
    readonly textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
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

  export declare const alignItems: StyleFn;
  export declare const alignContent: StyleFn;
  export declare const justifyContent: StyleFn;
  export declare const justifyItems: StyleFn;
  export declare const flexWrap: StyleFn;
  export declare const flexBasis: StyleFn;
  export declare const flexDirection: StyleFn;
  export declare const flex: StyleFn;
  export declare const justifySelf: StyleFn;
  export declare const alignSelf: StyleFn;
  export declare const order: StyleFn;
  export declare const flexboxes: StyleFn;

  export interface AlignItemsProps {
    readonly alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  }

  export interface AlignContentProps {
    readonly alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
  }

  export interface JustifyContentProps {
    readonly justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
  }

  export interface JustifyItemsProps {
    readonly justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
  }

  export interface FlexWrapProps {
    readonly flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>;
  }

  export interface FlexBasisProps<TLength = TLengthStyledSystem> {
    readonly flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
  }

  export interface FlexDirectionProps {
    readonly flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
  }

  export interface FlexProps<TLength = TLengthStyledSystem> {
    readonly flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
  }

  export interface JustifySelfProps {
    readonly justifySelf?: ResponsiveValue<CSS.JustifySelfProperty>;
  }

  export interface AlignSelfProps {
    readonly alignSelf?: ResponsiveValue<CSS.AlignSelfProperty>;
  }

  export interface OrderProps {
    readonly order?: ResponsiveValue<CSS.GlobalsNumber>;
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

  export declare const gridGap: StyleFn;
  export declare const gridColumnGap: StyleFn;
  export declare const gridRowGap: StyleFn;
  export declare const gridColumn: StyleFn;
  export declare const gridRow: StyleFn;
  export declare const gridAutoFlow: StyleFn;
  export declare const gridAutoColumns: StyleFn;
  export declare const gridAutoRows: StyleFn;
  export declare const gridTemplateColumns: StyleFn;
  export declare const gridTemplateRows: StyleFn;
  export declare const gridTemplateAreas: StyleFn;
  export declare const gridArea: StyleFn;
  export declare const grids: StyleFn;

  export interface GridGapProps<TLength = TLengthStyledSystem> {
    readonly gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>>;
  }

  export interface GridColumnGapProps<TLength = TLengthStyledSystem> {
    readonly gridColumnGap?: ResponsiveValue<
      CSS.GridColumnGapProperty<TLength>
    >;
  }

  export interface GridRowGapProps<TLength = TLengthStyledSystem> {
    readonly gridRowGap?: ResponsiveValue<CSS.GridRowGapProperty<TLength>>;
  }

  export interface GridColumnProps {
    readonly gridColumn?: ResponsiveValue<CSS.GridColumnProperty>;
  }

  export interface GridRowProps {
    readonly gridRow?: ResponsiveValue<CSS.GridRowProperty>;
  }

  export interface GridAutoFlowProps {
    readonly gridAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty>;
  }

  export interface GridAutoColumnsProps<TLength = TLengthStyledSystem> {
    readonly gridAutoColumns?: ResponsiveValue<
      CSS.GridAutoColumnsProperty<TLength>
    >;
  }

  export interface GridAutoRowsProps<TLength = TLengthStyledSystem> {
    readonly gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>>;
  }

  export interface GridTemplateColumnsProps<TLength = TLengthStyledSystem> {
    readonly gridTemplateColumns?: ResponsiveValue<
      CSS.GridTemplateColumnsProperty<TLength>
    >;
  }

  export interface GridTemplateRowsProps<TLength = TLengthStyledSystem> {
    readonly gridTemplateRows?: ResponsiveValue<
      CSS.GridTemplateRowsProperty<TLength>
    >;
  }

  export interface GridTemplateAreasProps {
    readonly gridTemplateAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty>;
  }

  export interface GridAreaProps {
    readonly gridArea?: ResponsiveValue<CSS.GridAreaProperty>;
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

  export declare const background: StyleFn;
  export declare const backgroundColor: StyleFn;
  export declare const backgroundImage: StyleFn;
  export declare const backgroundSize: StyleFn;
  export declare const backgroundPosition: StyleFn;
  export declare const backgroundRepeat: StyleFn;
  export declare const backgrounds: StyleFn;

  export interface BackgroundProps {
    readonly background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
    readonly backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundImageProps {
    readonly backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty>;
  }

  export interface BackgroundSizeProps<TLength = TLengthStyledSystem> {
    readonly backgroundSize?: ResponsiveValue<
      CSS.BackgroundSizeProperty<TLength>
    >;
  }

  export interface BackgroundPositionProps<TLength = TLengthStyledSystem> {
    readonly backgroundPosition?: ResponsiveValue<
      CSS.BackgroundPositionProperty<TLength>
    >;
  }

  export interface BackgroundRepeatProps {
    readonly backgroundRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty>;
  }

  export interface BackgroundsProps
    extends BackgroundProps,
      BackgroundColorProps,
      BackgroundImageProps,
      BackgroundSizeProps,
      BackgroundPositionProps,
      BackgroundRepeatProps {}

  // ----- POSITIONING -----

  export declare const position: StyleFn;
  export declare const zIndex: StyleFn;
  export declare const top: StyleFn;
  export declare const right: StyleFn;
  export declare const bottom: StyleFn;
  export declare const left: StyleFn;
  export declare const positioning: StyleFn;

  export interface PositionProps {
    readonly position?: ResponsiveValue<CSS.PositionProperty>;
  }

  export interface ZIndexProps {
    readonly zIndex?: ResponsiveValue<CSS.ZIndexProperty>;
  }

  export interface TopProps<TLength = TLengthStyledSystem> {
    readonly top?: ResponsiveValue<CSS.TopProperty<TLength>>;
  }

  export interface RightProps<TLength = TLengthStyledSystem> {
    readonly right?: ResponsiveValue<CSS.RightProperty<TLength>>;
  }

  export interface BottomProps<TLength = TLengthStyledSystem> {
    readonly bottom?: ResponsiveValue<CSS.BottomProperty<TLength>>;
  }

  export interface LeftProps<TLength = TLengthStyledSystem> {
    readonly left?: ResponsiveValue<CSS.LeftProperty<TLength>>;
  }

  export interface PositioningProps
    extends PositionProps,
      ZIndexProps,
      TopProps,
      RightProps,
      BottomProps,
      LeftProps {}

  // ----- BORDERS -----

  export declare const border: StyleFn;
  export declare const borderTop: StyleFn;
  export declare const borderTopColor: StyleFn;
  export declare const borderRight: StyleFn;
  export declare const borderRightColor: StyleFn;
  export declare const borderBottom: StyleFn;
  export declare const borderBottomColor: StyleFn;
  export declare const borderLeft: StyleFn;
  export declare const borderLeftColor: StyleFn;
  export declare const borderColor: StyleFn;
  export declare const borderWidth: StyleFn;
  export declare const borderStyle: StyleFn;
  export declare const borderRadius: StyleFn;
  export declare const borders: StyleFn;

  export interface BorderProps<TLength = TLengthStyledSystem> {
    readonly border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
  }

  export interface BorderTopProps<TLength = TLengthStyledSystem> {
    readonly borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>;
  }

  export interface BorderTopColorProps {
    readonly borderTopColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderRightProps<TLength = TLengthStyledSystem> {
    readonly borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>;
  }

  export interface BorderRightColorProps {
    readonly borderRightColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderBottomProps<TLength = TLengthStyledSystem> {
    readonly borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>;
  }

  export interface BorderBottomColorProps {
    readonly borderBottomColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderLeftProps<TLength = TLengthStyledSystem> {
    readonly borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>;
  }

  export interface BorderLeftColorProps {
    readonly borderLeftColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderColorProps {
    readonly borderColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderWidthProps<TLength = TLengthStyledSystem> {
    readonly borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
  }

  export interface BorderStyleProps {
    readonly borderStyle?: ResponsiveValue<CSS.BorderStyleProperty>;
  }

  export interface BorderRadiusProps<TLength = TLengthStyledSystem> {
    readonly borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
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

  export declare const boxShadow: StyleFn;
  export declare const textShadow: StyleFn;
  export declare const shadows: StyleFn;

  export interface BoxShadowProps {
    readonly boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
  }

  export interface TextShadowProps {
    readonly textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
  }

  export interface ShadowsProps extends BoxShadowProps, TextShadowProps {}

  // ----- SYSTEM -----

  export declare const system: StyleFn;

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

  export declare function compose(...parsers: ReadonlyArray<StyleFn>): StyleFn;

  // ----- createSystemComponent -----

  //  <C extends AnyStyledComponent>(component: C)

  export declare function createSystemComponent(
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
  export declare const variant: <T extends {}>({
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

  export declare const breakpoints: (
    values: BreakPointsRules
  ) => (props: any) => SimpleInterpolation;

  export declare const up: (
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;

  export declare const down: (
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;

  export declare const between: (
    lower: string,
    upper: string,
    rules: StyledComponents.BaseThemedCssFunction
  ) => (props: any) => SimpleInterpolation;
}
