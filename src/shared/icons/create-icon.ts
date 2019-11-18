import {
  color,
  space,
  ColorProps,
  SpaceProps,
  SizeProps
} from "@xstyled/system";
import { styled } from "src/shared/styled";
import { size } from "./size";

type Props = ColorProps & SpaceProps & SizeProps;

const createIcon = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: import("react").ComponentType<any>
) =>
  styled(component)<Props>`
    ${size}
    ${color}
    ${space}
  `;

export { createIcon };
