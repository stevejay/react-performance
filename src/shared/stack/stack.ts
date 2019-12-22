import { styled } from "src/shared/styled";
import { spacing, SpacingProps } from "./spacing";

type Props = SpacingProps;

const Stack = styled.div<Props>`
  && > * + * {
    ${spacing}
  }

  /* Fix for emotion SSR: */
  && > style + * {
    margin-top: 0 !important;
  }

  /*
    Allow 'margin-bottom: auto' to be used on a stack child
    so that a child can push its following sibling down.
    */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export { Stack };
