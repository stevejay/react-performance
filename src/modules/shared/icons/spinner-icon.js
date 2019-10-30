import styled from "styled-components/macro";
import { color, space } from "styled-system";
import { Spinner3 } from "styled-icons/evil/Spinner3";
import { iconSize } from "./icon-size";

// See about doing the following to dynamically generate icon components:
// https://github.com/styled-components/styled-components/issues/1434

const SpinnerIcon = styled(Spinner3)`
  ${iconSize}
  ${color}
  ${space}
`;

export { SpinnerIcon };
