import styled from "styled-components/macro";
import { maxWidth, MaxWidthProps, px, PaddingXProps } from "@xstyled/system";

type Props = MaxWidthProps &
  PaddingXProps & {
    readonly intrinsic?: boolean;
    // Add `text-align: center` rule:
    readonly centeredText?: boolean;
  };

const Center = styled.div<Props>`
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${maxWidth}
  ${px}

  ${props =>
    props.intrinsic
      ? `
    display: flex;
    align-items: center;
    flex-direction: column;`
      : ""}

  ${props => (props.centeredText ? `text-align: center;` : "")}
`;

export { Center };
