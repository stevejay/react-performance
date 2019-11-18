/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import {
  alignItems,
  justifyContent,
  getSpace,
  AlignItemsProps,
  JustifyContentProps
} from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = AlignItemsProps &
  JustifyContentProps & {
    readonly spacing: string | number;
  };

// const StyledOuterWrap = styled.div`
//   display: block;
// `;

// const StyledInnerWrap = styled.div<Required<Props>>`
//   display: flex;
//   flex-wrap: wrap;
//   ${alignItems}
//   ${justifyContent}
//   margin: calc((${props => getSpace(props.spacing)} / 2) * -1);

//   && > * {
//     margin: calc(${props => getSpace(props.spacing)} / 2);
//   }
// `;

// const Foo = styled.div<Required<Props>>`
//   ${alignItems}
// `;

const StyledInnerWrap = styled.div<Required<Props>>(
  alignItems,
  justifyContent,
  props => {
    const space = getSpace(props.spacing)(props);
    return css`
      display: flex;
      flex-wrap: wrap;
      margin: calc((${space} / 2) * -1);

      && > * {
        margin: calc(${space} / 2);
      }
    `;
  }

  //   css`
  //     display: flex;
  //     flex-wrap: wrap;
  //     margin: calc((${getSpace(props.spacing)(props)} / 2) * -1);

  //     && > * {
  //       margin: calc(${getSpace(props.spacing)(props)} / 2);
  //     }
  //   `
);

const Cluster: React.FC<Props> = ({
  alignItems = "center",
  justifyContent = "flex-start",
  spacing,
  children
}) => (
  <div css={{ display: "block" }}>
    <StyledInnerWrap
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
    >
      {children}
    </StyledInnerWrap>
  </div>
);

export { Cluster };
