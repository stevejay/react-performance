import { MarginTopProps, style, getSpace } from "@xstyled/system";

const spacing = style({
  prop: "spacing",
  cssProperty: "marginTop",
  themeGet: getSpace
});

export type SpacingProps = {
  readonly spacing: MarginTopProps["marginTop"];
};

export { spacing };
