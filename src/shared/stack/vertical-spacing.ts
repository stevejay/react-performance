import { TLengthStyledSystem, style, getSpace } from "@xstyled/system";

const verticalSpacing = style({
  prop: "verticalSpacing",
  cssProperty: "marginTop",
  themeGet: getSpace
});

export type VerticalSpacingProps = {
  readonly verticalSpacing: import("csstype").MarginTopProperty<
    TLengthStyledSystem
  >;
};

export { verticalSpacing };
