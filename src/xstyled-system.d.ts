/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-explicit-any */

// https://stackoverflow.com/questions/33444458/how-do-i-implement-an-interface-which-is-both-callable-and-has-properties-in-ty

// https://github.com/RetailMeNot/anchor/blob/354c440d94aae8804cdc0092fe13caaad8b10f60/src/typings.d.ts

// ThemedStyledProps<Props, DefaultTheme>

declare module "@xstyled/system" {
  import * as React from "react";
  import * as CSS from "csstype";

  //   import {
  //     ThemedStyledProps,
  //     DefaultTheme,
  // } from 'styled-components';

  declare function style(any): any;

  declare type StyleFunc = (props: any) => React.ReactText;

  declare function getColor(value: string | number): StyleFunc;
  declare function getSpace(value: string | number): StyleFunc;

  declare function th(path: string): StyleFunc;

  declare namespace th {
    declare function color(value: string | number): StyleFunc;
    declare function space(value: string | number): StyleFunc;

    // declare function getPx<P>(props: P): THReturnType;
    // declare function getPercent<P>(props: P): THReturnType;
    // declare function getRadius<P>(props: P): THReturnType;
    // declare function getBorder<P>(props: P): THReturnType;
    // declare function getBorderWidth<P>(props: P): THReturnType;
    // declare function getBorderStyle<P>(props: P): THReturnType;
    // declare function getShadow<P>(props: P): THReturnType;
    // declare function getSize<P>(props: P): THReturnType;
    // declare function getZIndex<P>(props: P): THReturnType;
    // declare function getSpace<P>(props: P): THReturnType;
    // declare function getFont<P>(props: P): THReturnType;
    // declare function getFontSize<P>(props: P): THReturnType;
    // declare function getLineHeight<P>(props: P): THReturnType;
    // declare function getFontWeight<P>(props: P): THReturnType;
    // declare function getLetterSpacing<P>(props: P): THReturnType;
    // declare function getTransition<P>(props: P): THReturnType;
  }

  export type TLengthStyledSystem = string | 0 | number;
  export type ResponsiveValue<T> = T | { [key: string]: T };

  export interface SpaceProps<TLength = TLengthStyledSystem> {
    m?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    margin?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    mx?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    my?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    paddingBottom?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    px?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    py?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarginProps
    extends Pick<
      SpaceProps,
      | "m"
      | "margin"
      | "mt"
      | "marginTop"
      | "mb"
      | "marginBottom"
      | "ml"
      | "marginLeft"
      | "mr"
      | "marginRight"
      | "my"
      | "mx"
    > {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface PaddingProps
    extends Pick<
      SpaceProps,
      | "p"
      | "padding"
      | "pt"
      | "paddingTop"
      | "pb"
      | "paddingBottom"
      | "pl"
      | "paddingLeft"
      | "pr"
      | "paddingRight"
      | "py"
      | "px"
    > {}

  export interface ColorProps {
    color?: ResponsiveValue<CSS.ColorProperty>;
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

  export interface BackgroundProps {
    background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
  }

  export interface BackgroundsProps
    extends BackgroundProps,
      BackgroundRepeatProps,
      BackgroundPositionProps,
      BackgroundSizeProps,
      BackgroundImageProps,
      BackgroundColorProps {}

  export interface BoxShadowProps {
    boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
  }

  export interface TextShadowProps {
    textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
  }

  export interface ShadowsProps extends BoxShadowProps, TextShadowProps {}

  export interface AlignItemsProps {
    alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  }

  export interface AlignContentProps {
    alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
  }

  export interface JustifyItemsProps {
    justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
  }

  export interface JustifyContentProps {
    justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
  }

  export interface FlexWrapProps {
    flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>;
  }

  export interface FlexDirectionProps {
    flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
  }

  export interface FlexProps<TLength = TLengthStyledSystem> {
    flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
  }

  export interface FlexGrowProps {
    flexGrow?: ResponsiveValue<CSS.GlobalsNumber>;
  }

  export interface FlexShrinkProps {
    flexShrink?: ResponsiveValue<CSS.GlobalsNumber>;
  }

  export interface FlexBasisProps<TLength = TLengthStyledSystem> {
    flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
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
    extends AlignItemsProps,
      AlignContentProps,
      JustifyItemsProps,
      JustifyContentProps,
      FlexWrapProps,
      FlexDirectionProps,
      FlexProps,
      FlexGrowProps,
      FlexShrinkProps,
      FlexBasisProps,
      JustifySelfProps,
      AlignSelfProps,
      OrderProps {}

  export interface WidthProps<TLength = TLengthStyledSystem> {
    width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
  }

  export interface HeightProps<TLength = TLengthStyledSystem> {
    height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface MinWidthProps<TLength = TLengthStyledSystem> {
    minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
  }

  export interface MinHeightProps<TLength = TLengthStyledSystem> {
    minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
  }

  export interface MaxWidthProps<TLength = TLengthStyledSystem> {
    maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
  }

  export interface MaxHeightProps<TLength = TLengthStyledSystem> {
    maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
  }

  export interface DisplayProps {
    display?: ResponsiveValue<CSS.DisplayProperty>;
  }

  export interface VerticalAlignProps<TLength = TLengthStyledSystem> {
    verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>>;
  }

  export interface SizeProps<TLength = TLengthStyledSystem> {
    size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
  }

  export interface OverflowProps {
    overflow?: ResponsiveValue<CSS.OverflowProperty>;
    overflowX?: ResponsiveValue<CSS.OverflowXProperty>;
    overflowY?: ResponsiveValue<CSS.OverflowYProperty>;
  }

  export interface LayoutProps
    extends WidthProps,
      HeightProps,
      MinWidthProps,
      MinHeightProps,
      MaxWidthProps,
      MaxHeightProps,
      DisplayProps,
      VerticalAlignProps,
      SizeProps,
      OverflowProps {}

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

  export interface StyleFn {
    (...args: any[]): any;
    propTypes?: string[];
  }

  export const color: StyleFn;
  export const backgroundColor: StyleFn;
  export const backgrounds: StyleFn;
  export const space: StyleFn;
  export const margin: StyleFn;
  export const padding: StyleFn;
  export const flexboxes: StyleFn;
  export const layout: StyleFn;
  export const positioning: StyleFn;
  export const shadows: StyleFn;
}
