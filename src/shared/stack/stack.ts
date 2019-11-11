import styled from "styled-components/macro";
import { verticalSpacing, VerticalSpacingProps } from "./vertical-spacing";

type Props = VerticalSpacingProps;

const Stack = styled.div<Props>`
  & > * + * {
    ${verticalSpacing}
  }

  /*
    Allow 'margin-bottom: auto' to be used on a stack child
    so that child can push its following sibling down.
    */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export { Stack };
