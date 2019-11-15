import { style, ResponsiveValue } from "@xstyled/system";

const flexShrink = style({
  prop: "flexShrink",
  cssProperty: "flexShrink"
});

export type FlexShrinkProps = {
  readonly flexShrink?: ResponsiveValue<import("csstype").GlobalsNumber>;
};

export { flexShrink };
