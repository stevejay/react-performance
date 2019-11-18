import { maxWidth, px, MaxWidthProps, PaddingXProps } from "@xstyled/system";
import { css } from "@emotion/core";
import { styled } from "src/shared/styled";

type Props = MaxWidthProps &
  PaddingXProps & {
    readonly intrinsic?: boolean;
    // Adds `text-align: center` rule if true:
    readonly centeredText?: boolean;
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
