import { system, FontSizeProps } from "styled-system";

const size = system({
  size: {
    properties: ["width", "height"],
    scale: "fontSizes"
  }
});

export type SizeProp = {
  size: FontSizeProps["fontSize"];
};

export { size };
