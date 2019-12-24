import { style, ResponsiveValue } from "@xstyled/system";

const flexGrow = style({
  prop: "flexGrow",
  cssProperty: "flexGrow"
});

export type FlexGrowProps = {
  flexGrow?: ResponsiveValue<import("csstype").GlobalsNumber>;
};

export { flexGrow };
