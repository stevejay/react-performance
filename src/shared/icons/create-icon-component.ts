import React from "react";
import styled from "styled-components/macro";
import { color, space, ColorProps, SpaceProps } from "styled-system";
import { size, SizeProp } from "./size";

type Props = ColorProps & SpaceProps & SizeProp;

const createIconComponent = <T extends React.ComponentType<any>>(
  component: T
) =>
  styled(component)<Props>`
    ${size}
    ${color}
    ${space}
`;

export { createIconComponent };
