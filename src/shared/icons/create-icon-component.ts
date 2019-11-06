import React from "react";
import styled from "styled-components/macro";
import { color, space, ColorProps, SpaceProps } from "styled-system";
import { size, SizeProp } from "./size";

type Props = ColorProps & SpaceProps & SizeProp;

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
