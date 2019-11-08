/* eslint-disable import/group-exports */
import { system, SpaceProps } from "styled-system";

const spacing = system({
  spacing: {
    property: "marginTop",
    scale: "space"
  }
});

export type SpacingProp = {
  spacing: SpaceProps["margin"];
};

export { spacing };
