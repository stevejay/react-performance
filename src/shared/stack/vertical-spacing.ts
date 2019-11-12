import { MarginTopProps, style, getSpace } from "@xstyled/system";

const verticalSpacing = style({
  prop: "verticalSpacing",
  cssProperty: "marginTop",
  themeGet: getSpace
});

export type VerticalSpacingProps = {
  readonly verticalSpacing: MarginTopProps["marginTop"];
};

export { verticalSpacing };
