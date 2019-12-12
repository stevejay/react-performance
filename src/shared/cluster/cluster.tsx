import React from "react";
import {
  alignItems,
  justifyContent,
  th,
  AlignItemsProps,
  JustifyContentProps
} from "@xstyled/system";
import isPropValid from "@emotion/is-prop-valid";
import { styled } from "src/shared/styled";

type Props = AlignItemsProps &
  JustifyContentProps & {
    readonly spacing: string | number;
  };

const StyledOuterWrap = styled.div`
  display: block;
`;

const innerWrapOptions = {
  shouldForwardProp: (prop: string) => isPropValid(prop) && prop !== "spacing"
};

const StyledInnerWrap = styled("div", innerWrapOptions)<Required<Props>>`
  ${alignItems}
  ${justifyContent}
  display: flex;
  flex-wrap: wrap;
  margin: calc((${props => th.space(props.spacing)} / 2) * -1);

  && > * {
    margin: calc(${props => th.space(props.spacing)} / 2);
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
