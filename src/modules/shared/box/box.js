import styled from "styled-components/macro";
import { color, flexbox, layout, position, shadow, space } from "styled-system";

const Box = styled.div`
  min-width: 0;
  display: flex;
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

export { Box };
