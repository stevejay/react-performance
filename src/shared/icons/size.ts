import { FontSizeProps, style, getFontSize } from "@xstyled/system";

const size = style({
  prop: "size",
  cssProperty: ["width", "height"],
  themeGet: getFontSize
});

export type SizeProps = {
  size: FontSizeProps["fontSize"];
};

export { size };
