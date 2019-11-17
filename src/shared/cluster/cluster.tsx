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

const StyledOuterWrap = styled.div`
  display: block;
`;

const StyledInnerWrap = styled.div<Required<Props>>`
  display: flex;
  flex-wrap: wrap;
  ${alignItems}
  ${justifyContent}
  margin: calc((${props => getSpace(props.spacing)} / 2) * -1);

  && > * {
    margin: calc(${props => getSpace(props.spacing)} / 2);
  }
`;

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
