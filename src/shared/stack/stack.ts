import styled from "styled-components/macro";
import { spacing, SpacingProp } from "./spacing";

type Props = SpacingProp;

const Stack = styled.div<Props>`
  & > * + * {
    ${spacing}
  }

  /* Allow 'margin-bottom: auto' to be used on a stack child */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export { Stack };
