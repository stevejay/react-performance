/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Note: This is an early draft; there may be issues and a few typings use any.

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

  export type ThemeGetterFunc = (
    props: Partial<{ theme: StyledComponents.DefaultTheme }>
  ) => React.ReactText;

  export type TLengthStyledSystem = string | 0 | number;

  export type ResponsiveValue<T> = T | { [key: string]: T };

  // ----- GETTERS -----

  export function getColor(value: string | number): ThemeGetterFunc;
  export function getPx(value: string | number): ThemeGetterFunc;
  export function getPercent(value: string | number): ThemeGetterFunc;
  export function getRadius(value: string | number): ThemeGetterFunc;
  export function getTransition(value: string | number): ThemeGetterFunc;
  export function getSpace(value: string | number): ThemeGetterFunc;
  export function getSize(value: string | number): ThemeGetterFunc;
  export function getFont(value: string | number): ThemeGetterFunc;
  export function getLineHeight(value: string | number): ThemeGetterFunc;
  export function getFontWeight(value: string | number): ThemeGetterFunc;
  export function getLetterSpacing(value: string | number): ThemeGetterFunc;
  export function getFontSize(value: string | number): ThemeGetterFunc;
  export function getZIndex(value: string | number): ThemeGetterFunc;
  export function getBorder(value: string | number): ThemeGetterFunc;
  export function getBorderWidth(value: string | number): ThemeGetterFunc;
  export function getBorderStyle(value: string | number): ThemeGetterFunc;
  export function getShadow(value: string | number): ThemeGetterFunc;

  // ----- BASICS -----

  export const color: StyleFn;

  export interface ColorProps {
    readonly color?: ResponsiveValue<CSS.ColorProperty>;
  }

  export const opacity: StyleFn;
  export const overflow: StyleFn;
  export const transition: StyleFn;
  export const basics: StyleFn;

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

  export const display: StyleFn;
  export const width: StyleFn;
  export const height: StyleFn;
  export const maxWidth: StyleFn;
  export const maxHeight: StyleFn;
  export const minWidth: StyleFn;
  export const minHeight: StyleFn;
  export const size: StyleFn;
  export const verticalAlign: StyleFn;
  export const layout: StyleFn;

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

  export const col: StyleFn;
  export const row: StyleFn;
  export const xgrids: StyleFn;

  export interface ColProps {
    readonly col?: ResponsiveValue<string | number | boolean>;
  }

  export interface RowProps {
    readonly row?: ResponsiveValue<string | number | boolean>;
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

  export const background: StyleFn;
  export const backgroundColor: StyleFn;
  export const backgroundImage: StyleFn;
  export const backgroundSize: StyleFn;
  export const backgroundPosition: StyleFn;
  export const backgroundRepeat: StyleFn;
  export const backgrounds: StyleFn;

  export interface BackgroundProps<TLength = TLengthStyledSystem> {
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

  export const position: StyleFn;
  export const zIndex: StyleFn;
  export const top: StyleFn;
  export const right: StyleFn;
  export const bottom: StyleFn;
  export const left: StyleFn;
  export const positioning: StyleFn;

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

  export const boxShadow: StyleFn;
  export const textShadow: StyleFn;
  export const shadows: StyleFn;

  export interface BoxShadowProps {
    readonly boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
  }

  export interface TextShadowProps {
    readonly textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
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

  export function compose(...parsers: ReadonlyArray<StyleFn>): StyleFn;

  // ----- CREATE_SYSTEM_COMPONENT -----

  export function createSystemComponent(
    react: typeof React,
    defaultComponent: string | React.ReactNode,
    system: StyleFn
  ): React.ReactNode;

  // ----- TH -----

  export function th(path: string): ThemeGetterFunc;

  namespace th {
    export function color(value: string | number): ThemeGetterFunc;
    export function px(value: string | number): ThemeGetterFunc;
    export function percent(value: string | number): ThemeGetterFunc;
    export function radius(value: string | number): ThemeGetterFunc;
    export function transition(value: string | number): ThemeGetterFunc;
    export function space(value: string | number): ThemeGetterFunc;
    export function size(value: string | number): ThemeGetterFunc;
    export function font(value: string | number): ThemeGetterFunc;
    export function fontSize(value: string | number): ThemeGetterFunc;
    export function lineHeight(value: string | number): ThemeGetterFunc;
    export function fontWeight(value: string | number): ThemeGetterFunc;
    export function letterSpacing(value: string | number): ThemeGetterFunc;
    export function zIndex(value: string | number): ThemeGetterFunc;
    export function border(value: string | number): ThemeGetterFunc;
    export function borderWidth(value: string | number): ThemeGetterFunc;
    export function borderStyle(value: string | number): ThemeGetterFunc;
    export function shadow(value: string | number): ThemeGetterFunc;
  }

  // ----- STYLE -----

  export function style(config: {
    prop: string | Array<string>;
    cssProperty: string | Array<string>;
    key?: any;
    transform?: any;
    themeGet?: any;
  }): StyleFn;

  // ----- VARIANT -----

  // from https://github.com/RetailMeNot/anchor/blob/master/src/typings.d.ts
  export function variant<T extends {}>({
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
  }): (props: any) => any;

  // ----- RESPONSIVE UTILITIES -----

  export interface BreakPointsRules {
    [key: string]: StyledComponents.BaseThemedCssFunction<any>;
  }

  export function breakpoints(
    values: BreakPointsRules
  ): (props: any) => SimpleInterpolation;

  export function up(
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ): (props: any) => SimpleInterpolation;

  export function down(
    key: string,
    rules: StyledComponents.BaseThemedCssFunction
  ): (props: any) => SimpleInterpolation;

  export function between(
    lower: string,
    upper: string,
    rules: StyledComponents.BaseThemedCssFunction
  ): (props: any) => SimpleInterpolation;
}
