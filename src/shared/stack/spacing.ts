import { MarginTopProps, style, getSpace } from "@xstyled/system";

const spacing = style({
  prop: "spacing",
  cssProperty: "marginTop",
  themeGet: getSpace
});

export type SpacingProps = {
  spacing: MarginTopProps["marginTop"];
};

export { spacing };
