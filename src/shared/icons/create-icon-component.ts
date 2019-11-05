import React from "react";
import styled from "styled-components/macro";
import { color, space, ColorProps, SpaceProps } from "styled-system";
import { iconSize, IconSizeProp } from "./icon-size";

// See about doing the following to dynamically generate icon components:
// https://github.com/styled-components/styled-components/issues/1434

type Props = ColorProps & SpaceProps & IconSizeProp;

const createIconComponent = <T extends React.ComponentType<any>>(
  component: T
) =>
  styled(component)<Props>`
    ${iconSize}
    ${color}
    ${space}
`;

export { createIconComponent };
