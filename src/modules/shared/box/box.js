import styled from "styled-components/macro";
import { color, flexbox, layout, space } from "styled-system";

const Box = styled.div`
  min-width: 0;
  ${color}
  ${layout}
  ${flexbox}
  ${space}
`;

export { Box };
