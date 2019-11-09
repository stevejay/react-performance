/* eslint-disable import/group-exports */
import { style } from "@xstyled/system";

const spacing = style({
  prop: "spacing",
  cssProperty: "marginTop",
  key: "space"
});

export type SpacingProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spacing: any; // ????
};

export { spacing };
