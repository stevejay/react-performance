import { system, SpaceProps } from "styled-system";

export type SpacingProp = {
  spacing: SpaceProps["margin"];
};

const spacing = system({
  spacing: {
    property: "marginTop",
    scale: "space"
  }
});

export { spacing };
