import styled from "styled-components/macro";
import { color, flexbox, layout, position, space } from "styled-system";

const Box = styled.div`
  min-width: 0;
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

export { Box };
