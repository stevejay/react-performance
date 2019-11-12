import React from "react";
import styled from "styled-components/macro";
import { color, space, ColorProps, SpaceProps } from "@xstyled/system";
import { size, SizeProps } from "./size";

type Props = ColorProps & SpaceProps & SizeProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createIconComponent = <T extends React.ComponentType<any>>(
  component: T
) =>
  styled(component)<Props>`
    ${size}
    ${color}
    ${space}
`;

export { createIconComponent };
