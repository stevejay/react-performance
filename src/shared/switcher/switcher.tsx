import React from "react";
import { th, StyledSystemLength } from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = {
  // If there is more than `limit` children, stack them on top of each other
  // regardless of the width of the available content area. Defaults to the
  // number of children.
  readonly limit?: number;
  // The margin between the children.
  readonly spacing: import("csstype").MarginTopProperty<StyledSystemLength>;
  // If the width of the available content area is less than this threshold
  // then the children are always stacked on top of each other.
  readonly threshold: import("csstype").WidthProperty<StyledSystemLength>;
};

const StyledOuterWrap = styled.div`
  display: block;
`;

const StyledInnerWrap = styled.div<Required<Props>>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: calc((${props => th.space(props.spacing)} / 2) * -1);

  && > * {
    flex-basis: calc(
      (
          ${props => th.size(props.threshold)} -
            (100% - ${props => th.space(props.spacing)})
        ) * 999
    );
    margin: calc(${props => th.space(props.spacing)} / 2);
    flex-grow: 1;
  }

  /* If there are more than limit children, force them to stack */
  && > :nth-last-child(n + ${props => props.limit + 1}),
  && > :nth-last-child(n + ${props => props.limit + 1}) ~ * {
    flex-basis: 100%;
  }
`;

// A.k.a. the holy albatross
const Switcher: React.FC<Props> = ({ limit, spacing, threshold, children }) => (
  <StyledOuterWrap>
    <StyledInnerWrap
      limit={limit || React.Children.count(children)}
      spacing={spacing}
      threshold={threshold}
    >
      {children}
    </StyledInnerWrap>
  </StyledOuterWrap>
);

export { Switcher };
