import { css } from "styled-components";
import styled from "styled-components/macro";
// import { th } from "@xstyled/system";
import { spacing } from "./spacing";

type Props = {
  readonly spacing: string | number | ReadonlyArray<string | number>;
};

const Stack = styled.div<Props>(
  props => css`
    & > * + * {
      ${spacing} /* margin-top: $___{th.space(props.spacing)}; */
    }

    /*
    Allow 'margin-bottom: auto' to be used on a stack child
    so that child can push its following sibling down.
    */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `
);

export { Stack };
