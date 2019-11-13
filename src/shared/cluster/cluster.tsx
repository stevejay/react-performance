import React from "react";
import styled from "styled-components/macro";
import { css } from "styled-components";
import {
  alignItems,
  justifyContent,
  getSpace,
  AlignItemsProps,
  JustifyContentProps
} from "@xstyled/system";

type Props = AlignItemsProps &
  JustifyContentProps & {
    readonly spacing: string | number;
  };

const StyledOuterWrap = styled.div`
  display: block;
`;

const StyledInnerWrap = styled.div<Required<Props>>(
  ({ spacing }) => css`
    display: flex;
    flex-wrap: wrap;
    ${alignItems}
    ${justifyContent}
    margin: calc((${getSpace(spacing)} / 2) * -1);

    & > * {
      margin: calc(${getSpace(spacing)} / 2);
    }
  `
);

const Cluster: React.FC<Props> = ({
  alignItems = "center",
  justifyContent = "flex-start",
  spacing,
  children
}) => (
  <StyledOuterWrap>
    <StyledInnerWrap
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
    >
      {children}
    </StyledInnerWrap>
  </StyledOuterWrap>
);

export { Cluster };
