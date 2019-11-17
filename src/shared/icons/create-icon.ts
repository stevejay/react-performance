// import React from "react";
import { color, space } from "@xstyled/system";
import { styled } from "src/shared/styled";
import { size } from "./size";

// type Props = ColorProps & SpaceProps & SizeProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createIcon = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any // TODO fix any
) =>
  styled(component)`
    ${size}
    ${color}
    ${space}
  `;

export { createIcon };
