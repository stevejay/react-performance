import styled from "styled-components/macro";
import { color, space } from "styled-system";
import { Menu } from "styled-icons/feather/Menu";
import { iconSize } from "./icon-size";

// See about doing the following to dynamically generate icon components:
// https://github.com/styled-components/styled-components/issues/1434

const MenuIcon = styled(Menu)`
  ${iconSize}
  ${color}
  ${space}
`;

export { MenuIcon };
