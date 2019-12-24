import { css } from "@emotion/core";
import { maxWidth, px, MaxWidthProps, PaddingXProps } from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = MaxWidthProps &
  PaddingXProps & {
    // Shrink the width to fit the content:
    intrinsic?: boolean;
    // Adds the `text-align: center` rule:
    centeredText?: boolean;
  };

const Center = styled.div<Props>`
    box-sizing: content-box;
    display: block;
    margin-left: auto;
    margin-right: auto;
    ${maxWidth}
    ${px}

    ${({ intrinsic }) =>
      intrinsic &&
      css`
        display: flex;
        align-items: center;
        flex-direction: column;
      `}

    ${({ centeredText }) =>
      centeredText &&
      css`
        text-align: center;
      `}
`;

export { Center };
