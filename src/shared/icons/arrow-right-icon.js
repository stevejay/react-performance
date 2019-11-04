import styled from "styled-components/macro";
import { color, space } from "styled-system";
import { ArrowRight } from "styled-icons/feather/ArrowRight";
import { iconSize } from "./icon-size";

// See about doing the following to dynamically generate icon components:
// https://github.com/styled-components/styled-components/issues/1434

const ArrowRightIcon = styled(ArrowRight)`
  ${iconSize}
  ${color}
  ${space}
`;

export { ArrowRightIcon };
