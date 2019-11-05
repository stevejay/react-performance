import { system, FontSizeProps } from "styled-system";

export type IconSizeProp = {
  size: FontSizeProps["fontSize"];
};

const iconSize = system({
  size: {
    properties: ["width", "height"],
    scale: "fontSizes"
  }
});

export { iconSize };
