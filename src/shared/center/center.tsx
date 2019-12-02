/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { maxWidth, px, MaxWidthProps, PaddingXProps } from "@xstyled/system";
// import { styled } from "src/shared/styled";

type Props = MaxWidthProps &
  PaddingXProps & {
    readonly intrinsic?: boolean;
    // Add `text-align: center` rule:
    readonly centeredText?: boolean;
  };

const baseStyle = (props: Props) => css`
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${maxWidth(props)}
  ${px(props)}
`;

const intrinsicStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const centeredTextStyle = css`
  text-align: center;
`;

const Center: React.FC<Props> = props => (
  <div
    css={[
      baseStyle(props),
      props.intrinsic && intrinsicStyle,
      props.centeredText && centeredTextStyle
    ]}
  >
    {props.children}
  </div>
);

// const Center = styled.div<Props>`
//     box-sizing: content-box;
//     display: block;
//     margin-left: auto;
//     margin-right: auto;

//     ${maxWidth}
//     ${px}

//     ${({ intrinsic }) =>
//       intrinsic &&
//       css`
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//       `}

//     ${({ centeredText }) =>
//       centeredText &&
//       css`
//         text-align: center;
//       `}
// `;

export { Center };
