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

  export interface StyleFunc {
    (...args: ReadonlyArray<any>): any;
    propTypes?: ReadonlyArray<string>;
  }

  export type ThemeGetterFunc = (
    props: Partial<{ theme: StyledComponents.DefaultTheme }>
  ) => React.ReactText;

  export type StyledSystemLength = string | 0 | number;

  export type ResponsiveValue<T> = T | { [key: string]: T };

  export type AliasKey = string;

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

  export const color: StyleFunc;

  export interface ColorProps {
    readonly color?: ResponsiveValue<CSS.ColorProperty>;
  }

  export const opacity: StyleFunc;
  export const overflow: StyleFunc;
  export const transition: StyleFunc;
  export const basics: StyleFunc;

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

  export const margin: StyleFunc;
  export const marginTop: StyleFunc;
  export const marginRight: StyleFunc;
  export const marginBottom: StyleFunc;
  export const marginLeft: StyleFunc;
  export const mx: StyleFunc;
  export const my: StyleFunc;
  export const padding: StyleFunc;
  export const paddingTop: StyleFunc;
  export const paddingRight: StyleFunc;
  export const paddingBottom: StyleFunc;
  export const paddingLeft: StyleFunc;
  export const px: StyleFunc;
  export const py: StyleFunc;
  export const space: StyleFunc;

  export interface MarginProps<TLength = StyledSystemLength> {
    readonly m?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    readonly margin?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginTopProps<TLength = StyledSystemLength> {
    readonly mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    readonly marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface MarginRightProps<TLength = StyledSystemLength> {
    readonly mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    readonly marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
  }

  export interface MarginBottomProps<TLength = StyledSystemLength> {
    readonly mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    readonly marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
  }

  export interface MarginLeftProps<TLength = StyledSystemLength> {
    readonly ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    readonly marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginXProps<TLength = StyledSystemLength> {
    readonly mx?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
  }

  export interface MarginYProps<TLength = StyledSystemLength> {
    readonly my?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
  }

  export interface PaddingProps<TLength = StyledSystemLength> {
    readonly p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    readonly padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
  }

  export interface PaddingTopProps<TLength = StyledSystemLength> {
    readonly pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    readonly paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
  }

  export interface PaddingRightProps<TLength = StyledSystemLength> {
    readonly pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    readonly paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
  }

  export interface PaddingBottomProps<TLength = StyledSystemLength> {
    readonly pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    readonly paddingBottom?: ResponsiveValue<
      CSS.PaddingBottomProperty<TLength>
    >;
  }

  export interface PaddingLeftProps<TLength = StyledSystemLength> {
    readonly pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    readonly paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingXProps<TLength = StyledSystemLength> {
    readonly px?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
  }

  export interface PaddingYProps<TLength = StyledSystemLength> {
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

  export const display: StyleFunc;
  export const width: StyleFunc;
  export const height: StyleFunc;
  export const maxWidth: StyleFunc;
  export const maxHeight: StyleFunc;
  export const minWidth: StyleFunc;
  export const minHeight: StyleFunc;
  export const size: StyleFunc;
  export const verticalAlign: StyleFunc;
  export const layout: StyleFunc;

  export interface DisplayProps {
    readonly display?: ResponsiveValue<CSS.DisplayProperty>;
  }

  export interface WidthProps<TLength = StyledSystemLength> {
    readonly width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
  }

  export interface HeightProps<TLength = StyledSystemLength> {
    readonly height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface MaxWidthProps<TLength = StyledSystemLength> {
    readonly maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
  }

  export interface MaxHeightProps<TLength = StyledSystemLength> {
    readonly maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
  }

  export interface MinWidthProps<TLength = StyledSystemLength> {
    readonly minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
  }

  export interface MinHeightProps<TLength = StyledSystemLength> {
    readonly minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
  }

  export interface SizeProps<TLength = StyledSystemLength> {
    readonly size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface VerticalAlignProps<TLength = StyledSystemLength> {
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

  export const col: StyleFunc;
  export const row: StyleFunc;
  export const xgrids: StyleFunc;

  export interface ColProps {
    readonly col?: ResponsiveValue<string | number | boolean>;
  }

  export interface RowProps {
    readonly row?: ResponsiveValue<string | number | boolean>;
  }

  export interface XGridProps extends ColProps, RowProps {}

  // ----- TYPOGRAPHY -----

  export const fontFamily: StyleFunc;
  export const fontSize: StyleFunc;
  export const lineHeight: StyleFunc;
  export const fontWeight: StyleFunc;
  export const textAlign: StyleFunc;
  export const letterSpacing: StyleFunc;
  export const textTransform: StyleFunc;
  export const typography: StyleFunc;

  export interface FontFamilyProps {
    readonly fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>;
  }

  export interface FontSizeProps<TLength = StyledSystemLength> {
    readonly fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
  }

  export interface LineHeightProps<TLength = StyledSystemLength> {
    readonly lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
  }

  export interface FontWeightProps {
    readonly fontWeight?: ResponsiveValue<CSS.FontWeightProperty | AliasKey>; // ????
  }

  export interface TextAlignProps {
    readonly textAlign?: ResponsiveValue<CSS.TextAlignProperty>;
  }

  export interface LetterSpacingProps<TLength = StyledSystemLength> {
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

  export const alignItems: StyleFunc;
  export const alignContent: StyleFunc;
  export const justifyContent: StyleFunc;
  export const justifyItems: StyleFunc;
  export const flexWrap: StyleFunc;
  export const flexBasis: StyleFunc;
  export const flexDirection: StyleFunc;
  export const flex: StyleFunc;
  export const justifySelf: StyleFunc;
  export const alignSelf: StyleFunc;
  export const order: StyleFunc;
  export const flexboxes: StyleFunc;

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

  export interface FlexBasisProps<TLength = StyledSystemLength> {
    readonly flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
  }

  export interface FlexDirectionProps {
    readonly flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
  }

  export interface FlexProps<TLength = StyledSystemLength> {
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

  export const gridGap: StyleFunc;
  export const gridColumnGap: StyleFunc;
  export const gridRowGap: StyleFunc;
  export const gridColumn: StyleFunc;
  export const gridRow: StyleFunc;
  export const gridAutoFlow: StyleFunc;
  export const gridAutoColumns: StyleFunc;
  export const gridAutoRows: StyleFunc;
  export const gridTemplateColumns: StyleFunc;
  export const gridTemplateRows: StyleFunc;
  export const gridTemplateAreas: StyleFunc;
  export const gridArea: StyleFunc;
  export const grids: StyleFunc;

  export interface GridGapProps<TLength = StyledSystemLength> {
    readonly gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>>;
  }

  export interface GridColumnGapProps<TLength = StyledSystemLength> {
    readonly gridColumnGap?: ResponsiveValue<
      CSS.GridColumnGapProperty<TLength>
    >;
  }

  export interface GridRowGapProps<TLength = StyledSystemLength> {
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

  export interface GridAutoColumnsProps<TLength = StyledSystemLength> {
    readonly gridAutoColumns?: ResponsiveValue<
      CSS.GridAutoColumnsProperty<TLength>
    >;
  }

  export interface GridAutoRowsProps<TLength = StyledSystemLength> {
    readonly gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>>;
  }

  export interface GridTemplateColumnsProps<TLength = StyledSystemLength> {
    readonly gridTemplateColumns?: ResponsiveValue<
      CSS.GridTemplateColumnsProperty<TLength>
    >;
  }

  export interface GridTemplateRowsProps<TLength = StyledSystemLength> {
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

  export const background: StyleFunc;
  export const backgroundColor: StyleFunc;
  export const backgroundImage: StyleFunc;
  export const backgroundSize: StyleFunc;
  export const backgroundPosition: StyleFunc;
  export const backgroundRepeat: StyleFunc;
  export const backgrounds: StyleFunc;

  export interface BackgroundProps<TLength = StyledSystemLength> {
    readonly background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundColorProps<TLength = StyledSystemLength> {
    readonly backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundImageProps {
    readonly backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty>;
  }

  export interface BackgroundSizeProps<TLength = StyledSystemLength> {
    readonly backgroundSize?: ResponsiveValue<
      CSS.BackgroundSizeProperty<TLength>
    >;
  }

  export interface BackgroundPositionProps<TLength = StyledSystemLength> {
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

  export const position: StyleFunc;
  export const zIndex: StyleFunc;
  export const top: StyleFunc;
  export const right: StyleFunc;
  export const bottom: StyleFunc;
  export const left: StyleFunc;
  export const positioning: StyleFunc;

  export interface PositionProps {
    readonly position?: ResponsiveValue<CSS.PositionProperty>;
  }

  export interface ZIndexProps {
    readonly zIndex?: ResponsiveValue<CSS.ZIndexProperty | AliasKey>;
  }

  export interface TopProps<TLength = StyledSystemLength> {
    readonly top?: ResponsiveValue<CSS.TopProperty<TLength>>;
  }

  export interface RightProps<TLength = StyledSystemLength> {
    readonly right?: ResponsiveValue<CSS.RightProperty<TLength>>;
  }

  export interface BottomProps<TLength = StyledSystemLength> {
    readonly bottom?: ResponsiveValue<CSS.BottomProperty<TLength>>;
  }

  export interface LeftProps<TLength = StyledSystemLength> {
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

  export const border: StyleFunc;
  export const borderTop: StyleFunc;
  export const borderTopColor: StyleFunc;
  export const borderRight: StyleFunc;
  export const borderRightColor: StyleFunc;
  export const borderBottom: StyleFunc;
  export const borderBottomColor: StyleFunc;
  export const borderLeft: StyleFunc;
  export const borderLeftColor: StyleFunc;
  export const borderColor: StyleFunc;
  export const borderWidth: StyleFunc;
  export const borderStyle: StyleFunc;
  export const borderRadius: StyleFunc;
  export const borders: StyleFunc;

  export interface BorderProps<TLength = StyledSystemLength> {
    readonly border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
  }

  export interface BorderTopProps<TLength = StyledSystemLength> {
    readonly borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>;
  }

  export interface BorderTopColorProps {
    readonly borderTopColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderRightProps<TLength = StyledSystemLength> {
    readonly borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>;
  }

  export interface BorderRightColorProps {
    readonly borderRightColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderBottomProps<TLength = StyledSystemLength> {
    readonly borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>;
  }

  export interface BorderBottomColorProps {
    readonly borderBottomColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderLeftProps<TLength = StyledSystemLength> {
    readonly borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>;
  }

  export interface BorderLeftColorProps {
    readonly borderLeftColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderColorProps {
    readonly borderColor?: ResponsiveValue<CSS.BorderColorProperty>;
  }

  export interface BorderWidthProps<TLength = StyledSystemLength> {
    readonly borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
  }

  export interface BorderStyleProps {
    readonly borderStyle?: ResponsiveValue<CSS.BorderStyleProperty>;
  }

  export interface BorderRadiusProps<TLength = StyledSystemLength> {
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

  export const boxShadow: StyleFunc;
  export const textShadow: StyleFunc;
  export const shadows: StyleFunc;

  export interface BoxShadowProps {
    readonly boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
  }

  export interface TextShadowProps {
    readonly textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
  }

  export interface ShadowsProps extends BoxShadowProps, TextShadowProps {}

  // ----- SYSTEM -----

  export const system: StyleFunc;

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

  export function compose(...parsers: ReadonlyArray<StyleFunc>): StyleFunc;

  // ----- CREATE_SYSTEM_COMPONENT -----

  export function createSystemComponent(
    react: typeof React,
    defaultComponent?: string | React.ReactNode,
    system?: StyleFunc
  ): React.ComponentType<any>;

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
    prop: string | ReadonlyArray<string>;
    cssProperty: string | ReadonlyArray<string>;
    key?: any;
    transform?: any;
    themeGet?: any;
  }): StyleFunc;

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
